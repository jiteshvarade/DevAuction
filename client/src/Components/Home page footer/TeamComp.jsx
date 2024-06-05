import React from 'react'

function TeamComp() {

    const data = [
        {
            url: 'https://picsum.photos/id/237/600/300',
            name: 'Khushi Prashad',
        },
        {
            url: 'https://picsum.photos/id/237/600/300',
            name: 'Nithsh',
        },
        {
            url: 'https://picsum.photos/id/237/600/300',
            name: 'Ankit',
        },
        {
            url: 'https://picsum.photos/id/237/600/300',
            name: 'Gitash',
        },
        {
            url: 'https://picsum.photos/id/237/600/300',
            name: 'Kaniska',
        },
        {
            url: 'https://picsum.photos/id/237/600/300',
            name: 'Aarti',
        },
        {
            url: 'https://picsum.photos/id/237/600/300',
            name: 'Shubham',
        },
    ]


  return (
    
        <>
        <h5 className='text-center text-4xl font-bold my-10'>Team Members</h5>
        <div id="outer-wrapper" className='max-w-[1300px] overflow-hidden mx-auto mb-10'>
            <div id="inner-weapper" className='flex gap-3 animate-[toRight_20s_linear_infinite]'>
                {data.map(({url, name}) => (
                    <div className="card w-[180px] border-2 border-[#25ffbb] p-3 rounded-3xl bg-[#0a0b1d]">
                        <div className="img w-[150px] h-[150px]">
                        <img src={url} className='object-cover w-[150px] h-[150px] rounded-full' alt="" />
                        </div>
                        <div className="name text-xl text-white font-semibold text-center pt-5">
                            {name}
                        </div>
                    </div>
                ))}
                {data.map(({url, name}) => (
                    <div className="card w-[180px] border-2 border-[#25ffbb] p-3 rounded-3xl bg-[#0a0b1d]">
                        <div className="img w-[150px] h-[150px]">
                        <img src={url} className='object-cover w-[150px] h-[150px] rounded-full' alt="" />
                        </div>
                        <div className="name text-xl text-white font-semibold text-center pt-5">
                            {name}
                        </div>
                    </div>
                ))}
                
            </div>

                
        </div>
        </>
    
  )
}

export default TeamComp