import React from 'react'
import Card from './Card'
import './Auctionroom.css'

const Auctionrooms = () => {
    return (
        <div className=' h-full bg-[#050618] flex overflow-x-hidden ' >
            <div className='w-[22%] border-r'>

            </div>
            <div className='w-[78%]  flex flex-col gap-4'>
                <div className='flex justify-between' >
                    <div className='text-[40px] font-semibold text-white'>Auction Room</div>
                    <button
                        className=' bg-gradient-to-b from-[#0ca2e7b0] px-8 py-2 text-white  border-white rounded-xl font-semibold text-[16px] '
                    >Create Room</button>
                </div>
                <div className='text-white flex gap-4 text-[24px] font-semibold'>
                    <div className=' border-r-2 pr-3 ' >
                        Free Rooms
                    </div>
                    <div className=' border-r-2 pr-3 '>
                        Gold Rooms
                    </div>
                    <div>
                        Platinum Rooms
                    </div>
                </div>

                <div className='flex flex-wrap gap-7 justify-evenly ' >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>

        </div>
    )
}

export default Auctionrooms
