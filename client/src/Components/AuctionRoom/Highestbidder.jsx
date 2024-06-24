import React, { useEffect, useState } from "react";
import "./Auctionroom.css";
import SERVER_URL from "../../contants.mjs";

const Highestbidder = () => {
  const [data, setData] = useState([]);
  
  async function getHighestBidderList() {
    try {
      const highestBidderList = await fetch(
        `${SERVER_URL}/dashboard/highestBidders`
      );
      const list = await highestBidderList.json();
      console.log(list);
      setData(list);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getHighestBidderList();
  }, []);

  return (
    <div className="p-4 flex flex-col gap-4 ">
      <div className="text-[28px] md:text-[40px] font-semibold">
        Highest Bidder
      </div>
      <div className="border-2 border-[#223534] text-[12px] rounded-lg sm:text-[18px] no-scrollbar overflow-auto w-full">
        <table className="w-full">
          <thead>
            <tr className="p-2 text-[#0CA3E7]">
              <th className="p-2 sticky top-0 bg-[#050618]">S.no.</th>
              <th className="p-2 sticky top-0 bg-[#050618]">Highest Bidder</th>
              <th className="p-2 sticky top-0 bg-[#050618]">Project</th>
              <th className="p-2 sticky top-0 bg-[#050618]">
                Highest Amount Bidded
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length == 0 ? (
              <tr>
                <td className="w-full text-center p-4" colSpan={4}>
                  Nothings here yet!
                </td>
              </tr>
            ) : (
              data.data.map((ele, index) => {
                return (
                  <tr key={index + ele.name}>
                    <td className="p-2  text-center">{index + 1}</td>
                    <td className="p-2  text-center ">{ele.name}</td>
                    <td className="p-2  text-center">{ele.title}</td>
                    <td className="p-2  text-center">{ele.amount}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Highestbidder;
