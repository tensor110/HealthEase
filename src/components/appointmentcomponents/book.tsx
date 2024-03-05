import React from 'react'
import Image from 'next/image'

export default function book() {
    const bookCards = [
        {src: "/image.jpg", top: "Heart Surgery", bottom: "Service"},
        {src: "/image.jpg", top: "Location", bottom: "Delhi"},
        {src: "/image.jpg", top: "Patient", bottom: "Ankit"},
        {src: "/image.jpg", top: "Date / time", bottom: "12 dec / 11.00 am"},
    ]
  return (
    <div className='flex flex-col bg-[#d4eded] h-[70vh] gap-[5vh] items-center justify-center'>
      <div className='text-5xl font-semibold'>Book an appontment</div>
      <div className='flex justify-between w-[90%] gap-[3vw]'>
        {bookCards.map((item, index)=>(
            <div key = {index} className='bg-[#28a4a4] px-5 py-8 flex w-1/4 h-fit justify-center items-center gap-[1vw] rounded-2xl'>
                <Image
                alt="1"
                className="aspect-square rounded-2xl"
                height="200"
                src={item.src}
                width="80"
              />
                <div className='flex flex-col'>
                    <span className='text-xl font-medium'>{item.top}</span>
                    <span className=''>{item.bottom}</span>
                </div>
            </div>
        ))}
      </div>
        <div className='w-[20vw] h-[12vh] text-black bg-[#fb5d3a] flex justify-center items-center rounded-2xl relative self-end mr-[5vw]'>
            <button className='w-[20vw] text-2xl text-white'>Book Now</button>
        </div>
    </div>
  )
}
