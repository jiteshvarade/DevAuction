import React from "react";
import missionDetails from "../../assets/component data/ourMissionDetails";

export default function OurMission() {
  return (
    <div className="ourMissionSection flex flex-col lg:gap-24 gap-10 justify-center xl:h-dvh max-[1280px]:py-10 text-white bg-[#050618]">
      <div className="heading sm:text-4xl min-[500px]:text-3xl min-[340px]:text-2xl text-xl text-center font-semibold font-serif">
        Our Mission
      </div>
      <div className="missions flex justify-center gap-14 flex-wrap min-[360px]:px-10 px-2 md:flex-nowrap">
        {missionDetails.map((elem, index) => {
          return (
            <div className="mission max-w-[34rem]" key={index}>
              <div className="heading xl:text-3xl md:text-2xl font-serif font-semibold">{elem.heading}</div>
              <div className="description w-11/12 md:text-base text-sm">{elem.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
