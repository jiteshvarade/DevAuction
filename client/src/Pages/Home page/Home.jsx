import React from "react";
import Hero from "../../Components/HomePageHero/HomePageHero";
import Plx from "react-plx";
import NavBar from "../../Components/NavBar/NavBar";
import FeatureSection from "../../Components/Featues section/FeaturesSection";
import OurMission from "../../Components/Our mission section/OurMission";
import Testimonials from "../../Components/Testimonials/Testimonials";
import StepsContainer from "../../Components/Auction Steps Container/StepsContainer";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  console.log(isAuthenticated);
  if (isAuthenticated) {
    console.log(user);
    console.log(isAuthenticated);
    const response = fetch("https://devauction.onrender.com/auth", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }
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
    <div className="HomePage bg-[#050618] text-white">
      <NavBar loginWithRedirect={loginWithRedirect} />
      <Hero loginWithRedirect={loginWithRedirect}  />
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
