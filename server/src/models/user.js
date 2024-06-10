// import mongoose from "mongoose"
const mongoose = require('mongoose')
const profileSchema = require('./profile')

const userSchema = new mongoose.Schema({
    UserInfo : {
        type : Object,
        required : true,
    },
    Profile : {
        type : profileSchema,
        required : false
    }
},{timestamps : true})

const User = mongoose.model("User", profileSchema) 

// export default User
module.exports = User
