// import React, { useEffect, useLayoutEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useSocket } from "../../context/SocketProvider";
// import GradientBtn from "../../Components/Buttons/GradientBtn";

// const RoomPage = () => {
//   const navigate = useNavigate();
//   const socket = useSocket();
//   const { roomID } = useParams();
//   const { user } = useAuth0();
//   const [amount, setAmount] = useState("");
//   const [bidData, setBidData] = useState({ data: { Amt: 0 } });
//   const [showAnimation, setShowAnimation] = useState(false);
//   // const [currentUserData, setCurrentUserData] = useState(null);

//   function formatNumber(num) {
//     if (num >= 1000 && num < 1000000) {
//       return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
//     } else if (num >= 1000000 && num < 1000000000) {
//       return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
//     } else if (num >= 1000000000) {
//       return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
//     } else {
//       return num.toString();
//     }
//   }

//   useEffect(() => {
//     socket.emit("room:connect", {
//       roomID,
//     });
//   }, [socket]);

//   const myMeeting = async (element) => {
//     const appID = 2052033427;
//     const serverSecret = "07ba39bc58f578530c31f7656f5de08f";
//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//       appID,
//       serverSecret,
//       roomID,
//       Date.now().toString(),
//       user.given_name
//     );
//     // Create instance object from Kit Token.
//     const zp = ZegoUIKitPrebuilt.create(kitToken);
//     // start the call
//     zp.joinRoom({
//       container: element,
//       scenario: {
//         mode: ZegoUIKitPrebuilt.VideoConference,
//       },
//     });

//     // zp.on('leaveRoom', () => {
//     //   // Redirect users to a specific endpoint when the meeting ends
//     //   navigate("/homepage");
//     // });
//   };

//   useEffect(() => {
//     myMeeting(videoContainerRef.current);
//   }, [videoContainerRef]);
//   };

//   // function closeRoom(){
//   //   socket.emit("roomClose", {
//   //     roomID
//   //   })
//   // }

//   async function getHost(){
//     try{
//       const res = await fetch("https://devauction.onrender.com/rooms/getHost", {
//         method:"POST",
//         body: JSON.stringify({
//           roomID
//         }),
//         headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//       });
//       const resData = await res.text();
//       console.log(resData);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useLayoutEffect(() => {
//     getHost();
//   }, [])

//   useEffect(() => {
//     socket.on("on:bid", (data) => {
//       console.log("kuchh to aaya");
//       console.log(data);
//       setBidData(data);
//       setShowAnimation(true);
//       setTimeout(() => {
//         setShowAnimation(false);
//       }, 1000);
//     });
//     return () => {
//       socket.off("on:bid", (data) => {});
//     };
//   }, [roomID, user]);

//   async function SendBidToBackEnd() {
//     try {
//       const res = await fetch("https://devauction.onrender.com/rooms/bids", {
//         method: "POST",
//         body: JSON.stringify({
//           roomId: roomID,
//           email: user.email,
//           bid: amount,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       });
//       const kuchhToAya = await res.text();
//       console.log(kuchhToAya);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   function SendBid() {
//     if (bidData.data.Amt - amount > 0) {
//       alert("Are thoda sharam karo");
//       return;
//     }
//     // console.log(localStorage.getItem("userCredits") - amount);
//     socket.emit("on:bid", {
//       email: user.email,
//       roomID,
//       Amt: amount,
//       name: user.given_name,
//       img: user.picture,
//     });
//     SendBidToBackEnd();
//   }

//   return (
//     <div
//       className="room-page"
//       style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
//     >
//       <div
//         ref={myMeeting}
//         className="video-container relative"
//         style={{ height: "100%", width: "100%" }}
//       />
//       <div className="absolute z-[54545545] bottom-20 left-4 p-4 rounded-xl0 flex gap-4 rounded-2xl items-center">
//         <input
//           type="number"
//           className="rounded-xl p-2 outline-none bg-transparent text-white"
//           placeholder="Bid amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           style={{
//             backgroundColor: "rgba(7, 38, 67, 1)",
//             boxShadow: "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
//           }}
//         />
//         <GradientBtn
//           onClick={SendBid}
//           className={"text-white"}
//           placeholder={"Bid"}
//         />
//         <div
//           className={`absolute bottom-24 left-1/2 -translate-x-1/2 z-[545454545] bg-white w-40 rounded-xl aspect-square text-white min-w-fit flex flex-col items-center justify-center gap-2 ${
//             showAnimation ? "wiggleAnimation" : ""
//           }`}
//           style={{
//             backgroundColor: "rgba(7, 38, 67, 1)",
//             boxShadow: "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
//           }}
//         >
//           <img
//             src={bidData?.data.img || user?.picture}
//             className="w-10 aspect-square rounded-full"
//             alt={bidData ? bidData?.data.name + "'s img" : ""}
//           />
//           <div className="bidAmt text-white text-3xl font-bold">
//             &#8377; {bidData ? formatNumber(bidData?.data.Amt) : 0}
//           </div>
//           <div className="name text-xs text-gray-400">
//             {bidData ? bidData?.data.name : "Owner"}
//           </div>
//           <button className="absolute right-10 bottom-20 bg-red-500  text-2xl rounded-xl font-bold text-white">End Auction</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomPage;

import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useAuth0 } from "@auth0/auth0-react";
import { useSocket } from "../../context/SocketProvider";
import GradientBtn from "../../Components/Buttons/GradientBtn";

const RoomPage = () => {
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();
  const socket = useSocket();
  const { roomID } = useParams();
  const { user } = useAuth0();
  const [amount, setAmount] = useState("");
  const [bidData, setBidData] = useState({ data: { Amt: 0 } });
  const [showAnimation, setShowAnimation] = useState(false);
  const videoContainerRef = useRef(null); // Add useRef for the video container
  const [host, setHost] = useState(false);

  setTimeout(() => {
    setShowContent(true);
  }, 5000);

  function formatNumber(num) {
    if (num >= 1000 && num < 1000000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    } else if (num >= 1000000 && num < 1000000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    } else {
      return num.toString();
    }
  }

  useEffect(() => {
    socket.emit("room:connect", {
      roomID,
    });
  }, [socket]);

  const myMeeting = async (element) => {
    const appID = 2052033427;
    const serverSecret = "07ba39bc58f578530c31f7656f5de08f";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      user.given_name
    );
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });

    // zp.on('leaveRoom', () => {
    //   // Redirect users to a specific endpoint when the meeting ends
    //   navigate("/homepage");
    // });
  };

  useEffect(() => {
    if (videoContainerRef.current) {
      myMeeting(videoContainerRef.current);
    }
  }, [videoContainerRef]);

  function closeRoom() {
    socket.emit("roomClose", {
      roomID,
    });
  }

  async function getHost() {
    // let resData;
    try {
      const res = await fetch("https://devauction.onrender.com/rooms/getHost", {
        method: "POST",
        body: JSON.stringify({
          roomID,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const resData = await res.json();
      console.log(resData);
      if (resData.Owner == user.email) {
        setHost(true);
      }
    } catch (error) {
      console.log(error);
    }
    // return resData;
  }

  useEffect(() => {
    getHost();
  }, [user]);

  useEffect(() => {
    socket.on("on:bid", (data) => {
      console.log("kuchh to aaya");
      console.log(data);
      setBidData(data);
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
      }, 1000);
    });
    socket.on("roomClose", (data) => {
      console.log(data);
      fetch("https://devauction.onrender.com/rooms/sendMailToBider", {
        method: "POST",
        body: JSON.stringify({ roomID }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      alert("Thankyou for joining");
      navigate("/homepage");
    });
    return () => {
      socket.off("on:bid", (data) => {});
    };
  }, [roomID, user]);

  async function SendBidToBackEnd() {
    try {
      const res = await fetch("https://devauction.onrender.com/rooms/bids", {
        method: "POST",
        body: JSON.stringify({
          roomId: roomID,
          email: user.email,
          bid: amount,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const kuchhToAya = await res.text();
      console.log(kuchhToAya);
    } catch (error) {
      console.log(error);
    }
  }

  function SendBid() {
    if (bidData.data.Amt - amount > 0) {
      alert("Are thoda sharam karo");
      return;
    }
    // console.log(localStorage.getItem("userCredits") - amount);
    socket.emit("on:bid", {
      email: user.email,
      roomID,
      Amt: amount,
      name: user.given_name,
      img: user.picture,
    });
    SendBidToBackEnd();
  }

  return (
    <div
      className="room-page"
      style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
    >
      <div
        ref={videoContainerRef}
        className="video-container relative"
        style={{ height: "100%", width: "100%" }}
      />
      {showContent && (
        <div className="absolute z-[54545545] bottom-20 left-4 p-4 rounded-xl0 flex gap-4 rounded-2xl items-center">
          <input
            type="number"
            className="rounded-xl p-2 outline-none bg-transparent text-white"
            placeholder="Bid amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              backgroundColor: "rgba(7, 38, 67, 1)",
              boxShadow: "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
            }}
          />
          <GradientBtn
            onClick={SendBid}
            className={"text-white"}
            placeholder={"Bid"}
          />
          <div
            className={`absolute bottom-24 left-1/2 -translate-x-1/2 z-[545454545] bg-white w-40 rounded-xl aspect-square text-white min-w-fit flex flex-col items-center justify-center gap-2 ${
              showAnimation ? "wiggleAnimation" : ""
            }`}
            style={{
              backgroundColor: "rgba(7, 38, 67, 1)",
              boxShadow: "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
            }}
          >
            <img
              src={bidData?.data.img || user?.picture}
              className="w-10 aspect-square rounded-full"
              alt={bidData ? bidData?.data.name + "'s img" : ""}
            />
            <div className="bidAmt text-white text-3xl font-bold">
              &#8377; {bidData ? formatNumber(bidData?.data.Amt) : 0}
            </div>
            <div className="name text-xs text-gray-400">
              {bidData ? bidData?.data.name : "Owner"}
            </div>
          </div>
          <button
            className={`absolute p-2  left-10 -bottom-16 bg-red-500  text-2xl rounded-xl font-bold text-white ${
              host ? "" : "hidden"
            }`}
            onClick={closeRoom}
          >
            End Auction
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomPage;
