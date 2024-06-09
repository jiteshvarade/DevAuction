const express = require('express')
const router = express.Router()
const Project = require('../models/project')

router.post('/', async (req,res)=>{
    // logic to add create project data
})

router.post('/getProject', async (req,res)=>{
    // Loagic to get data of specific project 
})

router.post('/offers', async (req, res) => {
    const { projectID, email, amount } = req.body
  
    try {
        const project = await Project.findById(projectID);
    
        if (!project) {
            // Logic to give user his credits back
            return res.status(404).send('Project not found')
        }
    
        const newOffer = {
            email,
            amount,
            results: 0 
        }

        // if Bids field is not present create one and push new bid in it
    
        project.Offers.push(newOffer)
        await project.save()

        // logic to add data inside user spendings

        // Logic to substract amount from his credit balance
    
        res.status(201).send('Bid placed successfully')
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router