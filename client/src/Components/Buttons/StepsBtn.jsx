import React from 'react'


export default function StepsBtn({stepNo}) {
  return (
    <button className='p-2 rounded-xl bg-opacity-10 border-2 border-[#0CA3E7] w-fit px-4' style={{boxShadow: "inset 0 0 12px 0 rgba(191, 151, 255, 0.24), 0 4px 27.9px 0 rgba(12, 163, 231, 0.25)", backgroundColor: "rgba(12, 163, 231, 0.11)"}}>Step {stepNo}</button>
  )
}
