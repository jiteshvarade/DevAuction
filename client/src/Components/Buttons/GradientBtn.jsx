import React from "react";

export default function GradientBtn({ placeholder, type, onClick, className }) {
  return (
    <div className="staticShining w-fit h-fit rounded-full p-[1.2px]">
      <button
        className={
          "bg-gradient-to-b from-[#18203E] to-[#172748] sm:py-2 p-1.5 text-[#11111] px-6 rounded-full font-semibold font-sans child" +
          ` ${className}`
        }
        onClick={onClick}
        type={type != undefined ? type : "button"}
        style={{boxShadow: "inset 0 0 3px 0 rgba(255,255,255,0.5)"}}
      >
        {placeholder}
      </button>
    </div>
  );
}
