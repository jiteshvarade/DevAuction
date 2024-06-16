import { GiHourglass } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { RxUpdate } from "react-icons/rx";
import { FaCode } from "react-icons/fa6";
import { RiUserVoiceLine } from "react-icons/ri";
import { PiFileVideo } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";

const FeatureDetails = [
  {
    icon: <GiHourglass size="2.5rem" />,
    heading: "Auction Rooms",
    description:
      "Real-time bidding with a video and chat for competitive pricing.",
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
    icon: <FaUserFriends size="2.5rem" />,
    heading: "Meaningful Connections",
    description: "View Projects They Made to Foster Genuine Relationships.",
  },
];

export default FeatureDetails;
