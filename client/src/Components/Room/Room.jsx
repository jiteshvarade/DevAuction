import React, { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSocket } from "../../context/SocketProvider"

const Room = ()=> {
    const socket = useSocket()
    const {roomID} = useParams()

    const [message , setMessage] = useState('')

    useEffect(() => {
        console.log("inside room", roomID)
        socket.emit("new:user", {roomID})
    }, [roomID,socket]) 

    const handleVideoRequest = (data)=>{
        console.log(data)
    }

    useEffect(() => {
        socket.on("room:video", handleVideoRequest);
        return () => {
            socket.off("room:video", handleVideoRequest);
        };
    }, [socket, handleVideoRequest]);

    const handleVideo = (e)=>{
        e.preventDefault()
        if(!message) 
        {
            return
        }
        console.log(message)

        socket.emit("room:video",{message : message,roomID : roomID})
    }

    const newUser = async (data)=>{
        console.log(data)
        // if new user joins only allow admin to send peer to him
    }

    useEffect(() => {
            socket.on("new:user",newUser)
        
            return () => {
            socket.off("new:user",newUser)
            }
        }, [
            socket,
            newUser
    ])

    return (
        <>
            <h2>Welcome to room {roomID}</h2>
            <form onSubmit={handleVideo}>
                <label htmlFor="message">Message : </label>
                <input type="text" placeholder="Enter message" id="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                <button type="submit" >Send</button>
            </form>
        </>
    )
}

export default Room