import React, { useState } from "react";
import logo from "../../assets/AuctionroomImages/WonderKids Landing Page Exploration 1 (1).png";
import eye from "../../assets/AuctionroomImages/mdi_eye.png";
import time from "../../assets/AuctionroomImages/ion_time.png";
import "./Auctionroom.css";
import GradientBtn from "../Buttons/GradientBtn";
import { useNavigate } from "react-router-dom";
import { BsFillCalendarDateFill } from "react-icons/bs";

const Card = ({ roomId, date, title, imgSrc, status, bidCount }) => {
  const navigate = useNavigate();
  const [live, setlive] = useState(true);

  return (
    <div className="border relative w-[350px] rounded-xl bg-[#bec0dd1f] border-[#223534] text-white p-2 flex flex-col gap-2 justify-center items-center hover:scale-[1.02] transition ease-in-out hover:shadow-lg shadow-white ">
      {live && (
        <span className="absolute right-2 top-2 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
      <div className=" text-left w-full text-[16px] font-bold">
        {title || "Mehenga project"}
      </div>
      <div className="h-full">
        <img className="rounded-lg w-full h-full object-cover" alt="" src={imgSrc || logo} />
      </div>
      <div className="flex w-full justify-between px-2">
        <div className="flex gap-2 items-center">
          {/* <img alt="" src={eye} /> */}
          <BsFillCalendarDateFill size="1.1rem"  />
          <span className="">{date || "30-02-2060"}</span>
        </div>
        <div className="flex gap-2">
          {/* <img alt="" src={time} /> */}
          <span>Bids: {bidCount || 0}</span>
        </div>
      </div>
      <div className="w-full hover:scale-[0.95] transition ease-in-out">
        <button
          className={`px-8 py-3 text-lg font-semibold rounded-full border w-full   ${status ? "bg-red-500 text-white" : "text-[#11111] bg-gradient-to-b from-[#18203E] to-[#172748]"}`}
          onClick={() => {
            console.log(roomId)
            navigate(`/room/${roomId}`);
          }}
          disabled={status}
        >
          {status ? "Closed!" :  "Enter"}
        </button>
      </div>
    </div>
  );
};

export default Card;
