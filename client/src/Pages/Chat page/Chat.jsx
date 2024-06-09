import React from "react";
import ChatHeader from "../../Components/Chats Header/ChatHeader";
import ChatPeople from "../../Components/Chat people/ChatPeople";
import ChatScreen from "../../Components/Chat screen/ChatScreen";

export default function Chat({ showMenu, setShowMenu }) {
  return (
    <div className="chatParent h-dvh flex flex-col">
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} />
      <div className="chatBody flex flex-1 relative" style={{height: "calc(100vh * .78)"}}>
        <ChatPeople />
        <ChatScreen />
      </div>
    </div>
  );
}
