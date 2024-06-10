import React, { useCallback, useState } from "react";
import ChatScreenHeader from "./ChatScreenHeader";
import ChatScreenFooter from "./ChatScreenFooter";
import ChatBtn from "./ChatBtn";

export default function ChatScreen() {
  const messages = [
    {
      msg: "Hey, how are you?",
      date: "06/08/2024",
      time: "10:00 AM",
      sender: "from",
    },
    {
      msg: "I'm good, thanks! How about you?",
      date: "06/08/2024",
      time: "10:02 AM",
      sender: "to",
    },
    {
      msg: "I'm doing well, just busy with work.",
      date: "06/08/2024",
      time: "10:05 AM",
      sender: "from",
    },
    {
      msg: "I understand. What project are you working on?",
      date: "06/08/2024",
      time: "10:07 AM",
      sender: "to",
    },
    {
      msg: "It's a new web development project.",
      date: "06/08/2024",
      time: "10:10 AM",
      sender: "from",
    },
    {
      msg: "That sounds interesting! Need any help?",
      date: "06/08/2024",
      time: "10:12 AM",
      sender: "to",
    },
    {
      msg: "Thanks! I might take you up on that offer.",
      date: "06/08/2024",
      time: "10:15 AM",
      sender: "from",
    },
    {
      msg: "Anytime. Just let me know.",
      date: "06/08/2024",
      time: "10:17 AM",
      sender: "to",
    },
    {
      msg: "Will do. How's your project coming along?",
      date: "06/08/2024",
      time: "10:20 AM",
      sender: "from",
    },
    {
      msg: "It's going well. Just a few bugs to fix.",
      date: "06/08/2024",
      time: "10:22 AM",
      sender: "to",
    },
    {
      msg: "Bugs are always a pain.",
      date: "06/08/2024",
      time: "10:25 AM",
      sender: "from",
    },
    {
      msg: "Yes, but I'll manage. Any plans for the weekend?",
      date: "06/08/2024",
      time: "10:27 AM",
      sender: "to",
    },
    {
      msg: "Not really, just relaxing at home.",
      date: "06/08/2024",
      time: "10:30 AM",
      sender: "from",
    },
    {
      msg: "Sounds like a good plan. Maybe we can catch up?",
      date: "06/08/2024",
      time: "10:32 AM",
      sender: "to",
    },
    {
      msg: "Sure, let's do that.",
      date: "06/08/2024",
      time: "10:35 AM",
      sender: "from",
    },
    {
      msg: "Great! I'll text you later.",
      date: "06/08/2024",
      time: "10:37 AM",
      sender: "to",
    },
    {
      msg: "Looking forward to it.",
      date: "06/08/2024",
      time: "10:40 AM",
      sender: "from",
    },
    {
      msg: "By the way, did you see the latest movie?",
      date: "06/08/2024",
      time: "10:42 AM",
      sender: "to",
    },
    {
      msg: "Not yet, planning to watch it this weekend.",
      date: "06/08/2024",
      time: "10:45 AM",
      sender: "from",
    },
    {
      msg: "I heard it's really good.",
      date: "06/08/2024",
      time: "10:47 AM",
      sender: "to",
    },
    {
      msg: "Yeah, can't wait to see it.",
      date: "06/08/2024",
      time: "10:50 AM",
      sender: "from",
    },
    {
      msg: "Let me know how it is!",
      date: "06/08/2024",
      time: "10:52 AM",
      sender: "to",
    },
    { msg: "Will do!", date: "07/08/2024", time: "10:55 AM", sender: "from" },
  ];

  function useDate(initialValue) {
    let state = initialValue;

    function getState() {
        return state;
    }

    function setState(newValue) {
        state = newValue;
    }

    return [getState, setState];
}
const [getDate, setDate] = useDate("");
  return (
    <div className="right lg:w-2/3 h-full w-full py-7 pr-6 absolute lg:static hidden lg:block">
      <div
        className="screen w-full rounded-xl h-full relative flex items-center pt-24 pb-20"
        style={{
          backgroundColor: "rgba(7, 38, 67, 0.4)",
          boxShadow: "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
        }}
      >
        <ChatScreenHeader />
        <ChatScreenFooter />
        <div className="msgs h-full my-auto overflow-auto p-2 px-6 w-full flex flex-col gap-2" key={"msgsContainer"}>
          {messages.map((elem, index) => {
            if (getDate() != elem.date || index == 0) {
              setDate(elem.date);
              return (
                <>
                  <div className="text-xs w-full text-center text-gray-400" key={elem.date}>{elem.date}</div>
                  <ChatBtn
                    sender={elem.sender}
                    key={"msg: " + index}
                    msg={elem.msg}
                    time={elem.time}
                  />
                </>
              );
            } else {
              return (
                <ChatBtn
                  sender={elem.sender}
                  key={"msg: " + index}
                  msg={elem.msg}
                  time={elem.time}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
