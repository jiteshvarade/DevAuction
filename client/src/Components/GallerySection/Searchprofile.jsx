import React, { useEffect, useState } from "react";
import ProfileHero from "../../Components/Profile hero/ProfileHero";
import ProfilePosts from "../../Components/Profile Posts/ProfilePosts";
import { useParams } from "react-router-dom";
import ProfileOffers from "../../Components/Profile offers/ProfileOffers";
import Follower from "../../Components/Follow/Follower";
import Following from "../../Components/Follow/Following";
import { useAuth0 } from "@auth0/auth0-react";
import { ProgressSpinner } from "primereact/progressspinner";
import { useMenuContext } from "../../context/MenuContextProvider";
import ProfileEdit from "../../Components/ProjectAndEProfile/ProfileEdit";

export default function Searchprofile(  ) {
  const params = useParams() ; 
  // console.log(params.id);  

  const { showMenu, setShowMenu } = useMenuContext();
  const [explorerSection, setExplorerSection] = useState("Projects");
  const [showFollow, setShowFollow] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const { user, isLoading } = useAuth0();
  const [Data, setData] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const searchprof = true ; 
  

  const response = async () => { 
    console.log(params.id)
    const res = await fetch("http://in1.localto.net:5947/profile/getUsersById", {
      method: "POST",
      body: JSON.stringify({ id: params.id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    // console.log(data)
    setData(data);
  };

  useEffect(() => {
    response();
  }, [params]);


  return (
    <div className="relative">
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
          {showEdit && (
            <div className="absolute w-full flex justify-center z-20 top-[200px]">
              <ProfileEdit
                resp={response}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
              />
            </div>
          )}
          {showFollow && (
            <div className="absolute w-full top-[150px] flex justify-center z-10">
              <Follower
                Data={Data}
                showFollow={showFollow}
                setShowFollow={setShowFollow}
              />
            </div>
          )}
          {showFollowing && (
            <div className="absolute w-full top-[150px] flex justify-center z-10">
              <Following
                showFollowing={showFollowing}
                setShowFollowing={setShowFollowing}
              />
            </div>
          )}

          <div
            className={`bg-[#05081B] w-full ${showFollow ? "blur-lg" : ""} 
            ${showFollowing ? "blur-lg" : ""} ${showEdit ? "blur-lg" : ""} `}
          >
            <ProfileHero
              resp={response}
              Data={Data}
              showFollow={showFollow}
              setShowFollow={setShowFollow}
              showFollowing={showFollowing}
              setShowFollowing={setShowFollowing}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              showEdit={showEdit}
              setShowEdit={setShowEdit}
              searchprof={searchprof}
            />

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
                      explorerSection == "Offers"
                        ? "border-b-2 border-[#66bee3]"
                        : "border-b-2 border-[#072A47]"
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
      )}
    </div>
  );
}
