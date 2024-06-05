import React from "react";
import Plx from "react-plx";
import AuctionSteps from "../../Components/Auction Steps/AuctionSteps";
import stepDetails from "../../assets/component data/AuctionSteps";

export default function StepsContainer() {
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
      properties: [{ startValue: 500, endValue: 100, property: "translateX" }],
    },
  ];
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
      properties: [
        { startValue: -500, endValue: -100, property: "translateX" },
      ],
    },
  ];
  return (
    <div
      id="steps"
      key="stepsSection"
      className="flex justify-center gap-10 flex-col items-center m-auto p-10 px-0 bg-[#050618] overflow-x-hidden"
      style={{
        padding: window.innerWidth * (window.innerWidth <= 1285 ? 0.001 : 0.1),
      }}
    >
      <h1 className="text-white text-4xl font-bold mb-20">
        HOW DEVAUCTION WORKS?
      </h1>
      {stepDetails.map((elem) => {
        return (
          <Plx
            key={"elem " + elem.step}
            className="bg-green-500 w-fit"
            parallaxData={elem.step % 2 !== 0 ? fromLeft : fromRight}
            style={{ width: "80%" }}
          >
            <AuctionSteps
              stepNo={elem.step}
              heading={elem.heading}
              tagline={elem.tagline}
              description={elem.stepDescription}
            />
          </Plx>
        );
      })}
    </div>
  );
}
