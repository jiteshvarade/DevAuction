import React from 'react'
import logo from '../../../public/Icons/Logo.png'
import HamMenu from '../../../public/Icons/iconsmenu.png'
import GradientBtn from '../Gradient Btn/GradientBtn'
function Navbar() {
  return (
    <>
    <nav className='flex justify-between items-center w-full px-5 bg-black'>
        <div>
            <img 
            src={logo} 
            alt="" 
            className='w-16'
            />
        </div>
        <ul className='hidden gap-4 text-white md:flex'>
            <li><span className='text-lg font-semibold hover:text-[#23DD9F] cursor-pointer hover:underline'>Home</span></li>
            <li><span className='text-lg font-semibold hover:text-[#23DD9F] cursor-pointer hover:underline'>How it works</span></li>
            <li><span className='text-lg font-semibold hover:text-[#23DD9F] cursor-pointer hover:underline'>Features</span></li>
            <li><span className='text-lg font-semibold hover:text-[#23DD9F] cursor-pointer hover:underline'>About Us</span></li>
            <li><span className='text-lg font-semibold hover:text-[#23DD9F] cursor-pointer hover:underline'>Contact Us</span></li>

        </ul>

        <div className='flex'>
        <GradientBtn placeholder='LogIn' type="button" />
        <img className='block md:hidden w-10 mx-4' src={HamMenu} alt="" />
        </div>
    </nav>
    </>
  )
}

export default Navbar