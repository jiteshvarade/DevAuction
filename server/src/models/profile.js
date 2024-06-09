const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    Bio : {
        type : String,
        required : false
    },
    Skills : {
        type : [String],
        required : false
    },
    RoomsCreated : {
        type : [String],
        required : false
    },
    Projects : {
        type : [String],
        required : false
    },
    Offers : {
        type : [{
            Project : String,
            Amount : Number,
            Result : Number,
        }],
        required : false
    },
    Followers : {
        type : [String],
        required : false
    },
    Following : {
        type : [String],
        required : false
    },
    Spendings : {
        type : [{
            ObjectID : String,
            Amount : Number
        }],
        required : false
    },
    Earnings : {
        type : [{
            ObjectID : String,
            Amount : Number
        }],
        required : false
    },
    Credits : {
        type : Number,
        requried : false
    }
},{timestamps : true})

const Profile = mongoose.model("Profile", profileSchema) 

module.exports = Profile
