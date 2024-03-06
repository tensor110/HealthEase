import React from 'react'

export default function home() {
  return (
    <div className='flex flex-col mt-[10%] mx-[10%] w-1/2'>
      <div className='text-[#ff685b] my-[7%] font-medium'>Join Us</div>
      <div>
        <span className='text-7xl font-bold'>A Great Place to Receive Care</span>
        <p className='my-[8%] text-xl font-medium text-[#737373] tracking-widest'>Medical Recover is most focused in helping you discover your most beauiful smile</p>
        <div className='flex gap-4 font-medium'>
            <button className='bg-[#fb5d3a] px-12 py-4 text-white rounded'>Get Medicine Now</button>
            <button className='px-12 py-4 text-[#fb5d3a] border-2 border-[#fb5d3a] rounded'>Learn More</button>
        </div>
      </div>
    </div>
  )
}