import React from 'react'
import GradientBtn from '../Gradient Btn/GradientBtn'
import randomImg from "../../assets/Frame 2147223052.png"

export default function AuctionSteps({stepNo, heading, description, tagline, imgRef}) {
  return (
    <div className='parent bg-[#050618] text-white flex p-10 gap-10'>
        <div className="left w-1/2 flex flex-col gap-4 justify-center">
            <GradientBtn placeholder={"Step " + stepNo} className={"text-white w-fit"} />
            <div className="heading text-2xl font-bold">{heading}</div>
            <div className="para font-thin text-gray-400">{description}</div>
            <div className="tagline border-2 border-gray-400 text-gray-300  p-2 rounded-xl w-fit max-w-full text-center bg-gradient-to-b from-[#061B30] to-[#051022]">"{tagline}"</div>
        </div>
        <div className="right w-1/2">
            <img src={imgRef || randomImg} alt={"Step " + stepNo + " " + heading} />
        </div>
    </div>
  )
}
