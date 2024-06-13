import React from "react";
import { IoHandRight } from "react-icons/io5";
import { IoMdMic, IoMdMicOff } from "react-icons/io";

export default function ShowMemBersModel({ members, className }) {
  return (
    <div
      className={`parent w-60 max-h-96 overflow-auto ${className} flex-col bg-white rounded-xl overflow-hidden`}
    >
      {/* <div className="absolute text-xs w-4 h-4 text-gray-400 bg-gray-200 rounded-full flex items-center justify-center bottom-20 right-4">x</div> */}
      {Object.entries(members).map((elem) => {
        return (
          <div className={`items-center gap-1 flex w-full p-2 justify-between`} key={members[elem[0]].userId}>
            <div className="pic_name flex items-center gap-1">
              <div className="pic  h-8 w-8 rounded-full flex items-center justify-center bg-blue-500 text-white font-serif">
                {members[elem[0]].userName[0].toUpperCase()}
              </div>
              <div className="name">
                {members[elem[0]].userName[0].toUpperCase() +
                  members[elem[0]].userName.slice(
                    1,
                    members[elem[0]].userName.length
                  )}
              </div>
            </div>
            <div className="icons flex items-center gap-1">
              {JSON.parse(members[elem[0]].micStatus) ? (
                <IoMdMic
                  size="2rem"
                  color="black"
                  className="p-2 rounded-full bg-gray-200"
                />
              ) : (
                <IoMdMicOff
                  size="2rem"
                  className="p-2 bg-red-500 rounded-full"
                />
              )}
              {JSON.parse(members[elem[0]].handRaiseStatus) ? (
                <IoHandRight size="2rem" color="black" className="scale-150" />
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
