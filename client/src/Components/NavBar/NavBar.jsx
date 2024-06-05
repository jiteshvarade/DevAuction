import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import logo from "../../../public/Icons/Logo.png";
import HamMenu from "../../../public/Icons/iconsmenu.png";
import GradientBtn from "../Gradient Btn/GradientBtn";
import LoginButton from "../Gradient Btn/LoginButton";
import LogoutButton from "../Gradient Btn/LogoutButton";
function Navbar() {
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

  return (
    <>
      <nav className="flex justify-between items-center w-full px-5 bg-[#050618] fixed z-[1000]">
        <div>
          <img src={logo} alt="" className="w-16" />
        </div>
        <ul className="hidden gap-7 text-white md:flex font-thin">
          <li>
            <a
              href="#home"
              className=" hover:text-[#23DD9F] cursor-pointer hover:underline"
              onClick={scrollInToView}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#steps"
              className=" hover:text-[#23DD9F] cursor-pointer hover:underline"
              onClick={scrollInToView}
            >
              How it works
            </a>
          </li>
          <li>
            <a
              href="#feature"
              className=" hover:text-[#23DD9F] cursor-pointer hover:underline"
              onClick={scrollInToView}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#mission"
              className=" hover:text-[#23DD9F] cursor-pointer hover:underline"
              onClick={scrollInToView}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className=" hover:text-[#23DD9F] cursor-pointer hover:underline"
              onClick={scrollInToView}
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="flex">
          <GradientBtn
            placeholder="LogIn"
            onClick={() => loginWithRedirect()}
            className={"text-white"}
          />
          <img className="block md:hidden w-10 mx-4" src={HamMenu} alt="" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
