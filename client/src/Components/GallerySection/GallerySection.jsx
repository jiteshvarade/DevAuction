import React, { useEffect, useState } from "react";
import LongCard from "./LongCard";
import ShortCard from "./ShortCard";
import "./Slider.css";
import { Link } from "react-router-dom";
import GradientBtn from "../Buttons/GradientBtn";
import Preview from "../../Pages/preview/Preview";
import SearchIcon from "../../assets/GalleryImages/search 02.png";

const GallerySection = () => {
  const [data,setdata] = useState([])
  const [projects, setProjects] = useState([]);
  const [search, setsearch] = useState('');

  async function fetchProjects() {
    try {
      const res = await fetch(
        "https://devauction.onrender.com/gallery/getProjects"
      );
      const projects = await res.json();
      console.log(projects);
      setdata(projects);
      setProjects(projects)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  function formatNumber(num) {
    if (num >= 1000 && num < 1000000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    } else if (num >= 1000000 && num < 1000000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    } else {
      return num.toString();
    }
  }

  function isImageOrVideo(url) {
    // Define arrays of image and video file extensions
    const imageExtensions = [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "bmp",
      "svg",
      "webp",
      "tiff",
    ];
    const videoExtensions = [
      "mp4",
      "mov",
      "avi",
      "mkv",
      "flv",
      "wmv",
      "webm",
      "m4v",
    ];

    // Extract the file extension from the URL
    const extension = url.split(".").pop().toLowerCase();

    // Check if the extension is in the image or video extensions array
    if (imageExtensions.includes(extension)) {
      return "image";
    } else if (videoExtensions.includes(extension)) {
      return "video";
    } else {
      return "unknown";
    }
  }
  function searchProjects() {
    if(search == '')
    {
      alert("Enter something")
      return;
    }
    
    let temparry;
    const lowerCaseSearchTerm = search.toLowerCase();

    temparry = data.filter((project) =>
      project.Tags.some((tag) =>
        tag.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
    // console.log(temparry);
    setProjects(temparry);
  }

  return (
    <div className=" mt-10">
      <div className=" text-[12px] md:text-[18px] flex justify-evenly border-b-2 border-[#ffffff64] ">
        <div className="p-2">Projects</div>
      </div>
      <div className="flex gap-4 mt-8 justify-between items-center w-full flex-wrap">
        <div className="relative">
          <input
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchProjects();
              }
            }}
            className="w-full lg:w-[300px] md:w-[240px] py-4 px-14 rounded-lg bg-[#0ca2e749] text-white "
            placeholder="Find projects....."
          ></input>
          <img className="absolute top-4 left-4" src={SearchIcon} alt="" />
        </div>
      </div>
      <div className="text-center">
        <div className="mt-8 columns-3xs gap-10 w-full p-2">
          {projects.length == 0 && (
            <div className="font-semibold text-[24px]">SEARCH A VALID TAG</div>
          )}
          { projects.length != 0 && 
          projects.map((elem, index) => {
            return (
              <Link to={`preview/${elem.ProjectID}`}>
                <LongCard
                  assetSrc={elem.Image}
                  offerPrice={formatNumber(elem.OfferPrice)}
                  title={elem.Title}
                  key={elem.Title + index}
                  type={isImageOrVideo(elem.Image)}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        {/* <GradientBtn placeholder="Browse More" /> */}
      </div>
    </div>
  );
};

export default GallerySection;
