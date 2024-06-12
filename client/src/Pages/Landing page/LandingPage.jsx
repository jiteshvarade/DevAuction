import React from "react";
import Hero from "../../Components/HomePageHero/HomePageHero";
import NavBar from "../../Components/NavBar/NavBar";
import FeatureSection from "../../Components/Featues section/FeaturesSection";
import OurMission from "../../Components/Our mission section/OurMission";
import Testimonials from "../../Components/Testimonials/Testimonials";
import StepsContainer from "../../Components/Auction Steps Container/StepsContainer";
import { useAuth0 } from "@auth0/auth0-react";
import HomePageFooter from "../../Components/Home page footer/HomePageFooter";
import ContactUs from "../../Components/Home page footer/ContactUs";
import TeamComp from "../../Components/Home page footer/TeamComp";
import Pricing from "../../Components/Pricing/Pricing";
import { useNavigate } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";


function Home() {
  const navigate = useNavigate();
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

    navigate("/dashboard");
  }
  return (
    <div className="HomePage bg-[#050618] text-white">
      {isLoading && (
        <div className="w-[100%] h-[700px] flex justify-center items-center ">
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="8"
          fill="#05081B"
          animationDuration=".5s"
        />
      </div>
      )}
      {!isLoading && (
        <div>
          <NavBar loginWithRedirect={loginWithRedirect} />
          <Hero loginWithRedirect={loginWithRedirect} />
          <StepsContainer />
          <FeatureSection />
          <OurMission />
          <Testimonials />
          <Pricing />
          <ContactUs />
          <TeamComp />
          <HomePageFooter />
        </div>
      )}
    </div>
  );
}

export default Home;
