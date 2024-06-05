import React from 'react'

function TeamComp() {

    const data = [
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
            name: 'Khushi Prashad',
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
            name: 'Nithsh',
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
            name: 'Ankit',
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
            name: 'Gitash',
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
            name: 'Kaniska',
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
            name: 'Aarti',
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
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