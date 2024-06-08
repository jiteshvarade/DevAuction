import React, { useCallback, useEffect, useState } from "react"
import {useSocket} from "../../context/SocketProvider"
import {useNavigate} from "react-router-dom"

const RoomLobby = () =>{
    const [roomID , setRoomID] = useState('')

    const socket = useSocket()
    const navigate = useNavigate()

    useEffect(()=>{
        socket.on("connect",()=>{
            console.log("User connected : ",socket.id)
        })
    }),[]

    const handleConnectRoom = (data)=>{
        console.log(data)
    }

    useEffect(() => {
        socket.on("room:connect", handleConnectRoom);
        return () => {
            socket.off("room:connect", handleConnectRoom);
        };
    }, [socket, handleConnectRoom]);

    const handleJoinRoom = (data)=>{
        console.log(data)
        const roomID= data.roomid
        socket.emit("room:connect", {message : "request to join", roomID : roomID})
        navigate(`/room/${roomID}`),[navigate]
    }

    useEffect(() => {
        socket.on("room:join", handleJoinRoom);
        return () => {
            socket.off("room:join", handleJoinRoom);
        };
    }, [socket, handleJoinRoom]);

    const handlesubmit = (e)=>{
        e.preventDefault()
        if(!roomID) 
        {
            return
        }
        console.log(roomID)

        socket.emit("room:join",{roomid : roomID})
            
    }
    
    return (
        <>
            <form onSubmit={handlesubmit}>
                <h2>Enter Room Area</h2>
                <label htmlFor="roomid">RoomID : </label>
                <input type="text" placeholder="Enter room id" id="roomid" value={roomID} onChange={(e)=>{setRoomID(e.target.value)}}/>
                <button type="submit" >Join</button>
            </form>
        </>
    )
}

export default RoomLobby