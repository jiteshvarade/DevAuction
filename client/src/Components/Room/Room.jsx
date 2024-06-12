import React, { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSocket } from "../../context/SocketProvider"
import axios from "axios"

const Room = ()=> {
    const socket = useSocket()
    const {roomID} = useParams()

    const [message , setMessage] = useState('')

    useEffect(() => {
        console.log("inside room", roomID)
        socket.emit("new:user", {roomID})
    }, [roomID,socket]) 

    const handleMessageRequest = (data)=>{
        console.log(data)
    }

    useEffect(() => {
        socket.on("room:message", handleMessageRequest);
        return () => {
            socket.off("room:message", handleMessageRequest);
        };
    }, [socket, handleMessageRequest]);

    const handleMessage = (e)=>{
        e.preventDefault()
        if(!message) 
        {
            return
        }
        console.log(message)

        socket.emit("room:message",{message : message,roomID : roomID})
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

    //////////////////////////////////////////////////////

    function createPeer() {
        try{
            const peer = new RTCPeerConnection({
                iceServers: [
                    {
                        urls: "stun:stun.stunprotocol.org"
                    }
                ]
            });
            peer.onnegotiationneeded = () => handleNegotiationNeededEvent(peer)
        
            return peer
        }catch(error){
            console.log(error)
        }
    }

    async function handleNegotiationNeededEvent(peer) {
        const offer = await peer.createOffer()
        await peer.setLocalDescription(offer)
        const payload = {
            sdp: peer.localDescription
        };
    
        const { data } = await axios.post('http://in1.localto.net:5947/livestream/broadcast', payload)
        console.log(data)
        const desc = new RTCSessionDescription(data.sdp)
        peer.setRemoteDescription(desc).catch(e => console.log(e))
    }

    const handleVideo = async (e)=>{
        e.preventDefault()

        const stream = await navigator.mediaDevices.getUserMedia({ video: true ,audio : true})
        document.getElementById("video").srcObject = stream
        const peer = createPeer()
        stream.getTracks().forEach(track => peer.addTrack(track, stream))
    }

    /////////////////////////////////////////

    function handleTrackEvent(e) {
        document.getElementById("videoView").srcObject = e.streams[0]
    }

    async function handleNegotiationNeededEventView(peer) {
        const offer = await peer.createOffer()
        await peer.setLocalDescription(offer)
        const payload = {
            sdp: peer.localDescription
        };
    
        const { data } = await axios.post('http://in1.localto.net:5947/livestream/consumer', payload)
        console.log(data)
        const desc = new RTCSessionDescription(data.sdp)
        peer.setRemoteDescription(desc).catch(e => console.log(e))
    }

    function createPeerView() {
        try{
            const peer = new RTCPeerConnection({
                iceServers: [
                    {
                        urls: "stun:stun.stunprotocol.org"
                    }
                ]
            });
            peer.ontrack = handleTrackEvent;
            peer.onnegotiationneeded = () => handleNegotiationNeededEventView(peer)
        
            return peer
        }catch(error){
            console.log(error)
        }
    }

    const handleView = async (e)=>{
        e.preventDefault()

        const peer = createPeerView();
        peer.addTransceiver("video", { direction: "recvonly" })
        peer.addTransceiver("audio", { direction: "recvonly" });
    }

    return (
        <>
            <h2>Welcome to room {roomID}</h2>
            <form onSubmit={handleMessage}>
                <label htmlFor="message">Message : </label>
                <input type="text" placeholder="Enter message" id="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                <button type="submit" >Send</button>
            </form>
            <form onSubmit={handleVideo}>
                <button type="submit" >Send</button>
                <video autoPlay id="video"></video>
            </form>
            <form onSubmit={handleView}>
                <button type="submit" >View</button>
                <video autoPlay id="videoView"></video>
            </form>
        </>
    )
}

export default Room