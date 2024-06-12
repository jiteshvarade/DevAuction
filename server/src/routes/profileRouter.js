const express = require('express')
const router = express.Router()
const User = require("../models/user")
const Inbox = require('../models/inbox')

router.post('/', async (req, res) => {
    const email = req.body.email

    try{    
        const user = await User.findOne({"UserInfo.email" : email})
        res.send({userData : user})

    } catch(error) {
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
})

router.post('/createdRooms', async (req, res) => {
    // logic to store created rooms id by user
})

router.post('/createdProjects', async (req, res) => {
    // logic to store created project id by user
})

router.post('/placedOffers', async (req, res) => {
    // logic to store Offers placed by user
})

router.post('/followers', async (req, res) => {
    const array = req.body.followers
    let data = []

    try{
        for(let i = 0; i <  array.length;i++){
            const user = await User.findOne({"UserInfo.email" : array[i]})
            const segregatedData = {
                email : array[i],
                name : user.UserInfo.name,
                image : user.UserInfo.picture,
            }
            data.push(segregatedData)
        }

        res.send({data : data})
    }catch(error){
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
})

router.post('/following', async (req, res) => {
    const array = req.body.following
    let data = []

    try{
        for(let i = 0; i <  array.length;i++){
            const user = await User.findOne({"UserInfo.email" : array[i]})
            const segregatedData = {
                email : array[i],
                name : user.UserInfo.name,
                image : user.UserInfo.picture,
            }
            data.push(segregatedData)
        }

        res.send({data : data})
    }catch(error){
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
})

router.post('/inbox', async (req, res) => {

    // logic to send profile photo and name of the user
    const email = req.body.email
    let inboxArray = []
    const uniqueEmails = new Set()

    try{

        const inbox = await Inbox.findOne({User : email})

        if(inbox.Messages.length == 0 && inbox.Recived.length == 0){
            res.send("inbox empty")
        }

        const lengthSent = inbox.Messages.length
        const lengthRecived = inbox.Recived.length

        for(let i = 0; i < lengthSent;i++){
            const to = inbox.Messages[i].to
            if(!uniqueEmails.has(to)) {
                const user = await User.findOne({"UserInfo.email" : to})
                const segregatedData = {
                    email : to,
                    name : user.UserInfo.name,
                    image : user.UserInfo.picture,
                }
                inboxArray.push(segregatedData)
                uniqueEmails.add(to)
            }
        }

        for(let i = 0; i < lengthRecived;i++){
            const from = inbox.Recived[i].from
            if(!uniqueEmails.has(from)) {
                const user = await User.findOne({"UserInfo.email" : from})
                const segregatedData = {
                    email : from,
                    name : user.UserInfo.name,
                    image : user.UserInfo.picture,
                }
                inboxArray.push(segregatedData)
                uniqueEmails.add(from)
            }
        }

        res.send({data : inboxArray})

    }catch(error){
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
})

router.post('/chats', async (req, res) => {

    // logic to get chats of both the users
    const me = req.body.me
    const other = req.body.other

    let meArray
    let otherArray

    try{

        const inbox = await Inbox.findOne({User : me})

        const lengthSent = inbox.Messages.length
        const lengthRecived = inbox.Recived.length

        let i = 0
        for(i = 0; i < lengthSent;i++){
            if(inbox.Messages[i].to = other){
                meArray = inbox.Messages[i].data
                break
            }
        }

        if(i == lengthSent){
            meArray = []
        }

        i = 0
        for(i = 0; i < lengthRecived;i++){
            if(inbox.Recived[i].from = other){
                otherArray = inbox.Recived[i].data
                break
            }
        }

        if(i == lengthRecived){
            otherArray = []
        }

        res.send({myMessages : meArray, senderMessages : otherArray})
 
    }catch(error){
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
})

router.post('/chat/send', async (req, res) => {

    // logic to store message in both user inbox collection
    const from = req.body.from
    const to = req.body.to
    const message = req.body.message

    try{

        const userFrom = await Inbox.findOne({User : from})

        const fromMessagesLength = userFrom.Messages.length
        
        let i = 0
        for(i = 0; i < fromMessagesLength;i++) {
            if(userFrom.Messages[i].to == to) {
                userFrom.Messages[i].data.push({
                    mes : message,
                    at : Date.now()
                })

                break
            }
        }

        if(i == fromMessagesLength) {
            userFrom.Messages.push({
                to : to,
                data : [{
                    mes : message,
                    at : Date.now()
                }]
            })
        }

        await userFrom.save()

        const userTo = await Inbox.findOne({User : to})

        const toRecivedLength = userTo.Recived.length
        
        i = 0
        for(i = 0; i < toRecivedLength;i++) {
            if(userTo.Recived[i].from == from) {
                userTo.Recived[i].data.push({
                    mes : message,
                    at : Date.now()
                })

                break
            }
        }

        if(i == toRecivedLength) {
            userTo.Recived.push({
                from : from,
                data : [{
                    mes : message,
                    at : Date.now()
                }]
            })
        }

        await userTo.save()

        res.send("Message send successfully!")
        
    }catch(error){
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
})



router.post('/spending', async (req, res) => {
    // logic to store spending data
})

router.post('/earning', async (req, res) => {
    // logic to store earning data
})

router.post('/credits', async (req, res) => {
    // logic to store credits of user
})

module.exports = router


