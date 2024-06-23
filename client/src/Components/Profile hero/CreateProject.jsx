import React, { useRef, useState } from "react";
import background from "../../assets/AuctionroomImages/Rectangle.png";
import { Dropdown } from "primereact/dropdown";
// import "./Auctionroom.css";
import axios from "axios";
import GradientBtn from "../Buttons/GradientBtn";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { RxCross2 } from "react-icons/rx";
import SERVER_URL from "../../contants.mjs";

const CreateProject = ({ show, setshow }) => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const [offer, setOffer] = useState("");
  const fileref = useRef(null);
  const [url, seturl] = useState("");
  const [title, settiltle] = useState("");
  const [link, setlink] = useState("");
  const [desc, setdesc] = useState("");
  let skills = [];

  function skillpush() {
    const data = [];
    document.querySelectorAll(".skills").forEach((e) => {
      if(e.value)
        {
          data.push(e.value)
        }
      });
    skills = data;
    console.log(skills);
  }

  const clickHandler = async () => {
    const data = {
      email: user.email,
      image: url,
      title: title,
      description: desc,
      link: link,
      offerPrice: offer,
    };
    console.log(data);
    // console.log(user.email);
    setshow(!show);
    const formData = new FormData();
    formData.append("file", fileref.current.files[0]);
    formData.append("offerPrice", offer);
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("link", link);
    formData.append("image", url);
    formData.append("email", user.email);
    console.log(formData);
    try {
      const response = await axios.post(
        `${SERVER_URL}/create/project`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div
      className={
        "flex justify-center items-center px-4 relative md:w-[900px] z-[150] rounded-xl shadow-lg bg-[#050618]"
      }
    >
      <RxCross2
        className="absolute top-4  right-4 text-[24px] z-[500]"
        onClick={() => {
          setshow(!show);
        }}
      />
      <div className="flex flex-col items-center gap-4 font-semibold md:w-[800px]  w-[300px] py-6 z-20 ">
        <div className="w-full text-[40px] text-left  text-white">
          Create Project
        </div>

        <div className="border shadow-white  text-white w-[100%] h-[18%] rounded-md bg-[#bec0dd0d]">
          <div className="flex flex-col gap-2 w-full p-6 ">
            <label>Upload Image</label>
            <input
              value={url}
              onChange={(e) => {
                seturl(e.target.value);
              }}
              placeholder="URL"
              className="bg-[#062541] rounded-full px-10 py-2 h-[40px] w-full md:w-14rem"
            />
          </div>
        </div>

        <div className="text-white flex flex-wrap gap-5 w-[100%] justify-evenly">
          <div className=" border w-full rounded-md md:w-[390px] bg-[#bec0dd0d] flex justify-center items-center ">
            <div className="flex flex-col w-full gap-2 px-6 py-4 ">
              <label className=" text-left">Offer price</label>
              <input
                value={offer}
                onChange={(e) => {
                  setOffer(e.target.value);
                }}
                placeholder="Enter Price"
                className="bg-[#062541] rounded-full px-10 py-2 w-full md:w-14rem"
              />
            </div>
          </div>

          <div className="border w-full rounded-md md:w-[390px] bg-[#bec0dd0d] flex justify-center items-center">
            <div className="flex flex-col gap-2 px-6 py-4  ">
              <label>Project Title</label>
              <input
                value={title}
                onChange={(e) => {
                  settiltle(e.target.value);
                }}
                placeholder="Project Title"
                className="bg-[#062541] rounded-full px-10 py-2 w-full md:w-14rem"
              />
            </div>
          </div>
        </div>

        <div className="text-white flex flex-wrap gap-5 w-[100%] justify-between">
          <div className=" border w-full rounded-md md:w-[390px] bg-[#bec0dd0d] flex justify-center items-center">
            <div className="flex flex-col gap-2 w-full px-6 p-4 ">
              <label>Project Link</label>
              <input
                value={link}
                onChange={(e) => {
                  setlink(e.target.value);
                }}
                placeholder="Add Project link"
                className="bg-[#062541] rounded-full px-10 py-2 w-full md:w-14rem"
              />
            </div>
          </div>

          <div className="border w-full rounded-md md:w-[390px] bg-[#bec0dd0d] flex justify-center items-center">
            <div className="flex flex-col gap-2 w-full px-6 py-4 ">
              <label>Source Code</label>
              <div className="relative">
                <input
                  type="file"
                  ref={fileref}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="bg-[#062541] rounded-full px-10 py-2 w-full md:w-14rem flex items-center">
                  <span className="text-[#ffffff7f]">
                    {"sourceCodeFile" || "Upload Source Code"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border w-full px-4 rounded-xl bg-[#0CA3E7] bg-opacity-[7%] py-2 mb-2">
          <label className="">Select Tags</label>
          <div id="skill" className="py-2 flex flex-wrap gap-2">
                  {/* <input placeholder='Html' type="text" className='w-[120px] px-4 rounded-xl border-none outline-none bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white]' />
                                    <input placeholder='Css' type="text" className='w-[120px] px-4 rounded-xl border-none outline-none bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white]' />
                                    <input placeholder='JavaScript' type="text" className='w-[120px] px-4 rounded-xl border-none outline-none bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white]' />
                                    <input placeholder='Phython' type="text" className='w-[120px] px-4 rounded-xl border-none outline-none bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white]' /> */}
                  <span
                    onClick={() => {
                      const inputText = document.createElement("input");
                      inputText.setAttribute("type", "text");


                      inputText.addEventListener("keydown", (event) => {
                        if (event.key === "Enter") {
                          skillpush();
                        }
                      });


                      inputText.setAttribute(
                        "Class",
                        "skills w-[120px] px-4 rounded-xl border-none outline-none bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white]"
                      );
                      document.querySelector("#skill").appendChild(inputText);
                    }}
                    className="px-3 rounded-xl cursor-pointer bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white] font-bold text-xl"
                  >
                    +
                  </span>
                </div>
        </div>

        <div className="border shadow-white  text-white w-[100%] h-[18%] rounded-md bg-[#bec0dd0d]">
          <div className="flex flex-col gap-2 w-full p-6 ">
            <label>Project Description</label>
            <textarea
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
              rows="3"
              placeholder="Project description"
              className=" resize-none bg-[#062541] rounded-full px-10 py-2 h-[80px] w-full md:w-14rem"
            />
          </div>
        </div>

        <div className="w-full text-left">
          <GradientBtn
            placeholder="Submit"
            className="text-white"
            onClick={clickHandler}
          />
        </div>
      </div>

      <img
        className="absolute bottom-0 w-full h-auto md:h-full z-0  "
        alt=""
        src={background}
      />
    </div>
  );
};

export default CreateProject;
