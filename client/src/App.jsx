import "./App.css";
import Dashbord from "./Components/Dashbord/Dashbord";
import Gallery from "./Components/GallerySection/Gallery"
// import Createauction from "./Components/AuctionRoom/Createauction";
// import { useSocket } from "./context/SocketProvider";
import Preview from "./Components/PreviewSection/Preview"
import HomePage from "./Pages/Home page/HomePage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing page/LandingPage"
import Profile from "./Pages/Profile page/Profile";
function App() {

  // const socket = useSocket();
  // console.log(socket);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/dashboard" element={<Dashbord/>} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/profile" element={<HomePage/>}/>
        <Route path="/preview" element={<Preview/>} />
      </Routes>
    </>
  );
}

export default App;
