import Router from "express"
const router = Router()
import User from "../models/user.mjs"

router.post("/",async (req,res)=>{
    const data = req.body

    try {

        if (!data) {
            return res.status(400).json({ message: 'Please send required user data' })
        }

        const UserInfo = new User({UserInfo : data})
        await UserInfo.save()

        console.log("User created successfully!")
        res.status(201).json({ message: 'User created successfully!', data: UserInfo })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error: could not could not cerate user' })
    }
})

export default router
