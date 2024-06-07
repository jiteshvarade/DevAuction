import "./App.css"
import Dashbord from "./Components/Dashbord/Dashbord"
import Home from "./Pages/Home page/Home"
import Createauction from "./Components/AuctionRoom/Createauction"
import { useSocket } from "./context/SocketProvider"

function App() {

  const socket = useSocket()
  console.log(socket)

  return (
    <>
      <Home />
      {/* {/* //<Dashbord /> */}
      {/* <Createauction/> */}
    </>
  ) 
  
}

export default App;
