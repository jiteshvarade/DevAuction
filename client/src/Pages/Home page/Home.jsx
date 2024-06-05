import React from "react";
import Hero from "../../Components/HomePageHero/HomePageHero";
import AuctionSteps from "../../Components/Auction Steps/AuctionSteps";
import stepDetails from "../../assets/component data/AuctionSteps";
import Plx from "react-plx";
import NavBar from "../../Components/NavBar/NavBar";
import FeatureSection from "../../Components/Featues section/FeaturesSection";
import OurMission from "../../Components/Our mission section/OurMission";
import Testimonials from "../../Components/Testimonials/Testimonials"

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
      properties: [
        { startValue: -500, endValue: -100, property: "translateX" },
      ],
    },
  ];
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

  const fromLeftFeature = [
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
        { startValue: -500, endValue: 0, property: "translateX" },
      ],
    },
  ];

  const fromRightFeature = [
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
    <div className="HomePage">
      <NavBar />
      <Hero />
      <div
        id="steps"
        key="stepsSection"
        className="flex justify-center gap-10 flex-col items-center m-auto p-10 px-0 bg-[#050618] overflow-x-hidden"
        style={{
          padding:
            window.innerWidth * (window.innerWidth <= 1285 ? 0.001 : 0.1),
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
      <div id="feature" className="overflow-hidden bg-[#050618] w-full h-fit">
        <Plx
          className="bg-green-400"
          parallaxData={featureSectionParallax}
          style={{ width: "100%" }}
        >
          <FeatureSection />
        </Plx>
      </div>
      <OurMission leftParallaxData={fromLeftFeature} rightParallaxData={fromRightFeature} />
      <Testimonials />
    </div>
  );
}

export default Home;
