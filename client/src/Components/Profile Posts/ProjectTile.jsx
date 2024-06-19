import React from "react";
import { IoEye } from "react-icons/io5";
import cardSrc from "../../assets/AuctionroomImages/WonderKids Landing Page Exploration 1 (1).png";

export default function ProjectTile({ title, imgSrc, viewsCount }) {
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
  return (
    <div className="w-full p-2 rounded-3xl border-2 border-[#67879E] mb-8 break-inside-avoid bg-[#0CA3E7] bg-opacity-10 max-w-full">
      <div className="img rounded-2xl overflow-hidden">
      {isImageOrVideo(imgSrc) == "image" ? 
        <img
          src={imgSrc || cardSrc}
          alt={title}
          className="w-full h-full object-cover"
        /> : <video src={imgSrc} muted loop className="w-full h-full object-contain"></video>
      }
      </div>
      <div className="footer flex items-center justify-between p-2 pb-0">
        <div className="title">{title}</div>
        <div className="views flex items-center gap-1">
          <IoEye color="#67879E" />
          {viewsCount}
        </div>
      </div>
    </div>
  );
}
