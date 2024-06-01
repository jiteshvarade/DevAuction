import React, { useState } from 'react'
import GIcon from '../../public/Icons/Google.png'
function Login() {
    const [logEmail, setLogEmail ] = useState(false)
  return (
    <>
    <section className='w-full relative h-screen overflow-hidden flex justify-center items-center'>
    <video src="https://videos.pexels.com/video-files/6101343/6101343-hd_1366_720_30fps.mp4" autoPlay loop muted className='w-full  z-[-5] absolute'></video>
        
        <div className='border-2 rounded-xl min-w-96 w-[40%] bg-slate-700 bg-opacity-60'>
            <div id="logo" className='text-center py-3 '>
              <img className='w-10 block mx-auto my-5 bg-transparent' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvQ4Pvr8MU3QMOhu_3UFkztfs4qhp7Iz9_Q&s" alt="" />
                <h1 className='text-3xl text-white font-bold pt-2'>Welcome to DevAuction</h1>
            </div>
            <div className="button flex gap-3 flex-col items-center my-6">
                <button className='flex justify-center items-center w-[400px] bg-blue-950 px-6 rounded-md '>
                  <img className='w-10' src={GIcon} alt="" />
                  <span className='text-lg text-white font-semibold'>Continue With Google</span>
                </button>
                {
                  logEmail === false ? (
                    <button 
                    className='py-2 w-[400px] bg-blue-950 rounded-md'
                    onClick={() => setLogEmail(true)}
                    >

                  <span className='text-lg h-10 text-white font-semibold'>Continue With Email</span>
                </button>
                  ) :
                  (
                    <>
                    <input type="email" className='w-[400px] outline-none text-white p-2 bg-transparent border-2 border-blue-600 rounded-lg' placeholder='Email' name="" id="" />
                    <button className='flex justify-around items-center w-[350px] bg-blue-950 px-6 py-2 rounded-md'>
                  <span className='text-lg text-white font-semibold'>Continue With Email</span>
                </button>
                </>
                  )
                }
            </div>
            
        </div>
            
    </section>
    </>
  )
}

export default Login