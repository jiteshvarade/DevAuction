import React, { useRef, useState } from "react";
import background from "../../assets/AuctionroomImages/Rectangle.png";
import { Dropdown } from "primereact/dropdown";
import "./Auctionroom.css";
import axios from "axios";
import GradientBtn from "../Buttons/GradientBtn";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { RxCross2 } from "react-icons/rx";
import { saveAs } from 'file-saver';

const Download = ({ show, setshow }) => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const [fileid, setfileid] = useState("");

  const clickHandler = async () => {
    console.log(fileid);
    setshow(!show);
    const formData = new FormData();
    formData.append("fileID", fileid);

    // try {
    //   const response = await fetch("https://devauction.onrender.com/create/download", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       fileID:fileid
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   });
    //   console.log(response.data);
    //   // navigate(`/room/${response.data.RoomID}`)
    // } catch (error) {
    //   console.error(error.response ? error.response.data : error.message);
    // }
    try {

      const response = await axios({
        url : 'https://devauction.onrender.com/create/download',
        method : "POST",
        responseType : "blob",
        data : {fileID : fileid},
      });
      console.log(response)
      
      const filename = 'sourcecode.zip'

      try {

        saveAs(response.data, filename);
      } catch (error) {
        console.error('Error creating ZIP file:', error)
      }
      
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <div
      className={
        "flex justify-center items-center relative md:w-[900px] z-10 rounded-xl shadow-lg bg-[#050618]"
      }
    >
      <RxCross2
        className="absolute top-4  right-4 text-[24px]  z-20"
        onClick={() => {
          setshow(!show);
        }}
      />
      <div className="flex flex-col items-center gap-4 font-semibold md:w-[800px]  w-[300px] py-6 z-20 ">
        <div className="w-full text-[40px] text-left  text-white">Download</div>

        <div className="border shadow-white  text-white w-[100%] h-[18%] rounded-md bg-[#bec0dd0d]">
          <div className="flex flex-col gap-2 w-full p-6 ">
            <label className="text-[16px]">File ID</label>
            <input
              value={fileid}
              onChange={(e) => {
                setfileid(e.target.value);
              }}
              placeholder="Enter File......"
              className="bg-[#062541] rounded-full px-10 py-2 h-[30px] w-full md:w-14rem"
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

export default Download;
