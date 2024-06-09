import React from 'react'
import SearchIcon from '../../assets/GalleryImages/search 02.png'
import { RxCross2 } from "react-icons/rx";
import './Follow.css'
import GradientBtn from '../Buttons/GradientBtn';

const Followering = ({showFollowing,setShowFollowing}) => {
    return (
        
            <div className=' rounded-2xl bg-[#050618] h-[400px] w-[400px] p-2 overflow-scroll no-scrollbar '>
                <div className='sticky bg-[#050618] top-0 mb-3 z-10  pb-2' >
                    <div className='text-white font-semibold text-[24px] flex justify-between items-center ' >
                        <div>Following</div>
                        <RxCross2 onClick= {() => {
                            setShowFollowing(!showFollowing)
                        }} />
                    </div>
                    <hr className=' opacity-65 mt-2 sticky '  ></hr>
                    <div className='mt-6 relative' >
                        <input className=' text-white w-[100%] py-4 px-14 rounded-lg bg-[#0ca2e749]' ></input>
                        <img className='absolute top-4 left-4' src={SearchIcon} alt="" />
                    </div>
                </div>
                <div className='p-2 flex text-white justify-between border-b border-[#0ca2e749]' >
                    <div className='flex justify-center items-center gap-2 ' > 
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border-2 border-white">
                            A
                        </span>
                        <span>
                            Ankit Chauhan
                        </span>
                    </div>
                    <GradientBtn className="text-white" placeholder="Following" />
                </div>
                <div className='p-2 flex text-white justify-between border-b border-[#0ca2e749]' >
                    <div className='flex justify-center items-center gap-2 ' > 
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border-2 border-white">
                            A
                        </span>
                        <span>
                            Ankit Chauhan
                        </span>
                    </div>
                    <GradientBtn className="text-white" placeholder="Following" />
                </div>
                <div className='p-2 flex text-white justify-between border-b border-[#0ca2e749]' >
                    <div className='flex justify-center items-center gap-2 ' > 
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border-2 border-white">
                            A
                        </span>
                        <span>
                            Ankit Chauhan
                        </span>
                    </div>
                    <GradientBtn className="text-white" placeholder="Following" />
                </div>
                <div className='p-2 flex text-white justify-between border-b border-[#0ca2e749]' >
                    <div className='flex justify-center items-center gap-2 ' > 
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border-2 border-white">
                            A
                        </span>
                        <span>
                            Ankit Chauhan
                        </span>
                    </div>
                    <GradientBtn className="text-white" placeholder="Following" />
                </div>
                <div className='p-2 flex text-white justify-between border-b border-[#0ca2e749]' >
                    <div className='flex justify-center items-center gap-2 ' > 
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border-2 border-white">
                            A
                        </span>
                        <span>
                            Ankit Chauhan
                        </span>
                    </div>
                    <GradientBtn className="text-white" placeholder="Following" />
                </div>
                <div className='p-2 flex text-white justify-between border-b border-[#0ca2e749]' >
                    <div className='flex justify-center items-center gap-2 ' > 
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white border-2 border-white">
                            A
                        </span>
                        <span>
                            Ankit Chauhan
                        </span>
                    </div>
                    <GradientBtn className="text-white" placeholder="Following" />
                </div>

            </div>
        
    )
}

export default Followering
