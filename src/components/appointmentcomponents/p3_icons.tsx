import React from 'react'
import Image from 'next/image'

export default function icons() {
    const iconCards = [
        {src: "/assets/vaid-page-3/p2-Icons/teeth.svg", name: "Teeth"},
        {src: "/assets/vaid-page-3/p2-Icons/heart.svg", name: "Heart"},
        {src: "/assets/vaid-page-3/p2-Icons/eye.svg", name: "Eye"},
        {src: "/assets/vaid-page-3/p2-Icons/kidney.svg", name: "Kidney"},
        {src: "/assets/vaid-page-3/p2-Icons/bone.svg", name: "Bone"},
        {src: "/assets/vaid-page-3/p2-Icons/brain.svg", name: "Brain"},
    ]
  return (
    <div className='bg-[#e5f9f7] h-[110vh] flex justify-center items-center'>
      <div className='w-[65vw] flex flex-wrap justify-between gap-[4vw]'>
        {iconCards.map((item, index)=>(
            <div key ={index} className='bg-white w-[29%] flex flex-col justify-center px-[3.5vw] py-[2vw] gap-[3vh] rounded-3xl'>
                <Image
                alt="1"
                className="aspect-auto rounded-2xl"
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
