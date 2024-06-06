import React, { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import {
  items,
  aboveCardStyles,
  belowCardStyles,
  buttonStyles,
  cardDescriptionStyles,
  cardHeadingStyles,
  cardImgStyles,
  cardsCommonStyles,
  focusCardStyles,
} from "./ContributersData";

const Carousel = () => {
  const [first, setFirst] = useState(0);
  const [transitionState, setTransitionState] = useState(0);

  const handleNext = () => {
    setTransitionState(transitionState == 2 ? 0 : transitionState + 1);
    setFirst(first == items.length - 1 ? 0 : first + 1);
  };

  const handlePrev = () => {
    setTransitionState(transitionState == 0 ? 2 : transitionState - 1);
    setFirst(first == items.length - 1 ? 0 : first + 1);
  };
  return (
    <div className="testimonialSection pt-40 px-4">
      <h1 className="lg:text-5xl md:text-3xl  font-bold text-center mb-20 text-xl sm:text-2xl">
        OUR HAPPY CONTRIBUTERS
      </h1>
      <div className="carouselContainer flex justify-center items-center flex-col gap-80 py-20">
        <div className="carouselParent relative bg-green-500 w-[1026px] max-w-full">
          <div
            className={`${cardsCommonStyles} ${
              transitionState == 2
                ? focusCardStyles
                : transitionState == 1
                ? belowCardStyles
                : aboveCardStyles
            }`}
          >
            <div className={cardHeadingStyles}>
              {transitionState == 2 ? items[first].title : ""}{" "}
              <img
                src={transitionState == 2 ? items[first].img : ""}
                alt={
                  transitionState == 2 ? items[first].title : "" + "'s image"
                }
                className={
                  cardImgStyles + ` ${transitionState == 2 ? "" : "opacity-0"}`
                }
              />
            </div>
            <div className={cardDescriptionStyles}>
              {transitionState == 2 ? items[first].description : ""}
            </div>
          </div>
          <div
            className={`${cardsCommonStyles} ${
              transitionState == 0
                ? focusCardStyles
                : transitionState == 2
                ? belowCardStyles
                : aboveCardStyles
            }`}
          >
            <div className={cardHeadingStyles}>
              {transitionState == 0 ? items[first].title : ""}
              <img
                src={transitionState == 0 ? items[first].img : ""}
                alt={
                  transitionState == 0 ? items[first].title : "" + "'s image"
                }
                className={
                  cardImgStyles + ` ${transitionState == 0 ? "" : "opacity-0"}`
                }
              />
            </div>
            <div className={cardDescriptionStyles}>
              {transitionState == 0 ? items[first].description : ""}
            </div>
          </div>
          <div
            className={`${cardsCommonStyles} ${
              transitionState == 1
                ? focusCardStyles
                : transitionState == 0
                ? belowCardStyles
                : aboveCardStyles
            }`}
          >
            <div className={cardHeadingStyles}>
              {transitionState == 1 ? items[first].title : ""}
              <img
                src={transitionState == 1 ? items[first].img : ""}
                alt={
                  transitionState == 1 ? items[first].title : "" + "'s image"
                }
                className={
                  cardImgStyles + ` ${transitionState == 1 ? "" : "opacity-0"}`
                }
              />
            </div>
            <div className={cardDescriptionStyles}>
              {transitionState == 1 ? items[first].description : ""}
            </div>
          </div>
          <button
            className={buttonStyles + " left-6"}
            onClick={handlePrev}
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <MdPlayArrow
              size="3rem"
              className="bg-[#0D0E20] m-[2px] p-[14px] rounded-xl hover:bg-[#66bee3] transition-colors duration-500 rotate-180"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
          </button>
          <button
            className={buttonStyles + " right-6"}
            onClick={handleNext}
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <MdPlayArrow
              size="3rem"
              className="bg-[#0D0E20] m-[2px] p-[14px] hover:bg-[#66bee3] transition-colors duration-500"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
          </button>
        </div>
        <div className="flex gap-2">
          {items.map((elem, index) => {
            return (
              <RxDotFilled
                key={index + " Contributers Dot"}
                color={index == first ? "#66bee3" : "transparent"}
                size="0.5rem"
                className={
                  "border-2 border-[#66bee3] rounded-full w-full " +
                  `${index == first ? "bg-[#66bee3]" : "transparent"}`
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
