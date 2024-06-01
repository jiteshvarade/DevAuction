import React from "react";
import GradientBtn from "../Gradient Btn/GradientBtn";

export default function AuctionSteps({ imgURL, stepDetails }) {
  return (
    <div className="flex h-56 justify-center gap-10">
      <div className="left flex flex-col gap-4 justify-center w-96">
        <div className="header flex items-center gap-4">
         <GradientBtn placeholder={`Step ${stepDetails.step}`} />
          <h1 className="text-xl font-bold">{stepDetails.heading}</h1>
        </div>
        <div className="tagline text-2xl">"{stepDetails.tagline}"</div>
        <p className="stepDescription">{stepDetails.stepDescription}</p>
      </div>
      <div className="right flex items-center justify-center">
        <img src={imgURL} alt={stepDetails.heading} className="h-full" />
      </div>
    </div>
  );
}
