const mongoose = require("mongoose")

const createProjectSchema = new mongoose.Schema({
    Owner : {
        type : String,
        required : true
    },
    Image : {
        type : String,
        required : false
    },
    Title : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
    Tags : {
        type : [String],
        required : false
    },
    FileID : {
        type : String,
        required : true,
    },
    Link : {
        type : String,
        required : false,
    },
    Status : {
        type : Boolean,
        required : false
    },
    ProjectID : {
        type : String,
        required : true
    },
    OfferPrice : {
        type : Number,
        required : true,
    },
    Offers : {
        type : [{
            email: String,
            amount: Number,
            results: Number,
        }],
        required : false
    },
    Sold : {
        type : {
            email : String,
            amount : Number,
        },
        required : false
    }
},{timestamps : true})

const Project = mongoose.model("Project", createProjectSchema) 

module.exports = Project
