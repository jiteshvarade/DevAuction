import React from 'react'
import './Slider.css'
import Slide from './Slide'

const Slider = () => {

    const images = Array.from({ length:50 }, (_, index) => <Slide key={index} /> );
    

    return (
        <div className='mt-10 overflow-hidden p-2 rounded-xl'>
            <div className='flex gap-6 ' >
                {
                    images.map( (imag) => 
                        imag
                    )
                }
            </div>
        </div>
    )
}

export default Slider
