import "./App.css"
import Dashbord from "./Components/Dashbord/Dashbord"
import Home from "./Pages/Home page/Home"
import Createauction from "./Components/AuctionRoom/Createauction"
import { useSocket } from "./context/SocketProvider"
import CreateProPopUp from "./Components/ProjectAndEProfile/CreateProPopUp"
import ProfileEdit from "./Components/ProjectAndEProfile/ProfileEdit"

function App() {

  const socket = useSocket()
  // console.log(socket)

  return (
    <>
      {/* <Home /> */}
      {/* {/* //<Dashbord /> */}
      {/* <Createauction/> */}
      <CreateProPopUp />
      {/* <ProfileEdit /> */}
    </>
  ) 
  
}

export default App;
