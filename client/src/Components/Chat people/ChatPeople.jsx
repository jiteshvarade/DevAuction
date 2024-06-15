import React from "react";
import { CiSearch } from "react-icons/ci";
import ChatMateStrip from "./ChatMateStrip";

export default function ChatPeople({ recentChatUsers, setSelectedUser, showChats, setShowChats }) {
  return (
    <div className={`chatLeft lg:w-1/3 mx-auto px-10 max-[420px]:p-4 md:py-7 flex-col gap-4 w-full flex-1 min-[420px]:min-w-[410px] max-w-full ${window.innerWidth < 1024 && showChats ? "hidden max-h-screen" : "flex max-h-screen"}`}>
      <div
        className="top h-14 w-full rounded-xl relative"
        style={{ backgroundColor: "rgba(12, 163, 231, 0.14)" }}
      >
        <CiSearch
          size="1.7rem"
          className="absolute top-1/2 -translate-y-1/2 w-fit left-4"
          style={{ strokeWidth: "1.5px" }}
        />
        <input
          type="text"
          placeholder="Search"
          className="h-14 w-full z-0 rounded-xl pl-14 bg-inherit outline-none text-sm"
          id="search"
        />
      </div>
      <div
        className="friends flex-1 p-6 rounded-xl overflow-auto"
        style={{
          backgroundColor: "rgba(7, 37, 66, 0.4)",
          boxShadow: "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
        }}
      >
        <div className="body h-full">
          <div className="header text-xl font-bold">People</div>
          {recentChatUsers?.map((elem) => {
            return <ChatMateStrip key={btoa(elem.email)}  imgSrc={elem.image} userName={elem.name} onClick={() => {setSelectedUser(elem); setShowChats(true)}} />
          })}
        </div>
      </div>
    </div>
  );
}
