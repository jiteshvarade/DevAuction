import express from "express"
import cors from "cors"
import ConnectDB from "./src/db/connection.mjs"
import {PORT} from "./constants.mjs"

import contactusRouter from "./src/routes/contactusRoutes.mjs"

//mongodb connection
ConnectDB()

// middlewares
const app = express()
app.use(express.json())

// cors
app.use(cors({origin : true}))

app.listen(PORT, ()=>{
    console.log("Server started successfully")
    console.log(`http://localhost:${PORT}`)
})

app.get("/",(req, res)=>{
    res.send("Welocome to DevAuction Server")
})

// routes
app.use("/contactus",contactusRouter)