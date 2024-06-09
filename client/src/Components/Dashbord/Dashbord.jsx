import React, { useState } from 'react'
import LeftNavbar from './LeftNavbar'
import EarningCards from './EarningCards'
import Header from './Header'
import Cradites from './Cradites'
import Auctionrooms from '../AuctionRoom/Auctionrooms'
import Highestbidder from '../AuctionRoom/Highestbidder'
import Createauction from '../AuctionRoom/Createauction'
import Offers from './Offers'

function Dashbord() {
    const [isnav, setisnav] = useState(false)
    const [show, setshow] = useState(false);

    return (
        <div className=' '>

            <div id="main" className='flex h-screen'>
                
                {
                    show &&
                    <div className='absolute w-full flex justify-center  ' >
                        <Createauction show={show} setshow={setshow}/>
                    </div>
                } 
                {/* navbar */}

                <LeftNavbar show={show} isnav={isnav} setisnav={setisnav} />

                <div className={`w-[100%] overflow-y-scroll md:basis-[80%] border-l-2 border-[#4b4c59] bg-[#050618] mg:px-10 pb-10 text-white ${show ? "blur-xl" : ""}`}>
                    <Header isnav={isnav} setisnav={setisnav} />    

                    {/* earnings cards */}
                    <EarningCards />

                    {/* <Auction /> */}
                    <Auctionrooms show={show} setshow={setshow} />
                    <Highestbidder />
                    <Cradites />
                </div>
            </div>

        </div>
    )
}

export default Dashbord