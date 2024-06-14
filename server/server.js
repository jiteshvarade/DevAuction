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
const roomWiseUsers = {}
const roomWiseSocketIdToUserIdMapping = {}

// socket.io connections
io.on("connection",(socket)=>{
    console.log("User connected : ",socket.id)

    ///////////////////////////////////////////////////////////////////
    let RoomID
    socket.on("meetingRoomJoin",(data)=>{
        // retriveing handshake data from client
        const {roomId, newUserData} = data;
        RoomID = roomId
        console.log("new user data", newUserData, "socketID", socket.id);
        console.log("room id", roomId );

        // Ensure roomWiseUsers[roomId] is initialized as an array if it doesn't exist
        if (!roomWiseUsers[roomId]) {
            roomWiseUsers[roomId] = {};
        }

        // Ensure roomWiseSocketIdToUserIdMapping[roomId] is initialized as an array if it doesn't exist
        if (!roomWiseSocketIdToUserIdMapping[roomId]) {
            roomWiseSocketIdToUserIdMapping[roomId] = {};
        }

        socket.join(roomId);

        //sending the details of users that are already there in the room to the new joinee
        io.to(roomId).emit("join", roomWiseUsers[roomId]);
        // console.log("roomWiseUsers[roomId]", roomWiseUsers[roomId]);

        //sending the report of new joinee to already joined users
        io.to(roomId).emit("newUserJoined", newUserData);

        //adding the host attribute to the first joinee of the meeting (a.k.a host)
        if(Object.entries(roomWiseUsers[roomId]).length == 0){
            console.log("l.65 roomWiseUsers[roomId]", roomWiseUsers[roomId]);
            console.log("l.66",roomWiseUsers[roomId].length);
            console.log("l.67 newUserData", newUserData);
            newUserData.host = true;
            console.log("l.69 newUserData", newUserData);
            // updating the users in the room
            roomWiseUsers[roomId][newUserData.userId] = newUserData;
            roomWiseSocketIdToUserIdMapping[roomId][socket.id] = newUserData.userId;
        }else{
            console.log("l.74 roomWiseUsers[roomId]", roomWiseUsers[roomId]);
            console.log("l.75", roomWiseUsers[roomId].length);
            console.log("l.76 newUserData", newUserData);
            newUserData.host = false;
            console.log("l.78 newUserData", newUserData);
            // updating the users in the room
            roomWiseUsers[roomId][newUserData.userId] = newUserData;
            roomWiseSocketIdToUserIdMapping[roomId][socket.id] = newUserData.userId;
        }
        console.log("l.83 roomWiseUsers[roomId]", roomWiseUsers[roomId]);
        console.log("l.84 roomWiseSocketIdToUserIdMapping[roomId]", roomWiseSocketIdToUserIdMapping[roomId]);
    })

    const arrayOfClientSideEvents = [
        "bidChange",
        "micStatus",
        "cameraStatus",
        "handRaiseStatus",
        "sendMessage",
        "leaveRoom",
    ]
    
    arrayOfClientSideEvents.forEach((elem) => {
        socket.on(elem, (data) => {
            const {roomId, ...toMemebers} = data //roomid chhodke baaki saara data room mein bhej rahe hai
            console.log(elem, data)

            
            // Broadcast data to all connected clients
            io.to(roomId).emit(elem, toMemebers)
        })
    })

    /////////////////////////////////////////////////////////////////////

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

    socket.on("disconnect", async()=>{
        
        for (const [key, value] of emailToSocketIdMap.entries()) {
            if (value === socket.id) {
                emailToSocketIdMap.delete(key)
            }
        }
        console.log("map deleted")  
        
        ///////////////////////////////////////////////////
        // console.log("user disconnected", socket.id);
        // const userIdOfUserLeft = roomWiseSocketIdToUserIdMapping[roomId][socket.id] //changed roomId to RoomID
        // // console.log("l.92 userIdOfUserLeft", userIdOfUserLeft);
        // io.to(roomId).emit("userLeft", userIdOfUserLeft)
        // delete roomWiseSocketIdToUserIdMapping[roomId][socket.id]
        // delete roomWiseUsers[roomId][userIdOfUserLeft]
        // console.log('l.96 roomWiseSocketIdToUserIdMapping[roomId]', roomWiseSocketIdToUserIdMapping[roomId])
        // console.log('l.97 roomWiseUsers[roomId]', roomWiseUsers[roomId])
        /////////////////////////////////////////////////////
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

// to start chat cleanup process every midnight
cleanupJob.start()
