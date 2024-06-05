import React from 'react'
import logo from '../../assets/AuctionroomImages/WonderKids Landing Page Exploration 1 (1).png'
import eye from '../../assets/AuctionroomImages/mdi_eye.png'
import time from '../../assets/AuctionroomImages/ion_time.png'
import './Auctionroom.css'

const Card = () => {
  return (
    <div className='border w-[31%]  rounded-xl bg-[#d9d9d983] border-[#D9D9D9] text-white p-4 flex flex-col gap-2 justify-center items-center' >

      <div className=' text-[#D9D9D9] text-left w-full text-[16px] font-bold' >Wonder Kids Website</div>
      <div>
        <img className=' border-[#D9D9D9] border rounded-lg'  alt='' src={logo} />
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
        <button className='text-black border border-[#D9D9D9] bg-gradient-to-b from-[#D9D9D9] px-8 py-3 text-[18px] font-semibold rounded-lg w-full' >Enter</button>
      </div>

    </div>
  )
}

export default Card
