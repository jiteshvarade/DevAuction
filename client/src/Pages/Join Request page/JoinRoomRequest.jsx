import React, { useCallback, useState, useRef, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";
import { BsFillMicMuteFill } from "react-icons/bs";
import { LuVideo, LuVideoOff } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";

export default function JoinRoomRequest() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const {roomId} = useParams();
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [micToggle, setMicToggle] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [askToJoin, setAskToJoin] = useState(false);
  const username = localStorage.getItem("username");
  
  useEffect(() => {
    let stream;
    let audioStream;

    const getFrontCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user",
          },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsCameraOn(true);
        }
      } catch (error) {
        console.error("Error accessing front camera:", error);
      }
    };

    if (isCameraOn) {
      getFrontCamera();
    }

    // Clean up function to stop the video stream when component unmounts or camera is stopped
    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
      if (audioStream) {
        const tracks = audioStream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [isCameraOn]);

  const toggleMic = async () => {
    setMicToggle(!micToggle);
    try {
      if (!isMicOn) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        audioStream = stream;
      } else {
        if (audioStream) {
          const tracks = audioStream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
      setIsMicOn((prevState) => !prevState);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const hndlClick = useCallback(
    (e) => {
      // Disable the button
      e.target.setAttribute("disabled", true);
      setAskToJoin(true);
      document.cookie = `userMicStatus=${micToggle}`
      document.cookie = `userCameraStatus=${!isCameraOn}`
      // Redirect to another route with parameters
      setTimeout(() => {
        navigate(`/room/${btoa(roomId)}`);
      }, 5000);
    },
    [navigate]
  );

  return (
    <div className="parent text-center flex flex-col items-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full">
      <div className="heading text-3xl font-semibold">
        {askToJoin ? "Asking to join..." : "Ask to Join"}
      </div>
      <div className="text-xs">{atob(roomId)}</div>
      <div className="cameraFrame w-60 bg-gray-600 h-96 rounded-xl relative overflow-hidden max-w-full">
        {isCameraOn ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className={`absolute object-cover h-full`}
            width={"auto"}
            style={{
              transform: "scaleX(-1)",
            }}
          ></video>
        ) : (
          <div className="absolute w-20 h-20 flex justify-center items-center bg-white text-black text-4xl font-serif  font-bold rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {username[0].toUpperCase()}
          </div>
        )}
      </div>
      <div className="btnsSection flex gap-4 flex-wrap justify-center items-center">
        {micToggle ? (
          <FaMicrophone
            size="2.3rem"
            className="p-2 active:bg-gray-200 rounded-full"
            onClick={toggleMic}
          />
        ) : (
          <BsFillMicMuteFill
            size="2.3rem"
            className="p-2 active:bg-gray-200 rounded-full"
            onClick={toggleMic}
          />
        )}
        {isCameraOn ? (
          <LuVideo
            size="2.4rem"
            className="p-2 active:bg-gray-200 rounded-full"
            onClick={() => {
              setIsCameraOn((prevState) => !prevState);
            }}
          />
        ) : (
          <LuVideoOff
            size="2.4rem"
            className="p-2 active:bg-gray-200 rounded-full"
            onClick={() => {
              setIsCameraOn((prevState) => !prevState);
            }}
          />
        )}
        <button
          className={`p-2 select-none ${
            askToJoin ? "bg-gray-200 text-gray-400" : "bg-blue-500 text-white"
          } rounded-full px-6`}
          onClick={hndlClick}
          title={askToJoin ? "disabled" : ""}
        >
          Ask to join
        </button>
      </div>
    </div>
  );
}
