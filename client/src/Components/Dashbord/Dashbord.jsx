import React, { useState } from 'react'
import LeftNavbar from './LeftNavbar'

import EarningCards from './EarningCards'
import hamMenu from '../../../public/Icons/iconsmenu.png'
import Header from './Header'
import Cradites from './Cradites'
import Auction from './Auction'
import Auctionrooms from '../AuctionRoom/Auctionrooms'
import Highestbidder from '../AuctionRoom/Highestbidder'

function Dashbord() {
    const [isnav, setisnav] = useState(false)
    return (
        <>
            <div id="main" className='flex h-screen'>
                {/* navbar */}
                <LeftNavbar isnav={isnav} setisnav={setisnav} />

                <div className='w-[100%] overflow-y-scroll md:basis-[80%] border-l-2 border-[#4b4c59] bg-[#050618]  mg:px-10 pb-10 text-white'>
                    <Header isnav={isnav} setisnav={setisnav} />
                        
                    {/* earnings cards */}
                    <EarningCards />
                        
                        {/* <Auction /> */}
                        <Auctionrooms />
                        <Highestbidder />

                    <Cradites />
                </div>
            </div>

        </>
    )
}

export default Dashbord