import React from "react";
import SearchIcon from "../../assets/GalleryImages/search 02.png";
import { RxCross2 } from "react-icons/rx";
import GradientBtn from "../Buttons/GradientBtn";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ProgressSpinner } from "primereact/progressspinner";
import SERVER_URL from "../../contants.mjs";

const ProfileSearch = ({ searchdata, showsearch, setShowsearch }) => {
  const data = searchdata || [];
  const { user } = useAuth0();
  // ${SERVER_URL}/profile/follow

  const followMe = async (eml) => {
    const res = await fetch(`${SERVER_URL}/profile/follow`, {
      method: "POST",
      body: JSON.stringify({ from:user.email , to:eml }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(res)
  }

  


  const check = (ele) => {
    const arr = ele.Profile.Followers || [];

    const data = arr.find((fll) => fll === user.email) || [];

    if (data.length) {
      return true;
    }
    return false;
  };

  // console.log(searchdata);
  console.log(data);

  return (
    <div className=" rounded-2xl bg-[#050618] h-[400px] w-[400px] p-2 overflow-scroll no-scrollbar ">
      <div className="sticky bg-[#050618] top-0 mb-3 z-10  pb-2">
        <div className="text-white font-semibold text-[24px] flex justify-between items-center ">
          <div className="opacity-0">Followers</div>
          <RxCross2
            onClick={() => {
              setShowsearch(!showsearch);
            }}
          />
        </div>
        <hr className=" opacity-65 mt-2 sticky "></hr>
        {/* <div className='mt-6 relative' >
            <input className=' text-white w-[100%] py-4 px-14 rounded-lg bg-[#0ca2e749]' ></input>
            <img className='absolute top-4 left-4' src={SearchIcon} alt="" />
        </div> */}
      </div>

      <div>
        {!data && (
          <div className="w-[100%] h-[700px] flex justify-center items-center ">
            <ProgressSpinner
              style={{ width: "50px", height: "50px" }}
              strokeWidth="8"
              fill="#05081B"
              animationDuration=".5s"
            />
          </div>
        )}
        {
          data.length == 0 && 
          <div className="w-full text-center text-[24px] font-semibold " >
            No one Found
          </div>
        }
        {data.length != 0 && (
          <div>
            {data.map((ele, index) => {
              return (
                <div className="p-2 flex text-white justify-between border-b border-[#0ca2e749]">
                  <Link to={`searchprofile/${ele._id}`}>
                    <div className="flex justify-center items-center gap-2 ">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border-2 border-white overflow-hidden">
                        <img src={ele.UserInfo.picture} alt="" />
                      </span>
                      <span>{ele.UserInfo.name}</span>
                    </div>
                  </Link> 

                  {check(ele) && (
                    <div className='border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ' >Following</div>
                  )}
                  {!check(ele) && (
                    <div className='border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ' >Not Following</div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* <div className="p-2 flex text-white justify-between border-b border-[#0ca2e749]">
        <div className="flex justify-center items-center gap-2 ">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border-2 border-white">
            A
          </span>
          <span>Ankit Chauhan</span>
        </div>
        <GradientBtn className="text-white" placeholder="Remove" />
      </div> */}
    </div>
  );
};

export default ProfileSearch;
