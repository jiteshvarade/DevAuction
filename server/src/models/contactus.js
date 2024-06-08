// import mongoose from "mongoose"
const mongoose = require("mongoose")

const contactusSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
    },
    Email : {
        type : String,
        required : true,
    },
    PhoneNo : {
        type : String,
        required : true,
    },
    Message : {
        type : String,
        required : true,
    }
},{timestamps : true})

const ContactUs = mongoose.model("ContactUs", contactusSchema) 

// export default ContactUs
module.exports = ContactUs
