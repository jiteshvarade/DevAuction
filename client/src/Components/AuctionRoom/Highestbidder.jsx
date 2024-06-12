import React from "react";
import "./Auctionroom.css";

const Highestbidder = () => {
  const data = [
    {
      name: "jistes varade",
      totalauc: 4,
      highest: 20000,
      total: 100000,
    },
    {
      name: "jistes varade",
      totalauc: 4,
      highest: 20000,
      total: 100000,
    },
    {
      name: "jistes varade",
      totalauc: 4,
      highest: 20000,
      total: 100000,
    },
    {
      name: "jistes varade",
      totalauc: 4,
      highest: 20000,
      total: 100000,
    },
  ];

  return (
    <div className="p-4 flex flex-col gap-4 ">
      <div className="text-[28px] md:text-[40px] font-semibold">
        Highest Bidder
      </div>
      <div className="border-2 border-[#223534] text-[12px] rounded-lg sm:text-[18px] h-[400px] no-scrollbar overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="p-2 text-[#0CA3E7]">
              <th className="p-2 sticky top-0 bg-[#050618]">#</th>
              <th className="p-2 sticky top-0 bg-[#050618]">Highest Bidder</th>
              <th className="p-2 sticky top-0 bg-[#050618]">
                Total Auction Attended
              </th>
              <th className="p-2 sticky top-0 bg-[#050618]">
                Highest Amount Bidded
              </th>
              <th className="p-2 sticky top-0 bg-[#050618]">
                Total Amount Bidded
              </th>
            </tr>
          </thead>
          <tbody>
            {
            
            data.map((ele,index) => {
              return (
                <tr key={index + ele.name }>
                  <td className="p-2  text-center">{index + 1}</td>
                  <td className="p-2  text-center ">{ele.name}</td>
                  <td className="p-2  text-center">{ele.totalauc}</td>
                  <td className="p-2  text-center">{ele.highest}</td>
                  <td className="p-2  text-center">{ele.total}</td>
                </tr>
              );
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Highestbidder;
