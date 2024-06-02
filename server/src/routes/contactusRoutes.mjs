import { Router } from "express"
const router = Router()
import ContactUs from "../models/contactus.mjs"

router.post("/",async (req,res)=>{
    const { Name, Email , PhoneNo, Subject, Message} = req.body

    try {

        if (!Name || !Email || !PhoneNo || !Subject || !Message) {
            return res.status(400).json({ message: 'Please fill in all required fields' })
        }

        const newContact = new ContactUs({ Name , Email, PhoneNo, Subject, Message })
        await newContact.save()

        res.status(201).json({ message: 'Contact form submitted successfully!', data: newContact })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error: could not submit contact form' })
    }
  
})

export default router