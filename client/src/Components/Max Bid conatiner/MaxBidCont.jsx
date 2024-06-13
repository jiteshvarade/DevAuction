import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";

export default function MaxBidCont({ maxBid, Bidder }) {
  return (
    <div className="p-2 w-52 fixed top-4 right-4 hidden min-[390px]:flex justify-center flex-col items-center bg-white rounded-xl z-50">
      <p className={`text-xs ${Bidder != "Opening Bid" ? "" : "hidden" }`}>Max bid:</p>
      <h1 className="flex items-center gap-2 text-3xl">
        <BsCurrencyDollar size="1.2rem" className="mt-1" /> {maxBid}
      </h1>
      <p className="flex items-center gap-2">
        <IoPersonSharp size="1.2rem" /> {Bidder}
      </p>
    </div>
  );
}
