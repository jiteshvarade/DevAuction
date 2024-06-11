import React, { useCallback, useEffect, useState } from "react";
import ChatScreenHeader from "./ChatScreenHeader";
import ChatScreenFooter from "./ChatScreenFooter";
import ChatBtn from "./ChatBtn";

// export default function ChatScreen

const ChatScreen = React.memo(({ selectedUser, myEmail }) => {
  const [msgs, setMsgs] = useState([]);
  // console.log(selectedUser);
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

  const getMsgs = async () => {
    const res = await fetch("https://devauction.onrender.com/profile/chats", {
      method: "POST",
      body: JSON.stringify({
        me: myEmail,
        other: selectedUser?.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const userMsgs = await res.json();
    // console.log(userMsgs.myMessages);
    if (userMsgs) {
      setMsgs(userMsgs);
    }
  };

  useEffect(() => {
    getMsgs();
  }, [selectedUser]);

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

  function genrateMsgs() {
    let i = 0;
    let j = 0;
    const today = new Date()
    const yesterday = new Date(today)
    const items = [];
    const myMessages = msgs?.myMessages;
    const sendersMessages = msgs?.senderMessages;
    while (i < myMessages?.length && j < sendersMessages?.length) {
      if (myMessages[i].at < sendersMessages[j].at) {
        const date = new Date(myMessages[i].at);
        const localDate = date.toLocaleDateString();
        const localTime = date.toLocaleTimeString();
        if (getDate() !== localDate) {
          setDate(localDate);
          items.push(
            <>
              <div
                className="text-xs w-full text-center text-gray-400"
                key={localDate}
              >
                {localDate}
              </div>
              <ChatBtn
                msg={myMessages[i].mes}
                sender={"to"}
                time={localTime}
                key={myMessages[i].mes}
              />
            </>
          );
        } else {
          items.push(
            <ChatBtn
              msg={myMessages[i].mes}
              sender={"to"}
              time={localTime}
              key={myMessages[i].mes}
            />
          );
        }
        i++;
      } else {
        const date = new Date(sendersMessages[j].at);
        const localDate = date.toLocaleDateString();
        const localTime = date.toLocaleTimeString();
        if (getDate() !== localDate) {
          setDate(localDate);
          items.push(
            <>
              <div
                className="text-xs w-full text-center text-gray-400"
                key={localDate}
              >
                {localDate}
              </div>
              <ChatBtn
                msg={sendersMessages[j].mes}
                sender={"from"}
                time={localTime}
                key={sendersMessages[j].mes}
              />
            </>
          );
        } else {
          items.push(
            <ChatBtn
              msg={sendersMessages[j].mes}
              sender={"from"}
              time={localTime}
              key={sendersMessages[j].mes}
            />
          );
        }
        j++;
      }
    }

    while (i < myMessages?.length) {
      const date = new Date(myMessages[i].at);
      const localDate = date.toLocaleDateString();
      const localTime = date.toLocaleTimeString();
      if (getDate() !== localDate) {
        setDate(localDate);
        items.push(
          <>
            <div
              className="text-xs w-full text-center text-gray-400"
              key={localDate}
            >
              {localDate}
            </div>
            <ChatBtn
              msg={myMessages[i].mes}
              sender={"to"}
              time={localTime}
              key={myMessages[i].mes}
            />
          </>
        );
      } else {
        items.push(
          <ChatBtn
            msg={myMessages[i].mes}
            sender={"to"}
            time={localTime}
            key={myMessages[i].mes}
          />
        );
      }
      i++;
    }

    while (j < sendersMessages?.length) {
      const date = new Date(sendersMessages[j].at);
      const localDate = date.toLocaleDateString();
      const localTime = date.toLocaleTimeString();
      if (getDate() !== localDate) {
        setDate(localDate);
        items.push(
          <>
            <div
              className="text-xs w-full text-center text-gray-400"
              key={localDate}
            >
              {localDate}
            </div>
            <ChatBtn
              msg={sendersMessages[j].mes}
              sender={"from"}
              time={localTime}
              key={sendersMessages[j].mes}
            />
          </>
        );
      } else {
        items.push(
          <ChatBtn
            msg={sendersMessages[j].mes}
            sender={"from"}
            time={localTime}
            key={sendersMessages[j].mes}
          />
        );
      }
      j++;
    }
    return items;
  }
  return (
    <div className="right lg:w-2/3 h-full w-full py-7 pr-6 absolute lg:static hidden lg:block overflow-hidden">
      <div
        className="screen w-full rounded-xl h-full relative flex items-center pt-24 pb-20"
        style={{
          backgroundColor: "rgba(7, 38, 67, 0.4)",
          boxShadow: "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
        }}
      >
        {selectedUser ? (
          <>
            <ChatScreenHeader
              imgSrc={selectedUser?.image}
              userName={selectedUser?.name}
            />
            <div
              className="msgs h-full my-auto overflow-auto p-2 px-6 w-full flex flex-col gap-2 z-0"
              key={"msgsContainer"}
            >
              {selectedUser && genrateMsgs()}
            </div>
            <ChatScreenFooter receiversMailId={selectedUser.email} />
          </>
        ) : (
          <div className="logo flex w-full h-full justify-center items-center flex-col gap-2 select-none">
            <div className="text-3xl font-bold text-[#66bee3]">DEVAuction</div>
            <div className="text-gray-600">
              Select someone to start chatting
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
export default ChatScreen;
