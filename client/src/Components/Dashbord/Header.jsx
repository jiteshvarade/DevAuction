import React from 'react'
import { Link } from 'react-router-dom' 
import hamMenu from '../../../public/Icons/iconsmenu.png'

function Header({ Username = "Jhon", UserImg = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D", isnav, setisnav }) {
    return (
        <>


            <div id="nav-top" className='flex justify-between flex-wrap-reverse md:flex-nowrap items-center mt-3'>
                <div>
                    <h3 className='text-[20px] font-bold'>Hi, {Username}</h3>
                    <p className='text-[14px] font-semibold'>Welcome back, it's good to have you back</p>
                </div>

                <div className='flex w-[100%] md:w-fit justify-end gap-4'>
                    <div className='w-10 md:hidden mr-auto' onClick={() => setisnav(!isnav)} src={hamMenu}> 
                    <span className="material-symbols-outlined ">
                        menu
                    </span></div>

                    {/* <div className=' flex justify-center items-center border-2 bg-white  text-[#050618] w-10 h-10 rounded-full' >
                        <span className="material-symbols-outlined text-xl md:text-3xl ">
                            notifications
                        </span>
                    </div> */}
                    <div className='w-8 h-8 bg-white rounded-full'>
                        <Link to='/homepage/profile' >
                        <img className='h-[100%] w-[100%] rounded-full' src={UserImg} alt="" />
                        </Link>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Header