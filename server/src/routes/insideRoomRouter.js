const express = require('express')
const router = express.Router()
const Room = require('../models/createRoom')

router.post('/getRoom', async (req,res)=>{
    // Loagic to get data of specific room 
})

router.post('/bids', async (req, res) => {
    const { roomId, email, amount } = req.body
  
    try {
        const room = await Room.findOne({ RoomID: roomId });
    
        if (!room) {
            // Logic to give user his credits back
            return res.status(404).send('Room not found')
        }
    
        const newBid = {
            email,
            amount,
            accepted: false 
        }

        // if Bids field is not present create one and push new bid in it
    
        room.Bids.push(newBid)
        await room.save()

        // logic to add data inside user spendings

        // Logic to substract amount from his credit balance
    
        res.status(201).send('Bid placed successfully')
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router