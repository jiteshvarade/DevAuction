import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCircle } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { IoSend } from "react-icons/io5";

const CameraAccess = ({ className, openCamera, setOpenCamera }) => {
  const [videoStream, setVideoStream] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setVideoStream(stream);
      } catch (err) {
        console.error("Error accessing the camera:", err);
      }
    };
    if (openCamera) {
      getCameraStream();
    }
    return () => {
      // Clean up the stream when the component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [openCamera]);

  const stopCamera = () => {
    if (videoStream) {
      const tracks = videoStream.getTracks();
      tracks.forEach((track) => track.stop());
      setVideoStream(null);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      context.drawImage(
        videoRef.current,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      const dataUrl = canvasRef.current.toDataURL("image/png");
      setCapturedPhoto(dataUrl); // Store the captured photo in state
    }
  };

  function deletePic() {
    if (capturePhoto) {
      setCapturedPhoto(null);
    }
  }
  function hndlClick() {
    setOpenCamera(false);
    stopCamera();
    deletePic();
  }
  return (
    <div
      className={
        openCamera
          ? "absolute bottom-20 left-1/2 -translate-x-1/2 w-4/5 h-[70dvh] rounded-xl overflow-hidden"
          : "hidden"
      }
      style={{
        backgroundColor: "rgba(7, 38, 67, 1)",
        boxShadow: "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1000,
          transform: "scaleX(-1)",
        }}
      />
      <canvas
        ref={canvasRef}
        style={{ display: "none" }}
        width="640"
        height="480"
      ></canvas>
      {capturedPhoto && (
        <div className="absolute bottom-0 h-full w-full">
          <img
            src={capturedPhoto}
            alt="Captured"
            className="w-full h-full object-cover"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      )}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-fit flex items-center gap-2">
        <RxCross2
          className="text-black bg-white p-2 rounded-full cursor-pointer active:scale-95"
          size="2.2rem"
          onClick={hndlClick}
        />
        <div className="p-[1px] border-2 border-white text-white cursor-pointer w-fit rounded-full">
          {capturedPhoto ? (
            <RxUpdate size="1.5rem" onClick={deletePic} className="m-1 active:scale-95" />
          ) : (
            <FaCircle size="2rem" onClick={capturePhoto} className="active:scale-95" />
          )}
        </div>
        {capturedPhoto && (
          <IoSend
            size="2.3rem"
            className="h-full aspect-square rounded-full p-2 bg-[#66bee3] text-white absolute -right-11 cursor-pointer active:scale-95"
          />
        )}
      </div>
    </div>
  );
};

export default CameraAccess;
