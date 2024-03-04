import React from 'react'

export default function home() {
  return (
    <div className='flex pt-[20vh]'>
      <div className='w-2/5'>Image</div>
      <div className='flex flex-col'>
        <span className='text-black font-bold text-6xl my-8 tracking-wide'>Medical Courier</span>
        <span className='text-[#28a4a4] font-bold text-6xl w-1/3 py-4'>Specialist</span>
        <p className='text-black text-sm w-2/3 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat numquam enim earum hic maxime delectus! Dicta vitae rerum ex! Asperiores?</p>
        <div className='flex w-1/3 justify-between items-center my-6'>
            <button className='text-white bg-[#28a4a4] px-5 py-2 rounded-full text-lg font-semibold'>Order Now</button>
            <button className='flex'>
                <span>img</span>
                <span className='text-base font-semibold text-[#666666]'>Watch Video</span>
            </button>
        </div>
        <div className='flex justify-between items-center w-1/3'>
            <div className=''>Images</div>
            <div className='flex flex-col'>
                <span className='text-black font-semibold text-2xl'>95K <span className='text-[#28a4a4]'>+</span> </span>
                <span className='text-black font-bold text-sm'>Joined in already</span>
            </div>
        </div>
      </div>
    </div>
  )
}
