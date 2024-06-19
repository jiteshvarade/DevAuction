import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function CustomToast({
  msg,
  type,
  className,
  setShowToast,
}) {
  return (
    <div
      className={`toast z-[100000] fixed flex items-center gap-4 p-4 rounded-xl top-10 transition-all duration-500 ${className} ${type?.toLowerCase() == "red" ? "bg-red-500" : "bg-green-500"}`}
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
