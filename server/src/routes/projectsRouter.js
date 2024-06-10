const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const User = require("../models/user")

router.post('/getProject', async (req,res)=>{
    // Logic to get data of specific project 
})

router.post('/offers', async (req, res) => {
    const { projectID, email, offer } = req.body
  
    try {
        const project = await Project.findOneAndUpdate({ ProjectID: projectID },{
            $push : {"Offers" : {
                email : email,
                amount : offer,
                results : 0
            }}
        })
    
        if (!project) {
            return res.status(404).send('Project not found')
        }

        await project.save()

        // logic to add data inside user spendings
        const user = await User.findOneAndUpdate({"UserInfo.email" : email},{
            $inc : {"Profile.Credits" : -offer},
            $push : {"Profile.Spendings" : {Category : "Offer", Amount : offer}}
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

router("/earnings", async (req,res)=>{
    const {email, category, amount} = req.body

    try {
        const user = await User.findOne({"UserInfo.email" : email},{
            $inc : {"Profile.Credits" : amount},
            $push : {"Profile.Earnings" : {Category : category, Amount : amount}}
        })

        if(!user){
            res.status(500).json({message : "User Not found"})
        }

        await user.save()
        res.status(201).send("earnings updated successfully")
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
})

router("/follow", async (req,res)=>{
    const {from, to} = req.body

    try {
        const fromUser = await User.findOne({"UserInfo.email" : email},{
            $push : {"Profile.Following" : to}
        })

        const toUser = await User.findOne({"UserInfo.email" : email},{
            $push : {"Profile.Followers" : from}
        })

        if(!fromUser || !toUser){
            res.status(500).json({message : "User Not found"})
        }

        await fromUser.save()
        await toUser.save()
        res.status(201).send("followers/following updated successfully")
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router