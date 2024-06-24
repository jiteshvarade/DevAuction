import React, { useEffect, useState, useRef } from "react";
import ChatScreenHeader from "./ChatScreenHeader";
import ChatScreenFooter from "./ChatScreenFooter";
import ChatBtn from "./ChatBtn";
import logo from "../../assets/LandingPage Images/logo remove background.svg";
import SERVER_URL from "../../contants.mjs";

const ChatScreen = React.memo(({ selectedUser, myEmail, showChats, setShowChats }) => {
  const [msgs, setMsgs] = useState([]);
  const messagesContainerRef = useRef(null);
  const [msgComps, setMsgComps] = useState([]);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      const { scrollHeight, clientHeight } = messagesContainerRef.current;
      messagesContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [msgComps]);

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
    const today = new Date();
    const yesterday = new Date(today);
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
                key={localTime}
              >
                {localDate}
              </div>
              <ChatBtn
                msg={myMessages[i].mes}
                sender={"to"}
                time={localTime}
                key={myMessages[i].mes + localTime}
              />
            </>
          );
        } else {
          items.push(
            <ChatBtn
              msg={myMessages[i].mes}
              sender={"to"}
              time={localTime}
              key={myMessages[i].mes + localTime}
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
                key={sendersMessages[j].mes + localTime}
              />
            </>
          );
        } else {
          items.push(
            <ChatBtn
              msg={sendersMessages[j].mes}
              sender={"from"}
              time={localTime}
              key={sendersMessages[j].mes + localTime}
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
              key={myMessages[i].mes + localTime}
            />
          </>
        );
      } else {
        items.push(
          <ChatBtn
            msg={myMessages[i].mes}
            sender={"to"}
            time={localTime}
            key={myMessages[i].mes + localTime}
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
              key={sendersMessages[j].mes + localTime}
            />
          </>
        );
      } else {
        items.push(
          <ChatBtn
            msg={sendersMessages[j].mes}
            sender={"from"}
            time={localTime}
            key={sendersMessages[j].mes + localTime}
          />
        );
      }
      j++;
    }
    // return items;
    setMsgComps(items);
  }

  const getMsgs = async () => {
    console.log("getting msgs from server");
    const res = await fetch(`${SERVER_URL}/profile/chats`, {
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
    if (userMsgs) {
      setMsgs(userMsgs);
    }
  };

  useEffect(genrateMsgs, [msgs])

  useEffect(() => {
    getMsgs();
  }, [selectedUser]);

  return (
    <div className={`right lg:w-2/3 h-full w-full py-7 pr-6 max-[1024px]:pl-6 absolute lg:static hidden lg:block overflow-hidden ${showChats ? "max-[1024px]:block" : "hidden"}`}>
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
            setShowChats={setShowChats}
              imgSrc={selectedUser?.image}
              userName={selectedUser?.name}
            />
            <div
              className="msgs h-full my-auto overflow-auto p-2 px-6 w-full flex flex-col gap-4 z-0"
              ref={messagesContainerRef}
              key={"msgsContainer"}
            >
              {selectedUser &&
                msgComps.map((msgComp) => {
                  {/* console.log(msgComp); */}
                  return msgComp;
                })}
            </div>
            <ChatScreenFooter
              genrateMsgs={genrateMsgs}
              receiversMailId={selectedUser.email}
              msgs={msgs}
              setMsgs={setMsgs}
              setMsgComps={setMsgComps}
              key={"ChatScreenFooter"}
            />
          </>
        ) : (
          <div className="logo flex w-full h-full justify-center items-center flex-col gap-2 select-none">
            <div className="text-3xl font-bold text-[#66bee3]"><img src={logo} alt="DevAuction" className="w-60 h-20 object-cover opacity-30" style={{filter: "grayscale(100%)"}}  /></div>
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