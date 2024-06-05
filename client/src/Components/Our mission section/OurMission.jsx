import React from "react";
import missionDetails from "../../assets/component data/ourMissionDetails";
import Plx from "react-plx";

export default function OurMission({ leftParallaxData, rightParallaxData }) {
  return (
    <div
      id="mission"
      className="ourMissionSection flex flex-col lg:gap-24 gap-10 justify-center xl:h-dvh max-[1280px]:py-10 text-white bg-[#050618]"
    >
      <div className="heading sm:text-4xl min-[500px]:text-3xl min-[340px]:text-2xl text-xl text-center font-semibold font-serif">
        Our Mission
      </div>
      <div className="missions flex justify-center flex-wrap gap-10 sm:px-20 px-8 md:flex-nowrap lg:px-32 overflow-x-hidden">
        {missionDetails.map((elem, index) => {
          return (
            <Plx
            key={index}
              className="p-8 border-2 border-gray-500 rounded-3xl"
              parallaxData={
                index % 2 == 0 ? leftParallaxData : rightParallaxData
              }
              style={{ width: "fit-content" }}
            >
              <div className="mission" key={index}>
                <div className="mb-4">{elem.icon}</div>
                <div className="heading xl:text-3xl md:text-2xl font-serif font-semibold">
                  {elem.heading}
                </div>
                <div className="description w-11/12 md:text-base text-sm">
                  {elem.description}
                </div>
              </div>
            </Plx>
          );
        })}
      </div>
    </div>
  );
}
