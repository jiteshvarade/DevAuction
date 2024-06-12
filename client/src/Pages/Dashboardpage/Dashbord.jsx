import React, { useEffect, useState } from "react";
import LeftNavbar from "../../Components/Dashbord/LeftNavbar";
import EarningCards from "../../Components/Dashbord/EarningCards";
import Header from "../../Components/Dashbord/Header";
import Cradites from "../../Components/Dashbord/Cradites";
import { useAuth0 } from "@auth0/auth0-react";
import Auctionrooms from "../../Components/AuctionRoom/Auctionrooms";
import Highestbidder from "../../Components/AuctionRoom/Highestbidder";
import Createauction from "../../Components/AuctionRoom/Createauction";
// import Offers from '../../Components/Dashbord/Offers'
import { useSocket } from "../../context/SocketProvider";
import { ProgressSpinner } from "primereact/progressspinner";

function Dashbord({ showMenu, setShowMenu }) {
  
  const socket = useSocket();
  const [isnav, setisnav] = useState(false);
  const [show, setshow] = useState(false);
  const { user } = useAuth0();
  const [data, setdata] = useState(null);
  const [avg, setavg] = useState(0);
  const [total, settotal] = useState(0);
  const [totalearn, settotalearn] = useState(0);
  const [credits, setcredits] = useState(0);
  const [trans, settrans] = useState();

  // https://devauction.onrender.com/profile
  // console.log("hi");

  const userEmail = user?.email;
  const response = async () => {
    const res = await fetch("https://devauction.onrender.com/profile", {
      method: "POST",
      body: JSON.stringify({ email: userEmail }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const userData = await res.json();
    console.log(userData?.userData?.UserInfo.email);
    if (userData) {
      socket.emit("user:connected", {
        email: userData?.userData?.UserInfo.email,
      });
    }
    setdata(userData);
    setcredits(userData.userData?.Profile.Credits);

    if (userData.userData?.Profile.Transactions.length != 0) {
      settrans(userData.userData?.Profile.Transactions);
    }

    let avgspend = 0;
    let totalspend = 0;
    const arr1 = userData.userData?.Profile.Spendings;

    if (arr1?.length != 0) {
      for (let i = 0; i < arr1?.length; i++) {
        totalspend = totalspend + arr1[i]?.Amount;
      }
      avgspend = totalspend / arr1.length;
      setavg(avgspend);
      settotal(totalspend);
    }

    let totalEarn = 0;
    const arr2 = userData.userData?.Profile.Earnings;

    if (arr2?.length != 0) {
      for (let i = 0; i < arr2?.length; i++) {
        totalEarn = totalEarn + arr2[i]?.Amount;
      }
      settotalearn(totalEarn);
    }
  };

  useEffect(() => {
    response();
  }, [user]);

  return (
    <div className=" ">
      {!user && (
        <div className="w-[100%] h-[700px] flex justify-center items-center ">
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="8"
            fill="#05081B"
            animationDuration=".5s"
          />
        </div>
      )}
      {user && (
        <div id="main" className="flex h-screen">
          {show && (
            <div className="absolute w-full flex justify-center  ">
              <Createauction show={show} setshow={setshow} />
            </div>
          )}
          {/* navbar */}

          {/* <LeftNavbar show={show} isnav={isnav} setisnav={setisnav} /> */}

          <div
            className={`w-[100%] overflow-y-scroll  border-l-2 border-[#4b4c59] bg-[#050618] mg:px-10 pb-10 text-white ${
              show ? "blur-xl" : ""
            }`}
          >
            <Header
              Username={user?.given_name}
              UserImg={user?.picture}
              isnav={showMenu}
              setisnav={setShowMenu}
            />

            {/* earnings cards */}
            <EarningCards
              earningAmount={totalearn}
              spandAmount={total}
              avgAmount={avg}
            />

            {/* <Auction /> */}
            <Auctionrooms show={show} setshow={setshow} />
            <Highestbidder />
            <Cradites trans={trans} credits={credits} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashbord;
