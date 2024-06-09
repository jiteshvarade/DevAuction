import React, { useState } from "react";
import ProfileHero from "../../Components/Profile hero/ProfileHero";
import ProfilePosts from "../../Components/Profile Posts/ProfilePosts";
import ProfileOffers from "../../Components/Profile offers/ProfileOffers";

export default function Profile({ showMenu, setShowMenu }) {
  const [explorerSection, setExplorerSection] = useState("Projects");

  return (
    <div className="bg-[#05081B] w-full">
      <ProfileHero setShowMenu={setShowMenu} showMenu={showMenu} />
      <div className="explorerSection h-full overflow-auto relative pt-[42px]">
        <div className="navlinksForExplorerSection flex items-center sticky top-0 w-full">
          <div
            className={
              "projects text-center text-white p-2 flex-1 active:text-gray-300 cursor-pointer " +
              ` ${
                explorerSection == "Projects"
                  ? "border-b-2 border-[#66bee3]"
                  : "border-b-2 border-[#072A47]"
              }`
            }
            onClick={() => setExplorerSection("Projects")}
          >
            Projects
          </div>
          <div
            className={
              "offers text-white p-2 flex-1 active:text-gray-300 cursor-pointer text-center  " +
              ` ${
                explorerSection == "Offers" ? "border-b-2 border-[#66bee3]" : "border-b-2 border-[#072A47]"
              }`
            }
            onClick={() => setExplorerSection("Offers")}
          >
            Offers
          </div>
        </div>
        <div>
          <ProfilePosts
            className={explorerSection == "Projects" ? "block" : "hidden"}
          />
          <ProfileOffers
            className={explorerSection == "Offers" ? "block" : "hidden"}
          />
        </div>
      </div>
    </div>
  );
}
