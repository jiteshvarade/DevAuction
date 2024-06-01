import React from 'react'
import Navbar from './Components/HomepageComp/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/HomepageComp/Footer'

function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout