import React, { useEffect, useState } from "react";
import "./Auctionroom.css";

const Highestbidder = () => {
  const [data, setData] = useState([]);
  // const data = [
  //   {
  //     name: "Ramesh Gupta",
  //     totalauc: 12,
  //     highest: "56k",
  //     total: "1200k",
  //   },
  //   {
  //     name: "Kishore Mahajan",
  //     totalauc: 18,
  //     highest: "32k" ,
  //     total: "1100k",
  //   },
  //   {
  //     name: "Ramkisore jain",
  //     totalauc: 19,
  //     highest: "28k",
  //     total: "900k",
  //   },
  //   {
  //     name: "Hafiz shekiq",
  //     totalauc: 18,
  //     highest: "22k",
  //     total: "760k",
  //   },
  //   {
  //     name: "JS Stalin",
  //     totalauc: 11,
  //     highest: "21k",
  //     total: "400k",
  //   },
  //   {
  //     name:"Simran kaur",
  //     totalauc:12,
  //     highest: "19k",
  //     total: "200k",
  //   },
  //   {
  //     name:"Ramanujam Iyer",
  //     totalauc:7,
  //     highest:"14k",
  //     total: "196k",
  //   },
  //   {
  //     name:"Mukul Tiwari",
  //     totalauc:5,
  //     highest:"10k",
  //     total: "127k",
  //   }
  // ];

  async function getHighestBidderList() {
    try {
      const highestBidderList = await fetch(
        "https://devauction.onrender.com/dashboard/highestBidders"
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
