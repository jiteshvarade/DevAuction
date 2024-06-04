import React from "react";

export default function GradientBtn({ placeholder, type, onClick, className }) {
  return (
    <button className={"bg-gradient-to-b from-[#152744] to-[#227B73] p-2 text-[#11111] px-6 rounded-full font-semibold font-sans border-2 border-[#0CA3E7]" + ` ${className}`} onClick={onClick} type={type != undefined ? type : "button" }>
      {placeholder}
    </button>
  );
}
