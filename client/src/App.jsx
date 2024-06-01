
import './App.css'
import Navbar from './Components/HomepageComp/Navbar'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    children: [
      {
        path: "",
        element: <Home />
      }
    ]
  }
])


function App() {

  return (
    <>
      
      <Navbar />
    </>
  )
}

export default App
