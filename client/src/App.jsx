import "./App.css"
import Dashbord from "./Components/Dashbord/Dashbord"
import Createauction from "./Components/AuctionRoom/Createauction"
import { useSocket } from "./context/SocketProvider"
import HomePage from "./Pages/Home page/HomePage"

function App() {

  const socket = useSocket()
  console.log(socket)

  return (
    <>
      {/* <Dashbord /> */}
      {/* <Createauction/> */}
      <HomePage />

    </>
  ) 
  
}

export default App;
