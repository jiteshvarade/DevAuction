import dotenv from "dotenv"
dotenv.config()

export const PORT = process.env.PORT
export const MONGODB_URL = process.env.MONGODB_URL
export const DB_NAME = process.env.DB_NAME
export const EMAIL = process.env.EMAIL
export const APP_PASSWD = process.env.APP_PASSWD
export const RAZORPAY_ID_KEY = process.env.RAZORPAY_ID_KEY
export const RAZORPAY_SECRET_KEY = process.env.RAZORPAY_SECRET_KEY
export const Webhook_Secret = process.env.Webhook_Secret
export const client_email = process.env.client_email
export const private_key = process.env.private_key