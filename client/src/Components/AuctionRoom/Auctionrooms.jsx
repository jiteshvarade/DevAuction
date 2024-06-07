import React, { useState } from 'react'
import Card from './Card'
import './Auctionroom.css'
import Cardgold from './Cardgold'
import Cardplati from './Cardplati'
import Createauction from './Createauction'
import { Paginator } from 'primereact/paginator';
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Auctionrooms = ({ show, setshow }) => {

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(3);

    const cards = Array.from({ length: 25 }, (_, index) =>
        index % 2 === 0 ? <Card key={index} /> : <Cardgold key={index} />
    );

    const onPageChange = (event) => {

        setFirst(event.first);
        setRows(event.rows);
        
    };

    return (
        <div className=' bg-[#050618] flex flex-col gap-4' >
            <div className=' p-6 flex flex-col gap-4'>
                <div className='flex justify-between flex-wrap gap-8' >
                    <div className='text-[40px] font-semibold w-[300px] text-white'>Auction Room</div>
                    <button onClick={() => {
                        setshow(!show)
                    }}
                        className=' bg-gradient-to-b from-[#0ca2e7b0] px-8 py-2 text-white  border-white rounded-xl font-semibold text-[16px] '
                    >Create Room</button>
                </div>
                <div className='text-white text-[20px] flex gap-4 md:text-[24px] font-semibold'>
                    <div className=' border-r-2 pr-3 ' >
                        Free Rooms
                    </div>
                    <div className='opacity-60 pr-3 '>
                        Premium Rooms
                    </div>

                </div>

                <div className=' flex flex-col justify-center items-center w-[100%]   ' >
                    <div className='flex flex-wrap gap-2 justify-evenly transition-all duration-200'>
                        {cards.slice(first, first + rows).map((card) => card)}
                    </div>

                </div>
            </div>
            <Paginator
                        className='bg-[#050618] custom-paginator'
                        first={first}
                        rows={rows}
                        totalRecords={cards.length}
                        onPageChange={onPageChange}
                    />

        </div>
    )
}

export default Auctionrooms
