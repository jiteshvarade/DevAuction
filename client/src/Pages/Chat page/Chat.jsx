import React, { useEffect, useState } from "react";
import ChatHeader from "../../Components/Chats Header/ChatHeader";
import ChatPeople from "../../Components/Chat people/ChatPeople";
import ChatScreen from "../../Components/Chat screen/ChatScreen";
import { useAuth0 } from "@auth0/auth0-react";

export default function Chat({ showMenu, setShowMenu }) {
  const { user } = useAuth0();
  const [selectedUser, setSelectedUser] = useState(null);
  const [recentChatUsers, setRecentChatUsers] = useState([]);
  const usersEmail = user?.email;

  async function getUsersRecentChats() {
    const res = await fetch("https://devauction.onrender.com/profile/inbox", {
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
        className="chatBody flex flex-1 relative"
        style={{ height: "calc(100vh * .78)" }}
      >
        <ChatPeople recentChatUsers={recentChatUsers} setSelectedUser={setSelectedUser} />
        <ChatScreen selectedUser={selectedUser} myEmail={user?.email}  />
      </div>
    </div>
  );
}
