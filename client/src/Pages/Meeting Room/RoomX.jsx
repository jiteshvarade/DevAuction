import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useAuth0 } from "@auth0/auth0-react";
import { useSocket } from "../../context/SocketProvider";
import GradientBtn from "../../Components/Buttons/GradientBtn";
import { IoIosArrowDown } from "react-icons/io";
import { FaCoins } from "react-icons/fa";
import CustomToast from "../../Components/Custom Toast/CustomToast";
import SERVER_URL from "../../contants.mjs";

const RoomPage = () => {
  // const zpInstance = useRef(null);
  const [showBidSection, setShowBidSection] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [userCreditsLeft, setUserCreditsLeft] = useState(0);
  const navigate = useNavigate();
  const socket = useSocket();
  const { roomID } = useParams();
  const { user } = useAuth0();
  const [amount, setAmount] = useState("");
  const [bidData, setBidData] = useState({ data: { Amt: 0 } });
  const [showAnimation, setShowAnimation] = useState(false);
  const videoContainerRef = useRef(null); // Add useRef for the video container
  const [host, setHost] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastDetails, setToastDetails] = useState({});
  const [zp, setZp] = useState(null); //related to zegocloud

  setTimeout(() => {
    setShowContent(true);
  }, 5000);

  function displayToast(msg, type) {
    setToastDetails((PrevState) => {
      return { msg, type };
    });
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }

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

  function updateZPState(zp){
    setZp(zp);
  }

  const myMeeting = async (element) => {
    const appID = 303623338;
    const serverSecret = "6277d3dabba923e6fc955d6702ff2ad0";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      user.given_name
    );
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // setZp(zp);
    updateZPState(zp);
    // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      onJoinRoom: () => {
        // console.log("kuchh to mila: ", e);
        console.log("join ho gye hai");
      },
      onLeaveRoom: () => {
        console.log("main ja raha hu");
        navigate("/homepage/dashboard");
        zp.destroy();
        console.log("destory kr diya hai");
      },
    });
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
    console.log(user.email);
    // let resData;
    try {
      const res = await fetch(`${SERVER_URL}/rooms/getHost`, {
        method: "POST",
        body: JSON.stringify({
          roomID,
          email: user.email,
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
      setUserCreditsLeft(resData.Credits/100);
    } catch (error) {
      console.log(error);
    }
    // return resData;
  }

  async function getLatestBidAmount() {
    try {
      const res = await fetch(
        `${SERVER_URL}/rooms/getLatestBid`,
        {
          method: "POST",
          body: JSON.stringify({ roomID }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const resData = await res.json();
      console.log(resData);
      setBidData(() => {
        return {
          data: {
            Amt: resData.highestBid,
            img: resData.picture,
            name: resData.name,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getHost();
    getLatestBidAmount();
  }, [user]);

  function speak(text) {
    // const text = document.getElementById('text').value;
    const speechSynthesisUtterance = new SpeechSynthesisUtterance(text);

    // Optional: set voice, pitch, rate
    speechSynthesisUtterance.voice = speechSynthesis.getVoices()[0];
    speechSynthesisUtterance.pitch = 1; // 0 to 2
    speechSynthesisUtterance.rate = 1; // 0.1 to 10

    // Speak the text
    window.speechSynthesis.speak(speechSynthesisUtterance);
  }

  useEffect(() => {
    socket.on("on:bid", (data) => {
      console.log("kuchh to aaya");
      console.log(data);
      setBidData(data);
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
      }, 1000);
      speak(`${data.data.name} has bid of ${data.data.Amt} Rupees`);
    });
    socket.on("roomClose", (data) => {
      console.log(data);
      fetch(`${SERVER_URL}/rooms/sendMailToBider`, {
        method: "POST",
        body: JSON.stringify({ roomID }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      displayToast("Thankyou for joining", "green");
      // console.log(zp);
      // navigate("/homepage/dashboard");
      navigate('/homepage/dashboard');
      if (videoContainerRef.current) {
        videoContainerRef.current.leaveRoom();
        ZegoUIKitPrebuilt.destroy();
      }
      // setTimeout(() => {
      // }, 5000);
    });
    return () => {
      socket.off("on:bid", (data) => {});
      socket.off("roomClose", (data) => {});
    };
  }, [roomID, user]);

  async function SendBidToBackEnd() {
    try {
      const res = await fetch(`${SERVER_URL}/rooms/bids`, {
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
    if (bidData.data.Amt - amount >= 0) {
      speak("Your bid should be higher than previous bid!");
      displayToast("Are thoda sharam karo (Bid amount should be greater than previous bid placed!)", "red");
      return;
    }

    if (amount - userCreditsLeft > 0) {
      speak("Your bid amount can't be more than your credits!");
      displayToast("Your bid amount can't be more than your credits!", "red");
      return;
    }

    setAmount("");
    setShowBidSection(false);
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

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and remove any non-numeric characters
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    setAmount(sanitizedValue);
  };

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
      <CustomToast
        className={showToast ? "right-10 opacity-100" : "-right-96 opacity-0"}
        msg={toastDetails.msg}
        type={toastDetails.type}
        setShowToast={setShowToast}
      />
      {showContent && (
        <div className="absolute z-[54545545] top-0  p-4 rounded-2xl flex gap-4 flex-wrap">
          <div
            className={`left shadow-2xl h-fit bg-white  rounded-xl transition-all duration-1000 relative ${
              showBidSection ? "flex flex-col gap-4 items-center " : ""
            }`}
            style={{ padding: "0.5rem 1.5rem 0.5rem 1.5rem" }}
          >
            <IoIosArrowDown
              className={`absolute right-4 top-5 transition-all duration-1000 cursor-pointer active:scale-95  ${
                showBidSection ? "rotate-180" : ""
              }`}
              size="1.5rem"
              onClick={() => setShowBidSection(!showBidSection)}
            />
            <div
              className={`z-[545454545] w-40 rounded-xl min-w-fit flex  items-center justify-center gap-2 bg-white transition-all duration-500  ${
                showAnimation ? "wiggleAnimation" : ""
              } ${showBidSection ? "flex-col  text-white" : "text-black"}`}
              style={
                showBidSection
                  ? {
                      backgroundColor: "rgba(7, 38, 67, 1)",
                      boxShadow:
                        "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
                      paddingTop: "1rem",
                    }
                  : {}
              }
            >
              <img
                src={bidData?.data.img || user?.picture}
                className="w-10 aspect-square rounded-full"
                alt={bidData ? bidData?.data.name + "'s img" : ""}
              />
              <div className="bidAmt text-3xl font-bold min-w-fit">
                &#8377; {bidData ? formatNumber(bidData?.data.Amt) : 0}
              </div>
              <div
                className={`name text-xs pb-4 text-gray-400 transition-all duration-1000 ${
                  showBidSection ? "" : "hidden"
                }`}
              >
                {bidData ? bidData?.data.name : "Owner"}
              </div>
            </div>
            <input
              type="number"
              className={`rounded-xl p-2 outline-none bg-transparent text-white ${
                showBidSection ? "" : "hidden"
              }`}
              placeholder="Bid amount"
              value={amount}
              onChange={handleInputChange}
              style={{
                backgroundColor: "rgba(7, 38, 67, 1)",
                boxShadow: "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
              }}
            />
            <GradientBtn
              onClick={SendBid}
              className={`text-white ${showBidSection ? "" : "hidden"}`}
              placeholder={"Bid"}
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center h-fit">
            <button
              className={`right bg-red-500  text-2xl rounded-xl font-bold text-white p-4 h-fit  ${
                host ? "" : "hidden"
              }`}
              onClick={closeRoom}
            >
              End Auction
            </button>
            <div
              className={`creditsLeft bg-white rounded-xl p-4 flex items-center gap-2 ${
                Number(userCreditsLeft) >= 0 ? "text-black" : "text-red-500"
              }`}
              title="Your credits left"
            >
              <FaCoins size="1.2rem" />
              {userCreditsLeft}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomPage;
