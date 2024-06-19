import React from 'react'
import ChonkyDoggy from "../../assets/images/chonky doggy.jpg"
import './Slider.css'

const Slide = ({image,name}) => {
    return ( 

        <div className='relative border-2 min-w-40 aspect-[0.92] border-[#0ca2e739] rounded-2xl z-0 overflow-hidden  transition-[0.5s] shadow-md shadow-[#ffffff64]'>
            <img className='h-full w-full object-cover' src={image ||  ChonkyDoggy} alt="" />
            <div className='w-[100%] absolute bottom-0 flex flex-col z-10'>
                <div className='overflow-hidden text-center leading-none text-sm font-semibold py-1 bg-black bg-opacity-20'>{name}</div>
                {/* <div>Apps + Website</div> */} 
            </div>
        </div>

    )
}

export default Slide
