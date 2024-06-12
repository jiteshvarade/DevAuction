import "./App.css";
// import AudioRecorder from "./Components/Audio Recording/AudioRecording";
// import Dashbord from "./Components/Dashbord/Dashbord";
import Dashbord from "./Pages/Dashboardpage/Dashbord";
import Gallery from "./Components/GallerySection/Gallery"
// import Createauction from "./Components/AuctionRoom/Createauction";
// import { useSocket } from "./context/SocketProvider";
import Preview from "./Pages/preview/Preview"
import HomePage from "./Pages/Home page/HomePage";
// import RoomLobby from "./Components/Room/RoomLobby";
// import Room from "./Components/Room/Room";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing page/LandingPage"
// import Profile from "./Pages/Profile page/Profile";
function App() {

  // const socket = useSocket();
  // console.log(socket);

  return (
    <>
      {/* <Dashbord /> */}
      {/* <Createauction/> */}
      {/* <HomePage /> */}
      {/* <AudioRecorder /> */}
      {/* <LandingPage /> */}
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
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        {/* <Route path="/dashboard" element={<Dashbord/>} /> */}
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/dashboard" element={<HomePage/>}/>
        <Route path="/preview" element={<Preview/>} />
        {/* <Route path="/" element={<RoomLobby />} />
        <Route path="/room/:roomID" element={<Room />} /> */}
      </Routes>
    </>
  );
}

export default App;
