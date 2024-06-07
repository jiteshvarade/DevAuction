import React from 'react'

function TeamComp() {

    const data = [
        {
            url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg',
            name: 'Khushi Prashad',
        },
        {
            url: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
            name: 'Nitish Kumar',
        },
        {
            url: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
            name: 'Ankit Chauhan',
        },
        {
            url: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
            name: 'Jitesh Varade',
        },
        {
            url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg',
            name: 'Kanishka',
        },
        {
            url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg',
            name: 'Aarti',
        },
        {
            url: 'https://xsgames.co/randomusers/assets/avatars/male/74.jpg',
            name: 'Shubham',
        },
    ]


  return (
    
        <div className='bg-[#080a1c] py-10 text-white'>
        <h5 className='text-center text-4xl font-bold my-5'>Team Members</h5>
        <div id="outer-wrapper" className='max-w-[1300px] overflow-hidden mx-auto mb-10'>
            <div id="inner-weapper" className='flex gap-3 animate-[toRight_20s_linear_infinite]'>
                {data.map(({url, name}) => (
                    <div className='card w-[180px] border-2 border-[#111330] p-3 rounded-3xl bg-[#0a0b1d] relative after:content-[""] after:w-[85%] after:bg-gradient-to-r after:from-[#0a0b1d] after:via-[#ECECEC] after:to-[#0a0b1d] after:absolute after:bottom-0  after:h-[2px] after:block'>
                        <div className="img w-[150px] h-[150px]">
                        <img src={url} className='object-cover w-[150px] h-[150px] rounded-full' alt="" />
                        </div>
                        <div className="name text-xl text-white font-semibold text-center pt-5">
                            {name}
                        </div>
                    </div>
                ))}
                {data.map(({url, name}) => (
                    <div className='card w-[180px] border-2 border-[#111330] p-3 rounded-3xl bg-[#0a0b1d] relative after:content-[""] after:w-[85%] after:bg-gradient-to-r after:from-[#0a0b1d] after:via-[#ECECEC] after:to-[#0a0b1d] after:absolute after:bottom-0  after:h-[2px] after:block'>
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
        </div>
    
  )
}

export default TeamComp