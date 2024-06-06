import express from "express"
import cors from "cors"
import { createServer } from "http"
import { Server } from "socket.io"

import ConnectDB from "./src/db/connection.mjs"
import {PORT} from "./constants.mjs"
import contactRouter from "./src/routes/contactusRoutes.mjs"
import auth from "./src/middlewares/auth.mjs"
import razorpayRouter from "./src/routes/razorpay.mjs"
import uploadRouter from "./src/routes/uploadRouter.mjs"

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
app.use("/uploads",uploadRouter)
