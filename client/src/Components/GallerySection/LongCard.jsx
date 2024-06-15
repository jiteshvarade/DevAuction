import React from 'react'
import Gif from '../../assets/GalleryImages/V9wr.gif'
import eye from '../../assets/AuctionroomImages/mdi_eye.png'

const LongCard = () => { 
    return (
        <div className='border-2 mt-4 mb-4 inline-block bg-[#0ca2e739] rounded-2xl w-[250px] h-[550px] lg:w-[350px] lg:h-[550px] '>
            <div className='w-[100%] h-[100%] p-3 flex flex-col gap-2'>
                <div className='border bg-[#a4f518] rounded-2xl lg:w-[325px] h-[445px]' >
                    <img className='h-[100%] w-[100%] rounded-2xl object-cover ' src={Gif} alt="" />
                </div> 
                <div className='flex justify-between '>
                    <div className=' font-bold ' >Wonder Kids Website</div>
                    <div className='flex gap-2'>
                        <img src={eye} alt="" />
                        <span>45</span>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border-2 border-white">
                        A
                    </span>
                    <div>MyBrandanova.com</div>
                </div>

            </div>
        </div>
    )
}

export default LongCard
