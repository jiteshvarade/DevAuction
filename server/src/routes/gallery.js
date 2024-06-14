const express = require('express')
const router = express.Router()
const Project = require('../models/project')

router.post("/getProjects", async(req, res)=>{
    const type = req.body.type
    try
    {   
        const projects = await Project.find({Premium : type}).sort({ createdAt: -1 })

        res.send(projects)
    }catch(error){
        console.log(error)
    }
})

module.exports = router