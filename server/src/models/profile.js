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
            Category : String,
            Amount : Number
        }],
        required : false
    },
    Earnings : {
        type : [{
            Category : String,
            Amount : Number
        }],
        required : false
    },
    Credits : {
        type : Number,
        required : false,
        default : 0
    },
    Transactions : {
        type : [{
            email : String, 
            amount : Number, 
            category : String
        }],
        required : false
    },
    Premium : {
        type : Boolean,
        required : false
    }

},{timestamps : true})

module.exports = profileSchema
