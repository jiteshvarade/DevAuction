import React from 'react'
import Table from './Table'
import GradientBtn from '../Buttons/GradientBtn'
import './Preview.css'

const PreviewSec = () => {
 
    return (
        <div className='mt-6 flex h-[560px] justify-center gap-4  flex-wrap '>
            <div className='border-[#223534] w-[775px] flex flex-col gap-2' >

                <div className='text-[34px] font-semibold' >Wonder Kids Website</div>
                <div className='text-[#0CA3E7] text-justify flex flex-wrap'>
                    Wonder Kids is Vibrant , interactive website design to provide
                    a safe and engaging online environment for children aged 3-12. The platform aims to combine
                    fun and learning through a vareity of educational games, activites and resourses
                </div>
                <div className='flex gap-2 mt-2 w-[300px] md:w-[500px] lg:w-[660px] overflow-scroll no-scrollbar ' >
                    <div className='border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ' >Ecommerce</div>
                    <div className='border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ' >Lifestyle</div>
                    <div className='border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ' >Editors Choice</div>
                    <div className='border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ' >Sponsored</div>
                    <div className='border-2 border-[#E0E0E0] border-opacity-15  text-[#11111] text-[12px] min-w-fit rounded-full mb-1 py-1 px-6 bg-gradient-to-b from-[#18203E] to-[#172748] ' >Confidential</div>
                </div>
                <div className='border border-[#223534] mt-3 mb-4' ></div>
                <div className='flex justify-between mb-6 ' >
                    <div className='flex gap-2 justify-center items-center'>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border-2 border-white">
                            A
                        </span>
                        <span> Ankit Chauhan </span>
                    </div>

                    <GradientBtn placeholder="Make offer" />
                </div>
                <div className='border-2  h-[390px] rounded-2xl border-[#223534] ' >
                    <div className='w-[100%] h-[100%] bg-[#223534] rounded-2xl '>

                    </div>
                </div>
                <div className='flex justify-center gap-4 mb-4 mt-4 '>
                    <GradientBtn placeholder="Screen Shot" />
                    <GradientBtn placeholder="Live Preview" />
                </div>
            </div>
            <Table />
        </div>
    )
}

export default PreviewSec
