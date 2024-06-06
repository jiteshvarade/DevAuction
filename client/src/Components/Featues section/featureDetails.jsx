import { GiHourglass } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { RxUpdate } from "react-icons/rx";
import { FaCode } from "react-icons/fa6";
import { RiUserVoiceLine } from "react-icons/ri";
import { PiFileVideo } from "react-icons/pi";
import { IoStarHalf } from "react-icons/io5";

const FeatureDetails = [
  {
    icon: <GiHourglass size="2.5rem" />,
    heading: "Auction Rooms with Timer",
    description:
      "Real-time bidding with a countdown timer ensures competitive pricing.",
  },
  {
    icon: <GiTakeMyMoney size="2.5rem" />,
    heading: "Credit System",
    description: "Secure bidding with a credit system for entering auctions.",
  },
  {
    icon: <RxUpdate size="2.5rem" />,
    heading: "Real-Time Updates",
    description:
      "Live updates on bids and a Highest Bidder board for transparency.",
  },
  {
    icon: <FaCode size="2.5rem" />,
    heading: "Source Code Delivery",
    description:
      "Automatic delivery of project source code to the winning bidder.",
  },
  {
    icon: <RiUserVoiceLine size="2.5rem" />,
    heading: "Voice Bidding",
    description: "Engaging voice feature to announce bids during auctions.",
  },
  {
    icon: <PiFileVideo size="2.5rem" />,
    heading: "Project Reels",
    description:
      "View short videos of projects and buy the source code or hire the creator instantly.",
  },
  {
    icon: <IoStarHalf size="2.5rem" />,
    heading: "Review and Rating System",
    description: "Rate and review sellers for better transparency and trust.",
  },
];

export default FeatureDetails;
