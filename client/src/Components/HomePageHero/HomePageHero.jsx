import React from 'react'
import GradientBtn from '../Gradient Btn/GradientBtn'

function HomePageHero() {
  return (
    <>
    <section className='w-full z-[-2] bg-slate-900 overflow-hidden h-[50vh] text-white relative md:h-[80vh]  lg:flex lg:h-[80vh] '>
      <div id="left" className='w-full h-full flex justify-center items-center lg:items-start flex-col bg-gray-800 bg-opacity-75 p-14'>
        <h1 className='text-xl font-bold xl:text-6xl lg:text-4xl md:text-6xl sm:text-4xl  text-center lg:text-left'>WORLD'S FIRST<br/> PROJECT AUCTION</h1>
        <p className='my-5 text-sm lg:text-lg text-gray-400 font-serif lg:text-left text-center'>Auction your innovative projects and get the rewards you deserve</p>
        <GradientBtn placeholder='Start for FREE' type='button' onClick={() => {}} className={"w-fit"} />
      </div>
      <video 
      src="./videos/Horizontal Scrolling Animation for Computer by Abhijeet.mp4"
      className='absolute top-0 z-[-1] lg:static lg:w-[50%] object-cover h-full'
      width='100%'
      height='100vh'
      autoPlay muted loop
      ></video>
    </section>
    </>
  )
}

export default HomePageHero