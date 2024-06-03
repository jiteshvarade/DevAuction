import "./App.css";
import OurMission from "./Components/Our mission section/OurMission";
import OurContributer from "./Components/HomePageHero/OurContributer";
// import Test from "./Components/HomePageHero/Test";
import HomePageFooter from "./Components/Home page footer/HomePageFooter";
import NavBar from "./Components/NavBar/NavBar";
import Razorpaybutton from "./Components/RazorpayButton/razorpaybutton"
import Dashbord from "./Components/Dashbord/Dashbord";


function App() {
  return <>
  {/* <Test /> */}
  {/* <HomePageFooter /> */}
  <NavBar />
  <Razorpaybutton></Razorpaybutton>
  <Dashbord />

  </>
}

export default App;
