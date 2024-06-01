import React from 'react'
import logo from '../../../public/Icons/Logo.png'
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
        <ul className='flex gap-4 text-white'>
            <li><span className='text-lg font-semibold hover:text-[#23DD9F] cursor-pointer hover:underline'>Home</span></li>
            <li><span className='text-lg font-semibold hover:text-[#23DD9F] cursor-pointer hover:underline'>How it works</span></li>
            <li><span className='text-lg font-semibold hover:text-[#23DD9F] cursor-pointer hover:underline'>Features</span></li>
            <li><span className='text-lg font-semibold hover:text-[#23DD9F] cursor-pointer hover:underline'>About Us</span></li>
            <li><span className='text-lg font-semibold hover:text-[#23DD9F] cursor-pointer hover:underline'>Contact Us</span></li>

        </ul>

        <button className='text-red-500'>Login</button>
    </nav>
    </>
  )
}

export default Navbar