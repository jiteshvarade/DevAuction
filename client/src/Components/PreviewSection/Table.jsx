import React, { useEffect, useState } from "react";

const Table = ({ tableData}) => {

  console.log("tableData: ", tableData)

  // const data = [
  //   {
  //     name: "Ankit chauhan",
  //     total: 1000000,
  //   },
  //   {
  //     name: "Ankit chauhan",
  //     total: 1000000,
  //   },
  //   {
  //     name: "Ankit chauhan",
  //     total: 1000000,
  //   },
  //   {
  //     name: "Ankit chauhan",
  //     total: 1000000,
  //   },
  //   {
  //     name: "Ankit chauhan",
  //     total: 1000000,
  //   },
  // ];
  return (
    <div className="border-2 border-[rgb(34,53,52)] text-[12px] rounded-lg sm:text-[18px] h-[560px] lg:h-screen w-full md:w-[350px] no-scrollbar overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="p-2 text-[#0CA3E7]">
            <th className="p-2 sticky top-0 z-10 bg-[#050618]">#</th>
            <th className="p-2 sticky top-0 z-10 bg-[#050618]">Name</th>
            <th className="p-2 sticky top-0 z-10 bg-[#050618]">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length != 0 ?  tableData.map((ele, index) => {
            return (
              <tr>
                <td className="p-2  text-center">{index + 1}</td>
                <td className="p-2  text-center ">{ele.name}</td>
                <td className="p-2  text-center">{ele.amount}</td>
              </tr>
            );
          }) : <tr>
            <td colSpan={3} className="text-center text-gray-500">Nothing to see here!</td>
          </tr>}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
