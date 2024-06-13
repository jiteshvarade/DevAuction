//library imports
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

//icons imports
import { FaMicrophone } from "react-icons/fa";
import { BsFillMicMuteFill } from "react-icons/bs";
import { LuVideo, LuVideoOff } from "react-icons/lu";
import { MdClosedCaptionOff, MdClosedCaption } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoHandRightOutline, IoHandRight } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { ImPhoneHangUp } from "react-icons/im";
import { IoMdPeople } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import { PiChatCenteredDotsBold } from "react-icons/pi";
import { BsHeadsetVr } from "react-icons/bs";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCurrencyDollar } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

//components imports
import BidPaddle from "../Bid Paddle/BidPaddle"
import ShowMemBersModel from "../Show Members Model/ShowMembersModel"
import ChatModel from "../Show chat model/ChatModel"

const extractStatus = (statusString) => {
  const statusParts = statusString?.split(";").map((part) => part.trim());
  const micStatus =
    statusParts
      .find((part) => part.startsWith("userMicStatus="))
      ?.split("=")[1] === "true";
  const cameraStatus =
    statusParts
      .find((part) => part.startsWith("userCameraStatus="))
      ?.split("=")[1] === "true";

  return { micStatus, cameraStatus };
};

const MeetingFooter = React.memo(
  ({
    currentUserId,
    bidderNumber,
    maxBid,
    setMaxBid,
    members,
    bidChange,
    micStatus,
    cameraStatus,
    handRaiseStatus,
    sendMessage,
    leaveRoom,
    messages,
    startCamera,
    stopCamera,
    startMic,
    stopMic
  }) => {
    const [bidAmt, setBidAmt] = useState("");
    const [micToggle, setMicToggle] = useState(
      extractStatus(document.cookie).micStatus
    );
    const [videoToggle, setVideoToggle] = useState(
      extractStatus(document.cookie).cameraStatus
    );
    const [handToggle, setHandToggle] = useState(true);
    const [captionToggle, setCaptionToggle] = useState(true);
    const [showPaddle, setShowPaddle] = useState(false);
    const [showAllMembers, setShowAllMembers] = useState(false);
    const [showMessageSection, setShowMessageSection] = useState(false);
    const nameOfRoom = "Group Meeting";

    const handleVideoClick = useCallback(async () => {
      setVideoToggle(!videoToggle);
      videoToggle ? startCamera() : stopCamera();
    }, []); // Include videoStream in dependencies

    const handleMicClick = useCallback(async () => {
      setMicToggle(!micToggle);
      micToggle ? startMic() : stopMic();
    }, []); // Include audioStream in dependencies

    function modifyBid(bidAmt) {
      setMaxBid((prevState) => {
        return { ...prevState, bidAmt: bidAmt, bidder: "Nitish" };
      });
      setShowPaddle(true);
      setTimeout(() => {
        setShowPaddle(false);
      }, 5000);
    }

    return (
      <>
        <div
          className={`paddleContainer fixed bottom-24 right-4 sm:right-10 z-50 h-fit ${
            showPaddle ? "block" : "hidden"
          }`}
        >
          <BidPaddle bid={bidAmt} bidderNumber={bidderNumber} />
        </div>
        <div className="fixed top-0 max-[390px]:flex hidden justify-between  w-full p-4 bg-[#3c4042] items-center">
          <GiHamburgerMenu size="1.5rem" color="white" />
          <div className="flex text-white items-center gap-1 text-xs">
            max bid: <BsCurrencyDollar size="1rem" />
            <span className="text-xl">{maxBid.bidAmt}</span>
          </div>
        </div>
        <IconContext.Provider
          value={{
            size: "2.5rem",
            color: "white",
            className:
              "p-2 cursor-pointer active:bg-gray-600 rounded-full w-fit",
          }}
        >
          <div className="fixed bottom-0 flex justify-center sm:justify-between items-center w-full p-4 bg-[#3c4042] select-none max-w-full">
            <div className="left text-xl text-white hidden sm:block">
              {nameOfRoom}
            </div>
            <div className="center flex items-center gap-2 max-w-full flex-wrap justify-center">
              {micToggle ? (
                <FaMicrophone size="2.3rem" onClick={handleMicClick} />
              ) : (
                <BsFillMicMuteFill size="2.3rem" onClick={handleMicClick} />
              )}
              {videoToggle ? (
                <LuVideo onClick={handleVideoClick} />
              ) : (
                <LuVideoOff onClick={handleVideoClick} />
              )}
              {captionToggle ? (
                <MdClosedCaptionOff
                  onClick={() => setCaptionToggle(!captionToggle)}
                  className="sm:block hidden"
                />
              ) : (
                <MdClosedCaption
                  onClick={() => setCaptionToggle(!captionToggle)}
                  className="sm:block hidden"
                />
              )}
              {handToggle ? (
                <IoHandRightOutline
                  className="min-[450px]:block hidden"
                  onClick={() => {
                    setHandToggle(!handToggle);
                    handRaiseStatus(handToggle);
                  }}
                />
              ) : (
                <IoHandRight
                  className="min-[450px]:block hidden"
                  onClick={() => {
                    setHandToggle(!handToggle);
                    handRaiseStatus(handToggle);
                  }}
                />
              )}
              <label
                htmlFor="bidAmount"
                className="flex items-center border-2 border-gray-400 rounded-xl w-28 px-2 focus-within:border-blue-500"
              >
                <FaHandHoldingDollar />
                <input
                  type="number"
                  id="bidAmount"
                  className="outline-none border-none w-full bg-transparent text-white"
                  placeholder="Bid Amt"
                  value={bidAmt}
                  onChange={(e) => setBidAmt(e.target.value)}
                />
              </label>
              <button
                className={`${
                  bidAmt - maxBid.bidAmt <= 0
                    ? "bg-white text-gray-400"
                    : "text-white bg-blue-500"
                } p-2 px-4 rounded-xl`}
                disabled={bidAmt - maxBid.bidAmt <= 0 ? true : false}
                title={
                  bidAmt - maxBid.bidAmt <= 0
                    ? "Bid amount cannot be less than or equal to max bid"
                    : "Offer em!"
                }
                onClick={() => {
                  modifyBid(bidAmt);
                  bidChange(bidAmt, bidderNumber);
                }}
              >
                Bid
              </button>
              <SlOptionsVertical
                size="2.2rem"
                className="min-[390px]:block hidden"
              />
              <ImPhoneHangUp
                className="w-14 h-10 bg-red-600"
                onClick={leaveRoom}
              />
            </div>
            <div className="right hidden lg:flex items-center gap-2">
              <RiErrorWarningLine />
              <div className="relative">
                <ShowMemBersModel
                  key={"fsdljfjsdfijsodifjsod"}
                  members={members}
                  className={
                    "absolute bottom-20 right-0 " +
                    `${showAllMembers ? "flex" : "hidden"}`
                  }
                />
                <div
                  className={
                    "absolute leading-none flex items-center justify-center rounded-full p-1 bottom-6 right-24 " +
                    `${showAllMembers ? "block" : " hidden"}`
                  }
                >
                  <RxCross2
                    size="2rem"
                    className="active:bg-gray-300 bg-gray-200"
                    color="gray"
                    onClick={() => {
                      setShowAllMembers(!showAllMembers);
                      setShowMessageSection(false);
                    }}
                  />
                </div>
                <IoMdPeople
                  onClick={() => {
                    setShowAllMembers(!showAllMembers);
                    setShowMessageSection(false);
                  }}
                />
                <span className="text-xs rounded-full z-30 absolute top-0 right-0 text-white bg-red-500 w-4 h-4 text-center">
                  {Object.entries(members).length}
                </span>
              </div>
              <div className="relative">
                <ChatModel
                  key={"jfsldskdfs"}
                  messages={messages}
                  className={`${showMessageSection ? "flex" : "hidden"}`}
                  deliverMessage={sendMessage}
                  currentUserId={currentUserId}
                />
                <PiChatCenteredDotsBold
                  onClick={() => {
                    setShowMessageSection(!showMessageSection);
                    setShowAllMembers(false);
                  }}
                />
              </div>
              <BsHeadsetVr />
            </div>
          </div>
        </IconContext.Provider>
      </>
    );
  }
);

export default MeetingFooter;
