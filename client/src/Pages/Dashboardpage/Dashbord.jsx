import React, { useEffect, useState } from "react";
import EarningCards from "../../Components/Dashbord/EarningCards";
import Header from "../../Components/Dashbord/Header";
import Cradites from "../../Components/Dashbord/Cradites";
import { useAuth0 } from "@auth0/auth0-react";
import Auctionrooms from "../../Components/AuctionRoom/Auctionrooms";
import Highestbidder from "../../Components/AuctionRoom/Highestbidder";
import Createauction from "../../Components/AuctionRoom/Createauction";
import { ProgressSpinner } from "primereact/progressspinner";
import { useMenuContext } from "../../context/MenuContextProvider";
import Download from "../../Components/AuctionRoom/Download";
import CustomToast from "../../Components/Custom Toast/CustomToast";
import SERVER_URL from "../../contants.mjs";

function Dashbord() {
  const { showMenu, setShowMenu } = useMenuContext();
  const [showtable, setshowTable] = useState(false);
  const [show, setshow] = useState(false);
  const { user } = useAuth0();
  const [data, setdata] = useState(null);
  const [avg, setavg] = useState(0);
  const [total, settotal] = useState(0);
  const [totalearn, settotalearn] = useState(0);
  const [credits, setcredits] = useState(0);
  const [trans, settrans] = useState();
  const [showdownload, setShowdownload] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastDetails, setToastDetails] = useState({});

  function displayToast(msg, type) {
    setToastDetails(PrevState => {
      return {msg, type};
    });
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }

  const userEmail = user?.email;
  const response = async () => {
    const res = await fetch(`${SERVER_URL}/profile`, {
      method: "POST",
      body: JSON.stringify({ email: user.email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const userData = await res.json();
    console.log(userData?.userData?.UserInfo.email);
    setdata(userData);
    const creds = userData.userData?.Profile.Credits;
    setcredits(creds);

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
    <div className="relative">
      <CustomToast
        className={showToast ? "right-10 opacity-100" : "-right-96 opacity-0"}
        msg={toastDetails.msg}
        type={toastDetails.type}
        setShowToast={setShowToast}
      />

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
        <div id="main" className="flex h-screen relative">
          {show && (
            <div className="absolute w-[90%] left-[5%] top-[10px] flex justify-center  ">
              <Createauction show={show} setshow={setshow} />
            </div>
          )}
          {showdownload && (
            <div className="absolute w-[90%] left-[5%] top-[100px] flex justify-center  ">
              <Download show={showdownload} setshow={setShowdownload} />
            </div>
          )}
          <div
            className={`w-[100%] overflow-y-scroll   border-l-2 border-[#4b4c59] bg-[#050618] mg:px-10 pb-10 text-white ${
              show ? "blur-xl" : ""
            } ${showtable ? "" : ""} ${showdownload ? "blur-lg" : ""}`}
          >
            <div className="px-5">
              <Header
                Username={user?.given_name}
                UserImg={user?.picture}
                isnav={showMenu}
                setisnav={setShowMenu}
              />
            </div>
            {/* earnings cards */}
            <EarningCards
              earningAmount={totalearn}
              spandAmount={total}
              avgAmount={avg}
            />

            {/* <Auction /> */}
            <Auctionrooms
              show={show}
              setshow={setshow}
              showdownload={showdownload}
              setShowdownload={setShowdownload}
            />
            <Highestbidder />
            <Cradites
              displayToast={displayToast}
              resp={response}
              showtable={showtable}
              setshowTable={setshowTable}
              trans={trans}
              credits={credits / 100}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashbord;
