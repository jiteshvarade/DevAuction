import React from 'react'
import logo from '../../../public/Icons/Logo.png'
import menuIcon from '../../../public/Icons/iconsmenu.png'
function Test() {
  return (
    <>
    <section>
      <nav className='hidden px-8 absolute top-0 left-0 h-screen w-[20vw] border-2 bg-[#353a56] md:block'>
        <div className="logo">
          <img 
          className=''
          width={100} 
          src={logo} 
          alt="" />
        </div>
        <ul className='font-semibold mt-8 text-sm text-white text-center'>
          <li className='border-b-2 border-white mb-8 hover:bg-white hover:text-black'><span className='cursor-pointer '>Auction</span></li>
          <li className='border-b-2 border-white mb-8 hover:bg-white hover:text-black'><span className='cursor-pointer '>Live</span></li>
          <li className='border-b-2 border-white mb-8 hover:bg-white hover:text-black'><span className='cursor-pointer '>Completed auctions</span></li>
          <li className='border-b-2 border-white mb-8 hover:bg-white hover:text-black'><span className='cursor-pointer '>Upcoming auctions</span></li>
          <li className='border-b-2 border-white mb-8 hover:bg-white hover:text-black'><span className='cursor-pointer '>Gallery</span></li>
        </ul>
      </nav>
      <img src={menuIcon} className='w-[7vw] min-w-[60px] md:hidden ml-5' alt="" />

      <div>

      </div>
    </section>
    </>
  )
}

export default Test