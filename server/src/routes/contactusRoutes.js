const express = require("express")
const ContactUs = require("../models/contactus")
const sendEmail = require('../utils/email')

const router = express.Router()

router.post("/",async (req,res)=>{
    const { Name, Email , PhoneNo, Message} = req.body

    try {

        if (!Name || !Email || !PhoneNo || !Message) {
            return res.status(400).json({ message: 'Please fill in all required fields' })
        }

        const newContact = new ContactUs({ Name , Email, PhoneNo, Message })
        await newContact.save()

        const subject = "Thanks for reaching out! We'll be in touch soon."
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Thanks for Contacting Us!</title>
        </head>
        <body>
          <p>Dear ${Name},</p>
          <p>Thank you for contacting <a href="http://localhost:5173/">DevAuction</a>! We appreciate you reaching out to us.</p>
          <p>We've received your message and our team is working on a response. You can expect to hear back from us within 24 hours.</p>
          <p>In the meantime, you can explore our website for answers to frequently asked questions: <a href="http://localhost:5173/FAQ">FAQ</a>.</p>
          <p>We look forward to assisting you further!</p>
          <p>Sincerely,</p>
          <p>The DevAuction Team</p>
        </body>
        </html>
        `

        sendEmail(Email, subject, html)

        res.status(201).json({ message: 'Contact form submitted successfully!', data: newContact })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error: could not submit contact form' })
    }
  
})

module.exports = router
