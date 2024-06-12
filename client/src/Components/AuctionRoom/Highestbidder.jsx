import React from "react";
import "./Auctionroom.css";

const Highestbidder = () => {
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
            <tr className="">
              <td className="p-2  text-center">1</td>
              <td className="p-2  text-center ">Jitesh Varade</td>
              <td className="p-2  text-center">4</td>
              <td className="p-2  text-center">20000</td>
              <td className="p-2  text-center">1000000</td>
            </tr>
            <tr className="">
              <td className="p-2  text-center">1</td>
              <td className="p-2  text-center ">Jitesh Varade</td>
              <td className="p-2  text-center">4</td>
              <td className="p-2  text-center">20000</td>
              <td className="p-2  text-center">1000000</td>
            </tr>
            <tr className="">
              <td className="p-2  text-center">1</td>
              <td className="p-2  text-center ">Jitesh Varade</td>
              <td className="p-2  text-center">4</td>
              <td className="p-2  text-center">20000</td>
              <td className="p-2  text-center">1000000</td>
            </tr>
            <tr className="">
              <td className="p-2  text-center">1</td>
              <td className="p-2  text-center ">Jitesh Varade</td>
              <td className="p-2  text-center">4</td>
              <td className="p-2  text-center">20000</td>
              <td className="p-2  text-center">1000000</td>
            </tr>
            <tr className="">
              <td className="p-2  text-center">1</td>
              <td className="p-2  text-center ">Jitesh Varade</td>
              <td className="p-2  text-center">4</td>
              <td className="p-2  text-center">20000</td>
              <td className="p-2  text-center">1000000</td>
            </tr>
            <tr className="">
              <td className="p-2  text-center">1</td>
              <td className="p-2  text-center ">Jitesh Varade</td>
              <td className="p-2  text-center">4</td>
              <td className="p-2  text-center">20000</td>
              <td className="p-2  text-center">1000000</td>
            </tr>
            <tr className="">
              <td className="p-2  text-center">1</td>
              <td className="p-2  text-center ">Jitesh Varade</td>
              <td className="p-2  text-center">4</td>
              <td className="p-2  text-center">20000</td>
              <td className="p-2  text-center">1000000</td>
            </tr>
            <tr className="">
              <td className="p-2  text-center">1</td>
              <td className="p-2  text-center ">Jitesh Varade</td>
              <td className="p-2  text-center">4</td>
              <td className="p-2  text-center">20000</td>
              <td className="p-2  text-center">1000000</td>
            </tr>
            <tr className="">
              <td className="p-2  text-center">1</td>
              <td className="p-2  text-center ">Jitesh Varade</td>
              <td className="p-2  text-center">4</td>
              <td className="p-2  text-center">20000</td>
              <td className="p-2  text-center">1000000</td>
            </tr>
            <tr className="">
              <td className="p-2  text-center">1</td>
              <td className="p-2  text-center ">Jitesh Varade</td>
              <td className="p-2  text-center">4</td>
              <td className="p-2  text-center">20000</td>
              <td className="p-2  text-center">1000000</td>
            </tr>
            <tr className="">
              <td className="p-2  text-center">1</td>
              <td className="p-2  text-center ">Jitesh Varade</td>
              <td className="p-2  text-center">4</td>
              <td className="p-2  text-center">20000</td>
              <td className="p-2  text-center">1000000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Highestbidder;
