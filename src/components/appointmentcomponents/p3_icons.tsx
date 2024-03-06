import React from 'react'
import Image from 'next/image'

export default function icons() {
    const iconCards = [
        {src: "/image.jpg", name: "Teeth"},
        {src: "/image.jpg", name: "Heart"},
        {src: "/image.jpg", name: "Eye"},
        {src: "/image.jpg", name: "Kidney"},
        {src: "/image.jpg", name: "Bone"},
        {src: "/image.jpg", name: "Brain"},
    ]
  return (
    <div className='bg-[#e5f9f7] h-[110vh] flex justify-center items-center'>
      <div className='w-2/3 flex flex-wrap justify-between gap-[4vw]'>
        {iconCards.map((item, index)=>(
            <div key ={index} className='bg-white w-[29%] flex flex-col justify-center px-[2vw] py-[2vw] gap-[3vh] rounded-3xl'>
                <Image
                alt="1"
                className="aspect-video rounded-2xl"
                height="200"
                src={item.src}
                width="160"
              />
              <span className='font-semibold'>{item.name}</span>
              <svg width="100" height="20" xmlns="http://www.w3.org/2000/svg" className="">
            <line
              x1="0"
              y1="0"
              x2="50"
              y2="0"
              stroke="#fb5d3a"
              strokeWidth="5"
            />
          </svg>
            </div>
        ))}
      </div>
    </div>
  )
}
