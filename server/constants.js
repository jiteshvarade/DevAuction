// import dotenv from "dotenv"
// dotenv.config()
require('dotenv').config()

// export const PORT = process.env.PORT
// export const MONGODB_URL = process.env.MONGODB_URL
// export const DB_NAME = process.env.DB_NAME
// export const EMAIL = process.env.EMAIL
// export const APP_PASSWD = process.env.APP_PASSWD
// export const RAZORPAY_ID_KEY = process.env.RAZORPAY_ID_KEY
// export const RAZORPAY_SECRET_KEY = process.env.RAZORPAY_SECRET_KEY
// export const Webhook_Secret = process.env.Webhook_Secret
// export const client_email = process.env.client_email
// export const private_key = process.env.private_key

const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL
const DB_NAME = process.env.DB_NAME
const EMAIL = process.env.EMAIL
const APP_PASSWD = process.env.APP_PASSWD
const RAZORPAY_ID_KEY = process.env.RAZORPAY_ID_KEY
const RAZORPAY_SECRET_KEY = process.env.RAZORPAY_SECRET_KEY
const Webhook_Secret = process.env.Webhook_Secret
const client_email = process.env.client_email
const private_key = process.env.private_key

module.exports = {PORT,MONGODB_URL,DB_NAME,EMAIL,APP_PASSWD,RAZORPAY_ID_KEY,RAZORPAY_SECRET_KEY,Webhook_Secret,client_email,private_key}

