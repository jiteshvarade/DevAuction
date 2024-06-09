import React from 'react'

export default function SkillsContainer({skill}) {
  return (
    <div className='capitalize text-[10px] rounded-full px-2 p-[1px] bg-[#05081B]' style={{borderInline: "1px solid rgba(224, 224, 224, 0.18)", backgroundImage: "linear-gradient(to bottom, rgba(12, 163, 231, 0.08), rgba(12, 163, 231, 0.11))", boxShadow: "inset 0 0 12px 0 rgba(255,255,255,0.2)"}}>{skill}</div>
  )
}
