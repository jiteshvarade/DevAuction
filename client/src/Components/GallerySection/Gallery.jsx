import React from 'react'
import Header from '../Dashbord/Header'
import LeftNavbar from '../Dashbord/LeftNavbar'
import Slider from './Slider'
import SearchIcon from '../../assets/GalleryImages/search 02.png'
import GallerySection from './GallerySection'

const Gallery = () => {
  return (
    <div>
        <div className='flex h-screen'>
            <LeftNavbar/>

            <div className='w-[100%] overflow-y-scroll md:basis-[80%] border-l-2 bg-[#050618]  px-10 pb-10 text-white'>
                <Header/>
                <Slider/>
                <div className='mt-6 relative' >
                    <input className='w-[100%] py-4 px-14 rounded-lg bg-[#0ca2e749]' ></input>
                    <img className='absolute top-4 left-4' src={SearchIcon} alt="" />
                </div>
                <GallerySection/>
            </div>
            
        </div>
      
    </div>
  )
}

export default Gallery
