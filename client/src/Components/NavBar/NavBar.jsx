import React from "react";
import logo from "../../assets/LandingPage Images/logo remove background.svg";
import HamMenu from "../../../public/Icons/iconsmenu.png";
import GradientBtn from "../Buttons/GradientBtn";

function Navbar({ loginWithRedirect }) {
  const smoothScroll = (target, duration) => {
    const targetPosition = target.getBoundingClientRect().top;
    console.log(targetPosition);
    const x = 658; // this is the minimum offset that requres 1000ms to scroll. If its will be more than this then the duration will be calculated as followx:
    const newDuration =
      (targetPosition / x) * duration >= 3000
        ? 3000
        : (targetPosition / x) * duration <= 0
        ? 2000
        : (targetPosition / x) * duration;
    const startPosition = window.scrollY;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, newDuration);
      window.scrollTo(0, run);
      if (timeElapsed < newDuration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  function scrollInToView(e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    const section = document.getElementById(id.slice(1, id.length));
    if (section) {
      smoothScroll(section, 1000); // 1000ms duration for the scroll
    }
  }

  // Array for the nav links
  const NavLinks = ["Home", "How it Works", "Features", "About Us", "Contact Us"]
  
  return (
    <>
      <nav className="flex justify-between items-center w-full px-5 bg-[#050618] fixed z-[1000]">
        {/* <div className="relative top-0"> X</div> */}
        <div>
          <img src={logo} alt="" className="w-24" />
        </div>
        <ul className="hidden gap-7 text-white md:flex font-thin">
          {NavLinks.map((elem) => (
            <li key={elem.toLowerCase()} >
            <a
              href={"#" + elem.toLocaleLowerCase()}
              className=' text-white hover:font-semibold cursor-pointer hover:text-[#66bee3]  relative after:content-[""] after:w-[85%] after:bg-gradient-to-r after:from-[#0a0b1d] after:via-[#66bee3] after:to-[#0a0b1d] after:absolute after:-bottom-2 after:hidden after:h-[2px] hover:after:block after:left-1/2 after:-translate-x-1/2 transition-all duration-500'
              onClick={scrollInToView}
            >
              {elem}
            </a>
          </li>
          ))}
          
        </ul>

        <div className="flex" key={"loginBtn"}>
          <GradientBtn
            placeholder="LogIn"
            onClick={() => loginWithRedirect()}
            className={"text-white"}
          />
          {/* <img className="block md:hidden w-10 mx-4" src={HamMenu} alt="" /> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
