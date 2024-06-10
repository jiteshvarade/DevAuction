import React from 'react'
import { MdAttachment } from "react-icons/md";
import { LuCamera } from "react-icons/lu";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";

export default function ChatScreenFooter() {
  return (
    <div className='absolute bottom-4 flex gap-4 items-center w-[95%] left-1/2 -translate-x-1/2'>
        <div className="msgInterface flex items-center p-4 rounded-xl flex-1 gap-4" style={{border: "1px solid rgba(255, 255, 255, 0.2)"}}>
            <MdAttachment size="1.5rem" className='rotate-[120deg]'  />
            <input type="text" className='flex-1 bg-inherit text-white h-fit outline-none' placeholder='Your thoughts here...' />
            <MdOutlineEmojiEmotions size="1.5rem" />
            <LuCamera size="1.5rem" />
        </div>
        <MdKeyboardVoice size="3.4rem"  className='p-4 bg-[#66bee3] rounded-xl'  />
    </div>
  )
}
