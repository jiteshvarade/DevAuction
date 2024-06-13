// lib imports
import React, { forwardRef, useEffect, useRef, useState } from "react";

//icon imports
import { BsFillMicMuteFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { IoHandRight } from "react-icons/io5";
import { IoMdMic, IoMdMicOff } from "react-icons/io";

const MeetingGridItem = React.memo(
  forwardRef((prop, ref) => {
    return (
      <div className="w-64 h-36 bg-[#3c4042] rounded-xl relative overflow-hidden object-cover flex justify-center items-center">
        {JSON.parse(prop.joineeCameraStatus) ? (
          <video
            ref={ref}
            src={prop.joineeURL}
            autoPlay
            loop
            muted
            height={"100px"}
            width={"100px"}
            className="bg-cover"
          />
        ) : (
          <div className="text-3xl bg-white text-black font-serif z-50 h-16 w-16 flex justify-center items-center rounded-full">
            {prop.joineeName[0].toUpperCase()}
          </div>
        )}
        <div
          className={`footer absolute bottom-0 p-2 flex items-center w-full justify-between pr-4 h-10`}
        >
          <div className={`flex items-center gap-1`}>
            {JSON.parse(prop.joineeMicStatus) ? (
              <IoMdMic size="2rem" className="p-2 rounded-full text-gray-400" />
            ) : (
              <IoMdMicOff size="2rem" className="p-2 bg-red-500 rounded-full" />
            )}
            <h3 className="text-white text mix-blend-difference">
              {prop.joineeName[0].toUpperCase() +
                prop.joineeName.slice(1, prop.joineeName.length)}
            </h3>
          </div>
          {JSON.parse(prop.joineeHandRaiseStatus) ? (
            <IoHandRight
              size="1.3rem"
              className="text-gray-400 animate-bounce"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  })
);

export default MeetingGridItem;
