import React, { useEffect, useState } from "react";
import LongCard from "./LongCard";
import ShortCard from "./ShortCard";
import "./Slider.css";
import { Link } from "react-router-dom";
import GradientBtn from "../Buttons/GradientBtn";

const GallerySection = () => {

  const [projects, setProjects] = useState([]);
  async function fetchProjects() {
    try {
      const res = await fetch(
        "https://devauction.onrender.com/gallery/getProjects"
      );
      const projects = await res.json();
      // console.log(projects);
      setProjects(projects);
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
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp', 'tiff'];
    const videoExtensions = ['mp4', 'mov', 'avi', 'mkv', 'flv', 'wmv', 'webm', 'm4v'];

    // Extract the file extension from the URL
    const extension = url.split('.').pop().toLowerCase();

    // Check if the extension is in the image or video extensions array
    if (imageExtensions.includes(extension)) {
        return 'image';
    } else if (videoExtensions.includes(extension)) {
        return 'video';
    } else {
        return 'unknown';
    }
}

  return (
    <div className=" mt-10">
      <div className=" text-[12px] md:text-[18px] flex justify-evenly border-b-2 border-[#ffffff64] ">
        <div className="p-2">Overview</div>

        <div className="p-2">Apps</div>

        <div className="p-2">Websites</div>

        <div className="p-2">Featured Stores</div>
      </div>

      <div className="flex gap-4 mt-8 justify-center  md:justify-end">
        <GradientBtn placeholder="Buy" />
        <GradientBtn placeholder="Invest" />
      </div>
      <div className="text-center">
        <div className="mt-8 columns-auto gap-10 w-full p-2">
          {projects.map((elem, index) => {
            return (
              <LongCard
                assetSrc={elem.Image}
                offerPrice={formatNumber(elem.OfferPrice)}
                title={elem.Title}
                key={elem.Title + index}
                type={isImageOrVideo(elem.Image)}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-center">
        <GradientBtn placeholder="Browse More" />
      </div>
    </div>
  );
};

export default GallerySection;
