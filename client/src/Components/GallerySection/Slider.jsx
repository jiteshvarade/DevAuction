import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import Slide from "./Slide";
import SERVER_URL from "../../contants.mjs";

const Slider = () => {
  const [data, setdata] = useState([]);
  // const images = Array.from({ length: 50 }, (_, index) => (
  //   <Slide key={index} />
  // ));

  const getdata = async () => {
    console.log("heool"); 
    try {
      const res = await fetch(
        `${SERVER_URL}/gallery/getAllUsers`
      );
      console.log(res);

      const newdata = await res.json();
      setdata(newdata)
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("hello");
    getdata();
  }, []);

  return (
    <div className="sliderContainer mt-10 overflow-hidden p-2 rounded-xl">
      <div className="slider flex gap-6 slider-track w-fit">
        {data.map((ele) => {
          return <Slide image={ele?.UserInfo.picture} name={ele.UserInfo.name} />;
        })}
        {data.map((ele) => {
          return <Slide image={ele?.UserInfo.picture} name={ele.UserInfo.name} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
