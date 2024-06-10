import React from "react";
import logo from "../../../public/Icons/Logo.png";
import { SlOptionsVertical } from "react-icons/sl";

export default function ChatScreenHeader({ imgSrc }) {
  return (
    <>
      <div className="absolute h-20 w-full rounded-tr-xl rounded-tl-xl flex px-8 select-none flex-col top-0">
        <div className="mainContent flex items-center justify-between w-full flex-1">
          <div className="headerleft flex gap-4 items-center">
            <div className="profilePic w-12 aspect-square overflow-hidden">
              <img
                src={imgSrc || logo}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="nameAndStatus">
              <div className="userName text-2xl font-bold">Anil</div>
              <div className="status text-xs font-thin">
                Online.Last seen 7:05 PM
              </div>
            </div>
          </div>
          <div className="right">
            <SlOptionsVertical />
          </div>
        </div>
        <hr
          style={{ borderTop: "0.7px solid rgba(180, 171, 171, 0.66)" }}
        />
      </div>
    </>
  );
}
