import React, { useEffect, useState } from "react";
import ProjectTile from "./ProjectTile";
import { useAuth0 } from "@auth0/auth0-react";
import { ProgressSpinner } from "primereact/progressspinner";

export default function ProfilePosts({ Data, searchprof, className }) {
  const { user } = useAuth0();
  const [data, setdata] = useState([]);
  const [sdata, setsdata] = useState([]);

  

  const MyprojectData = async () => {
    try {
      const res = await fetch(
        "https://devauction.onrender.com/profile/userProjects",
        {
          method: "POST",
          body: JSON.stringify({ email: user.email }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(res);
      const newdata = await res.json();
      console.log(newdata.userProjects);
      setdata(newdata.userProjects);

      const newsdata = Data?.userData.Profile.Projects||[]
      console.log("hello")
      console.log(newsdata)
      setsdata(newsdata)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    MyprojectData();
  }, [Data]);

  const projects = [
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
  ];

  return (
    <div className={className}>
      <div
        className={
          "bg-[rgb(5,8,27)] h-fit w-full p-4 xl:columns-sm columns-[190px] gap-8 pt-8 " +
          ` ${projects.length !== 0 ? "" : "hidden"}`
        }
      >
        <div>
          {searchprof && (
            <div>
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
              {Data  && sdata.length == 0 && (
                <div className="text-[24px]">NO PROJECTS</div>
              )}
              {Data && sdata.length != 0 &&
                data?.map((elem, index) => {
                  return (
                    <ProjectTile
                      imgSrc={elem.Image}
                      title={elem.Title}
                      viewsCount={"₹" + elem.OfferPrice}
                      key={"project " + index}
                    />
                  );
                })}
            </div>
          )}
          {!searchprof && (
            <div>
              {data.length == 0 && (
                <div className="text-[24px]">NO PROJECTS</div>
              )}
              {data.length != 0 &&
                data?.map((elem, index) => {
                  return (
                    <ProjectTile
                      imgSrc={elem.Image}
                      title={elem.Title}
                      viewsCount={"₹" + elem.OfferPrice}
                      key={"project " + index}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
      <div
        className={
          "text-center text-gray-400 w-full p-4 " +
          ` ${projects.length == 0 ? "" : "hidden"}`
        }
      >
        Nothing to see here
      </div>
    </div>
  );
}
