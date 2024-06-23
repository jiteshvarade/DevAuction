import React, { useEffect, useState } from "react";
import profileImg from "../../assets/images/avatar-default-svgrepo-com.svg";
import GradientBtn from "../../Components/Buttons/GradientBtn";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import SkillsContainer from "./SkillsContainer";
import { RiNotificationLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import { ProgressSpinner } from "primereact/progressspinner";
import { useNavigate } from "react-router-dom";
import SERVER_URL from "../../contants.mjs";

export default function ProfileHero({
  resp,
  Data,
  showFollow,
  setShowFollow,
  showFollowing,
  setShowFollowing,
  showMenu,
  setShowMenu,
  showEdit,
  setShowEdit,
  searchprof = false,
  showcreatepro,
  setCreatePro,
  messageOnClickFunction,
}) {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const skill = Data?.userData?.Profile.Skills || [];
  const [follow, setfollow] = useState(false);
  // console.log(Data);

  const check = () => {
    const arr = Data?.userData?.Profile?.Followers || [];
    const data = arr.find((ele) => ele === user.email) || [];

    if (data.length) {
      setfollow(true);
    }
  };

  const followMe = async () => {
    const res = await fetch(`${SERVER_URL}/profile/follow`, {
      method: "POST",
      body: JSON.stringify({
        from: user.email,
        to: Data.userData.UserInfo.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    console.log(res);
    resp();
  };

  const unfollowMe = async () => {
    const res = await fetch(
      `${SERVER_URL}/profile/unFollow`,
      {
        method: "POST",
        body: JSON.stringify({
          from: user.email,
          to: Data.userData.UserInfo.email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    console.log(res);
    setfollow(!follow);
    resp();
  };

  useEffect(() => {
    check();
  }, [Data]);

  // console.log("hello");
  // console.log(user)

  // console.log(Data);

  return (
    <div className="sm:max-h-1/2 h-fit min-h-fit w-full relative text-white overflow-x-hidden">
      {!Data && (
        <div className="w-[100%] h-[700px] flex justify-center items-center ">
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="8"
            fill="#05081B"
            animationDuration=".5s"
          />
        </div>
      )}
      {Data && (
        <div>
          <div className="w-80 aspect-square rounded-full absolute left-20 -top-24 bg-[#0CA3E7] bg-opacity-30 blur-[200px] z-[100] lg:block hidden"></div>
          <div className="header flex items-center text-2xl gap-2 md:p-4 p-2 px-2 md:mx-12 justify-between md:border-b-2 border-gray-800">
            <IoMenu
              size="1.5rem"
              className="absolute top-[13px] left-3 md:hidden cursor-pointer z-20"
              onClick={() => setShowMenu(true)}
            />
            <div className="left flex items-center text-2xl gap-2">
              <FaLongArrowAltLeft
                className="opacity-0 md:opacity-100 z-0"
                onClick={() => navigate(-1)}
              />{" "}
              Profile
            </div>
            <div className="right flex items-center gap-2 pr-4">
              <div className="profilePic aspect-square md:w-12 w-8  bg-white rounded-full overflow-hidden">
                <img
                  src={user?.picture || profileImg}
                  alt={
                    user
                      ? `${user.name}'s profile image`
                      : "Default profile image"
                  }
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="profileContants flex xl:px-[90px] md:p-8 md:py-8 p-3 md:gap-12 gap-4 justify-between flex-wrap">
            <div className="profileDetails flex md:gap-12 gap-4">
              <div className="left">
                <div className="text-white img sm:h-52 sm:w-48 rounded-2xl overflow-hidden mb-1 w-28 h-[136px]">
                  <img
                    src={Data.userData.UserInfo.picture || profileImg}
                    alt={
                      user
                        ? `${Data.userData.UserInfo.name}'s profile image`
                        : "Default profile image"
                    }
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="designation opacity-0 sm:text-2xl font-semibold text-center text-base">
                  Founder of Abc
                </div>
              </div>
              <div className="right flex flex-col md:gap-4 gap-1">
                <div className="userName sm:text-4xl font-semibold text-xl">
                  {Data?.userData.UserInfo.given_name}
                </div>
                <div className="followersFollwingProjects flex gap-6 max-[340px]:flex-wrap">
                  <div className="projects flex gap-1 items-end flex-wrap justify-center">
                    <div className="count sm:text-2xl font-bold text-sm">
                      {Data?.userData.Profile.Projects.length}
                    </div>
                    <div className="heading sm:text-lg text-xs">Projects</div>
                  </div>
                  <div className="followers flex gap-1 items-end flex-wrap justify-center cursor-pointer">
                    <div className="count sm:text-2xl font-bold text-sm">
                      {Data?.userData.Profile.Followers.length}
                    </div>
                    <div
                      onClick={() => {
                        console.log("followers pe click kiya");
                        setShowFollow(!showFollow);
                      }}
                      className="heading sm:text-lg text-xs z-[500]"
                    >
                      Followers
                    </div>
                  </div>
                  <div className="following flex gap-1 items-end flex-wrap justify-center cursor-pointer">
                    <div className="count sm:text-2xl font-bold text-sm">
                      {Data?.userData.Profile.Following.length}
                    </div>
                    <div
                      onClick={() => {
                        setShowFollowing(!showFollowing);
                      }}
                      className="heading sm:text-lg text-xs z-[500]"
                    >
                      Following
                    </div>
                  </div>
                </div>
                <div className="description text-xs sm:text-base max-w-[30rem] text-gray-400">
                  {Data.userData.Profile.Bio}
                </div>
                <div className="skills flex flex-wrap gap-2 max-w-72">
                  {skill.map((elem) => {
                    return <SkillsContainer key={elem} skill={elem} />;
                  })}
                </div>
              </div>
            </div>
            <div className="profileActions flex gap-4 h-fit flex-wrap justify-center sm:w-fit w-full xl:justify-start">
              {searchprof && (
                <div className="flex gap-4">
                  {follow && (
                    <GradientBtn
                      placeholder="Unfollow"
                      onClick={unfollowMe}
                      className="text-white h-fit flex-1 max-w-28"
                    />
                  )}
                  {!follow && (
                    <GradientBtn
                      placeholder="Follow"
                      onClick={followMe}
                      className="text-white h-fit flex-1 max-w-28 z-[500]"
                    />
                  )}

                  <GradientBtn
                    placeholder="Message"
                    className="text-white h-fit flex-1 max-w-28 z-[500]"
                    onClick={messageOnClickFunction}
                  />
                </div>
              )}
              {!searchprof && (
                <div className="flex gap-4">
                  <GradientBtn
                    className="z-[500]"
                    placeholder="Edit Profile"
                    onClick={() => {
                      setShowEdit(!showEdit);
                    }}
                  />
                  <GradientBtn
                    className={"z-[500]"}
                    placeholder="Create project"
                    onClick={() => {
                      setCreatePro(!showcreatepro);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
