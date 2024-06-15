import React from 'react'
import image from '../../assets/GalleryImages/V9wr.gif'
import './Slider.css'

const Slide = ({image,name}) => {
    return ( 

        <div className='relative border-2 h-[300px] min-w-[300px] rounded-2xl z-0 overflow-hidden hover:scale-[1.01]  transition-[0.5s] shadow-md shadow-[#ffffff64] slider-track'>
            <img className='h-[100%] w-[100%] object-cover' src={image} alt="" />
            <div className=' text-[18px] w-[100%] absolute bottom-0 px-4  flex flex-col z-10 content'>
                <div className=' font-bold  ' >{name}</div>
                {/* <div>Apps + Website</div> */} 
            </div>
        </div>

    )
}

export default Slide
