import React from "react";
import GradientBtn from "../Buttons/GradientBtn";
import Counters from "./Counters";
import auctionsCounterImg from "../../assets/Icons/ri_auction-line.svg";
import maxBitCounterImg from "../../assets/Icons/counterGrowth.svg";

function HomePageHero({ loginWithRedirect }) {
  const successfulAuctions = 1478;
  const maxBid = 54000;
  return (
    <>
      <section
        id="home"
        className="hero flex lg:h-[600px] h-fit text-white relative overflow-hidden min-h-fit"
      >
        <div
          id="left"
          className="left xl:py-20 flex flex-col justify-center gap-4 lg:flex-1 w-full h-[600px] sm:p-10 p-4 py-20 z-10 items-center lg:items-start bg-[#050618] bg-opacity-80 min-h-fit"
        >
          <div className="headingTop text-3xl font-bold xl:text-6xl lg:text-4xl md:text-6xl sm:text-4xl  text-center lg:text-left">
            WORLD'S FIRST
          </div>
          <div className="headingBottom text-3xl font-bold xl:text-6xl lg:text-4xl md:text-6xl sm:text-4xl  text-center lg:text-left">
            PROJECT AUCTION
          </div>
          <p className="max-w-[500px] text-center text-gray-400 min-[400px]:px-10 lg:text-left lg:px-0">
            Auction your innovative projects and get the rewards you deserve
          </p>
          <GradientBtn
            placeholder="Start for FREE"
            type="button"
            className="w-fit"
            onClick={() => loginWithRedirect()}
          />
          <div className="coutnersContainer flex items-center gap-10 flex-wrap lg:justify-start justify-center flex-col sm:flex-row py-5">
            <div className="counter flex items-center gap-4 w-fit">
              <div className="img sm:h-full h-8 overflow-hidden aspect-square flex-1 bg-[#050618] rounded-md">
                <img src={auctionsCounterImg} />
              </div>
              <div className="couterSection flex flex-col ">
                <Counters end={successfulAuctions} />
                <p className="text-xs sm:text-base">Successful Auctions</p>
              </div>
            </div>
            <div className="counter flex items-center gap-4 w-fit">
              <div className="img sm:h-full h-8 overflow-hidden aspect-square flex-1 bg-[#050618] rounded-[4.1px]">
                <img src={maxBitCounterImg} />
              </div>
              <div className="couterSection flex flex-col">
                <div className="flex gap-2 items-center">
                  <div className="rs text-center items-center text-xl font-bold sm:text-3xl lg:text-left">
                    Rs.
                  </div>
                  <Counters end={maxBid} />
                </div>
                <p className="text-xs sm:text-base">Maximum bid</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-28 bg-gradient-to-r from-[#050618] from-90% to-transparent"></div>
        <div className="right lg:flex-1 absolute h-full w-full lg:static">
          <div className="absolute bottom-[-3.5rem] h-28 w-full bg-gradient-to-t from-[#050618] from-70% to-transparent z-0 text-white"></div>
          <video
            src="./videos/Horizontal Scrolling Animation for Computer by Abhijeet.mp4"
            className="h-full w-full object-cover"
            width="100%"
            height="100vh"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </section>
    </>
  );
}

export default HomePageHero;
