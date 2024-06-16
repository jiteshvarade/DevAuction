import React, { useState, useEffect } from "react";
import SearchIcon from "../../assets/GalleryImages/search 02.png";
import { RxCross2 } from "react-icons/rx";
import "./Follow.css";
import GradientBtn from "../Buttons/GradientBtn";
import { useAuth0 } from "@auth0/auth0-react";

const Follower = ({resp, Data, showFollow, setShowFollow }) => {
  const { user } = useAuth0();

  const [data, setdata] = useState([]);
  const arr = data || [];
  const [search,setSearch] = useState('') ; 

  const follow = Data.userData.Profile.Followers || [];
  const response = async () => {
    const res = await fetch(
      "https://devauction.onrender.com/profile/followers",
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
    const res = await fetch("https://devauction.onrender.com/profile/unFollow", {
      method: "POST",
      body: JSON.stringify({
        from: to,
        to: user.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    console.log(res);
    // setfollow(!follow);
    resp();
  };

  useEffect(() => {
    response();
  }, [Data]);

  const clickhandler = (e) => {
    if (e.key !== 'Enter') {
        return;
      }
      console.log(search)
    const newdata = data.find( (ele) => ele.name == search ) || []
    console.log([newdata])
    setdata([newdata]);
  }

  return (
    <div className=" rounded-2xl bg-[#050618] h-[400px] w-[400px] p-2 overflow-scroll no-scrollbar ">
      <div className="sticky bg-[#050618] top-0 mb-3 z-10  pb-2">
        <div className="text-white font-semibold text-[24px] flex justify-between items-center ">
          <div>Followers</div>
          <RxCross2
            onClick={() => {
              setShowFollow(!showFollow);
            }}
          />
        </div>
        <hr className=" opacity-65 mt-2 sticky "></hr>
        <div className="mt-6 relative">
          <input 
          value={search}
          className=" text-white w-[100%] py-4 px-14 rounded-lg bg-[#0ca2e749]" onChange={(e)=>{
            setSearch(e.target.value)
          }} onKeyDown={clickhandler} ></input>
          <img className="absolute top-4 left-4" src={SearchIcon} alt="" />
        </div>
      </div>
      {
        data.length == 0 && 
        <div className="text-[24px]  font-semibold"  >
            NO DATA FOUND
        </div>
      }

      {data.map((ele) => {
        return (
          <div className="p-2 flex text-white justify-between border-b border-[#0ca2e749]">
            <div className="flex justify-center items-center gap-2 ">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden bg-black text-white border-2 border-white">
                <img src={ele.image}></img>
              </span>
              <span>{ele.name}</span>
            </div>
            <GradientBtn className="text-white" placeholder="Remove" onClick={ () => { 
                setto(ele.email)
                unfollowMe(); 
            }} />
          </div>
        );
      })}
    </div>
  );
};

export default Follower;
