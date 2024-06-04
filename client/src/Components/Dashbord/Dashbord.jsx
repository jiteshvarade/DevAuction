import React, { useState } from 'react'
import LeftNavbar from './LeftNavbar'

import EarningCards from './EarningCards'
import hamMenu from '../../../public/Icons/iconsmenu.png'
import Header from './Header'
import Cradites from './Cradites'
import Auction from './Auction'

function Dashbord() {

    return (
        <>
            <div id="main" className='flex h-screen'>
                {/* navbar */}
                <LeftNavbar />

                <div className='w-[100%] overflow-y-scroll md:basis-[80%] border-l-2 bg-[#050618]  px-10 pb-10 text-white'>
                    <Header />
                        
                    {/* earnings cards */}
                    <EarningCards />
                        
                        <Auction />

                    <Cradites />
                </div>
            </div>

        </>
    )
}

export default Dashbord