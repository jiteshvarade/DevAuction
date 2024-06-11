import React from 'react'
import moneySak from '../../../public/Icons/moneySak.png'
import coinStack from '../../../public/Icons/coinstack.png'
import sakeofcoins from '../../../public/Icons/Sackofcoins.png'
import coins2 from '../../../public/Icons/2coins.png'

function EarningCards({earningAmount="000.00", earningRate="+00%", spandAmount="000.00", spandRate="+00%", avgAmount="000.00", avgRate="+00%",} ) {
    return (
        <>
            <div id="earningCards" className='no-scrollbar flex gap-3 h-auto md:justify-center md:items-center md:flex-wrap px-2 overflow-x-auto overflow-y-hidden'>

                <div className='relative min-w-[300px] mt-3 border-2 border-[#223534] rounded-lg basis-[32%]'>
                   <div className='flex items-center gap-3 mt-8 ml-6 mb-6'>
                    <img src={moneySak} width={30} alt="" />
                    <p className='text-xl font-semibold'>Total Earnings</p>
                   </div>
                   <div className='ml-4'>
                    <h4 className='text-3xl font-bold mb-2'>₹ {earningAmount}</h4>
                    <p className='opacity-0 mb-5 font-semibold'><span className='text-green-400'>{earningRate}</span> from last week</p>
                   </div>
                   <img src={coinStack} className='w-[150px] dropShado absolute right-0 top-10' alt="" />
                </div>

                <div className='relative min-w-[300px] mt-3 border-2  border-[#223534] rounded-lg basis-[32%]'>
                   <div className='flex items-center gap-3 mt-8 ml-6 mb-6'>
                    <img src={moneySak} width={30} alt="" />
                    <p className='text-xl font-semibold'>Total Spending</p>
                   </div>
                   <div className='ml-4'>
                    <h4 className='text-3xl font-bold mb-2'>₹ {spandAmount}</h4>
                    <p className='opacity-0 mb-5 font-semibold'><span className='text-green-400'>{spandRate}</span> from last week</p>
                   </div>
                   <img src={coins2} className='w-[100px] dropShado absolute right-0 top-20 rounded-2xl' alt="" />
                </div>

                <div className='relative min-w-[300px] mt-3 border-2 border-[#223534] rounded-lg basis-[32%]'>
                   <div className='flex items-center gap-3 mt-8 ml-6 mb-6'>
                    <img src={moneySak} width={30} alt="" />
                    <p className='text-xl font-semibold'>Average Spending</p>
                   </div>
                   <div className='ml-4'>
                    <h4 className='text-3xl font-bold mb-2'>₹ {avgAmount}</h4>
                    <p className='opacity-0 mb-5 font-semibold'><span className='text-green-400'>{avgRate}</span> from last week</p>
                   </div>
                   <img src={sakeofcoins} className='w-[85px] dropShado absolute right-4 top-20' alt="" />
                </div>
                
            </div>

        </>
    )
}

export default EarningCards