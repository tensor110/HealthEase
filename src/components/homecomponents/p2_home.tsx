import Image from 'next/image'
import React from 'react'

export default function home() {
  return (
    <div className='flex'>
    <div className='flex flex-col mt-[3%] mx-[10%] w-1/2 z-10'>
      <div className='text-[#ff685b] my-[7%] font-medium'>Join Us</div>
      <div>
        <span className='text-7xl font-bold'>A Great Place to Receive Care</span>
        <p className='my-[8%] text-xl font-medium text-[#737373] tracking-widest w-4/5'>Medical Recover is most focused in helping you discover your most beauiful smile</p>
        <div className='flex gap-4 font-medium'>
            <button className='bg-[#fb5d3a] px-12 py-4 text-white rounded'>Get Medicine Now</button>
            <button className='px-12 py-4 text-[#fb5d3a] border-2 border-[#fb5d3a] rounded'>Learn More</button>
        </div>
      </div>
    </div>
    <div className='w-[55%] flex items-center absolute right-0 bottom-40'>
    <Image
              alt="1"
              className="aspect-auto absolute"
              height="150"
              src="/assets/Vaid-page-1/p1-Hero/oldDoctor.svg"
              width="900"
            />
    </div>
    </div>
  )
}