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
            const rooms = await Room.find({Premium : false}).sort({ createdAt: -1 })
            res.send({freeRooms : rooms})
        }
        else if(type == "premium"){
            // live premium
            const rooms = await Room.find({Premium : true}).sort({ createdAt: -1 })
            res.send({premiumRooms : rooms})
        }
        else if(type == "history"){
            // histroy logic
            const rooms = await Room.find({Sold : {}}).sort({ createdAt: -1 })
            res.send({history : rooms})
        }
        else if(type == "all"){
            const free = await Room.find({Premium : false}).sort({ createdAt: -1 })
            const premium = await Room.find({Premium : true}).sort({ createdAt: -1 })
            const history = await Room.find({Sold : {}}).sort({ createdAt: -1 })

            res.send({freeRooms : free, premiumRooms : premium, history : history})
        }
        else{
            res.send("Sending wrong type")
        }
        
    }catch(error){
        console.log(error)
    }
})

module.exports = router
