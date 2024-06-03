import React, { useState } from 'react'
import LeftNavbar from './LeftNavbar'
import hamMenu from '../../../public/Icons/iconsmenu.png'
import Header from './Header'

function Dashbord() {
   
    return (
        <>
            <div id="main" className='flex h-screen'>
                {/* navbar */}
                <LeftNavbar />

                <Header />
            </div>

        </>
    )
}

export default Dashbord