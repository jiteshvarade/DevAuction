import "./App.css";
import Dashbord from "./Pages/Dashboardpage/Dashbord";
import Gallery from "./Components/GallerySection/Gallery";
import Preview from "./Pages/preview/Preview";
import HomePage from "./Pages/Home page/HomePage";
import MeetingPage from "./Pages/Meeting Page/MeetingPage"

import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./Pages/Landing page/LandingPage";
import Profile from "./Pages/Profile page/Profile";
import Chat from "./Pages/Chat page/Chat";
import { MenuProvider } from "./context/MenuContextProvider";
// import Profile from "./Pages/Profile page/Profile";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <div>404 page not found</div>, // baad mein ise custome 404 page se replace kr lenge
    },
    {
      path: "/homepage",
      element: <HomePage />,
      children: [
        { path: "/homepage", element: <Dashbord /> },
        { path: "/homepage/profile", element: <Profile /> },
        { path: "/homepage/chats", element: <Chat /> },
      ],
    },
    { path: "/gallery", element: <Gallery /> },
    { path: "/preview", element: <Preview /> },
    {path: "/room/:roomid", element: <MeetingPage />}
  ]);

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/dashboard" element={<Dashbord/>} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/dashboard" element={<HomePage/>}/>
        <Route path="/preview" element={<Preview/>} />
        <Route path="/" element={<RoomLobby />} />
        <Route path="/room/:roomID" element={<Room />} />
      </Routes> */}
      <MenuProvider>
        <RouterProvider router={router} />
      </MenuProvider>
    </>
  );
}

export default App;
