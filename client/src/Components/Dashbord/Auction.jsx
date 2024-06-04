import React from 'react'
import AuctionCard from './AuctionCard'

function Auction() {
    return (
        <>
            <section className='py-5'>
                <div className='flex justify-between items-center py-2'>
                    <h4 className='text-2xl font-bold'>Auction Room</h4>
                    <button className='border-2 shadowButton border-[#0CA3E7] text-[16px] flex justify-center items-center bg-gradient-to-t from-[#0CA3E7] px-3 to-[#050618] py-2 rounded-xl cursor-pointer'>
                       Create Auction
                    </button>
                </div>
                <div className='flex gap-10 text-xl py-2 items-center font-semibold'>
                    <button>Free Rooms</button>
                    |
                    <button>Fold Rooms</button>
                    |
                    <button>Platinum Rooms</button>
                </div>
                <div className='flex gap-4 flex-wrap justify-center'>
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                </div>
            </section>
        </>
    )
}

export default Auction