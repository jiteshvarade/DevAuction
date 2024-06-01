import React from 'react'

function OurContributer() {
    return (
        <>
            <section id="contributors" className='w-full h-[99vh] pt-2 bg-black text-white'>
                <h1 className='text-center text-3xl font-bold'>Our Contributors</h1>
                <div className='flex mt-4 w-full h-fit justify-center items-center gap-10'>
                    <div className='border-2 p-2 basis-[25%] hidden text-center bg-white bg-opacity-20 rounded-3xl md:block lg:basis-[25%] '>
                        <div className="w-[10vw] h-[10vw] rounded-full mb-5 bg-white mx-auto">
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold mb-9'>Your Name</h4>
                            <p className='text-sm opacity-70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam minima repellat debitis tempora possimus molestias blanditiis unde, quidem vel laboriosam, officiis aspernatur.</p>
                        </div>
                    </div>
                    <div className='border-2 basis-[60%] md:basis-[30%] p-8 text-center  bg-white bg-opacity-20 rounded-3xl'>
                        <div className="w-[13vw] h-[13vw] rounded-full mb-8 bg-white mx-auto">
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold mb-9'>Your Name</h4>
                            <p className='text-sm opacity-70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam minima repellat debitis tempora possimus molestias blanditiis unde, quidem vel laboriosam, officiis aspernatur.</p>
                        </div>
                    </div>
                    <div className='border-2 p-2 basis-[25%] hidden text-center bg-white bg-opacity-20 rounded-3xl md:block'>
                        <div className="w-[10vw] h-[10vw] rounded-full mb-5 bg-white mx-auto">
                        </div>
                        <div>
                            <h4 className='text-lg font-semibold mb-9'>Your Name</h4>
                            <p className='text-sm opacity-70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam minima repellat debitis tempora possimus molestias blanditiis unde, quidem vel laboriosam, officiis aspernatur.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurContributer