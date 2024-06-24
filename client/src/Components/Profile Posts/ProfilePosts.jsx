import React, { useEffect, useState } from "react";
import ProjectTile from "./ProjectTile";
import { useAuth0 } from "@auth0/auth0-react";
import { ProgressSpinner } from "primereact/progressspinner";
import SERVER_URL from "../../contants.mjs";

export default function ProfilePosts({ Data, searchprof, className, user }) {
  // const { user } = useAuth0();
  const [data, setdata] = useState([]);
  console.log(user)

  const MyprojectData = async () => {
    try {
      const res = await fetch(
        `${SERVER_URL}/profile/userProjects`,
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    MyprojectData();
  }, [user]);

  return (
    <div className={className}>
      {!data && (
        <div className="w-[100%] h-[700px] flex justify-center items-center ">
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="8"
            fill="#05081B"
            animationDuration=".5s"
          />
        </div>
      )}
      {data && <div
        className={
          "bg-[rgb(5,8,27)] h-fit w-full columns-[190px] p-4 min-[700px]:columns-[344px] gap-4"
        }
      >
        <div>
          {data.length != 0 ?
            data.map((elem, index) => {
              if(elem)
              {return (
                <ProjectTile
                  imgSrc={elem.Image}
                  title={elem.Title}
                  viewsCount={"₹" + elem.OfferPrice}
                  key={"project " + index}
                />
              );}
            }): <div className="w-full text-gray-500 text-center pt-4" style={{columnSpan: "all"}}>Nothing to see here!</div>}
        </div>
      </div>}
    </div>
  );
}
