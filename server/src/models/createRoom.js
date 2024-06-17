// import mongoose from "mongoose"
const mongoose = require("mongoose")

const cerateRoomSchema = new mongoose.Schema({
    Owner : {
        type : String,
        required : true
    },
    Image : {
        type : String,
        required : false
    },
    Status : {
        type : Boolean,
        required : true
    },
    Time : {
        type : String,
        required : true
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
    RoomID : {
        type : String,
        required : true
    },
    Bids : {
        type : [{
            email: String,
            amount: Number,
            accepted: Boolean,
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

const Room = mongoose.model("Room", cerateRoomSchema) 

// export default Room
module.exports = Room
