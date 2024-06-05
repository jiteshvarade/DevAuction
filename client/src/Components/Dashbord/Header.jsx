import React from 'react'

import hamMenu from '../../../public/Icons/iconsmenu.png'

function Header({ Username = "Jhon", UserImg= "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" }) {
    return (
        <>
            

                <div id="nav-top" className='flex justify-between items-center mt-5'>
                    <img className='w-10 md:hidden ml-[-20px]' onClick={(pos) => setNavPosition(!pos)} src={hamMenu} alt="" />
                    <div>
                        <h3 className='text-[20px] font-semibold'>Hi, {Username}</h3>
                        <p className='text-[14px]'>Welcome back, it's good to have you back</p>
                    </div>

                    <div className='flex gap-4'>
                        <div id="search" className='hidden lg:flex justify-center items-center border-2 border-slate-700 px-2 rounded-xl '>
                            <span className="material-symbols-outlined text-[32px] ">
                                search
                            </span>
                            <input
                                type="text"
                                className='bg-transparent border-none outline-none ml-2 placeholder:text-white'
                                name="Search"
                                placeholder='Search'
                                id="" />
                        </div>
                        <div className='flex justify-center items-center border-2 bg-white text-[#050618] py-2 px-3 rounded-xl'>
                            <span className="material-symbols-outlined text-3xl ">
                                notifications
                            </span>
                        </div>
                        <div className='h-[60px] w-[60px] bg-white border-2 border-white rounded-lg'>
                            <img className='h-[100%] w-[100%] rounded-lg' src={UserImg} alt="" />
                        </div>
                    </div>
                </div>
               


           

        </>
    )
}

export default Header