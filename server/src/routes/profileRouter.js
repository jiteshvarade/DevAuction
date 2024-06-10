const express = require('express')
const router = express.Router()
const User = require("../models/user")

router.post('/', async (req, res) => {
    // logic to get data of someones profile
    const email = req.body.email

    try{    
        const user = await User.findOne({"UserInfo.email" : email})

        if(!user)
        {
            res.status(500).send("User not found!")
        }

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
        // array.forEach(async function(follower) {
        //     const user = await User.findOne({"UserInfo.email" : follower})
        //     console.log(user)
        //     const segregatedData = {
        //         name : user.UserInfo.name,
        //         image : user.UserInfo.picture
        //     }
        //     data.push(segregatedData)
        // })

        for(let i = 0; i <  array.length;i++){
            const user = await User.findOne({"UserInfo.email" : array[i]})
            const segregatedData = {
                name : user.UserInfo.name,
                image : user.UserInfo.picture
            }
            data.push(segregatedData)
        }

        res.send({data : data})
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
