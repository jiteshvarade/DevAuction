import React from 'react'
import logo from '../../../public/Icons/Logo.png'
import menuIcon from '../../../public/Icons/iconsmenu.png'
import LogoutButton from '../Gradient Btn/LogoutButton'

function LeftNavbar({show, isnav, setisnav }) {
  return (
    <>
      <nav className={(isnav ? 'flex bg-[#050618] z-10 text-white h-[100vh]   pt-4 flex-col justify-between  items-center absolute top-0 left-0' : 'hidden md:flex basis-[20%] bg-[#050618] text-white h-[100vh]   pt-4 flex-col justify-between  items-center') + `${show ? " blur-xl " : ""}`}>
        <div className='w-[80%] mx-auto h-[40vh] '>
          

          <div className='flex justify-center items-center'>
            <span className="material-symbols-outlined text-[34px] mr-3">
              flutter_dash
            </span>
            <div>
              <h5 className='text-[16px] font-bold'>Auction</h5>
              <p className='text-[14px] mt-[-8px]'>Auction@demo.com</p>
            </div>
            {isnav ? <div onClick={() => setisnav(!isnav)} className='text-2xl absolute z-20 top-0 right-0'><span className="material-symbols-outlined">
            cancel
          </span></div> : ""}
          </div>

          <div className='mt-20  text-[16px] flex justify-center items-center bg-gradient-to-b from-[#0CA3E7] to-[#050618] py-2 rounded-xl cursor-pointer'>
            <span className="material-symbols-outlined text-[24px]">
              home
            </span>
            <span className='font-semibold ml-2'>Auction</span>
          </div>

          <div className=' mt-5  text-[16px] flex justify-center items-center bg-gradient-to-b from-[#0CA3E7] to-[#050618] py-2 rounded-xl cursor-pointer'>
            <span className="material-symbols-outlined text-[24px] ">
              database
            </span>
            <span className='font-semibold ml-2'>Gallery</span>
          </div>

        </div>

        <div className='flex mb-6'>
          <LogoutButton />
        </div>
      </nav>

      {/* second nav top */}


    </>
  )
}

export default LeftNavbar