import React, { useState } from 'react'
import GradientBtn from '../Buttons/GradientBtn'
import youtubeIcon from '../../../public/Icons/youtube.png'
import facebookIcon from '../../../public/Icons/facebook.png'
import instagramIcon from '../../../public/Icons/instagram.png'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import logo from "../../assets/LandingPage Images/logo remove background.svg";
import TeamComp from './TeamComp'

export default function HomePageFooter() {
  return (
    <>
      <section className='text-white py-10'>
        <div>
          <div className='flex justify-between items-center flex-wrap gap-4 w-full'>

          <h4 className='text-2xl text-center font-bold'><img src={logo} alt="" className='w-[120px]' /></h4>
          {/* <ul className='flex text-base lg:text-lg flex-wrap  items-center text-white font-thin gap-3'>
            <li><span className='hover:underline hover:text-[#8ed7f8] cursor-pointer'>Home</span></li>
            <li><span className='hover:underline hover:text-[#8ed7f8] cursor-pointer'>How it Works</span></li>
            <li><span className='hover:underline hover:text-[#8ed7f8] cursor-pointer'>Features</span></li>
            <li><span className='hover:underline hover:text-[#8ed7f8] cursor-pointer'>About Us</span></li>
            <li><span className='hover:underline hover:text-[#8ed7f8] cursor-pointer'>Contact Us</span></li>
          </ul> */}
          </div>

          <hr className='' />
          <div className='flex justify-between text-xs lg:text-sm items-center px-5 mt-2'>
            <div>&copy; 2024, DevAuction All Rights Reserved</div>
            <div className='flex justify-between items-center gap-3 text-3xl'>
              <a href="https://youtube.com/channel/UCTbpFySQiGvwgr_eAEINzhw?si=eYGThi3F-jXeaxWn" target='_blank'><FaYoutube className='hover:text-[#66bee3]'/></a>
              <a href="https://www.facebook.com/jitesh.varade?mibextid=ZbWKwL" target='_blank'><FaFacebook className='hover:text-[#66bee3]'/></a>
              <a href="https://www.instagram.com/devauction?igsh=MWsyZjhpbm1zNjEwdw==" target='_blank'><RiInstagramFill className='hover:text-[#66bee3]'/></a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
