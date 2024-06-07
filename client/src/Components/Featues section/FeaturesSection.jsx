import React from "react";
import FeatureDetails from "./featureDetails";
import FeatureTile from "./FeatureTile";
import Plx from "react-plx";

export default function FeaturesSection() {
  const featureSectionParallax = [
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
      properties: [{ startValue: -500, endValue: 0, property: "translateY" }],
    },
  ];

  return (
    <div id="features" className="overflow-hidden bg-[#050618] w-full h-fit">
      <Plx
        className="bg-green-400"
        parallaxData={featureSectionParallax}
        style={{ width: "100%" }}
      >
        <div
          className={`featureSection w-full bg-[#050618] flex flex-col lg:gap-24 gap-10 justify-center xl:h-dvh max-[1280px]:py-10 bg-cover bg-no-repeat after:content-[""] after:w-96 after:h-[10px] after:rounded-[100%] after:bg-[#66BEE3] after:absolute after:mt-32 after:left-1/2 after:-translate-x-1/2 before:content-[""] before:w-28 before:h-[1px] before:rounded-[100%] before:bg-white before:absolute before:mt-32 before:left-1/2 before:-translate-x-1/2`}
        >
          <h1 className="heading sm:text-4xl min-[500px]:text-3xl min-[340px]:text-2xl text-xl text-center font-semibold font-serif text-white">
            Features you like!
          </h1>
          <div className="featureTiles flex flex-wrap gap-1 justify-center items-center lg:px-20 px-4">
            {FeatureDetails.map((elem, index) => {
              return (
                <FeatureTile
                  key={index}
                  tileIcon={elem.icon}
                  tileDescription={elem}
                />
              );
            })}
          </div>
        </div>
      </Plx>
    </div>
  );
}
