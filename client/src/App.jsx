import "./App.css";
// import Dashbord from "./Components/Dashbord/Dashbord";
// import Createauction from "./Components/AuctionRoom/Createauction";
// import { useSocket } from "./context/SocketProvider";
import HomePage from "./Pages/Home page/HomePage";
// import RoomLobby from "./Components/Room/RoomLobby";
// import { Routes, Route } from "react-router-dom";
// import Room from "./Components/Room/Room";

function App() {
  // const socket = useSocket();
  // console.log(socket);

  return (
    <>
      {/* <Dashbord /> */}
      {/* <Createauction/> */}
      <HomePage />
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Home /> */}
      {/* //<Dashbord />
        //<Createauction/> */}
      {/* <Route path="/createRoom" element={<Createauction></Createauction>} /> */}
      {/* <Route path="/" element={<RoomLobby></RoomLobby>} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Home /> */}
        {/* //<Dashbord />
        //<Createauction/> */}
        {/* <Route path="/createRoom" element={<Createauction></Createauction>} /> */}
        {/* <Route path="/" element={<RoomLobby></RoomLobby>} />
        <Route path="/room/:roomID" element={<Room></Room>} /> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
