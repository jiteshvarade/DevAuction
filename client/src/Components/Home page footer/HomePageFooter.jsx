import React from 'react'
import GradientBtn from '../Gradient Btn/GradientBtn'
import youtubeIcon from '../../../public/Icons/youtube.png'
import facebookIcon from '../../../public/Icons/facebook.png'
import instagramIcon from '../../../public/Icons/instagram.png'

export default function HomePageFooter() {
  return (
    <>
      <section className='bg-black text-white py-10'>
        <div className='text-center py-4'>
          <h4 className='text-4xl font-bold mb-5'>Contact Us</h4>
          <p className='text-sm text-slate-300'> Have questions? Get in touch with our support team.</p>
          <form action="#" className='w-[80%] max-w-[450px] mx-auto pt-10'>
            <input
              className='bg-white bg-opacity-20 border-slate-400 border-2 w-full rounded-md px-2 py-1'
              type="text"
              placeholder='Name'
              name=""
              id="" />
            <input
              className='bg-white bg-opacity-20 mt-7 border-slate-400 border-2 w-full rounded-md px-2 py-1'
              type="email"
              placeholder='Email'
              name=""
              id="" />
            <input
              type="tel"
              className='bg-white bg-opacity-20 border-slate-400 border-2 w-[48%] mt-8 rounded-md px-2 py-1'
              placeholder='Phone'
              name=""
              id="" />
            <input
              type="text"
              className='bg-white bg-opacity-20 border-slate-400 ml-[4%] mb-8 border-2 w-[48%] mt-8 rounded-md px-2 py-1'
              name=""
              placeholder='Subject'
              id="" />
            <textarea
              name=""
              placeholder='Message'
              className='bg-white bg-opacity-20 mb-9 border-slate-400 border-2 w-full rounded-md px-2 py-1'
              id=""></textarea>
            
              <GradientBtn type="submit" placeholder='Submit' onClick={() => { }} />
          
          </form>
        </div>
        <div>
          <h4 className='text-6xl text-center font-bold mb-5'>DevAuction</h4>
          <ul className='flex text-lg justify-between max-w-[550px] mx-auto'>
            <li><span className='hover:underline hover:text-slate-500 cursor-pointer'>Home</span></li>
            <li><span className='hover:underline hover:text-slate-500 cursor-pointer'>How it Works</span></li>
            <li><span className='hover:underline hover:text-slate-500 cursor-pointer'>Features</span></li>
            <li><span className='hover:underline hover:text-slate-500 cursor-pointer'>About Us</span></li>
            <li><span className='hover:underline hover:text-slate-500 cursor-pointer'>Contact Us</span></li>
          </ul>
          <hr className='mt-10 '/>
          <div className='flex justify-between items-center lg:px-10'>
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
