import React from 'react'
import { IoEye } from "react-icons/io5";
import cardSrc from "../../assets/AuctionroomImages/WonderKids Landing Page Exploration 1 (1).png"

export default function ProjectTile({title, imgSrc, viewsCount}) {
  return (
    <div className='w-full p-2 rounded-3xl border-2 border-[#67879E] mb-8 break-inside-avoid bg-[#0CA3E7] bg-opacity-10'>
        <div className="img rounded-2xl overflow-hidden"><img src={imgSrc || cardSrc} alt={title} className='w-full h-full object-cover' /></div>
        <div className="footer flex items-center justify-between p-2 pb-0">
            <div className="title">{title}</div>
            <div className="views flex items-center gap-1"><IoEye color='#67879E'  />{viewsCount}</div>
        </div>
    </div>
  )
}
