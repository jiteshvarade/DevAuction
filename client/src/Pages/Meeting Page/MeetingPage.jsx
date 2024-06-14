import React, { useState, useEffect, useRef } from "react";
import MeetingGridItem from "../../Components/Meeting Grid Item/MeetingGridItem"
import MeetingFooter from "../../Components/Meeting footer/MeetingFooter"
import { RiAuctionFill } from "react-icons/ri";
// import MaxBidCont from "../../components/Max Bid conatiner/MaxBidCont";
import MaxBidCont from "../../Components/Max Bid conatiner/MaxBidCont"
import { BsMicMuteFill } from "react-icons/bs";
import { IoVideocamOff } from "react-icons/io5";
import { MdOutlineStopScreenShare } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client"

const arrayOfClientSideEvents = [
  "bidChange",
  "micStatus",
  "cameraStatus",
  "handRaiseStatus",
  "leaveRoom",
];

export default function MeetingPage() {
  const videoRef = useRef(null);
  const [videoStream, setVideoStream] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [stream, setStream] = useState(null);
  // const navigate = useNavigate();
  const { roomId: encodedRoomId } = useParams();
  const [socketData, setSocketData] = useState({}); //store the date to all the users in the meeting
  const [messages, setMessages] = useState([]); //store the messages from the meeting
  const [socket, setSocket] = useState({});
  const [showHostPrevilages, setShowHostPrevilages] = useState(false);
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("username");
  const userMicStatus = false;
  const userCameraStatus = false;
  const decodedRoomId = encodedRoomId;
  // const decodedRoomId = atob(encodedRoomId);

  useEffect(() => {
    const socket = io("http://localhost:3001", {
      query: {
        roomId: decodedRoomId,
        userId,
        userName,
        micStatus: userMicStatus,
        cameraStatus: userCameraStatus,
        handRaiseStatus: false,
        videoStream: "",
        audioStream: "",
      },

      // socket.emit("entered:room", data)
    });

    // socket.on("entered:room",data=>{
    // const {roomId, newUserData}
    // })

    setSocket(socket);

    // Listen for socket events
    socket.on("connect", (data) => {
      // console.log("Connected to server", data);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    arrayOfClientSideEvents.forEach((elem) => {
      socket.on(elem, (data) => {
        console.log(elem, data);
        setSocketData((prevState) => {
          // Extracting specific object as per the userId
          const keyy = prevState[data.userId]; // Clone the nested object

          // extranting the properties that are nedded to be changed as per event received in the socketid
          // const { userId, userName, host, ...upadetedData } = data;

          // Updating the data of that particular object
          for (const [key, value] of Object.entries(data)) {
            keyy[key] = value;
          }
          // retuning the new state
          return { ...prevState, [data.userId]: keyy };
        });
      });
    });

    socket.on("sendMessage", (data) => {
      setMessages((prevState) => {
        return [...prevState, data];
      });
    });

    socket.on("join", (data) => {
      setSocketData((prevState) => {
        return { ...prevState, ...data };
      });
    });

    socket.on("newUserJoined", (data) => {
      // console.log(data);
      setSocketData((prevState) => {
        return { ...prevState, [data.userId]: data };
      });
    });

    socket.on("userLeft", (userIdOfUserLeft) => {
      console.log("userDisconnected", userIdOfUserLeft);
      setSocketData((prevState) => {
        delete prevState[userIdOfUserLeft];
        return { ...prevState };
      });
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
      socket.off("connect");
      socket.off("newUserJoined");
      socket.off("bidChange");
      socket.off("micStatus");
      socket.off("cameraStatus");
      socket.off("handRaiseStatus");
      socket.off("sendMessage");
      socket.off("leaveRoom");
      socket.off("disconnect");
      socket.off("join");
      socket.off("userLeft");
    };
  }, [encodedRoomId]);

  useEffect(() => {
    // Object.entries(socketData).forEach((elem) => {
    //   console.log(elem);
    // });
    console.log(socketData);
  }, [socketData]);
  // useEffect(() => {}, [socket]);

  function getTime() {
    // Create a Date object from the date string
    const date = new Date();

    // Extract hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format minutes to ensure two digits
    const formattedMinutes = minutes.toString().padStart(2, "0");

    // 24-hour format
    // const time24 = `${hours.toString().padStart(2, "0")}:${formattedMinutes}`;

    // 12-hour format
    const period = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12; // Convert 0 to 12 for midnight
    const time12 = `${hours12}:${formattedMinutes} ${period}`;
    return { time12 };
  }

  // Emit an event when the button is clicked
  const bidChange = (bidAmount, bidderNumber) => {
    socket.emit("bidChange", {
      roomId: decodedRoomId,
      userId: userId,
      userName: userName,
      bidAmount: bidAmount,
      bidderNumber: bidderNumber,
    });
  };

  const micStatus = (micStatus, stream) => {
    socket.emit("micStatus", {
      roomId: decodedRoomId,
      userId: userId,
      micStatus: micStatus, // false -> off & true -> on
      audioStream: stream,
    });
  };

  const handRaiseStatus = (handRaiseStatus) => {
    socket.emit("handRaiseStatus", {
      roomId: decodedRoomId,
      userId: userId,
      handRaiseStatus: handRaiseStatus, // false -> off & true -> on
    });
  };

  const cameraStatus = (cameraStatus, stream) => {
    socket.emit("cameraStatus", {
      roomId: decodedRoomId,
      userId: userId,
      cameraStatus: cameraStatus, // false -> off & true -> on
      videoStream: stream,
    });
  };

  const sendMessage = (message) => {
    socket.emit("sendMessage", {
      roomId: decodedRoomId,
      userId: userId,
      userName: userName,
      message: message,
      date_time: getTime(),
    });
  };

  const leaveRoom = () => {
    socket.emit(
      ("leaveRoom",
      {
        roomId: decodedRoomId,
        userId: userId,
      })
    );
    socket.disconnect();
    navigate("/");
  };

  // video and mic toggle functions:
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: !!audioStream,
      });
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        if (track.kind == "video") {
          videoRef.current.srcObject = stream;
          setVideoStream(stream);
        }
      });
    } catch (err) {
      console.error("Error accessing camera.", err);
    }
  };

  const stopCamera = () => {
    if (videoStream) {
      console.table(videoStream);
      videoStream.getTracks().forEach((track) => {
        console.table(track);
        if (track.kind == "video") {
          track.stop();
        }
        console.table(track);
      });
      console.table(videoStream);
      setVideoStream(null);
      videoRef.current.srcObject = null;
    }
  };

  const startMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: !!videoStream,
        audio: true,
      });
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        if (track.kind == "audio") {
          setAudioStream(stream);
        } else if (track.kind == "video") {
          videoRef.current.srcObject = stream;
          setVideoStream(stream);
        }
      });
    } catch (err) {
      console.error("Error accessing microphone.", err);
    }
  };

  const stopMic = () => {
    if (audioStream) {
      audioStream.getTracks().forEach((track) => {
        if (track.kind == "audio") {
          track.stop();
        }
      });
      setAudioStream(null);
    }
  };

  useEffect(() => {
    // Cleanup function to stop the media streams
    return () => {
      if (videoStream) {
        videoStream.getTracks().forEach((track) => track.stop());
      }
      if (audioStream) {
        audioStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const [maxBid, setMaxBid] = useState({ bidAmt: 1000, bidder: "Opening Bid" });
  return (
    <>
      <div
        className={
          "absolute bottom-32 right-10" +
          `${localStorage.getItem("host") ? "" : " hidden"}`
        }
      >
        <div className="relative">
          <div
            className={
              "hostPrevilages absolute right-20 bg-white rounded-xl overflow-hidden bottom-0 cursor-pointer w-48" +
              `${showHostPrevilages ? "" : " hidden"}`
            }
          >
            <div className="previlage flex items-center gap-2  p-3 hover:bg-gray-200">
              <BsMicMuteFill size="1.2rem" />
              <p>All Participants</p>
            </div>
            <div className="previlage flex items-center gap-2  p-3 hover:bg-gray-200">
              <IoVideocamOff size="1.2rem" />
              <p>All Participants</p>
            </div>
            <div className="previlage flex items-center gap-2  p-3 hover:bg-gray-200">
              <MdOutlineStopScreenShare size="1.2rem" />
              <p>All Participants</p>
            </div>
            <div className="previlage flex items-center gap-2  p-3 hover:bg-gray-200">
              <RiAuctionFill size="1.2rem" />
              <p>Sold</p>
            </div>
          </div>
          <div
            className="hostPrevilages w-14 aspect-square bg-white flex items-center justify-center rounded-full active:bg-gray-200"
            onClick={() => setShowHostPrevilages(!showHostPrevilages)}
          >
            <RiAuctionFill
              size="1.8rem"
              className="active:bg-white cursor-pointer"
            />
          </div>
        </div>
      </div>
      <MaxBidCont maxBid={maxBid.bidAmt} Bidder={maxBid.bidder} />
      <div className="flex flex-wrap gap-4 p-4 justify-center items-center min-h-dvh bg-[#202124] pt-20 pb-40">
        {Object.entries(socketData).map((elem) => {
          return (
            <MeetingGridItem
              ref={videoRef}
              key={elem[0]}
              joineeMicStatus={socketData[elem[0]]?.micStatus}
              joineeName={socketData[elem[0]]?.userName}
              joineeURL={socketData[elem[0]]?.videoStream}
              joineeCameraStatus={socketData[elem[0]]?.cameraStatus}
              joineeHandRaiseStatus={socketData[elem[0]]?.handRaiseStatus}
            />
          );
        })}
      </div>
      <MeetingFooter
        startCamera={startCamera}
        startMic={startMic}
        stopCamera={stopCamera}
        stopMic={stopMic}
        currentUserId={userId}
        messages={messages}
        bidderNumber={userId?.length}
        maxBid={maxBid}
        setMaxBid={setMaxBid}
        members={socketData}
        bidChange={bidChange}
        micStatus={micStatus}
        cameraStatus={cameraStatus}
        handRaiseStatus={handRaiseStatus}
        sendMessage={sendMessage}
        leaveRoom={leaveRoom}
      />
    </>
  );
}
