import React from "react";
import Gif from "../../assets/GalleryImages/V9wr.gif";
import eye from "../../assets/AuctionroomImages/mdi_eye.png";

const LongCard = ({ title, offerPrice, assetSrc, type }) => {
  return (
    <div className="border-2 mb-4  inline-block bg-[#0ca2e739] border-[#0ca2e739] rounded-2xl w-full">
      <div className="w-full h-full p-3 flex flex-col gap-2">
        <div className="border bg-[#a4f518] rounded-2xl w-full h-fit overflow-hidden">
          {type == "image" ? (
            <img
              className="h-[100%] w-[100%] rounded-2xl object-cover"
              src={assetSrc || Gif}
              alt=""
            />
          ) : (
            <video
              src={assetSrc}
              autoPlay
              muted
              loop
              className="w-full h-fit object-cover"
            ></video>
          )}
        </div>
        <div className="flex justify-between ">
          <div className=" font-bold ">{title || "Wonder Kids Website"}</div>
          <div className="flex gap-2">
            {/* <img src={eye} alt="" /> */}
            &#8377;
            <span>{offerPrice || "Free"}</span>
          </div>
        </div>
        {/* <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border-2 border-white">
            A
          </span>
          <div>MyBrandanova.com</div>
        </div> */}
      </div>
    </div>
  );
};

export default LongCard;
