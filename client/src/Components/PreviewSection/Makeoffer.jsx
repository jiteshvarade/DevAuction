import React, { useRef, useState } from "react";
import background from "../../assets/AuctionroomImages/Rectangle.png";
import { Dropdown } from "primereact/dropdown";
// import "./Auctionroom.css";
import axios from "axios";
import GradientBtn from "../Buttons/GradientBtn";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { RxCross2 } from "react-icons/rx";
import CustomToast from "../../Components/Custom Toast/CustomToast";

const Makeoffer = ({ id, show, setshow }) => {
  const { user } = useAuth0();
  const [Amount, setAmount] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastDetails, setToastDetails] = useState({});

  function displayToast(msg, type) {
    setToastDetails((PrevState) => {
      return { msg, type };
    });
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }

  const clickHandler = async () => {
    console.log(user.email);
    console.log(Amount);
    console.log(id);

    try {
      const response = await fetch(
        "https://devauction.onrender.com/project/offers",
        {
          method: "POST",
          body: JSON.stringify({
            email: user.email,
            offer: Amount,
            projectID: id,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(response);
      if (!response.ok) {
        displayToast("Bid amount should be greater than offer price!", "red");
        return;
      }else{
        displayToast("Offer placed successfully!", "green");
        setshow(!show);
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };
  return (
    <div
      className={
        "flex justify-center items-center relative lg:w-[900px] z-10 rounded-xl shadow-lg bg-[#050618] p-4"
      }
    >
      <CustomToast
        className={showToast ? "right-10 opacity-100" : "-right-96 opacity-0"}
        msg={toastDetails.msg}
        type={toastDetails.type}
        setShowToast={setShowToast}
      />
      <RxCross2
        className="absolute top-4  right-4 text-[24px]  z-20"
        onClick={() => {
          setshow(!show);
        }}
      />
      <div className="flex flex-col items-center gap-4 font-semibold lg:w-[800px]  md:w-[400px] py-6 z-20 ">
        <div className="w-full text-[40px] text-left  text-white">
          Make Offer
        </div>

        <div className="border shadow-white  text-white w-[100%] h-[15%] rounded-md bg-[#bec0dd0d]">
          <div className="flex flex-col gap-2 w-full p-6 ">
            <label>Amount</label>
            <input
              value={Amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Enter Amount...."
              className="bg-[#062541] rounded-full px-10 py-2 h-[40px] w-full md:w-14rem"
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

export default Makeoffer;
