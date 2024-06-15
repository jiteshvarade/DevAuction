import contributerImg from "../../assets/Icons/contributerImg.png";

export const items = [
    {
      id: 1,
      img: "https://unavatar.io/github/1stevengrant",
      title: "John Smith, Lead Developer",
      description: "Using [Your Website Name]'s auction platform has been a game-changer. The competitive bidding helped us secure a much higher value for our software than we anticipated. Highly recommended!",
      bgColor: "bg-green-500",
    },
    {
      id: 2,
      img: "https://randomuser.me/api/portraits/women/76.jpg",
      title: "Emily Johnson, CEO",
      description: "The Free Plan gave us a great start, and the Premium Plan's enhanced listing options and featured promotion significantly increased our visibility. We're thrilled with the results!",
      bgColor: "bg-blue-500",
    },
    {
      id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHNWkbNYWA9KU6gofP5rqXmEiq3jnqvWfog&s',
      title: "Michael Lee, Independent Developer",
      description: "I was new to auctioning projects, but [Your Website Name]'s user-friendly platform and helpful support made the process straightforward. I successfully auctioned my first project and received a great price.",
      bgColor: "bg-purple-500",
    },
    {
      id: 4,
      img: 'https://randomuser.me/api/portraits/women/45.jpg',
      title: "Sarah Thompson, CTO",
      description: "The ability to customize our auction pages and access advanced marketing tools has been crucial for our high-value projects. The investment in the Premium Plan has paid off multiple times over.",
      bgColor: "bg-yellow-500",
    },
    {
      id: 5,
      img: 'https://forumstatic.oneplusmobile.com/opforum-gl/upload/image/front/thread/20220615/88487/1089238553391005703/1089238553391005703.jpg',
      title: "David Wilson, Freelancer",
      description: "The basic promotion and bidder notifications in the Free Plan helped me get started, and I successfully sold several small projects. The positive experience has convinced me to upgrade to the Premium Plan.",
      bgColor: "bg-teal-500",
    },
  ];

    // styles
    export const focusCardStyles = "-translate-y-10 z-10 opacity-100 scale-100";
    export const belowCardStyles = "-translate-y-0 z-0 opacity-75 scale-90";
    export const aboveCardStyles = "-translate-y-8 z-0 opacity-0 scale-90";
    export const cardsCommonStyles =
      "temtimonial bg-[#0D0E20] transition-all duration-1000 absolute max-w-screen sm:h-[290px] min-h-[290px] w-full rounded-2xl text-white text-center";
    export const cardHeadingStyles =
      "contributersName text-lg font-bold leading-[35px] relative";
    export const cardDescriptionStyles =
      "contributersDescription text-gray-400 max-w-[675px] mx-auto";
    export const cardImgStyles =
      "w-[120px] aspect-square rounded-full absolute left-1/2 -translate-x-1/2 -top-[5.5rem] z-[10000]";
    export const buttonStyles =
      "text-[#66bee3] hover:text-[#0D0E20] absolute z-[500] top-[5.5rem] bg-[#66bee3] active:scale-90 transition-all duration-100 sm:scale-100 scale-75";
