const express = require('express')
const router = express.Router()
const Room = require('../models/createRoom')
const User = require("../models/user")

router.post('/getRoom', async (req,res)=>{
    
})

// this must be in seperate post methode
            // send mail if bid successfull
            // give back credits to others who's bids where rejected

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

        await room.save()

        const user = await User.findOneAndUpdate({"UserInfo.email" : email},{
            $inc : {"Profile.Credits" : -bid},
            $push : {"Profile.Spendings" : {Category : "Bid", Amount : bid}}
        })

        if(!user)
        {
            res.status(500).json({message : "User Not found"})
        }

        await user.save()
        res.status(201).send('Bid placed successfully')
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router