import React from "react";

export default function GradientBtn({ placeholder, type, onClick, className }) {
  return (
      <button
        className={
          "bg-gradient-to-b from-[#18203E] to-[#13203a] sm:py-2 p-1.5 text-[#11111] px-6 rounded-full font-semibold font-sans sm:min-w-28 relative ctaBtn" +
          ` ${className}`
        }
        onClick={onClick}
        type={type != undefined ? type : "button"}
        style={{boxShadow: "inset 0 0 12px 0 rgba(191,151,255,0.24)", border:"2px solid rgba(224, 224, 224, 0.18)"}}
      >
        {placeholder}
      </button>
  );
}
