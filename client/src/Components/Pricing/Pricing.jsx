import React from "react";
import pricingData from "./pricingData";
import { HiCheck } from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";
import GradientBtn from "../Buttons/GradientBtn";
import Plx from "react-plx";

export default function Pricing() {
    const fromLeft = [
        {
          start: "self",
          duration: 600,
          easing: "ease",
          properties: [{ startValue: 0, endValue: 1, property: "opacity" }],
        },
        {
          start: "self",
          duration: 600,
          easing: "ease",
          properties: [{ startValue: -500, endValue: 0, property: "translateX" }],
        },
      ];
    
      const fromRight = [
        {
          start: "self",
          duration: 600,
          easing: "ease",
          properties: [{ startValue: 0, endValue: 1, property: "opacity" }],
        },
        {
          start: "self",
          duration: 600,
          easing: "ease",
          properties: [{ startValue: 500, endValue: 0, property: "translateX" }],
        },
      ];
  return (
    <div id="price" className="flex flex-col justify-center items-center overflow-hidden py-20">
      <h1 className="lg:text-5xl md:text-3xl  font-bold text-center mb-20 text-xl sm:text-2xl">
        Pricing
      </h1>
      <div className="priceCards flex items-center justify-center gap-11 flex-wrap">
        {pricingData.map((elem, index) => {
          return (
            <Plx
              key={"random" + index}
              className="max-w-full"
              parallaxData={
                index % 2 == 0 ? fromLeft : fromRight
              }
            >
              <div
                className="priceTagContainer w-[343px] h-[523px] max-w-full rounded-[20px] px-7 py-12 ctaBtn relative after:w-4/5 overflow-hidden"
                key={"pricing" + index}
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "inset 0 0.5px 0 0 rgba(255, 255, 255, 0.5)",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))",
                }}
              >
                <div className="flex flex-col gap-6 h-full justify-between">
                  <div className="top flex flex-col gap-6">
                    <div className="pricingType text-center text-xl sm:text-2xl text-[#66bee3]">
                      {elem.type}
                    </div>
                    <div className="amount flex items-center h-fit justify-center">
                      <FaRupeeSign size="1.75rem" className="mt-1" />{" "}
                      <span className="font-bold text-4xl">
                        {elem.price}
                      </span>{" "}
                      <span className="self-end ml-1 text-xs leading-6">
                        /Month
                      </span>
                    </div>
                    <div className="pricingFeatures">
                      {elem.features.map((feature, index) => {
                        return (
                          <div
                            key={feature.slice(0, 5) + index}
                            className="flex items-center gap-2 text-base"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            <HiCheck color="#66bee3" /> {feature}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <GradientBtn
                    placeholder={elem.ctaPlaceholder}
                    className={"w-full after:max-w-28 overflow-hidden"}
                  />
                </div>
              </div>
            </Plx>
          );
        })}
      </div>
    </div>
  );
}
