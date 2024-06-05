import React from 'react'

function AuctionCard({ title = "project title", imgage = "https://placehold.co/200x150" }) {
    return (
        <>
            <div className='w-[200px] border-2 rounded-xl p-2'>
                <h5 className='font-semibold text-2xl'>Title 1</h5>
                <div className='w-80%'>
                    <img className='min-w-[180px] w-[15vw] rounded-xl' src="https://placehold.co/200x150" alt="" />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-center'>
                        <span className="material-symbols-outlined">
                            alarm_on
                        </span>
                        <span>2:00</span>
                    </div>
                    <div className='flex items-center justify-center'>
                        <span className="material-symbols-outlined">
                            visibility
                        </span>
                        <span>40</span>
                    </div>
                </div>
                <div className='border-2 mt-5 shadowButton border-[#0CA3E7] text-[16px] flex justify-center items-center bg-gradient-to-t from-[#0CA3E7] to-[#050618] py-2 rounded-xl cursor-pointer'>
                    <span className='font-semibold ml-2'>Enter</span>
                </div>
            </div>
        </>
    )
}

export default AuctionCard