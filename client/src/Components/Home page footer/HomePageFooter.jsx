import React, { useState } from 'react'
import GradientBtn from '../Buttons/GradientBtn'
import youtubeIcon from '../../../public/Icons/youtube.png'
import facebookIcon from '../../../public/Icons/facebook.png'
import instagramIcon from '../../../public/Icons/instagram.png'
import TeamComp from './TeamComp'

export default function HomePageFooter() {
  return (
    <>
      <section className='text-white py-10'>
        <div>
          <div className='flex justify-between items-center flex-wrap gap-4 w-full px-10'>

          <h4 className='text-2xl text-center font-bold'><span className='text-4xl text-[#8ed7f8]'>DEV</span>AUCTION</h4>
          <ul className='flex text-base lg:text-lg flex-wrap  items-center text-white font-thin gap-3'>
            <li><span className='hover:underline hover:text-[#8ed7f8] cursor-pointer'>Home</span></li>
            <li><span className='hover:underline hover:text-[#8ed7f8] cursor-pointer'>How it Works</span></li>
            <li><span className='hover:underline hover:text-[#8ed7f8] cursor-pointer'>Features</span></li>
            <li><span className='hover:underline hover:text-[#8ed7f8] cursor-pointer'>About Us</span></li>
            <li><span className='hover:underline hover:text-[#8ed7f8] cursor-pointer'>Contact Us</span></li>
          </ul>
          </div>

          <hr className='mt-6 ' />
          <div className='flex justify-between text-xs lg:text-sm items-center px-10 mt-6'>
            <div>&copy; 2024, DevAuction All Rights Reserved</div>
            <div className='flex justify-between items-center gap-3 '>
              <a href="#" target='_blank'><img width={40} src={youtubeIcon} alt="" /></a>
              <a href="#" target='_blank'><img width={30} src={facebookIcon} alt="" /></a>
              <a href="#" target='_blank'><img width={40} src={instagramIcon} alt="" /></a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
