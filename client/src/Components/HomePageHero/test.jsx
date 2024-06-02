import React from 'react'
import logo from '../../../public/Icons/Logo.png'
function Test() {
  return (
    <>
    <section>
      <nav className=' px-8 absolute top-0 left-0 h-screen w-[15vw] border-2 bg-[]'>
        <div className="logo">
          <img 
          className=''
          width={100} 
          src={logo} 
          alt="" />
        </div>
        <ul className='font-semibold'>
          <li><span className='cursor-pointer '>Auction</span></li>
          <li><span>Live</span></li>
          <li><span>Completed auctions</span></li>
          <li><span>Upcoming auctions</span></li>
          <li><span>Gallery</span></li>
        </ul>
      </nav>

      <div>

      </div>
    </section>
    </>
  )
}

export default Test