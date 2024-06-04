import React from 'react'
import craditSecImg from '../../../public/Icons/craditesSectionImg.png'

function Cradites() {
    return (
        <>

            <section id="cradites">
                <div className=' mx-auto lg:w-[100%] bg-[#050b1e] border-2 flex items-center justify-between rounded-xl'>
                    <div className=' w-[100%] mx-3 my-3'>
                        <h4 className='text-2xl font-bold mb-3'>My Cradits</h4>
                        <div className='flex gap-2 flex-wrap'>

                            <div className='bg-[#0567FC] flex rounded-xl text-lg bg-opacity-30 px-3 py-2'>
                                ₹
                                <input
                                    type="number"
                                    placeholder='Amount'
                                    className='border-none w-[100%] text-lg pl-1 outline-none bg-transparent text-white placeholder:text-white'
                                    name=""
                                    id="" />
                            </div>
                            <button className='border-2 shadowButton border-[#0CA3E7] text-[16px] flex justify-center items-center bg-gradient-to-t from-[#0CA3E7] px-3 to-[#050618] py-2 rounded-xl cursor-pointer'>
                                Withdrow now
                                <span class="material-symbols-outlined">
                                    arrow_forward
                                </span>
                            </button>
                        </div>
                        <p className='text-[#0CA3E7] font-semibold mt-2'>panding (₹ 0)</p>
                    </div>
                    <div className='h-[100%] hidden lg:block'>
                        <img src={craditSecImg} className='h-full object-cover rounded-xl' alt="" />
                    </div>
                </div>

                <div className='mt-5 lg:flex justify-between'>

                    <div className='border-2 mb-4 lg:mb-0 rounded-lg py-3 lg:basis-[49%]'>
                        <h4 className='text-2xl font-semibold ml-3 my-3'>Transaction history</h4>
                        <div>
                            <div className='bg-[#0567FC] flex rounded-xl text-lg bg-opacity-30 px-3 py-2 w-[90%] mx-auto'>
                                <span class="material-symbols-outlined">
                                    wallet
                                </span>
                                No Transaction history
                            </div>
                        </div>
                    </div>

                    <div className='border-2 rounded-lg py-3 lg:basis-[49%]'>
                        <h4 className='text-2xl font-semibold ml-3 my-3'>Transaction history</h4>
                        <div>
                            <div className='bg-[#0567FC] flex rounded-xl text-lg bg-opacity-30 px-3 py-2 w-[90%] mx-auto'>
                                <span class="material-symbols-outlined">
                                    wallet
                                </span>
                                No Transaction history
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Cradites