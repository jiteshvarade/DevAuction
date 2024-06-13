import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";

export default function BidPaddle({ bid, bidderNumber }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bidAmount text-3xl flex items-center font-semibold mb-4 text-white gap-1">
        <BsCurrencyDollar size="1rem" className="mt-1" color="white" /> {bid}
      </div>
      <div className="flex flex-col items-center justify-center bg-white p-8 rounded-full shadow-lg sm:w-24 sm:h-24 w-10 h-10">
        <div className="text-5xl font-bold text-gray-800">{bidderNumber}</div>
      </div>
      <div
        className="handle sm:w-4 sm:h-12 mx-auto w-4 h-8"
        style={{
          backgroundColor: "#555",
          borderRadius: "0 0 50px 50px",
        }}
      ></div>
    </div>
  );
}
