import React from "react";
import Hero from "../../Components/HomePageHero/HomePageHero";
import NavBar from "../../Components/NavBar/NavBar";
import FeatureSection from "../../Components/Featues section/FeaturesSection";
import OurMission from "../../Components/Our mission section/OurMission";
import Testimonials from "../../Components/Testimonials/Testimonials";
import StepsContainer from "../../Components/Auction Steps Container/StepsContainer";
import { useAuth0 } from "@auth0/auth0-react";
import HomePageFooter from "../../Components/Home page footer/HomePageFooter";

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

  return (
    <div className="HomePage bg-[#050618] text-white">
      <NavBar loginWithRedirect={loginWithRedirect} />
      <Hero loginWithRedirect={loginWithRedirect} />
      <StepsContainer />
      <FeatureSection />
      <OurMission />
      <Testimonials />
      <HomePageFooter />
    </div>
  );
}

export default Home;
