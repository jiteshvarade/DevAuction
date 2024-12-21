import React from "react";
import jitesh from "../../assets/LandingPage Images/Screenshot_20240131-162512.jpg"
import Ankit from "../../assets/LandingPage Images/WhatsApp Image 2024-06-15 at 22.24.32.jpeg"
import Nitish from "../../assets/LandingPage Images/nitieshbhai.jpeg"
import Aakash from "../../assets/LandingPage Images/Snapchat-881403884.jpg"
import Katole from "../../assets/LandingPage Images/Katole.jpeg"
import Kanishka1 from "../../assets/LandingPage Images/kanis1.jpeg"
import Kanishka2 from "../../assets/LandingPage Images/kanis2.jpeg"
import Khushi from "../../assets/LandingPage Images/khushi2.jpeg"
  
function TeamComp() {
  // 
  const data = [
    // {
    //   url: Ankit,
    //   name: "Ankit Chauhan",
    //   desc: "Frontend Developer"
    // },
    {
      url: jitesh,
      name: "Jitesh Varade",
      desc: "Founder"
    },
    // {
    //   url: Nitish,
    //   name: "Nitish Kumar",
    //   desc: "Full stack Developer"
    // },
    // {
    //   url: Kanishka1,
    //   name: "Kanishka",
    //   desc: "UI/UX Designer"
    // },
    // {
    //   url: Khushi,
    //   name: "Khushi",
    //   desc: "UI/UX Designer"
    // },
    {
      url: Katole,
      name: "Ankit Katole",
      desc: "Backend Developer"
    },
    // {
    //   url: Aakash,
    //   name: "Aakash Kaushik",
    //   desc: "Frontend Developer"
    // },
    {
      url: Aakash,
      name: "Gajendra",
      desc: "Frontend Developer"
    },
    
  ];

  return (
    <div className="py-10 text-white">
      <h5 className="text-center font-bold my-5 mb-20 lg:text-4xl text-xl sm:text-2xl uppercase">
        Team Members
      </h5>
      <div
        id="outer-wrapper"
        className="max-w-[1300px] overflow-hidden mx-auto mb-10"
      >
        <div
          id="inner-weapper"
          className="flex gap-3 animate-[toRight_20s_linear_infinite]"
        >
          {data.map(({ url, name ,desc }, index) => (
            <div className="card w-[180px] border-2 border-[#111330] p-3 rounded-3xl bg-[#0a0b1d] relative ctaBtn" key={"members" + index}>
              <div className="img w-[150px] h-[150px]">
                <img
                  src={url}
                  className="object-cover w-[150px] h-[150px] rounded-full"
                  alt=""
                />
              </div>
              <div className="name text-xl text-white font-semibold text-center pt-5">
                {name}
              </div>
              <div className="name text-md text-white font-semibold text-center pt-5">
                {desc}
              </div>
            </div>
          ))}
          {data.map(({ url, name ,desc }, index) => (
            <div className="card w-[180px] border-2 border-[#111330] p-3 rounded-3xl bg-[#0a0b1d] relative ctaBtn" key={"members" + index}>
              <div className="img w-[150px] h-[150px]">
                <img
                  src={url}
                  className="object-cover w-[150px] h-[150px] rounded-full"
                  alt=""
                />
              </div>
              <div className="name text-xl text-white font-semibold text-center pt-5">
                {name}
              </div>
              <div className="name text-md text-white font-semibold text-center pt-5">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamComp;

// after:content-[""] after:w-[85%] after:bg-gradient-to-r after:from-[#0a0b1d] after:via-[#ECECEC] after:to-[#0a0b1d] after:absolute after:bottom-0  after:h-[2px] after:block
