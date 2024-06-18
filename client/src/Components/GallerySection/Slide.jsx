import React from 'react'
import ChonkyDoggy from "../../assets/images/chonky doggy.jpg"
import './Slider.css'

const Slide = ({image,name}) => {
    return ( 

        <div className='relative border-2 border-[#141224] min-w-40 aspect-[0.92] rounded-2xl z-0 overflow-hidden hover:scale-125  transition-[0.5s] shadow-md shadow-[#ffffff64] slider-track'>
            <img className='h-full w-full object-cover' src={image ||  ChonkyDoggy} alt="" />
            <div className='text-[18px] w-[100%] absolute -bottom-1 px-4 flex flex-col z-10 content'>
                <div className='font-bold px-1 overflow-hidden text-center' >{name}</div>
                {/* <div>Apps + Website</div> */} 
            </div>
        </div>

    )
}

export default Slide
