import React, { useEffect, useState } from "react";
import ChatHeader from "../../Components/Chats Header/ChatHeader";
import ChatPeople from "../../Components/Chat people/ChatPeople";
import ChatScreen from "../../Components/Chat screen/ChatScreen";
import { useAuth0 } from "@auth0/auth0-react";
import { useMenuContext } from "../../context/MenuContextProvider";

export default function Chat() {
  const {showMenu, setShowMenu} = useMenuContext();
  const { user } = useAuth0();
  const [selectedUser, setSelectedUser] = useState(null);
  const [recentChatUsers, setRecentChatUsers] = useState([]);
  const usersEmail = user?.email;
  const [showChats, setShowChats] = useState(false);

  async function getUsersRecentChats() {
    const res = await fetch(`https://devauction.onrender.com/profile/inbox`, {
      method: "POST",
      body: JSON.stringify({ email: usersEmail }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res?.json();
    if (data) {
      setRecentChatUsers(data?.data);
    }
  }

  useEffect(() => {
    getUsersRecentChats();
  }, [user]);
  return (
    <div className="chatParent h-dvh flex flex-col">
      <ChatHeader setShowMenu={setShowMenu} showMenu={showMenu} userName={user?.given_name} userImg={user?.picture}  />
      <div
        className="chatBody flex flex-1 relative mb-4"
        style={{ height: "calc(100vh * .78)" }}
      >
        <ChatPeople recentChatUsers={recentChatUsers} setSelectedUser={setSelectedUser} showChats={showChats} setShowChats={setShowChats} />
        <ChatScreen selectedUser={selectedUser} myEmail={user?.email} showChats={showChats} setShowChats={setShowChats}  />
      </div>
    </div>
  );
}
