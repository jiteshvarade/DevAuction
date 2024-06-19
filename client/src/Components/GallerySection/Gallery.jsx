import React, { useState } from "react";
import Header from "../Dashbord/Header";
import LeftNavbar from "../Dashbord/LeftNavbar";
import Slider from "./Slider";
import SearchIcon from "../../assets/GalleryImages/search 02.png";
import GallerySection from "./GallerySection";
import { useAuth0 } from "@auth0/auth0-react";
import { useMenuContext } from "../../context/MenuContextProvider"; 
import GradientBtn from "../Buttons/GradientBtn";
import { ProgressSpinner } from "primereact/progressspinner"; 
import ProfileSearch from "./ProfileSearch";
import axios from "axios";
import { FaGlassWater } from "react-icons/fa6";

const Gallery = () => {
  const { user, isLoading } = useAuth0();
  const { showMenu, setShowMenu } = useMenuContext();
  const [ search , setSearch] = useState('') ; 
  const [searchdata,setSearchdata] = useState([]) ; 
  const [showsearch,setShowsearch] = useState(false)
 
  const clickhandler = async (e) => {
    
      if (e.key !== 'Enter') {
        return;
      }
      setShowsearch(!showsearch)  
     try{
      const res = await fetch("https://devauction.onrender.com/profile/getUsers", {
        method: "POST",
        body: JSON.stringify({ name : search }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await res.json()
      setSearchdata(data.users) ; 
      // console.log(data) ;
    } 
    catch(err)
    {
      console.log(err) ;
    }
  }

  return (
    <div>
      {
        isLoading && 
        <div className="w-[100%] h-[700px] flex justify-center items-center ">
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="8"
          fill="#05081B"
          animationDuration=".5s"
        />
        </div>
      }
      {
        !isLoading && 
        <div className="">
          {
            showsearch && 
            <div className="absolute w-[80%] flex justify-center top-[150px]  z-10">
              <ProfileSearch
                searchdata={searchdata}
                showsearch={showsearch}
                setShowsearch={setShowsearch}
              />
            </div>
          }
          
            <div className="flex h-screen">
            {/* <LeftNavbar/> */}
            <div className={`w-full overflow-y-scroll bg-[#050618] px-10 pb-10 text-white ${showsearch ? " blur-2xl ":""} overflow-x-hidden`}>
            <div className="w-80 aspect-square rounded-full absolute left-20 -top-24 bg-[#0CA3E7] bg-opacity-30 blur-[200px] z-[100] hidden lg:block"></div>

              <Header Username={user?.given_name} UserImg={user?.picture} isnav={showMenu} setisnav={setShowMenu} />
              <Slider />
              <div className="mt-6 relative">
                <input 
                  value={search} 
                  onChange={ (e) =>{ 
                    setSearch(e.target.value)
                  } }
                  onKeyDown={clickhandler}
                  className="w-[100%] py-4 px-14 rounded-lg bg-[#0ca2e749] text-white "
                  placeholder="Find someone....."
                ></input> 
                {/* <div className="absolute top-2 right-2 z-10" >
                  <GradientBtn placeholder="search" onClick={clickhandler} />
                </div> */}
                <img className="absolute top-4 left-4" src={SearchIcon} alt="" />
              </div>
              <GallerySection />
            </div>
          </div>
          

        </div>
        
      }
      
    </div>
  );
};

export default Gallery;
