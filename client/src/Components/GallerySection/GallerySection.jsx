import React from 'react'
import LongCard from './LongCard'
import ShortCard from './ShortCard'
import './Slider.css'

const GallerySection = () => {
    return (
        <div className=' mt-10'>
            <div className=' text-[12px] md:text-[18px] flex justify-evenly border-b-2 border-[#ffffff64] '>
                <div className='p-2' >Overview</div>
                
                <div className='p-2' >Apps</div>
                
                <div className='p-2' >Websites</div>
              
                <div className='p-2'>Featured Stores</div>
            </div>

            <div className='flex gap-4 mt-8 justify-center  md:justify-end' >
                <div>
                    <button className=' bg-gradient-to-b from-[#0ca2e7b0] px-8 py-2 text-white  border-white rounded-md text-[16px]'>Buy</button>
                </div>
                <div>
                    <button className=' bg-gradient-to-b from-[#0ca2e7b0] px-8 py-2 text-white  border-white rounded-md text-[16px]'>Invest</button>
                </div>
            </div>

            <div className='mt-8 md:columns-3 w-full p-2'>
                <LongCard/>
                <ShortCard/>
                <LongCard/>
                <ShortCard/>
                <LongCard/>
                <ShortCard/>
                <LongCard/>
                <ShortCard/>
                <LongCard/>
                <ShortCard/>
                <LongCard/>
                <ShortCard/>
                <LongCard/>
                <ShortCard/>
                <LongCard/>
                <ShortCard/>
                <LongCard/>
                <ShortCard/>
                <LongCard/>
                <ShortCard/>
                <LongCard/>
                <ShortCard/>
                <LongCard/>
                <ShortCard/>
                <LongCard/>
                <ShortCard/>

            </div>

            <div className='w-[100%] mt-6 text-center' >
                <button className=' bg-gradient-to-b from-[#0ca2e7b0] px-8 py-2 text-white  border-white rounded-md text-[16px]'>Browse More</button>
            </div>


        </div>
    )
}

export default GallerySection
