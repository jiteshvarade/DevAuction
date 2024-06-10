import React, { useState } from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import GradientBtn from '../Buttons/GradientBtn';
import bgimg from './createProjectBg.png'
// import bg from './createprojectBg.png'
function CreateProPopUp() {
    function showAndHideME() {
        document.querySelector('#createProjectForm').classList.toggle('hidden')
    }

    return (
        <>
            {/* <span onClick={() => showAndHideME()} className='px-4 py-3 cursor-pointer bg-green-500 '>show&Hide</span> */}
            <div id='createProjectForm' className="w-full absolute top-0  bg-[#0f1325] bg-opacity-90 py-2">
                <div className='bg-[#0f1325]   w-[70%] mx-auto h-full text-white pt-6'>
                <div id='content-box' className='w-full h-full'>
                    <div id="form" className='flex flex-wrap lg:flex-nowrap justify-between gap-2 px-3 items-center'>


                            <div className='flex w-full lg:w-[40%] self-start items-center text-lg md:text-2xl pl-10 gap-6 mb-5'>
                                <div onClick={showAndHideME} className='text-2xl md:text-4xl' id="">
                                    <FaLongArrowAltLeft />
                                </div>
                                <h2 className='font-semibold'>Create Project</h2>
                            </div>
                        <div className='w-full lg:w-[60%] '>
                            <div className="w-full px-4 rounded-xl bg-[#0CA3E7] bg-opacity-[7%] py-2 mb-2">
                                <p className='font-semibold text-xl'>Image Url</p>
                                <input type="text"
                                    name=""
                                    placeholder='Add Image url'
                                    className='w-full rounded-full px-4 py-1 border-none outline-none bg-[#062c4a] shadow-[inset_0_0_5px_white]'
                                    id=""
                                />
                            </div>

                            <div className="w-full px-4 rounded-xl bg-[#0CA3E7] bg-opacity-[7%] py-2 mb-2">
                                <p className='font-semibold text-xl'>Title</p>
                                <input type="text"
                                    name=""
                                    placeholder='Add a title'
                                    className='w-full rounded-full px-4 py-1 border-none outline-none bg-[#062c4a] shadow-[inset_0_0_5px_white]'
                                    id=""
                                />
                            </div>
                            <div className="w-full px-4 rounded-xl bg-[#0CA3E7] bg-opacity-[7%] py-2 mb-2">
                                <p className='font-semibold text-xl'>Description</p>
                                <textarea
                                    name=""

                                    className="w-full resize-none rounded-full px-4 py-2 border-none outline-none bg-[#062c4a] shadow-[inset_0_0_5px_white]"
                                    id="">

                                </textarea>
                            </div>
                            <div className="w-full px-4 rounded-xl bg-[#0CA3E7] bg-opacity-[7%] py-2 mb-2">
                                <p className='font-semibold text-xl'>Link</p>
                                <input type="text"
                                    name=""
                                    placeholder='Add a title'
                                    className='w-full rounded-full px-4 py-1 border-none outline-none bg-[#062c4a] shadow-[inset_0_0_5px_white]'
                                    id=""
                                />
                            </div>
                            <div className="w-full px-4 rounded-xl bg-[#0CA3E7] bg-opacity-[7%] py-2 mb-2">
                                <p className='font-semibold text-xl'>Togged topic</p>
                                <div className='py-2 flex flex-wrap gap-2'>
                                    <input placeholder='Prototyping' type="text" className='w-[120px] px-4 rounded-xl border-none outline-none bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white]' />
                                    <span className=' px-3 rounded-xl bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white] font-bold text-xl'>+</span>
                                </div>
                            </div>
                            <div className="w-full px-4 rounded-xl bg-[#0CA3E7] bg-opacity-[7%] py-2 mb-2">
                                <p className='font-semibold text-xl'>Offer Price</p>
                                <input type="number"
                                    name=""
                                    placeholder='Amount'
                                    className='w-full rounded-full px-4 py-1 border-none outline-none bg-[#062c4a] shadow-[inset_0_0_5px_white]'
                                    id=""
                                />
                            </div>
                            <GradientBtn placeholder="Publish" />

                        </div>

                    </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CreateProPopUp