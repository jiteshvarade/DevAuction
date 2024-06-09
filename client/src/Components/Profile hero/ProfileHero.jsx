import React from "react";
import profileImg from "../../assets/GalleryImages/V9wr.gif";
import GradientBtn from "../../Components/Buttons/GradientBtn";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import SkillsContainer from "./SkillsContainer";
import { RiNotificationLine } from "react-icons/ri";

export default function ProfileHero({ showMenu, setShowMenu }) {
  const skills = [
    "prototyping",
    "lifestyle",
    "editors choice",
    "sponsered",
    "confidential",
  ];
  return (
    <div className="sm:max-h-1/2 h-fit min-h-fit w-full relative">
      <div className="header flex items-center text-2xl gap-2 md:p-4 p-2 px-2 md:mx-12 md:border-b-2 border-[#66bee3] justify-between">
        <IoMenu
          size="1.5rem"
          className="absolute top-[13px] left-3 md:hidden cursor-pointer z-20"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div className="left flex items-center text-2xl gap-2">
          <FaLongArrowAltLeft className="opacity-0 md:opacity-100 z-0" />{" "}
          Profile
        </div>
        <div className="right flex items-center gap-2 pr-4">
          <div className="notifications aspect-square md:w-12 w-8  bg-white rounded-full flex items-center justify-center"><RiNotificationLine color="#7E7E7E"  /></div>
          <div className="profilePic aspect-square md:w-12 w-8  bg-white rounded-full"></div>
        </div>
      </div>
      <div className="profileContants flex xl:px-[90px] md:p-8 md:py-8 p-3 md:gap-12 gap-4 justify-between flex-wrap">
        <div className="profileDetails flex md:gap-12 gap-4">
          <div className="left">
            <div className="img sm:h-52 sm:w-48 rounded-2xl overflow-hidden mb-1 w-28 h-[136px]">
              <img
                src={profileImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="designation sm:text-2xl font-semibold text-center text-base">
              Founder of Abc
            </div>
          </div>
          <div className="right flex flex-col md:gap-4 gap-1">
            <div className="userName sm:text-4xl font-semibold text-xl">
              Berozgaar singh
            </div>
            <div className="followersFollwingProjects flex gap-6 max-[340px]:flex-wrap">
              <div className="projects flex gap-1 items-end flex-wrap justify-center">
                <div className="count sm:text-2xl font-bold text-sm">106</div>
                <div className="heading sm:text-lg text-xs">Projects</div>
              </div>
              <div className="followers flex gap-1 items-end flex-wrap justify-center">
                <div className="count sm:text-2xl font-bold text-sm">360</div>
                <div className="heading sm:text-lg text-xs">Followers</div>
              </div>
              <div className="following flex gap-1 items-end flex-wrap justify-center">
                <div className="count sm:text-2xl font-bold text-sm">960</div>
                <div className="heading sm:text-lg text-xs">Following</div>
              </div>
            </div>
            <div className="description text-xs sm:text-base">
              <b>UI/UX</b>
              <p>Crafting Intuitive Experiences | Passionate</p>
              <p> About Design & Usability | Bringing Ideas to</p>
              <p>Life One Pixel at a Time | Let's Create!</p>
            </div>
            <div className="skills flex flex-wrap gap-2 max-w-72">
              {skills.map((elem) => {
                return <SkillsContainer key={elem} skill={elem} />;
              })}
            </div>
          </div>
        </div>
        <div className="profileActions flex gap-4 h-fit flex-wrap justify-center sm:w-fit w-full xl:justify-start">
          <GradientBtn
            placeholder="Follow"
            className="text-white h-fit flex-1 max-w-28"
          />
          <GradientBtn
            placeholder="Message"
            className="text-white h-fit flex-1 max-w-28"
          />
        </div>
      </div>
    </div>
  );
}
