import React, { useCallback, useState } from "react";

export default function ChatBtn({ msg, sender, time }) {
  const [showTime, setShowTime] = useState(false);
  const showTimeHndl = useCallback(() => {
    setShowTime(true);
    setTimeout(() => {
      setShowTime(false);
    }, 5000);
  }, [])
  if (sender?.toLowerCase() == "from") {
    return (
      <div
        className={`w-fit max-w-[80%] p-1 px-2 rounded-xl relative cursor-pointer`}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(186, 233, 254, 0), rgba(186, 233, 254, 0.36))",
          borderInline: "2px solid rgba(255, 255, 255, 0.2)",
        }}
        onClick={showTimeHndl}
      >
        {msg}
      <span className={`absolute text-xs text-white w-fit left-1 transition-all duration-500 ${showTime ? "bottom-[-18px] opacity-100" : "bottom-0 opacity-0"}`}>{time}</span>
      </div>
    );
  } else {
    return (
      <div
        className="w-fit max-w-[80%] p-1 px-2 rounded-xl ml-auto relative cursor-pointer"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(12, 163, 231, 0), rgba(12, 163, 231, 0.53))",
          borderInline: "2px solid rgba(255, 255, 255, 0.2)",
        }}
       onClick={showTimeHndl} 
      >
        {msg}
      <span className={`absolute text-xs  text-white w-fit right-1 transition-all duration-500 ${showTime ? "bottom-[-18px] opacity-100" : "bottom-0 opacity-0"}`}>{time}</span>
      </div>
    );
  }
}
