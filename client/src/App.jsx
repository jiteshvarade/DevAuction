import "./App.css";
import Dashbord from "./Components/Dashbord/Dashbord";
// import Createauction from "./Components/AuctionRoom/Createauction";
// import { useSocket } from "./context/SocketProvider";
import HomePage from "./Pages/Home page/HomePage";
// import RoomLobby from "./Components/Room/RoomLobby";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing page/LandingPage"
// import Room from "./Components/Room/Room";

function App() {
  // const socket = useSocket();
  // console.log(socket);

  return (
    <>
      {/* <Dashbord /> */}
      
      {/* <Createauction/> */}
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/dashboard" element={<Dashbord/>} />
      </Routes>
    </>
  );
}

export default App;
