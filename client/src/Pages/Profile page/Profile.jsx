import React, { useState } from "react";
import ProfileHero from "../../Components/Profile hero/ProfileHero";
import ProfilePosts from "../../Components/Profile Posts/ProfilePosts";
import ProfileOffers from "../../Components/Profile offers/ProfileOffers";
import Follower from "../../Components/Follow/Follower";
import Following from "../../Components/Follow/Following"

export default function Profile({ showMenu, setShowMenu }) {
  const [explorerSection, setExplorerSection] = useState("Projects");
  const [showFollow, setShowFollow] = useState(false);
  const [showFollowing ,setShowFollowing] = useState(false) ;

  return (
    <div className="relative">
      {
        
          showFollow &&
          <div className='absolute w-full top-[150px] flex justify-center z-10' >
              <Follower showFollow={showFollow} setShowFollow={setShowFollow}/> 
          </div>
  
      }
      
      {
        
        showFollowing &&
        <div className='absolute w-full top-[150px] flex justify-center z-10' >
            <Following showFollowing={showFollowing} setShowFollowing={setShowFollowing}/> 
        </div>

      }
      <div className={`bg-[#05081B] w-full ${showFollow ? "blur-lg" :""} ${showFollowing ? "blur-lg":""}`}>
        <ProfileHero showFollow={showFollow} setShowFollow={setShowFollow} showFollowing={showFollowing} setShowFollowing={setShowFollowing} setShowMenu={setShowMenu} showMenu={showMenu} />
        <div className="explorerSection h-full overflow-auto relative pt-[42px]">
          <div className="navlinksForExplorerSection flex items-center sticky top-0 w-full">
            <div
              className={
                "projects text-center text-white p-2 flex-1 active:text-gray-300 cursor-pointer " +
                ` ${explorerSection == "Projects"
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
                ` ${explorerSection == "Offers" ? "border-b-2 border-[#66bee3]" : "border-b-2 border-[#072A47]"
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
    </div>
  );
}
