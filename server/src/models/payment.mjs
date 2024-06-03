import mongoose from "mongoose"

const paymentSchema = new mongoose.Schema({
    PaymentInfo : {
        type : Object,
        required : true,
    }
},{timestamps : true})

const Payment = mongoose.model("Payment", paymentSchema) 

export default Payment
