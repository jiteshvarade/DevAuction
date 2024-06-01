import "./App.css";
import AuctionSteps from "./Components/Auction Steps/AuctionSteps";
import step1Img from "./assets/Screenshot 2024-05-31 at 8.36 3.png";
import stepDetails from "./assets/component data/AuctionSteps";
import "./App.css";

function App() {
  return (
    <>
      <AuctionSteps stepDetails={stepDetails[0]} imgURL={step1Img} />
      <AuctionSteps stepDetails={stepDetails[1]} imgURL={step1Img} />
      <AuctionSteps stepDetails={stepDetails[2]} imgURL={step1Img} />
    </>
  );
}

export default App;
