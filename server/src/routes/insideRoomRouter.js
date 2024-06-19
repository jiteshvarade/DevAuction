const express = require('express')
const router = express.Router()
const Room = require('../models/createRoom')
const User = require("../models/user")
const sendEmail = require("../utils/email")

router.post('/getHost', async (req,res)=>{
    const roomID  = req.body.roomID
    const email = req.body.email
    console.log(roomID,email)
  
    try {
        const room = await Room.findOne({ RoomID: roomID })
        const user = await User.findOne({ "UserInfo.email": email })

        res.send({Owner : room.Owner, Credits : user.Profile.Credits})
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
})

router.post("/getLatestBid",async (req,res)=>{

    const roomID = req.body.roomID    
  
    try {
        
        const room = await Room.findOne({RoomID : roomID})
        let highestBid , highestBidders , email, user

        if(room.Bids.length == 0){
            user = await User.findOne({"UserInfo.email" : room.Owner})
            highestBid = 0
        }else{
            
            highestBid = Math.max(...room.Bids.map(bid => bid.amount))
            highestBidders = room.Bids.filter(bid => bid.amount === highestBid)
    
            email = highestBidders[0].email
    
            user = await User.findOne({"UserInfo.email" : email})
        }

        res.send({name : user.UserInfo.name, picture : user.UserInfo.picture, highestBid})
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
})

router.post('/bids', async (req, res) => {
    const { roomId, email, bid } = req.body
  
    try {
        const room = await Room.findOneAndUpdate({ RoomID: roomId },{
            $push : {"Bids" : {
                email : email,
                amount : bid,
                accepted :false
            }}
        })
    
        if (!room) {
            return res.status(404).send('Room not found')
        }
        else{
            await room.save()

            res.status(201).send('Bid placed successfully')
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
})

router.post('/sendMailToBider', async (req, res) => {
    const roomID = req.body

    try {
        const room = await Room.findOne({ RoomID: roomID })

        if (!room) {
            return res.status(404).send('Room not found')
        }

        const highestBid = Math.max(...room.Bids.map(bid => bid.amount))

        const highestBidders = room.Bids.filter(bid => bid.amount === highestBid)
        console.log(highestBidders)

        let message = '';
        if (highestBidders.length === 1) {
            message = `The highest bid of ${highestBid} was placed by ${highestBidders[0]}`
            room.Sold = {
                email : highestBidders[0].email,
                amount : highestBid
            }
            room.Status = true
            await room.save()

            const bidder = await User.findOneAndUpdate({"UserInfo.email" : highestBidders[0].email},{
                $inc : {"Profile.Credits" : -highestBid*100},
                $push : {"Profile.Spendings" : {Category : "Bid", Amount : highestBid}}
            })
            await bidder.save()
        }

        const user = await User.findOneAndUpdate({"UserInfo.email" : room.Owner},{
            $inc : {"Profile.Credits" : highestBid*100},
            $push : {"Profile.Earnings" : {
                Category : "room",
                Amount : highestBid
            }}
        })
        await user.save()

        const subject = "Thank You for Your Purchase! Access Your Project Now"

        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          <h1>Thank You for Your Purchase! Access Your Project Now</h1>
          <p>Dear Customer,</p>
          <p>Thank you for your recent purchase of our project! We're thrilled to have you on board.</p>
          <p>Your unique File ID for this project is: <strong>${room.FileID}</strong></p>
          <p>You can now download your project files directly from your dashboard. Simply follow these steps:</p>
          <ol>
            <li>Log in to your account on our platform.</li>
            <li>Navigate to your dashboard.</li>
            <li>Click the "Download" button associated with the project.</li>
          </ol>
          <p>Your project files will begin downloading immediately.</p>
          <p>Should you have any trouble accessing your files, please don't hesitate to contact our support team at <a href="https://dev-auction.vercel.app/">DevAuction</a> or by phone at 9322679131</p>
          <p>We're confident this project will be a valuable asset to you. If you have any questions or require further assistance, please don't hesitate to reach out.</p>
          <p>Thank you again for your purchase!</p>
          <p>Sincerely,</p>
          <p>The DevAuction Team</p>
        </body>
        </html>
        
        `

        await sendEmail(highestBidders[0].email, subject, html)

        const subjectOwner = `Confirmation of Credit Addition and Auction End for Room ID ${room.RoomID}`

        const htmlOwner = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
            <p>Dear ${user.UserInfo.name},</p>
        
            <p>I hope this message finds you well.</p>
        
            <p>We are pleased to inform you that the credits ${highestBid} have been successfully added to your account. Additionally, we would like to confirm that the auction for Room ID ${room.RoomID} has ended.</p>
        
            <p>Should you have any questions or require further assistance, please do not hesitate to contact our customer support team.</p>
        
            <p>Thank you for choosing DevAuction</p>
        
            <p>Best regards,</p>
        
            <p>DevAuction</p>
        </body>
        </html>
        
        `

        await sendEmail(room.Owner, subjectOwner, htmlOwner)

        console.log(message)
        res.status(200).send('Highest bidder information processed successfully')
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
});


module.exports = router
