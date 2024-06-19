const express = require('express')
const router = express.Router()
const User = require("../models/user")
const Inbox = require('../models/inbox')
const Project = require("../models/project")

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

router.post('/getUsers', async (req, res) => {
    const name = req.body.name

    try{    
        const users = await User.find({"UserInfo.name" : name})
        res.send({users : users})

    } catch(error) {
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
})

router.post('/getUsersById', async (req, res) => {
    const id = req.body.id

    try{    
        const user = await User.findById(id)
        res.send({userData : user})

    } catch(error) {
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
})

router.post('/userProjects', async (req, res) => {
    const email = req.body.email

    try{
        let userProjects = []
        const user = await User.findOne({"UserInfo.email" : email})
        
        const projectArray = user.Profile.Projects

        const length = projectArray.length

        for(let i = 0; i < length; i++){
            const project = await Project.findOne({ProjectID : user.Profile.Projects[i]})
            userProjects.push(project)
        }

        res.send({userProjects})
        
    }catch(error){
        console.log(error)
    }
})

router.post('/placeOffer', async (req, res) => {
    const projectID = req.body.projectID
    const email = req.body.email
    const amount = req.body.amount

    try{
        const project = await Project.findOneAndUpdate({ProjectID : projectID},{
            $push : {"Offers" : {
                email : email,
                amount : amount,
                results : 0
            }}
        })
        
        await project.save()

        res.send("Offer placed successfully")
    }catch(error){
        console.log(error)
    }
})

router.post('/getUserOffers', async (req, res) => {
    const email = req.body.email
    let offers = []

    try{
        const projects = await Project.find({Owner : email})

        const length = projects.length

        for(let i = 0;  i < length; i++){
            const projectOffersLenght = projects[i].Offers.length
            for(j = 0; j < projectOffersLenght; j++){
                const user = await User.findOne({"UserInfo.email" : projects[i].Offers[j].email})
                offers.push({
                    name : user.UserInfo.name,
                    projectTitle : projects[i].Title,
                    amount : projects[i].Offers[j].amount,
                    result : projects[i].Offers[j].results
                })
            }
        }

        res.send({offers})
    }catch(error){
        console.log(error)
    }
})

router.post('/getProjectOffers', async (req, res) => {
    const projectID = req.body.projectID
    let offers = []

    try{
        const project = await Project.findOne({ProjectID : projectID})

        const length = project.Offers.length

        for(let i = 0;  i < length; i++){
            const user = await User.findOne({"UserInfo.email" : project.Offers[i].email})
            offers.push({
                name : user.UserInfo.name,
                amount : project.Offers[i].amount,
                result : project.Offers[i].results
            })
        }

        res.send({offers})
    }catch(error){
        console.log(error)
    }
})

router.post("/edit", async(req, res)=>{
    const email = req.body.email
    const bio = req.body.bio
    const skills = req.body.skills

    console.log(email,bio,skills)

    try{
        const user = await User.findOneAndUpdate({"UserInfo.email" : email},{
            $set : {"Profile.Bio" : bio, "Profile.Skills" : skills}
        })
        await user.save()

        res.send("Profile edited successfully")
    }catch(error){
        console.log(error)
    }
})

router.post("/follow", async (req, res) => {
    const { from, to } = req.body

    try {
        const fromUser = await User.findOne({"UserInfo.email": from})
        const toUser = await User.findOne({"UserInfo.email": to})

        if (!fromUser || !toUser) {
            return res.status(404).json({ message: "User Not found" })
        }
        else{
            fromUser.Profile.Following.push(to)
            toUser.Profile.Followers.push(from)

            await fromUser.save()
            await toUser.save()

            res.status(201).send("Followers/following updated successfully")
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

router.post("/unFollow", async (req, res) => {
    const { from, to } = req.body
  
    try {
        const fromUser = await User.findOne({ "UserInfo.email": from })
        const toUser = await User.findOne({ "UserInfo.email": to })
    
        if (!fromUser || !toUser) {
            return res.status(404).json({ message: "User Not found" })
        }
    
        const fromFollowingIndex = fromUser.Profile.Following.indexOf(to)
        const toFollowersIndex = toUser.Profile.Followers.indexOf(from)
    
        
        if (fromFollowingIndex === -1 || toFollowersIndex === -1) {
            return res.status(400).json({ message: "Users are not following each other" });
        }
        else{
            fromUser.Profile.Following.splice(fromFollowingIndex, 1)
            toUser.Profile.Followers.splice(toFollowersIndex, 1)
        
            await fromUser.save()
            await toUser.save()
        
            res.status(200).send("Unfollowed successfully")
        }

    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

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
        else{
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
        }

        

    }catch(error){
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
})

router.post('/chats', async (req, res) => {

    // logic to get chats of both the users
    const me = req.body.me
    const other = req.body.other
    console.log(me,other)

    let meArray
    let otherArray

    try{

        const inbox = await Inbox.findOne({User : me})

        const lengthSent = inbox.Messages.length
        const lengthRecived = inbox.Recived.length

        let i = 0
        for(i = 0; i < lengthSent;i++){
            if(inbox.Messages[i].to == other){
                meArray = inbox.Messages[i].data
                break
            }
        }

        if(i == lengthSent){
            meArray = []
        }

        i = 0
        for(i = 0; i < lengthRecived;i++){
            if(inbox.Recived[i].from == other){
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

module.exports = router


