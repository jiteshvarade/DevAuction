import React, { useEffect ,useState} from "react";
import ProjectTile from "./ProjectTile";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProfilePosts({ className }) {
  const { user } = useAuth0();
  const [data,setdata] = useState([])

  const MyprojectData =  async () => {
    try{
      const res = await fetch("http://in1.localto.net:5947/profile/userProjects", {
        method: "POST",
        body: JSON.stringify({ email: user.email }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log(res) ;
      const newdata = await res.json();
      console.log(newdata.userProjects)
      setdata(newdata.userProjects)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect( () =>{
    MyprojectData();
  },[])


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
          "bg-[rgb(5,8,27)] h-fit w-full p-4 xl:columns-sm columns-[190px] gap-8 pt-8 " + ` ${projects.length !== 0 ? "" : "hidden"}`
        }
      >
        {
          data.length == 0 && 
          <div className="text-[24px]" >
            NO PROJECTS 
            </div>
        }
        {
          data.length != 0 && 
          data?.map((elem, index) => {
            return (
              <ProjectTile
                imgSrc={elem.Image}
                title={elem.Title}
                viewsCount={"₹" + elem.OfferPrice} 
                key={"project " + index}
              />
            );
          })
        }
      </div>
      <div className={'text-center text-gray-400 w-full p-4 ' + ` ${projects.length == 0 ? "" : "hidden"}`}>Nothing to see here</div>
    </div>
  );
}
