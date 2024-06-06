import React from "react";

export default function FeatureTile({ tileIcon, tileDescription }) {
  return (
    <div className='w-[300px] h-48 bg-[#050618] text-white text-center flex flex-col justify-center items-center p-4 z-50'>
    <div className="icon mb-4 text-[#66BEE3]">{tileIcon}</div>        
    <div className="heading text-xl font-bold">{tileDescription.heading}</div>
    <div className="description font-thin text-gray-400">{tileDescription.description}</div>
</div>
  );
}
