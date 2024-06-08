// import mongoose from "mongoose"
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    UserInfo : {
        type : Object,
        required : true,
    }
},{timestamps : true})

const User = mongoose.model("User", userSchema) 

// export default User
module.exports = User
