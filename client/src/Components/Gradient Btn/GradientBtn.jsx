import React from "react";

export default function GradientBtn({ placeholder, type, onClick }) {
  return (
    <button className="bg-gradient-to-r from-[#9A76FF] via-[#0CA3E7] to-[#23DD9F] p-2 text-[#11111] px-6 rounded-xl font-semibold font-sans" onClick={onClick} type={type != undefined ? type : "button" }>
      {placeholder}
    </button>
  );
}
