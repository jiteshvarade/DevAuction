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
    Premium : {
        type : Boolean,
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
    FileID : {
        type : String,
        required : true,
    },
    Link : {
        type : String,
        required : false,
    },
    ProjectID : {
        type : String,
        required : true
    },
    OfferPrice : {
        type : String,
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
