import React from 'react'
import Header from '../../Components/Dashbord/Header'
import LeftNavbar from '../../Components/Dashbord/LeftNavbar'
import PreviewSec from '../../Components/PreviewSection/PreviewSec'


const Preview = () => { 
  return (
    <div>
        <div className='flex h-screen'>
            <LeftNavbar/>

            <div className='w-[100%] overflow-y-scroll md:basis-[80%] border-l-2 bg-[#050618]  px-6 pb-10 text-white'>
                <Header/>
                <div className='border mt-6 border-[#0ca2e739]' ></div>
                <PreviewSec/>
            </div>            
        </div>
      
    </div>
  )
}

export default Preview
