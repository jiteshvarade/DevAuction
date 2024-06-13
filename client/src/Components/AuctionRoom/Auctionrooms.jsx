import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Auctionroom.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import DotPaginator from "./DotPaginator";
import GradientBtn from "../Buttons/GradientBtn";
import { IoIosArrowDown } from "react-icons/io";
import { RiRefreshLine } from "react-icons/ri";

const Auctionrooms = ({ show, setshow }) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(3);
  const [selectOption, setSelectOption] = useState("free");
  const roomOptions = ["free", "premium", "history"];
  const [showOptions, setShowOptions] = useState(false);
  const [roomData, setRoomData] = useState({
    freeRooms: [],
    premiumRooms: [],
    history: [],
  });

  // const cards = Array.from({ length: 25 }, (_, index) => <Card key={index} />);

  useEffect(async () => {
    console.log("pulling all data");
    try {
      const res = await fetch(
        "http://in1.localto.net:5947/dashboard/getRooms",
        {
          method: "POST",
          body: JSON.stringify({ type: "all" }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const roomData = await res.json(); // wo yaha hoga
      setRoomData(roomData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function refresh(type) {
    try {
      const res = await fetch(
        "http://in1.localto.net:5947/dashboard/getRooms",
        {
          method: "POST",
          body: JSON.stringify({ type: type }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const roomData = await res.json();
      setRoomData((prevState) => {
        return {
          ...prevState,
          [Object.keys(roomData)[0]]: [
            ...prevState[Object.keys(roomData)[0]],
            ...roomData[Object.keys(roomData)[0]],
          ],
        };
      });
    } catch (error) {
      console.log(error);
    }
  }

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <div className=" bg-[#050618] flex flex-col gap-4">
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between flex-wrap gap-8">
          <div className=" text-[28px] md:text-[40px] font-semibold w-[300px] text-white">
            Auction Room
          </div>
          <GradientBtn
            placeholder="Create Rooms"
            onClick={() => {
              setshow(!show);
            }}
          />
        </div>
        <div className="header flex justify-between items-center sm:pr-28 flex-wrap gap-4">
          <div
            className="bg-inherit w-52 text-center outline-none cursor-pointer rounded-xl relative"
            style={{
              backgroundColor: "rgba(7, 38, 67, 1)",
              boxShadow: "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
            }}
          >
            <div
              className="w-full flex justify-between items-center p-6 py-2 capitalize font-semibold"
              onClick={() => setShowOptions(!showOptions)}
            >
              {selectOption}{" "}
              <IoIosArrowDown
                className={`mt-1 transition-transform duration-500  ${
                  showOptions ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`optionsConatiner top-14 absolute w-full left-0 rounded-xl z-50 overflow-hidden ${
                showOptions ? "block" : "hidden"
              }`}
              style={{
                backgroundColor: "rgba(7, 38, 67, 1)",
                boxShadow: "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
              }}
            >
              {roomOptions.map((elem) => {
                return (
                  <div
                    className="px-4 py-2 hover:bg-blue-950 active:text-sm h-10"
                    key={elem}
                    onClick={() => {
                      setSelectOption(elem);
                      setShowOptions(!showOptions);
                    }}
                  >
                    {elem}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="right flex items-center gap-2 cursor-pointer hover:bg-blue-950 rounded-xl px-4 py-2"
            onClick={() => refresh(selectOption)}
          >
            Refresh
            <RiRefreshLine />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center w-[100%]">
          <div className="flex flex-wrap gap-2 justify-evenly transition-all duration-200">
            {/* {cards.slice(first, first + rows).map((card) => card)} */}
            {selectOption == "free"
              ? roomData.freeRooms.map((elem, index) => (
                  <Card roomId={elem.RoomID} key={elem.RoomID + index} />
                ))
              : "premium"
              ? roomData.premiumRooms.map((elem, index) => (
                  <Card roomId={elem.RoomID} key={elem.RoomID + index} />
                ))
              : roomData.history.map((elem, index) => (
                  <Card roomId={elem.RoomID} key={elem.RoomID + index} />
                ))}
          </div>
        </div>
      </div>
      <DotPaginator
        className="bg-[#050618] custom-paginator"
        first={first}
        rows={rows}
        totalRecords={5}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Auctionrooms;
