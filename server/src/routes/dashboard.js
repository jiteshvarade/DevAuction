const express = require('express')
const router = express.Router()
const Room = require('../models/createRoom')

router.post("/getRooms", async(req, res)=>{
    const type = req.body.type // free premium history
    console.log(req.body)
    console.log(type)
    try
    {   
        if(type == "free"){
            // live free
            const rooms = await Room.find({Status : Boolean(false)}).sort({ createdAt: -1 })
            res.send({freeRooms : rooms})
        }
        else if(type == "history"){
            // histroy logic
            const rooms = await Room.find({Status : Boolean(true)}).sort({ createdAt: -1 })
            res.send({history : rooms})
        }
        else if(type == "all"){
            const free = await Room.find({Status : Boolean(false)}).sort({ createdAt: -1 })
            const history = await Room.find({Status : Boolean(true)}).sort({ createdAt: -1 })

            res.send({freeRooms : free, history : history})
        }
        else{
            res.send("Sending wrong type")
        }
        
    }catch(error){
        console.log(error)
    }
})

router.get('/highestBidders', async (req, res) => {
    try{
        const highestBidders = await Room.find({"Sold.amount": { $exists: true } }).sort({ "Sold.amount": -1 })

        res.send({highestBidders})
    }catch(error){
        console.log(error)
    }
})

module.exports = router
