




import "./App.css";
import AuctionSteps from "./Components/Auction Steps/AuctionSteps"
import step1Img from "./assets/Screenshot 2024-05-31 at 8.36 3.png"

import './App.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Pages/Home'



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout />,
      children: [
        {
          path: "",
          element: <Home />
        }
      ]
    }
  ])
  const stepDetails = [
    {
      step: 1,
      heading: "Sign Up and Get Started",
      stepDescription: "Create your free account and gain access to a world of innovative projects. Whether you’re a buyer looking for unique solutions or a creator ready to showcase your work, it all starts here.",
      tagline: "Unlock endless possibilities with just one click!",
    },
    {
      step: 2,
      heading: "Buy Credits",
      stepDescription: "Upon entering your dashboard, you’ll be prompted to buy credits. Credits are necessary for participating in auctions. Choose the amount you want to purchase and complete the transaction through our secure payment gateway.",
      tagline: "Fuel your bidding power with secure, hassle-free payments!",
    },
    {
      step: 3,
      heading: "Enter Auction Rooms",
      stepDescription: "Once you have credits, you can enter auction rooms. Some rooms may require tickets, which can be bought using your credits, while others are free to enter. Each room showcases various projects up for auction.",
      tagline: "Step into the auction arena and seize your chance to win!",
    },
    {
      step: 4,
      heading: "Bid on Projects",
      stepDescription: "Inside the auction room, explore the projects available for bidding. Place your bids in real-time as you compete with others. The highest bidder at the end of the auction wins and receives the project's source code.",
      tagline: "Feel the thrill of live bidding and claim your prize!",
    },
    {
      step: 5,
      heading: "Receive the Source Code",
      stepDescription: "If you are the highest bidder, you’ll instantly receive the source code for the respective project. Both the buyer and seller will receive detailed invoices, ensuring transparency and professionalism.",
      tagline: "Win big and take home innovation!",
    },
    {
      step: 6,
      heading: "Explore the Gallery Section",
      stepDescription: "Visit our dedicated gallery section to discover developer content such as project reels. Here, you can give diamonds to the reels you appreciate and even buy the project directly from the reel.",
      tagline: "Discover and invest in creativity with a single click!",
    },
    {
      step: 7,
      heading: "Engage with User Profiles",
      stepDescription: "Explore user profiles to see their skills, experience, and videos of prebuilt projects. Each profile also shows how many projects the user has sold, providing insight into their expertise and reliability.",
      tagline: "Connect with top talent and explore their innovative works!",
    },
  ];
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
