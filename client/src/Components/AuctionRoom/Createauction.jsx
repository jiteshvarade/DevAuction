import React, { useState } from 'react'
import background from '../../assets/AuctionroomImages/Rectangle.png'
import add from '../../assets/AuctionroomImages/+ADD.png'
import { Dropdown } from 'primereact/dropdown'
import './Auctionroom.css'


const Createauction = () => {

    const [plan, setplan] = useState(null)
    const [sourceCodeFile, setSourceCodeFile] = useState('');
    const [url,seturl] = useState('') ; 
    const [title,settiltle] = useState('') ;
    const [date,setDate] = useState('')
    const [source,setsource] = useState('') ;
    const [desc,setdesc] = useState('') ; 
    const plans = [
        { name: 'Free Rooms', code: 'FR' },
        { name: 'Gold Rooms', code: 'GR' },
        { name: 'Platinum Rooms', code: 'PR' }
    ];

    const handleFileChange = (e) => {
        setSourceCodeFile(e.target.value)
        setSourceCodeFile(e.target.files[0]?.name || '');
    };


    const clickHandler = () =>{ 
        const data = {
            image:url,
            title : title ,
            date : date,
            description : desc ,
            premium:plan,
        }

        console.log(data) ;
    }

    return (
        <div className="flex justify-center items-center relative h-[800px] w-[1200px] rounded-xl shadow-lg bg-[#050618]">

            <div className='flex flex-col items-center gap-4 font-semibold  w-[80%] h-[650px] z-20 ' >

                <div className='  w-full text-[40px] text-left  text-white' >Create Auction</div>

                <div className='relative flex justify-center items-center shadow-md bg-[#bec0dd0d] rounded-md w-[100%] h-[20%]'>
                    <input
                        type='file'
                        value={url}
                        onChange={ (e) => {
                            seturl(e.target.value)
                        }}
                        className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                    />
                    <img className='w-[7%]' alt='' src={add} />
                </div>

                <div className='text-white w-[100%] flex gap-6 h-[18%]  ' >
                    <div className=' border w-[49%] h-[100%] rounded-md bg-[#bec0dd0d] flex justify-center items-center ' >
                        <div className='flex flex-col gap-2 w-full p-6 ' >
                            <label className='w-[80%] text-left' >Select Room</label>
                            <Dropdown value={plan} onChange={(e) => setplan(e.value)} options={plans} optionLabel="name" itemTemplate={(option) => (
                                <div className="custom-dropdown-item">
                                    {option.name}
                                </div>
                            )}
                                placeholder="Rooms" className="custom-dropdown text-white bg-[#062541] rounded-md px-10 py-3 w-full md:w-14rem" />
                        </div>
                    </div>
                    <div className='border w-[49%] h-[100%] rounded-md bg-[#bec0dd0d]' >
                        <div className='flex flex-col gap-2 w-full px-6 py-4  '>
                            <label>Project Title</label>
                            <input
                             value={title}
                             onChange={ (e) => { 
                                settiltle(e.target.value)
                             }}
                             placeholder='Project Title' className='bg-[#062541] rounded-md px-10 py-2 w-full md:w-14rem' />
                        </div>
                    </div>
                </div>

                <div className='text-white w-[100%] flex gap-6 h-[18%] ' >
                    <div className=' border w-[49%] h-[100%] rounded-md bg-[#bec0dd0d] flex justify-center items-center ' >
                        <div className='flex flex-col gap-2 w-full p-6 '>
                            <label>Time & Date</label>
                            <input 
                             value={date} 
                             onChange={ (e) =>{
                                setDate(e.target.value)
                             }}
                             className='bg-[#062541] rounded-md px-10 py-2 w-full md:w-14rem' type='date' />
                        </div>
                    </div>
                    <div className='border w-[49%] h-[100%] rounded-md bg-[#bec0dd0d]' >
                        <div className='flex flex-col gap-2 w-full px-6 py-4 '>
                            <label>Source Code</label>
                            <div className='relative'>
                                <input
                                    type='file'
                                    value={source}
                                    className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                                    onChange={handleFileChange}
                                />
                                <div className='bg-[#062541] rounded-md px-10 py-2 w-full md:w-14rem flex items-center'>
                                    <span className='text-[#ffffff7f]'>
                                        {sourceCodeFile || 'Upload Source Code'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border shadow-white  text-white w-[100%] h-[18%] rounded-md bg-[#bec0dd0d]' >
                    <div className='flex flex-col gap-2 w-full p-6 '>
                        <label>Project Description</label>
                        <textarea 
                        value={desc}
                        onChange={ (e) => {
                            setdesc(e.target.value) ;
                        }}
                        placeholder='Project description' className='bg-[#062541] rounded-md px-10 py-2 h-[40px] w-full md:w-14rem' />
                    </div>
                </div>

                <div className='w-full text-left'>
                    <button
                        onClick={ clickHandler}
                        className=' bg-gradient-to-b from-[#0ca2e7b0] px-8 py-2 text-white  border-white rounded-md text-[16px] '
                    >Submit</button>
                </div>

            </div>

            <img
                className="absolute bottom-0 w-full h-auto md:h-full z-0  "
                alt=""
                src={background}
            />
        </div>
    )
}

export default Createauction
