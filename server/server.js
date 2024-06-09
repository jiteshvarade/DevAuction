const express = require('express')
const cors = require('cors')
const {createServer} = require('http')
const {Server} = require('socket.io')

const ConnectDB = require('./src/db/connection')
const {PORT} = require('./constants')
const contactRouter = require('./src/routes/contactusRoutes')
const auth = require('./src/middlewares/auth')
const razorpayRouter = require('./src/routes/razorpay')
const createRoomRouter = require('./src/routes/createRouter')
const insideRoomRouter = require('./src/routes/insideRoomRouter')
const projectRouter = require('./src/routes/projectsRouter')
const profileRouter = require("./src/routes/profileRouter")

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

    socket.on("room:video",data => {
        console.log(data.roomID)
        io.to(data.roomID).emit("room:video",{message : data.message, sender : socket.id})
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
app.use("/payments",razorpayRouter)
app.use("/create",createRoomRouter)
app.use("/rooms",insideRoomRouter)
app.use("/project",projectRouter)
app.use("/profile",profileRouter)
