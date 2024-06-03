import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    UserInfo : {
        type : Object,
        required : true,
    }
},{timestamps : true})

const User = mongoose.model("User", userSchema) 

export default User
