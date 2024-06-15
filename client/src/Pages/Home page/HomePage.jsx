import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import LogoutButton from "../../Components/Gradient Btn/LogoutButton";
import { MdDashboard } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { useMenuContext } from "../../context/MenuContextProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { useSocket } from "../../context/SocketProvider";
import { GrGallery } from "react-icons/gr";

export default function HomePage() {
  const { user } = useAuth0();
  const socket = useSocket();
  useEffect(() => { 
    if (user) {
      socket.emit("user:connected", {
        email: user.email,
      });
    }
  }, [user]);
  const { showMenu, setShowMenu } = useMenuContext();
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
          <div className="links flex flex-col gap-4">
            <Link to={""} className="flex gap-2 items-center p-2">
              <MdDashboard /> Dashboard
            </Link> 
            <Link to={"profile"} className="flex gap-2 items-center p-2">
              <IoPersonCircle />
              Profile
            </Link>
            <Link to={"chats"} className="flex gap-2 items-center p-2">
              <IoChatbubbleEllipsesSharp />
              Chats
            </Link>
            <Link to={"gallery"} className="flex gap-2 items-center p-2">
              <GrGallery />
              Gallery
            </Link>
          </div>
          <LogoutButton />
        </div>
      </div>
      <div className="right overflow-auto w-full">
        <Outlet />
      </div>
    </div>
  );
}
