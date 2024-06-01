import React from 'react'
import GradientBtn from '../Gradient Btn/GradientBtn'

function HomePageHero() {
  return (
    <>
    <section className='w-full z-[-2] bg-slate-900 overflow-hidden h-[50vh] text-white  relative   md:h-[80vh]  lg:flex lg:h-[80vh]'>
      <div id="left" className='w-full h-full flex justify-center items-center flex-col'>
        <h1 className='text-xl font-bold md:text-4xl'>WORLD'S FIRST<br/> PROJECT AUCTION</h1>
        <p className='my-5 text-sm font-semibold lg:text-xl text-center'>Auction your innovative projects and get the rewards you deserve</p>
        <GradientBtn placeholder='Start for FREE' type='button' onClick={() => {}} />
      </div>
      <video 
      src="https://www.shutterstock.com/shutterstock/videos/1058000275/preview/stock-footage-business-information-digital-display-with-stock-market-charts-reflective-surface-financial-figures.webm"
      className='absolute top-0 z-[-1] lg:static lg:w-[50%] object-fill'
      width='100%'
      height='100vh'
      autoPlay muted loop
      ></video>
    </section>
    </>
  )
}

export default HomePageHero