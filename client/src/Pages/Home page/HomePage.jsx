import React, { useState } from "react";
import Profile from "../Profile page/Profile";
import { RxCross2 } from "react-icons/rx";
import GradientBtn from "../../Components/Buttons/GradientBtn";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Chat from "../Chat page/Chat";

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="profileParent flex h-dvh overflow-hidden w-full text-white bg-[#05081B]">
      <div
        className={
          "sideNav p-4 overflow-hidden bg-[#05081B]  w-64 max-w-[90vw]  md:static absolute h-full z-30 transition-all duration-500 " +
          ` ${showMenu ? "left-0" : "-left-64"}`
        }
        style={{ borderRight: "1px solid rgba(255, 255, 255, 0.28)" }}
      >
        <div className="header flex items-center justify-between">
          <div className="logo text-xl">DEVAUCTION</div>
          <RxCross2
            size="1.5rem"
            className="ml-auto md:hidden"
            onClick={() => setShowMenu(false)}
          />
        </div>
        <div className="navLinks py-4 h-full flex flex-col gap-2 justify-between">
          <div className="links"></div>
          <div className="logout flex items-center gap-1 mx-auto mb-5 cursor-pointer active:text-gray-400 select-none"><RiLogoutBoxRLine /> Logout</div>
        </div>
      </div>
      <div className="right overflow-auto w-full">
        {/* <Profile showMenu={showMenu} setShowMenu={setShowMenu} /> */}
        <Chat showMenu={showMenu} setShowMenu={setShowMenu}  />
      </div>
    </div>
  );
}
