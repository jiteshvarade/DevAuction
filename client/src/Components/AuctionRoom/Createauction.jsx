import React, { useRef, useState } from "react";
import background from "../../assets/AuctionroomImages/Rectangle.png";
import { Dropdown } from "primereact/dropdown";
import "./Auctionroom.css";
import axios from "axios";
import GradientBtn from "../Buttons/GradientBtn";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { RxCross2 } from "react-icons/rx";

const Createauction = ({ show, setshow }) => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const [plan, setplan] = useState(null);
  const fileref = useRef(null);
  const [url, seturl] = useState("");
  const [title, settiltle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setdesc] = useState("");
  const plans = [
    { name: "Free Rooms", code: "false" },
    // { name: "Platinum Rooms", code: "true" },
  ];
  const clickHandler = async () => {
    const data = {
      image: url,
      title: title,
      date: date,
      file: fileref.current.files[0],
      description: desc,
      premium: plan,
    };
    console.log(user.email);
    setshow(!show);
    const formData = new FormData();
    formData.append("file", fileref.current.files[0]);
    formData.append("date", date);
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("premium", plan.code);
    formData.append("image", url);
    formData.append("email", user.email);
    console.log(formData);
    try {
      const response = await axios.post('https://devauction.onrender.com/create/room', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      navigate(`/room/${response.data.RoomID}`)
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <div
      className={
        "flex justify-center items-center relative md:w-[900px] z-10 rounded-xl shadow-lg bg-[#050618]"
      }
    >
      <RxCross2 className="absolute top-4  right-4 text-[24px]  z-20" onClick={() => {
        setshow(!show)
      }} />
      <div className="flex flex-col items-center gap-4 font-semibold md:w-[800px]  w-[300px] py-6 z-20 ">
        <div className="w-full text-[40px] text-left  text-white">
          Create Auction
        </div>

        <div className="border shadow-white  text-white w-[100%] h-[15%] rounded-md bg-[#bec0dd0d]">
          <div className="flex flex-col gap-2 w-full p-6 ">
            <label>Upload Image</label>
            <input
              value={url}
              onChange={(e) => {
                seturl(e.target.value);
              }}
              placeholder="URL"
              className="bg-[#062541] rounded-full px-10 py-2 h-[30px] w-full md:w-14rem"
            />
          </div>
        </div>

        <div className="text-white flex flex-wrap gap-6 w-[100%] justify-evenly">
          <div className=" border w-full rounded-md md:w-[380px] bg-[#bec0dd0d] flex justify-center items-center ">
            <div className="flex flex-col w-full gap-2 px-6 py-2 ">
              <label className=" text-left">Select Room</label>
              <Dropdown
                value={plan}
                onChange={(e) => setplan(e.target.value)}
                options={plans}
                optionLabel="name"
                itemTemplate={(option) => (
                  <div className="custom-dropdown-item">{option.name}</div>
                )}
                placeholder="Rooms"
                className="rounded-full custom-dropdown text-white bg-[#062541] px-10 py-1   w-full md:w-14rem"
              />
            </div>
          </div>

          <div className="border w-full rounded-md md:w-[380px] bg-[#bec0dd0d] flex justify-center items-center">
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

        <div className="text-white flex flex-wrap gap-6 w-[100%] justify-between">
          <div className=" border w-full rounded-md md:w-[380px] bg-[#bec0dd0d] flex justify-center items-center">
            <div className="flex flex-col gap-2 w-full p-6 ">
              <label>Time & Date</label>
              <input
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                min={getTodayDate()}
                className="bg-[#062541] rounded-full px-10 py-2 w-full md:w-14rem"
                type="date"
              />
            </div>
          </div>

          <div className="border w-full rounded-md md:w-[380px] bg-[#bec0dd0d] flex justify-center items-center">
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

        <div className="border shadow-white  text-white w-[100%] h-[15%] rounded-md bg-[#bec0dd0d]">
          <div className="flex flex-col gap-2 w-full px-6 py-2 ">
            <label>Project Description</label>
            <textarea
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
              rows="1"
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

export default Createauction;
