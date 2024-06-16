import React, { useEffect, useState } from "react";
import Table from "./Table";
import GradientBtn from "../Buttons/GradientBtn";
import "./Preview.css";
import { useParams } from "react-router-dom";

const PreviewSec = () => {
  const params = useParams();
//   console.log("hello");
  console.log(params.id);
  const [data, setdata] = useState([]);
  const [arr, setarr] = useState([]);
  const [url, seturl] = useState("");
  const [eml, seteml] = useState("");
  const [use,setuse] = useState([]);

  function isImageOrVideo() {
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
    // console.log(url)
    const extension = url.split(".").pop().toLowerCase();

    if (imageExtensions.includes(extension)) {
      return "image";
    } else if (videoExtensions.includes(extension)) {
      return "video";
    } else {
      return "unknown";
    }
  }

  const response = async () => {
    console.log(params.id);
    try {
      const res = await fetch(
        "https://devauction.onrender.com/gallery/getProjectById",
        {
          method: "POST",
          body: JSON.stringify({ projectID: params.id }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(res);
      const newdata = await res.json();
      setdata(newdata.Owner);
      setarr(newdata.Tags);
      console.log(newdata);
      seteml(newdata.Owner );
      seturl(newdata.Image);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchuser = async () => {
    console.log("Baaji pala")
    console.log(eml)
    try {
      const res = await fetch("https://devauction.onrender.com/profile", {
        method: "POST",
        body: JSON.stringify({ email: eml }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log(res)
      const newdata = await res.json() ; 
      console.log("hello")
      console.log(newdata.userData);
      setuse(newdata.userData);
    } catch (error) {
      console.log(error);
    }
  }; 

  useEffect(() => {
    response();
    fetchuser();
  }, [data]);

  return (
    <div className="mt-6 flex h-[560px] justify-center gap-4  flex-wrap ">
      {!data && <div>spinner</div>}
      {data && (
        <div className="border-[#223534] w-[775px] flex flex-col gap-2">
          <div className="text-[34px] font-semibold">Wonder Kids Website</div>
          <div className="text-[#0CA3E7] text-justify flex flex-wrap">
            {/* Wonder Kids is Vibrant , interactive website design to provide a
            safe and engaging online environment for children aged 3-12. The
            platform aims to combine fun and learning through a vareity of
            educational games, activites and resourses */}
            {data.Description}
          </div>
          <div className="flex gap-2 mt-2 w-[300px] md:w-[500px] lg:w-[660px] overflow-scroll no-scrollbar ">
            {arr.map((ele) => {
              return (
                <div className="border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ">
                  {ele}
                </div>
              );
            })}
            {/* <div className="border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ">
              Ecommerce
            </div>
            <div className="border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ">
              Lifestyle
            </div>
            <div className="border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ">
              Editors Choice
            </div>
            <div className="border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ">
              Sponsored
            </div>
            <div className="border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ">
              Confidential
            </div> */}
          </div>
          <div className="border border-[#223534] mt-3 mb-4"></div>
          <div className="flex justify-between mb-6 ">
            <div className="flex gap-2 justify-center items-center">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border-2 border-white">
                    <img className='h-[100%] w-[100%] rounded-full' src={use?.UserInfo?.picture} alt="" />
              </span>
              <span> {use?.UserInfo?.name} </span>
            </div>

            <GradientBtn placeholder="Make offer" />
          </div>
          <div className="border-2  h-fit rounded-2xl border-[#223534] overflow-hidden  ">
            {/* <div className="w-[100%] h-[100%] bg-[#223534] rounded-2xl "></div> */}
            {isImageOrVideo() == "image" ? (
              <img
                className="h-[100%] w-[100%] rounded-2xl object-cover"
                src={data.Image}
                alt=""
              />
            ) : (
              <video
                src={data.Image}
                autoPlay
                muted
                loop
                className="w-full h-fit object-cover "
              ></video>
            )}
          </div>
          <div className="flex justify-center gap-4 mb-4 mt-4 ">
            {/* <GradientBtn placeholder="Screen Shot" /> */}
            <GradientBtn placeholder="Live Preview" />
          </div>
        </div>
      )}

      <Table />
    </div>
  );
};

export default PreviewSec;
