// import Router from "express"
// import Razorpay from "razorpay";
// import crypto from "crypto"
// import {RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY, Webhook_Secret} from "../../constants.js"
// import Payment from "../models/payment.js";
const express = require('express')
const Razorpay = require('razorpay')
const crypto = require('crypto')
const {RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY, Webhook_Secret} = require('../../constants')
const Payment = require('../models/payment')
const User = require("../models/user")
const sendEmail = require("../utils/email")

const router = express.Router()

var instance = new Razorpay({
    key_id: RAZORPAY_ID_KEY,
    key_secret: RAZORPAY_SECRET_KEY,
});

router.post("/",async (req,res)=>{
    console.log(req.body.amount)
    console.log("Inside razorpay router")

    var options = {
        amount: req.body.amount, // in paise
        currency: "INR",
        receipt: "order_rcptid_11"
    };
        instance.orders.create(options, function(err,order) {
        console.log(order);
        res.json(order)
    });
})

router.post("/verify",async (req,res)=>{
    const secret = Webhook_Secret
    const email = req.body.payload.payment.entity.email
    const amount = req.body.payload.payment.entity.amount
    console.log(email,amount)

    const shasum = crypto.createHmac("sha256", secret)
    shasum.update(JSON.stringify(req.body))
    const digest = shasum.digest('hex')

    console.log(req.headers["x-razorpay-signature"])

    if(digest === req.headers["x-razorpay-signature"])
    {
        console.log("Successfull payment")
        
        const newPayment = new Payment({PaymentInfo : {email : email, amount : amount, type : "debit"}})
        await newPayment.save()

        const user = await User.findOneAndUpdate({"UserInfo.email" : email},{
            $push : {"Profile.Transactions" : {
                amount : amount,
                category : "debit"
            }},
            $inc : {"Profile.Credits" : amount}
        })

        await user.save()

        res.json({status : "ok"})
    }
    else
    {
        console.log("Payment unsuccessful")
        res.status(500)
    }
})

router.post("/withdraw",async (req,res)=>{
    const email = req.body.email
    const amount = req.body.amount

    try{
        const user = await User.findOneAndUpdate({"UserInfo.email" : email},{
            $push : {"Profile.Transactions" : {
                amount : amount,
                category : "credit"
            }},
            $inc : {"Profile.Credits" : -amount}
        })

        const subject = "Confirmation of Your Withdrawal Request"

        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
                <p>Dear ${user.UserInfo.name},</p>
                
                <p>I hope this email finds you well.</p>
                
                We are pleased to inform you that your withdrawal request of ₹${amount/100} has been successfully received and is currently being processed. You can expect the completion of the withdrawal process within the next 24 hours.</p>
                
                <p>Should you have any questions or need further assistance, please do not hesitate to reach out to our support team. We are here to help and ensure a smooth experience for you.</p>
                
                <p>Thank you for your patience and understanding.</p>
                
                <p>Best regards,</p><br>
                <p>DevAuction</p>
            </body>
            </html>        
        `

        sendEmail(email,subject,html)

        res.send("Wihtdraw successfull")
    }catch(error){
        console.log(error)
    }
})

router.post("/transactions",async (req,res)=>{
    const email = req.body.email
    
    try{
        const user = await User.findOne({"UserInfo.email" : email})

        res.send({transactions : user.Profile.Transactions})
    }catch(error){
        console.log(error)
    }
})

// export default router
module.exports = router
