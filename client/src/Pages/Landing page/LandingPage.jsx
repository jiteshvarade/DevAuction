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
import { useNavigate } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import star from "../../assets/Icons/star.svg";

function Home() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  console.log(isAuthenticated);
  if (isAuthenticated) {
    console.log(user);
    console.log(isAuthenticated);
    if (user.email_verified) {
      const response = fetch("https://devauction.onrender.com/auth", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      navigate("/homepage/dashboard");
    } else {
      alert("Enter a valid email address!");
      logout({ logoutParams: { returnTo: window.location.origin } });
    }
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
        <div className="relative">
          <img
            src={star}
            className="absolute z-50 top-[35rem] scale-75 xl:block hidden"
          />
          <div className="w-80 aspect-square rounded-full absolute left-0 bg-[#0CA3E7] bg-opacity-40 blur-[200rem] z-[11111111]"></div>
          <div className="w-80 aspect-square rounded-full absolute left-0 top-[35rem] bg-[#0CA3E7] bg-opacity-30 blur-[200rem]  z-[11111111]"></div>
          <div className="w-80 aspect-square rounded-full absolute right-0 top-[95rem] bg-[#0CA3E7] bg-opacity-30 blur-[200px] z-[11111111]"></div>
          <img
            src={star}
            className="absolute z-50 right-0 top-[95rem] scale-75 xl:block hidden"
          />
          <div className="w-80 aspect-square rounded-full absolute right-0 bg-[#0CA3E7] bg-opacity-30 blur-[200px] z-[11111111] bottom-[230rem]"></div>
          <img
            src={star}
            className="absolute z-50 right-0 bottom-[230rem] xl:block hidden"
          />
          <div className="w-40 aspect-square rounded-full absolute bg-[#0CA3E7] bg-opacity-30 blur-[200px] z-[11111111] bottom-[125rem]"></div>
          <img
            src={star}
            className="absolute z-50 bottom-[125rem] scale-75 xl:block hidden"
          />
          <div className="w-80 aspect-square rounded-full absolute right-0 bg-[#0CA3E7] bg-opacity-30 blur-[200px] z-[11111111] bottom-[45rem] border-2"></div>
          <img
            src={star}
            className="absolute z-50 right-0 bottom-[45rem] xl:block hidden"
          />
          <NavBar loginWithRedirect={loginWithRedirect} />
          <Hero loginWithRedirect={loginWithRedirect} />
          <StepsContainer />
          <FeatureSection />
          <OurMission />
          <Testimonials />
          <ContactUs />
          <TeamComp />
          <HomePageFooter />
        </div>
      )}
    </div>
  );
}

export default Home;
