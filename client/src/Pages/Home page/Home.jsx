import React from "react";
import Hero from "../../Components/HomePageHero/HomePageHero";
import AuctionSteps from "../../Components/Auction Steps/AuctionSteps";
import stepDetails from "../../assets/component data/AuctionSteps";
import Plx from "react-plx";

function Home() {
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
      properties: [{ startValue: -500, endValue: -100, property: "translateX" }],
    },
  ];
  return (
    <div className="HomePage">
      <Hero />
        <div className="flex justify-center gap-10 flex-col items-center m-auto p-10 px-0 bg-[#050618] overflow-x-hidden" style={{padding: window.innerWidth * 0.1}}>
          {stepDetails.map((elem) => {
            return (
              <Plx className="bg-green-500 w-fit"  parallaxData={elem.step % 2 !== 0 ? fromLeft : fromRight} style={{width: "80%"}}>
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
    </div>
  );
}

export default Home;
