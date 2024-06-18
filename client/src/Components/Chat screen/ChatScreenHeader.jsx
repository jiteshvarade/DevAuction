import React, { useState } from "react";
import logo from "../../../public/Icons/Logo.png";
import { SlOptionsVertical } from "react-icons/sl";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {useLocation} from "react-router-dom"

export default function ChatScreenHeader({ imgSrc, userName, setShowChats }) {
  const location = useLocation();
  return (
    <>
      <div className="absolute h-20 w-full rounded-tr-xl rounded-tl-xl flex px-8 select-none flex-col top-0">
        <div className="mainContent flex items-center justify-between w-full flex-1">
          <div className="headerleft flex gap-4 items-center">
            <div className="profilePic sm:w-12 w-8 aspect-square overflow-hidden rounded-full">
              <img
                src={imgSrc || logo}
                alt={imgSrc ? userName + "'s Profile pic" : ""}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="nameAndStatus">
              <div className="userName sm:text-2xl text-lg font-bold">{userName || "Someone"}</div>
              {/* <div className="status text-xs font-thin">
                Online.Last seen 7:05 PM
              </div> */}
            </div>
          </div>
          <div className="right flex gap-4 items-center">
            {/* <SlOptionsVertical /> */}
            <RxCross2 size="1.5rem" className={`${location.pathname == "/homepage/chats" || window.innerWidth < 1024 ? "opacity-0" : "opacity-100"}`} onClick={() => setShowChats(false)}  />
          </div>
        </div>
        <hr
          style={{ borderTop: "0.7px solid rgba(180, 171, 171, 0.66)" }}
        />
      </div>
    </>
  );
}
