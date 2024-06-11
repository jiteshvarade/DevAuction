// import Router from "express"
// import User from "../models/user.js"
const Router = require('express')
const User = require('../models/user')
const sendEmail = require("../utils/email")
const Inbox = require('../models/inbox')

const router = Router()

router.post("/", async (req, res) => {
  const data = req.body

  try {
    if (!data) {
      return res.status(400).json({ message: "Please send required user data" })
    }

    let email = data.email
    const existingUser = await User.findOne({ "UserInfo.email" : email})

    if (existingUser) {
      console.log("Email already exists in the database.")
      return res.status(409).json({ message: "Email already exists" })
    } else {

      try{
        const newUser = new User({UserInfo : data,Profile : {Bio : "", Skills : [],RoomsCreated : [],Projects : [],Offers : [],Followers : [], Following : [], Spendings : [], Earnings : [],Credits : 0, Transactions : []}})
        await newUser.save()

        const userInbox = new Inbox({User : email, Messages : [], Recived : []})
        await userInbox.save()
      }catch(error){
        console.log("Internal Server error")
      }

      let subject = `Welcome to DevAuction, ${data.name}!`

      let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
        </head>
        <body>
          <h1>Hi ${data.name},</h1>
          <p>We're thrilled to welcome you to the DevAuction community!</p>
          <h2>Getting Started</h2>
          <p>If you have any questions or need help navigating the website, please don't hesitate to contact our friendly support team at DevAuction</a>.</p>
          <p>Welcome aboard! We're excited to have you as part of the community.</p>
          <p>Best regards,</p>
          <p>The DevAuction Team</p>
        </body>
        </html>
      `

      await sendEmail(email,subject,html)

      console.log("User created successfully!")
      res.status(201).json({ message: "User created successfully!"})
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error: could not create user" })
  }
})

// export default router
module.exports = router
