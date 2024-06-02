import {Router} from "express"
import User from "../models/user.mjs"
const router = Router()

router.post("/",async (req, res)=>{
    console.log("Inside contact us router")
    try {
        const { Name, Email,PhoneNo, Subject, Message } = req.body

        if (!Name || !Email || !PhoneNo || !Subject || !Message) {
            return res.status(400).json({ message: 'Please fill in all required fields' })
        }

        const newContact = new User({ Name, Email, PhoneNo, Subject, Message })

        const savedContact = await newContact.save();

        res.status(201).json({ message: 'Contact form submitted successfully!', data: savedContact })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error: could not submit contact form' })
    }
})

export default router