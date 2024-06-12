import React, { useState } from "react";
import { MdAttachment } from "react-icons/md";
import { LuCamera } from "react-icons/lu";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import AttachmentModel from "./AttachmentModel";
import EmojiPicker from "emoji-picker-react";
import CameraAccess from "./CameraAccess";
import { useAuth0 } from "@auth0/auth0-react";

export default function ChatScreenFooter({ receiversMailId, msgs, setMsgs }) {
  const { user } = useAuth0();
  const [msg, setMsg] = useState("");
  const [showAttachment, setShowAttachMent] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [openCamera, setOpenCamera] = useState(false);
  function onEmojiClickHndl(emoji) {
    setMsg((preMsg) => {
      return preMsg + emoji.emoji;
    });
    // setShowEmojis(false);
  }

  async function sendMsg() {
    const userEmail = user.email;
    // console.log(userEmail, receiversMailId);
    console.log("sending msg");
    const res = await fetch(
      "https://devauction.onrender.com/profile/chat/send",
      {
        method: "POST",
        body: JSON.stringify({
          from: userEmail,
          to: receiversMailId,
          message: msg,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const msgDeliveryResponse = await res.text();
    setMsgs();
    setMsg(() => "");
    console.log(msgDeliveryResponse);
  }
  
  return (
    <div className="absolute bottom-4 flex gap-4 items-center w-[95%] left-1/2 -translate-x-1/2">
      <AttachmentModel
        className={
          showAttachment ? " bottom-20 opacity-100" : " -bottom-80 opacity-0"
        }
      />
      <CameraAccess
        className=""
        openCamera={openCamera}
        setOpenCamera={setOpenCamera}
      />
      <div
        className={
          "absolute md:right-20 bottom-20 right-0 " +
          ` ${showEmojis ? "block" : "hidden"}`
        }
      >
        <EmojiPicker
          className="h-40"
          height="350px"
          onEmojiClick={onEmojiClickHndl}
        />
      </div>
      <div
        className="msgInterface flex items-center p-4 rounded-xl flex-1 gap-4"
        style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}
      >
        <MdAttachment
          size="1.5rem"
          className="rotate-[120deg] cursor-pointer active:bg-white active:text-gray-400 rounded-full"
          onClick={() => {
            setShowEmojis(false);
            setShowAttachMent(!showAttachment);
          }}
        />
        <input
          type="text"
          className="flex-1 bg-inherit text-white h-fit outline-none"
          placeholder="Your thoughts here..."
          value={msg}
          onFocus={() => {
            setShowAttachMent(false);
            setShowEmojis(false);
          }}
          onChange={(e) => setMsg(e.target.value)}
        />
        <MdOutlineEmojiEmotions
          size="1.5rem"
          className="cursor-pointer active:bg-white active:text-gray-400 rounded-full"
          onClick={() => {
            setShowAttachMent(false);
            setShowEmojis(!showEmojis);
          }}
        />
        <LuCamera
          size="1.5rem"
          onClick={() => setOpenCamera(!openCamera)}
          className="cursor-pointer"
        />
      </div>
      <div className="chatAction">
        {msg.length == 0 ? (
          <MdKeyboardVoice
            size="3.4rem"
            className="p-4 bg-[#66bee3] rounded-xl cursor-pointer"
          />
        ) : (
          <IoSend
            size="3.4rem"
            className="p-4 bg-[#66bee3] rounded-xl cursor-pointer"
            onClick={msg.trim() !== "" ? sendMsg : ""}
          />
        )}
      </div>
    </div>
  );
}
