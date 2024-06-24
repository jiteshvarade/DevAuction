import React, { useEffect, useState } from "react";
import Table from "./Table";
import GradientBtn from "../Buttons/GradientBtn";
import "./Preview.css";
import { useNavigate, useParams } from "react-router-dom";
import SERVER_URL from "../../contants.mjs";

const PreviewSec = ({ show, setshow, tableData }) => {
  const navigate = useNavigate();
  const params = useParams();
  //   console.log("hello");
  // console.log(params.id);
  const [data, setdata] = useState([]);
  const [arr, setarr] = useState([]);
  const [url, seturl] = useState("");
  const [eml, seteml] = useState("");
  const [use, setuse] = useState([]);

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
    // console.log(params.id);
    try {
      const res = await fetch(
        `${SERVER_URL}/gallery/getProjectById`,
        {
          method: "POST",
          body: JSON.stringify({ projectID: params.id }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      // console.log(res);
      const newdata = await res.json();
      setdata(newdata);
      setarr(newdata.Tags);
      console.log(newdata);
      seteml(newdata.Owner);
      seturl(newdata.Image);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchuser = async () => {
    console.log(eml);
    try {
      const res = await fetch(`${SERVER_URL}/profile`, {
        method: "POST",
        body: JSON.stringify({ email: eml }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const newdata = await res.json();
      setuse(newdata.userData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    response();
  }, []);
  useEffect(() => {
    fetchuser();
  }, [eml])

  function redirectToProfile(){
    navigate(`/homepage/gallery/searchprofile/${use._id}`)
  }

  return (
    <>
      {data && (
        <div className="mt-6 flex h-[560px] justify-center gap-4 flex-wrap">
          <div className="border-[#223534] w-[775px] flex flex-col gap-2">
            <div className="text-[34px] font-semibold flex justify-between items-center">
              {data.Title}{" "}
              {/* <GradientBtn
                className={"text-white w-fit h-10 text-base cursor-default"}
                placeholder={<span>&#8377; {data.OfferPrice} </span>}
              /> */}
              <span className="font-semibold text-lg px-3 py-2 border-2 border-[#0ca2e739] bg-transparent"> &#8377; {data.OfferPrice}</span>
            </div>
            <div className="text-[#0CA3E7] text-justify flex flex-wrap">
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
            </div>
            <div className="border border-[#223534] mt-3 mb-4"></div>
            <div className="flex justify-between mb-6 ">
              <div className={`flex gap-2 justify-center items-center ${use ? "cursor-pointer" : "cursor-not-allowed"}`} onClick={use ? redirectToProfile : ""}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
                  {use ? (
                    <img
                      className="h-[100%] w-[100%] rounded-full border-2 border-white"
                      src={use?.UserInfo?.picture}
                      alt=""
                    />
                  ) : (
                    <div className="w-full h-full animate-pulse bg-gray-500 rounded-full"></div>
                  )}
                </span>
                <div>
                  {" "}
                  {use ? (
                    use.UserInfo?.name
                  ) : (
                    <span className="inline-block w-52 h-5 animate-pulse rounded-xl bg-gray-500 mt-1"></span>
                  )}{" "}
                </div>
              </div>

              <GradientBtn
                placeholder="Make offer"
                onClick={() => {
                  setshow(!show);
                }}
              />
            </div>
            <div className="border-2  h-fit rounded-2xl border-[#223534] overflow-hidden  ">
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
              <GradientBtn
                placeholder="Live Preview"
                onClick={() => {
                  window.open(data.Link);
                }}
              />
            </div>
          </div>
          <Table tableData={tableData} />
        </div>
      )}
    </>
  );
};

export default PreviewSec;
