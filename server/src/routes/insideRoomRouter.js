const express = require('express')
const router = express.Router()
const Room = require('../models/createRoom')

router.post('/getRoom', async (req,res)=>{
    const { roomId } = req.body;

    try {
        const room = await Room.findOne({ RoomID: roomId })

        if (!room) {
        return res.status(404).send('Room not found')
        }

        res.status(200).json(room)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
})

router.post('/bids', async (req, res) => {
    const { roomId, email, amount } = req.body
  
    try {
        const room = await Room.findOne({ RoomID: roomId })
    
        if (!room) {
            // Logic to give user his credits back
            return res.status(404).send('Room not found')
        }

        if (!room.Bids) {
            room.Bids = [] //logic to add bids array if not present
        }
    
        const newBid = {
            email,
            amount,
            accepted: false 
        }
    
        room.Bids.push(newBid)
        await room.save()

        // logic to add data inside user spendings

        // Logic to substract amount from his credit balance

        // this must be in seperate post methode
            // send mail if bid successfull
    
        res.status(201).send('Bid placed successfully')
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router