import React from "react";
import missionDetails from "./ourMissionDetails";
import Plx from "react-plx";

export default function OurMission() {
  const fromLeft = [
    {
      start: "self",
      duration: 600,
      easing: "ease",
      properties: [{ startValue: 0, endValue: 1, property: "opacity" }],
    },
    {
      start: "self",
      duration: 600,
      easing: "ease",
      properties: [{ startValue: -500, endValue: 0, property: "translateX" }],
    },
  ];

  const fromRight = [
    {
      start: "self",
      duration: 600,
      easing: "ease",
      properties: [{ startValue: 0, endValue: 1, property: "opacity" }],
    },
    {
      start: "self",
      duration: 600,
      easing: "ease",
      properties: [{ startValue: 500, endValue: 0, property: "translateX" }],
    },
  ];
  return (
    <div
      id="mission"
      className="ourMissionSection flex flex-col lg:gap-24 gap-10 justify-center xl:h-dvh max-[1280px]:py-10 text-white bg-[#050618]"
    >
      <div className="heading lg:text-4xl text-xl sm:text-2xl uppercase text-center font-semibold ">
        Our Mission
      </div>
      <div className="missions flex justify-center flex-wrap gap-10 sm:px-20 px-8 md:flex-nowrap lg:px-32 overflow-x-hidden">
        {missionDetails.map((elem, index) => {
          return (
            <Plx
              key={index}
              className="rounded-3xl relative overflow-hidden p-[2px] shining bg-white bg-opacity-10"
              parallaxData={index % 2 == 0 ? fromLeft : fromRight}
              style={{ width: "fit-content" }}
            >
              <div className="mission w-full h-full bg-[#050618] relative rounded-3xl p-8" key={index}>
                <div className="mb-4">{elem.icon}</div>
                <div className="heading xl:text-3xl md:text-2xl  font-semibold">
                  {elem.heading}
                </div>
                <div className="description w-11/12 md:text-base text-xs text-gray-400 font-thin">
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
