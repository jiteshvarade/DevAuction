import React from "react";
import { IoMenu } from "react-icons/io5";
import { RiNotificationLine } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function ChatHeader({showMenu, setShowMenu, userName, userImg}) {
  return (
    <div className="header flex items-center text-2xl gap-2  p-2 px-2 md:mx-12 justify-between">
      <IoMenu
        size="1.5rem"
        className="absolute top-[13px] left-3 md:hidden cursor-pointer z-20"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="left md:pl-0 pl-8">
        <div className="userName text-[20px] font-bold">Hi, {userName || "Someone"}</div>
        <div className="greeting text-[14px] font-semibold sm:block hidden">
          Welcome back its good to have you here
        </div>
      </div>
      <div className="right flex items-center gap-2">
        {/* <div className="notifications aspect-square md:w-12 w-8  bg-white rounded-full flex items-center justify-center">
          <RiNotificationLine color="#7E7E7E" />
        </div> */}
        <div className="profilePic aspect-square  w-8  bg-white rounded-full overflow-hidden">
          <Link to="/homepage/profile">
          <img src={userImg || ""} alt={userImg ? userName + "'s profile pic" : ""} className="w-full h-full object-cover"  />
          </Link>
        </div>
      </div>
    </div>
  );
}
