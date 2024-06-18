import React, { useCallback, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function ProfileOffers({ className }) {
  const { user } = useAuth0();
  const [offersData, setOffersData] = useState([]);

  // const offersData = [
  //   {
  //     sno: 1,
  //     name: "someone",
  //     project: "Random project",
  //     amount: 454149.95,
  //     status: "Accepted",
  //   },
  //   {
  //     sno: 2,
  //     name: "someone",
  //     project: "Random project",
  //     amount: 454149.67,
  //     status: "Rejected",
  //   },
  //   {
  //     sno: 3,
  //     name: "someone",
  //     project: "Random project",
  //     amount: 45414965,
  //     status: "Accepted",
  //   },
  //   {
  //     sno: 4,
  //     name: "someone",
  //     project: "Random project",
  //     amount: 454149.32,
  //     status: "Accepted",
  //   },
  //   {
  //     sno: 5,
  //     name: "someone",
  //     project: "Random project",
  //     amount: 454149.5,
  //     status: "Rejected",
  //   },
  //   {
  //     sno: 6,
  //     name: "someone",
  //     project: "Random project",
  //     amount: 45414965,
  //     status: "Rejected",
  //   },
  // ];

  async function getOffersHistory() {
    try {
      const res = await fetch(
        "https://devauction.onrender.com/profile/getUserOffers",
        {
          method: "POST",
          body: JSON.stringify({
            email: user.email,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const resData = await res.json();
      console.log(resData);
      setOffersData(resData.offers);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOffersHistory();
  }, [user]);

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
          ` ${className}` +
          ` ${offersData.length !== 0 ? "" : "hidden"}`
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
            {offersData.map((elem, index) => {
              return (
                <tr
                  key={"row " + index}
                  className="active:bg-[#0CA3E7] active:bg-opacity-20"
                >
                  <td className="h-14 hidden sm:table-cell">{index + 1}</td>
                  <td className="h-14 hidden sm:table-cell">{elem.name}</td>
                  <td className="h-14">{elem.projectTitle}</td>
                  <td className="h-14">{elem.amount}</td>
                  <td
                    className="h-14"
                    style={{
                      color:
                        elem.result == 0
                          ? "rgba(186, 233, 254, 0.58)"
                          : elem.result == 1 ? "white" : "red",
                    }}
                  >
                    {elem.result == 0 ? "Pending" : elem.result == 1 ? "Accepted" : "Rejected"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        className={
          "text-center text-gray-400 w-full p-4 " +
          ` ${offersData.length == 0 ? "block" : "hidden"}` + ` ${className}`
        }
      >
        Nothing to see here
      </div>
    </>
  );
}
