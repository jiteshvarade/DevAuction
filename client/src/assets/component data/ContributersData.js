import contributerImg from "../Icons/contributerImg.png";


export const items = [
    {
      id: 1,
      img: contributerImg,
      title: "Amazing Nature",
      description: "Experience the beauty of nature in its full glory.",
      bgColor: "bg-green-500",
    },
    {
      id: 2,
      img: contributerImg,
      title: "City Life",
      description: "Explore the vibrant city life and its fast-paced energy.",
      bgColor: "bg-blue-500",
    },
    {
      id: 3,
      img: contributerImg,
      title: "Mountains",
      description: "Feel the serenity of the mountains and the crisp air.",
      bgColor: "bg-purple-500",
    },
    {
      id: 4,
      img: contributerImg,
      title: "Desert Adventures",
      description: "Embark on an adventurous journey through the deserts.",
      bgColor: "bg-yellow-500",
    },
    {
      id: 5,
      img: contributerImg,
      title: "Ocean Depths",
      description: "Dive deep into the ocean and discover its mysteries.",
      bgColor: "bg-teal-500",
    },
  ];

    // styles
    export const focusCardStyles = "-translate-y-10 z-10 opacity-100 scale-100";
    export const belowCardStyles = "-translate-y-0 z-0 opacity-75 scale-90";
    export const aboveCardStyles = "-translate-y-8 z-0 opacity-0 scale-90";
    export const cardsCommonStyles =
      "temtimonial bg-gray-600 transition-all duration-1000 absolute max-w-screen p-4 sm:h-[290px] min-h-[290px] w-full rounded-2xl text-white text-center pt-10 px-20";
    export const cardHeadingStyles =
      "contributersName text-lg font-bold leading-[35px] relative";
    export const cardDescriptionStyles =
      "contributersDescription text-gray-400 max-w-[675px] mx-auto";
    export const cardImgStyles =
      "w-[150px] aspect-square rounded-full absolute left-1/2 -translate-x-1/2 -top-32";
    export const buttonStyles =
      "text-[#66bee3] hover:text-gray-600 absolute z-[500] top-[5.5rem] bg-[#66bee3] active:scale-90 transition-all duration-500 sm:scale-100 scale-75";
  