import React from 'react'
import LongCard from './LongCard'
import ShortCard from './ShortCard'
import './Slider.css'
import { Link } from 'react-router-dom'
import GradientBtn from '../Buttons/GradientBtn'

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
                <GradientBtn placeholder="Buy" />
                <GradientBtn placeholder="Invest"/>
            </div>
            <div className='text-center' >
                <div className='mt-8 md:columns-2 lg:columns-3 gap-10   w-full p-2'>
                    <Link to="/preview">
                        <LongCard />
                        <ShortCard />
                        <LongCard />
                        <ShortCard />
                        <LongCard />
                        <ShortCard />
                        <LongCard />
                        <ShortCard />
                        <LongCard />
                        <ShortCard />
                        <LongCard />
                        <ShortCard />
                        <LongCard />
                        <ShortCard />
                        <LongCard />
                        <ShortCard />
                        <LongCard />
                        <ShortCard />
                        <LongCard />
                        <ShortCard />
                        <LongCard />
                        <ShortCard />
                        <LongCard />
                        <ShortCard />
                        <LongCard />
                        <ShortCard />
                    </Link>

                </div>

            </div>

            <div className='flex justify-center'>
             <GradientBtn placeholder="Browse More" />
            </div>
            


        </div>
    )
}

export default GallerySection
