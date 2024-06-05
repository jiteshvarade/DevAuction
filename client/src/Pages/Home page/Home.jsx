import React from "react";
import Hero from "../../Components/HomePageHero/HomePageHero";
import Plx from "react-plx";
import NavBar from "../../Components/NavBar/NavBar";
import FeatureSection from "../../Components/Featues section/FeaturesSection";
import OurMission from "../../Components/Our mission section/OurMission";
import Testimonials from "../../Components/Testimonials/Testimonials";
import StepsContainer from "../../Components/Auction Steps Container/StepsContainer";

function Home() {
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
      properties: [{ startValue: -500, endValue: 0, property: "translateX" }],
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
      <StepsContainer />
      <div id="feature" className="overflow-hidden bg-[#050618] w-full h-fit">
        <Plx
          className="bg-green-400"
          parallaxData={featureSectionParallax}
          style={{ width: "100%" }}
        >
          <FeatureSection />
        </Plx>
      </div>
      <OurMission
        leftParallaxData={fromLeftFeature}
        rightParallaxData={fromRightFeature}
      />
      <Testimonials />
    </div>
  );
}

export default Home;
