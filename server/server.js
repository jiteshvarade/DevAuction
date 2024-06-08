// import express from "express"
// import cors from "cors"
// import { createServer } from "http"
// import { Server } from "socket.io"

// import ConnectDB from "./src/db/connection.js"
// import {PORT} from "./constants.js"
// import contactRouter from "./src/routes/contactusRoutes.js"
// import auth from "./src/middlewares/auth.js"
// import razorpayRouter from "./src/routes/razorpay.js"
// import createRoomRouter from "./src/routes/createRoomRouter.js"

const express = require('express')
const cors = require('cors')
const {createServer} = require('http')
const {Server} = require('socket.io')

const ConnectDB = require('./src/db/connection')
const {PORT} = require('./constants')
const contactRouter = require('./src/routes/contactusRoutes')
const auth = require('./src/middlewares/auth')
const razorpayRouter = require('./src/routes/razorpay')
const createRoomRouter = require('./src/routes/createRoomRouter')

//mongodb connection
ConnectDB()

// middlewares
const app = express()
app.use(express.json())

// cors
app.use(cors({origin : true}))

// socket.io server
const server = createServer(app)
const io = new Server(server, {
    cors : {
        origin : true
    }
})

// socket.io connections
io.on("connection",(socket)=>{
    console.log("User connected : ",socket.id)
})

server.listen(PORT, ()=>{
    console.log("Server started successfully")
    console.log(`http://localhost:${PORT}`)
})

app.get("/",(req, res)=>{
    res.send("Welocome to DevAuction Server")
})

//routes
app.use("/auth",auth)
app.use("/contactus", contactRouter)
app.use("/payments",razorpayRouter)
app.use("/uploads",createRoomRouter)
