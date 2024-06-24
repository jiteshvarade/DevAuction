import React, { useState, useEffect } from "react";
import SearchIcon from "../../assets/GalleryImages/search 02.png";
import { RxCross2 } from "react-icons/rx";
import "./Follow.css";
import { useAuth0 } from "@auth0/auth0-react";
import GradientBtn from "../Buttons/GradientBtn";
import SERVER_URL from "../../contants.mjs";

const Followering = ({resp, Data, showFollowing, setShowFollowing }) => {
  const [data, setdata] = useState([]);
  const { user , isLoading} = useAuth0();
  const [search,setSearch] = useState('') ; 

//   console.log(Data);
  const follow = Data.userData.Profile.Following || [];
  const response = async () => {
    const res = await fetch(
      `${SERVER_URL}/profile/followers`,
      {
        method: "POST",
        body: JSON.stringify({ followers: follow }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const newdata = await res.json();
    console.log(newdata.data);
    setdata(newdata.data);
  };
  const [to,setto] = useState('');

  const unfollowMe = async () => {

    console.log(user.email) 
    console.log(Data?.userData?.UserInfo?.email)
    const res = await fetch(`${SERVER_URL}/profile/unFollow`, {
      method: "POST",
      body: JSON.stringify({
        from: user.email,
        to: to,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    console.log(res);
    // setfollow(!follow);
    resp();
  };

  const clickhandler = (e) => {
    if (e.key !== 'Enter') {
        return;
      }
      console.log(search)
    const newdata = data.find( (ele) => ele.name == search ) || []
    console.log([newdata])
    setdata([newdata]);
  }

  

  useEffect(() => {
    response();
  }, [Data]);
  return (
    <div className=" rounded-2xl bg-[#050618] h-[400px] w-[400px] p-2 overflow-scroll no-scrollbar ">
      <div className="sticky bg-[#050618] top-0 mb-3 z-10  pb-2">
        <div className="text-white font-semibold text-[24px] flex justify-between items-center ">
          <div>Following</div>
          <RxCross2
            onClick={() => {
              setShowFollowing(!showFollowing);
            }}
          />
        </div>
        <hr className=" opacity-65 mt-2 sticky "></hr>
        <div className="mt-6 relative">
          <input className=" text-white w-[100%] py-4 px-14 rounded-lg bg-[#0ca2e749]" 
          onChange={(e) => {
            setSearch(e.target.value)
          }}   
          onKeyDown={ 
            clickhandler
          }></input>
          <img className="absolute top-4 left-4" src={SearchIcon} alt=""  />
        </div>
      </div>
      {data.map((ele) => {
        return (
          <div className="p-2 flex text-white justify-between border-b border-[#0ca2e749]">
            <div className="flex justify-center items-center gap-2 ">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-black text-white border-2 border-white">
                <img src={ele.image}></img>
              </span>
              <span>{ele.name}</span>
            </div>
            <GradientBtn className="text-white" placeholder="Unfollow" onClick={() => {
                setto(ele.email)
                console.log(to);
                unfollowMe()
            }} />
          </div>
        );
      })}
    </div>
  );
};

export default Followering;
