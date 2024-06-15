import React, { useState } from "react";
import randomImg from "../../assets/images/Frame 2147223052.png";
import { IoIosArrowDown } from "react-icons/io";
import StepsBtn from "../Buttons/StepsBtn"

export default function AuctionSteps({
  stepNo,
  heading,
  description,
  tagline,
  imgRef,
}) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="parent bg-[#050618] text-white flex xl:px-28 p-4 py-8 lg:gap-10">
      <div className="left lg:w-1/2 w-full flex flex-col gap-4 justify-center">
        <StepsBtn
        stepNo={stepNo}
        />
        <div className="heading text-2xl font-bold">{heading}</div>
        <div className="para font-thin text-gray-400">{description}</div>
          <div className="tagline border-2 border-gray-400 text-gray-300  p-2 rounded-xl w-fit max-w-full text-center bg-gradient-to-b from-[#061B30] to-[#051022] hidden lg:block">
            "{tagline}"
          </div>
        <div
          className={
            "stepsAccordian overflow-hidden transition-all duration-1000 flex flex-col gap-4 lg:hidden " +
            `${showMore ? "" : "h-[40px]"}`
          }
        >
          <div
            className="accordianHeading flex items-center justify-between px-4 bg-gray-600 p-2 rounded-xl"
            onClick={() => setShowMore(!showMore)}
          >
            Elaborate{" "}
            <IoIosArrowDown className={`${showMore ? "rotate-180" : ""}`} />
          </div>
          <div className="tagline border-2 border-gray-400 text-gray-300  p-2 rounded-xl w-fit max-w-full text-center bg-gradient-to-b from-[#061B30] to-[#051022]">
            "{tagline}"
          </div>
          <img
            src={imgRef || randomImg}
            alt={"Step " + stepNo + " " + heading}
          />
        </div>
      </div>
      <div className="right w-[50%] hidden lg:block shadow-xl  shadow-slate-800  ">
        <img src={imgRef || randomImg} alt={"Step " + stepNo + " " + heading} />
      </div>
    </div>
  );
}
