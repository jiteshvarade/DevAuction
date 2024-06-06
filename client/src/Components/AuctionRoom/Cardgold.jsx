import React from 'react'
import logo from '../../assets/AuctionroomImages/WonderKids Landing Page Exploration 1 (1).png'
import eye from '../../assets/AuctionroomImages/mdi_eye.png'
import time from '../../assets/AuctionroomImages/ion_time.png'
import './Auctionroom.css' 

const Card = () => {
  return (
    <div className='border w-[350px]  rounded-xl bg-[#fae7b231] border-[#FAE7B2] text-white p-4 flex flex-col gap-2 justify-center items-center' >

      <div className=' text-left w-full text-[1rem] font-bold' >Wonder Kids Website</div>
      <div className='md:shrink-0'>
        <img className=' border-black border rounded-lg'  alt='' src={logo} />
      </div>
      <div className='flex w-full justify-between' >
        <div className='flex gap-2 '>
          <img alt='' src={eye}/>
          <span className=''>2:00pm</span>
        </div>
        <div className='flex gap-2' >
          <img alt='' src={time}/>
          <span>45</span>
        </div>
      </div>
      <div className='w-full' >
        <button className='text-white bg-gradient-to-b border-[#] shadow-[#D9D9D9] from-[#fae7b2d1] px-8 py-3 text-[18px] font-semibold rounded-lg w-full' >Enter</button>
      </div>

    </div>
  )
}

export default Card
