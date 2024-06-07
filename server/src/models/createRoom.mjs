import mongoose from "mongoose"

const cerateRoomSchema = new mongoose.Schema({
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
    RoomSecret : {
        type : String,
        required : true
    }
},{timestamps : true})

const Room = mongoose.model("Room", cerateRoomSchema) 
export default Room