const express = require("express")
const router = express.Router()
const webrtc = require('wrtc')
const Room = require("../models/createRoom")

let senderStream;

async function handleTrackEvent(e, peer) {
    try {
        senderStream = e.streams[0]
    }catch(error){
        console.log(error)
    }
}

router.post("/broadcast",async (req,res)=>{

    try {
        const peer = new webrtc.RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                }
            ]
        });
        peer.ontrack = (e) => handleTrackEvent(e, peer)
        const desc = new webrtc.RTCSessionDescription(req.body.sdp)
        await peer.setRemoteDescription(desc)
        const answer = await peer.createAnswer()
        await peer.setLocalDescription(answer)
        const payload = {
            sdp: peer.localDescription
        }
    
        res.json(payload)
        
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error: could not submit contact form' })
    }
  
})

router.post("/consumer",async (req,res)=>{

    try {
        const peer = new webrtc.RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                }
            ]
        })
        const desc = new webrtc.RTCSessionDescription(req.body.sdp)
        await peer.setRemoteDescription(desc)
        console.log("this is senderStream : ",senderStream)
        senderStream.getTracks().forEach(track => peer.addTrack(track, senderStream))
        const answer = await peer.createAnswer()
        await peer.setLocalDescription(answer)
        const payload = {
            sdp: peer.localDescription
        }
    
        res.json(payload)
        
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: 'Server error: could not submit contact form' })
    }
  
})

module.exports = router
