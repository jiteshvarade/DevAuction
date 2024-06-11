import React from "react";
import logo from "../../../public/vite.svg";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

export default function ChatMateStrip({ imgSrc, userName, onClick }) {
  return (
    <div
      className="chatStrip h-16 flex items-center gap-5 cursor-pointer hover:bg-[#072643]"
      style={{ borderBottom: "1px solid rgba(180, 171, 171, 0.66)" }}
      onClick={onClick}
    >
      <div className="profilePic w-9 aspect-square rounded-full overflow-hidden">
        <img
          src={imgSrc || logo}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="stripDetails flex justify-between flex-1">
        <div className="nameAndLastMsg">
          <div className="name text-sm font-bold">{userName || "No name"}</div>
          <div className="latestMsg text-xs font-thin">April fool's day</div>
        </div>
        <div className="timeAndStatus text-right">
          <div className="time text-xs">Today, 9:05 AM</div>
          <div className="status mt-1 mx-1">
            <IoCheckmarkDoneSharp className="ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
