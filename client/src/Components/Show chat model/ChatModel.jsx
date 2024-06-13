import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

const  ChatModel = React.memo(({ messages, className, deliverMessage, currentUserId }) => {
  const [message, setMessage] = useState("");
  function sendMessage(){
    // console.log(deliverMessage)
    if(message.trim() !== ""){
      deliverMessage(message);
      setMessage("");
      // console.log(message);
    }
  }
  return (
    <div className="absolute bottom-20 right-0">
      <div
        className={`chatSection w-60 h-96 overflow-auto ${className} flex-col bg-white rounded-xl p-2 relative`}
      >
        <div className="heading text-xl font-serif font-semibold">Chats</div>
        {messages ? (
          <div className="chats overflow-auto flex flex-col bg-white rounded-xl p-1 gap-2 mb-10">
            {messages?.map((elem) => {
              console.log(currentUserId , "==" , elem.userId , "=>" , currentUserId == elem.userId);
              return (
                <div className={`chat w-4/5 bg-gray-600 p-1 rounded-lg px-2 ${(elem.userId == currentUserId) ? "ml-auto" : ""}`} key={elem.userId}>
                  <div className="header flex items-center justify-between text-gray-400">
                    <div className="userNAme font-bold text-xs text-green-500">{elem.userName}</div>
                    <div className="time text-[10px]">{elem.date_time.time12}</div>
                  </div>
                  <div className="chatMessage text-white px-1">{elem.message}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-gray-400 text-center">nothing here</div>
        )}
        <div className="chatInputSection flex justify-between items-center p-2 py-1 w-60 border-t-2 border-gray-200 absolute bottom-0 left-0">
          <input
            type="text"
            placeholder="Say something..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 w-3/4 rounded-xl outline-none border-none"
          />
          <div className="btn w-fit" onClick={sendMessage}>
            <IoMdSend color="gray" size="2.5rem" className="p-2" />
          </div>
        </div>
      </div>
    </div>
  );
})

export default ChatModel;
