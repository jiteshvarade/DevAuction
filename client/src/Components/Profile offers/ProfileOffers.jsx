import React, { useCallback } from "react";

export default function ProfileOffers({ className }) {
  const offersData = [
    {
      sno: 1,
      name: "someone",
      project: "Random project",
      amount: 454149.95,
      status: "Accepted",
    },
    {
      sno: 2,
      name: "someone",
      project: "Random project",
      amount: 454149.67,
      status: "Rejected",
    },
    {
      sno: 3,
      name: "someone",
      project: "Random project",
      amount: 45414965,
      status: "Accepted",
    },
    {
      sno: 4,
      name: "someone",
      project: "Random project",
      amount: 454149.32,
      status: "Accepted",
    },
    {
      sno: 5,
      name: "someone",
      project: "Random project",
      amount: 454149.5,
      status: "Rejected",
    },
    {
      sno: 6,
      name: "someone",
      project: "Random project",
      amount: 45414965,
      status: "Rejected",
    },
  ];

  const formatNumberToIndianSystem = useCallback((number) => {
    const numStr = number.toString();
    const [integerPart, decimalPart] = numStr.split(".");
    const formatIntegerPart = (intPart) => {
      const lastThree = intPart.slice(-3);
      const otherNumbers = intPart.slice(0, -3);
      const formattedOtherNumbers = otherNumbers.replace(
        /\B(?=(\d{2})+(?!\d))/g,
        ","
      );
      return otherNumbers ? formattedOtherNumbers + "," + lastThree : lastThree;
    };
    const formattedIntegerPart = formatIntegerPart(integerPart);
    return decimalPart
      ? `${formattedIntegerPart}.${decimalPart}`
      : formattedIntegerPart;
  }, []);

  return (
    <>
      <div
        className={
          "Offers bg-[#05081B] w-full h-full overflow-auto pt-4  " +
          ` ${className}` + ` ${offersData.length !== 0 ? "" : "hidden"}`
        }
      >
        <table className="w-full text-center bg-gradient-to-b from-[#060719] to-[#06162D] max-[400px]:text-sm">
          <thead>
            <tr>
              <th className="h-14 hidden sm:table-cell">S.no.</th>
              <th className="h-14 hidden sm:table-cell">Names</th>
              <th className="h-14">Projects</th>
              <th className="h-14">Amounts</th>
              <th className="h-14">Results</th>
            </tr>
          </thead>
          <tbody>
            {offersData.map((elem) => {
              return (
                <tr
                  key={"row " + elem.sno}
                  className="active:bg-[#0CA3E7] active:bg-opacity-20"
                >
                  <td className="h-14 hidden sm:table-cell">{elem.sno}</td>
                  <td className="h-14 hidden sm:table-cell">{elem.name}</td>
                  <td className="h-14">{elem.project}</td>
                  <td className="h-14">
                    &#8377; {formatNumberToIndianSystem(elem.amount)}
                  </td>
                  <td
                    className="h-14"
                    style={{
                      color:
                        elem.status.toLowerCase() == "rejected"
                          ? "rgba(186, 233, 254, 0.58)"
                          : "",
                    }}
                  >
                    {elem.status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={'text-center text-gray-400 w-full p-4 ' + ` ${offersData.length == 0 ? "" : "hidden"}`}>Nothing to see here</div>
    </>
  );
}
