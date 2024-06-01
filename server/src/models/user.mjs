import mongoose from "mongoose"

const contactusSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
    },
    PhoneNo : {
        type : String,
        required : true,
    },
    Subject : {
        type : String,
        required : true,
    },
    Message : {
        type : String,
        required : true,
    }
},{timestamps : true})

export const ContactUs = mongoose.model("ContactUs", contactusSchema) 