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
    console.log(req.body)

    const shasum = crypto.createHmac("sha256", secret)
    shasum.update(JSON.stringify(req.body))
    const digest = shasum.digest('hex')

    console.log(req.headers["x-razorpay-signature"])

    if(digest === req.headers["x-razorpay-signature"])
    {
        console.log("Successfull payment")
        try{
            const newPayment = new Payment(req.body)
            await newPayment.save()
        }catch(error){
            console.log("Payment ID saved successfully")
        }
        // logic to update in database
        res.json({status : "ok"})
    }
    else
    {
        console.log("Payment unsuccessful")
        res.status(500)
    }
})

// export default router
module.exports = router
