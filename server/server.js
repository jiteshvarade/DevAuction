const express = require('express')
const cors = require('cors')
const {createServer} = require('http')
const {Server} = require('socket.io')
const ConnectDB = require('./src/db/connection')
const {PORT} = require('./constants')

const cleanupJob = require('./src/utils/cleanupcode')
const contactRouter = require('./src/routes/contactusRoutes')
const auth = require('./src/middlewares/auth')
const dashboardRouter = require("./src/routes/dashboard")
const razorpayRouter = require('./src/routes/razorpay')
const createRoomRouter = require('./src/routes/createRouter')
const insideRoomRouter = require('./src/routes/insideRoomRouter')
const projectRouter = require('./src/routes/projectsRouter')
const profileRouter = require("./src/routes/profileRouter")
const liveStreamRouter = require("./src/routes/livestream")
const galleryRouter = require("./src/routes/gallery")

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

//mapping
const emailToSocketIdMap = new Map()

// socket.io connections
io.on("connection",(socket)=>{
    console.log("User connected : ",socket.id)

    socket.on("user:connected",async (data)=>{
        if(data.email){
            emailToSocketIdMap.set(data.email, socket.id)
            console.log("new map inserted")
        }
    })

    socket.on("user:message", async(data)=>{
        if(data.to){
            let reciverSocketID = emailToSocketIdMap.get(data.to)
            console.log(data.from,data.to,data.message)
            console.log("reciver socket.id : ",reciverSocketID)
            io.to(reciverSocketID).emit("user:message",{mes : data.message, at : Date.now()})
        }
    })

    socket.on("new:user",data=>{
        console.log(data)
        io.to(data.roomID).emit("new:user",{message : "New user joined", id : socket.id})
    })

    socket.on("room:join",data => {
        console.log(data)
        io.to(socket.id).emit("room:join",data)
    })

    socket.on("room:connect",data=>{
        console.log(data)
        socket.join(data.roomID)
        io.to(data.roomID).emit("room:connect",{message : "room joined successfully"})
    })

    socket.on("room:message",data => {
        console.log(data.roomID)
        io.to(data.roomID).emit("room:message",{message : data.message, sender : socket.id})
    })

    socket.on("on:bid",data=>{
        console.log(data)
        io.to(data.roomID).emit("on:bid",{data})
    })

    socket.on("roomClose",data=>{
        io.to(data.roomID).emit("roomClose",{status : true})
    })

    socket.on("disconnect", async()=>{
        
        for (const [key, value] of emailToSocketIdMap.entries()) {
            if (value === socket.id) {
                emailToSocketIdMap.delete(key)
            }
        }
        console.log("map deleted")  
    })
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
app.use("/dashboard",dashboardRouter)
app.use("/payments",razorpayRouter)
app.use("/create",createRoomRouter)
app.use("/rooms",insideRoomRouter)
app.use("/project",projectRouter)
app.use("/profile",profileRouter)
app.use("/livestream",liveStreamRouter)
app.use("/gallery", galleryRouter)

// to start chat cleanup process every midnight
// cleanupJob.start()
