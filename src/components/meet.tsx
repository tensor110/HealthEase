import React from 'react'

export default function meet() {
  return (
    <div className='mx-[10%] mt-[15%]'>
      <svg width="100" height="20" xmlns="http://www.w3.org/2000/svg" className="mb-5">
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="0"
              stroke="#fb5d3a"
              strokeWidth="10"
            />
          </svg>
      <div className='text-4xl font-bold tracking-wide mb-[3%]'>Meet Our Experts</div>
      <p className='w-1/3 text-[#7c7c7c] font-light mb-[3%]'>Text For the mentioned service write here the content you want here to present. Vaid is the fastest growing website for medical uses.</p>
      <span className='text-[#28a4a4] font-semibold'>Learn More <span className='text-[#fb5d3a] font-light'> {">"} </span> </span>
    </div>
  )
}
