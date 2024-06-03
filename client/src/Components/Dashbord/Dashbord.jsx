import React, { useState } from 'react'
import LeftNavbar from './LeftNavbar'

import EarningCards from './EarningCards'
import hamMenu from '../../../public/Icons/iconsmenu.png'
import Header from './Header'
import Cradites from './Cradites'

function Dashbord() {

    return (
        <>
            <div id="main" className='flex h-screen'>
                {/* navbar */}
                <LeftNavbar />

                <div className='w-[100%] md:basis-[80%] border-2 bg-[#050618]  px-10 text-white'>
                    <Header />

                    {/* earnings cards */}
                    <EarningCards />

                    <Cradites />
                </div>
            </div>

        </>
    )
}

export default Dashbord