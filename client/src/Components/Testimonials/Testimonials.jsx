import React, { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { items, aboveCardStyles, belowCardStyles, buttonStyles, cardDescriptionStyles, cardHeadingStyles, cardImgStyles, cardsCommonStyles, focusCardStyles } from "../../assets/component data/ContributersData";

const Carousel = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(1);
  const [third, setThird] = useState(2);
  const [transitionState, setTransitionState] = useState(0);

  const handleNext = () => {
    setTransitionState(transitionState == 2 ? 0 : transitionState + 1);
    setTimeout(() => {
      setFirst(first == items.length - 1 ? 0 : first + 1);
      setSecond(first == items.length - 1 ? 0 : first + 1);
      setThird(
        first == items.length - 2
          ? 0
          : first == items.length - 1
          ? 1
          : first + 2
      );
    }, 600);
  };

  const handlePrev = () => {
    setTransitionState(transitionState == 0 ? 2 : transitionState - 1);
    setTimeout(() => {
      setFirst(first == 0 ? items.length - 1 : first - 1);
      setSecond(first == 0 ? items.length - 1 : first - 1);
      setThird(
        first == 2
          ? 0
          : first == 1
          ? items.length - 1
          : first == 0
          ? items.length - 2
          : first - 2
      );
    }, 600);
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
                {items[third].title}{" "}
                <img
                  src={items[third].img}
                  alt={items[third].title + "'s image"}
                  className={cardImgStyles}
                />
              </div>
              <div className={cardDescriptionStyles}>
                {items[third].description}
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
                {items[first].title}{" "}
                <img
                  src={items[first].img}
                  alt={items[first].title + "'s image"}
                  className={cardImgStyles}
                />
              </div>
              <div className={cardDescriptionStyles}>
                {items[first].description}
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
                {items[second].title}{" "}
                <img
                  src={items[second].img}
                  alt={items[second].title + "'s image"}
                  className={cardImgStyles}
                />
              </div>
              <div className={cardDescriptionStyles}>
                {items[second].description}
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
                className="bg-gray-600 m-[2px] p-[14px] rounded-xl hover:bg-[#66bee3] transition-colors duration-500"
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
                className="bg-gray-600 m-[2px] p-[14px] hover:bg-[#66bee3] transition-colors duration-500"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              />
            </button>
          </div>
        <div className="flex gap-2">
        {items.map((elem, index) => {
          return <RxDotFilled key={index + " Contributers Dot"}  color={index == first ? "#66bee3" : "transparent"}  size="0.5rem" className={"border-2 border-[#66bee3] rounded-full w-full " + `${index == first ? "bg-[#66bee3]" : "transparent"}`} />
        })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
