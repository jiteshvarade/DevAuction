const express = require('express')
const router = express.Router()
const Project = require('../models/project')
const User = require("../models/user")

router.get("/getProjects", async(req, res)=>{
    try
    {   
        const projects = await Project.find({}).sort({ createdAt: -1 })

        res.send(projects)
    }catch(error){
        console.log(error)
    }
})

router.get("/getAllUsers", async(req, res)=>{
    try
    {   
        console.log("Inside getAllUsers")
        const user = await User.find({"UserInfo.email_verified" : Boolean(true)}).sort({ createdAt: -1 })

        res.send(user)
    }catch(error){
        console.log(error)
    }
})

router.post("/getProjectById", async(req, res)=>{
    try
    {   
        const project = await Project.findOne({ProjectID : req.body.projectID})

        res.send(project)
    }catch(error){
        console.log(error)
    }
})

module.exports = router