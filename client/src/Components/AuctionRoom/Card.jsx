import React, { useState } from 'react'
import logo from '../../assets/AuctionroomImages/WonderKids Landing Page Exploration 1 (1).png'
import eye from '../../assets/AuctionroomImages/mdi_eye.png'
import time from '../../assets/AuctionroomImages/ion_time.png'
import './Auctionroom.css'
import GradientBtn from '../Buttons/GradientBtn'

const Card = () => {
  const [live,setlive] = useState(true) ;

  return (
    <div className='border relative w-[350px] rounded-xl bg-[#bec0dd1f] border-[#223534] text-white p-2 flex flex-col gap-2 justify-center items-center hover:scale-[1.02] transition ease-in-out hover:shadow-lg shadow-white ' >
      {
        live && 
        <span className="absolute right-2 top-2 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
      }
      
      <div className=' text-left w-full text-[16px] font-bold' >Wonder Kids Website</div>
      <div>
        <img className='rounded-lg' alt='' src={logo} />
      </div>
      <div className='flex w-full justify-between' >
        <div className='flex gap-2 '>
          <img alt='' src={eye} />
          <span className=''>2:00pm</span>
        </div>
        <div className='flex gap-2' >
          <img alt='' src={time} />
          <span>45</span>
        </div>
      </div>
      <div className='w-full hover:scale-[0.95] transition ease-in-out' >
        <button className='text-[#11111] bg-gradient-to-b from-[#18203E] to-[#172748]rounded-full px-8 py-3 text-[18px] font-semibold rounded-full border w-full' >Enter</button>
      </div>

    </div>
  )
}

export default Card
