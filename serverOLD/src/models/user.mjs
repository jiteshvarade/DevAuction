import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    UserInfo : {
        type : Object,
        required : false,
    },
    ContactUs : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "ContactUs",
        required : false,
    }
},{timestamps : true})

const User = mongoose.model("User", UserSchema) 

export default User