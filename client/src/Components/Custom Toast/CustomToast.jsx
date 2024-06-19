import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function CustomToast({
  msg,
  className,
  setShowToast,
}) {
  return (
    <div
      className={`toast z-[100000] fixed flex items-center gap-4 p-4 bg-pink-500 rounded-xl top-10 transition-all duration-500 ${className}`}
    >
      {msg}{" "}
      <RxCross2
        onClick={() => {
          setShowToast(false);
        }}
        size="1.2rem"
      />
    </div>
  );
}
