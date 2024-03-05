import React from 'react'
import Image from 'next/image'

export default function courier() {
  return (
    <div className='flex flex-col items-center mt-[10%]'>
      <div className="text-6xl font-bold w-2/3 text-center py-4 tracking-wide">
        The Medical Courier Assists You Promptly Each Time
      </div>
      <div className="w-[80vw] h-[50vh] bg-black mt-4 rounded-3xl">
        {/* <Image alt="1" className="w-screen aspect-[10/2] rounded-r py-4" height="200" src="/image.jpg" width="180" /> */}
      </div>
      <p className="w-2/3 text-center py-[4%]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
        quibusdam necessitatibus iste delectus officia provident sed blanditiis
        perferendis fuga sequi voluptas mollitia dolorum modi inventore alias
        laudantium harum, ex nisi animi quia, vitae adipisci eveniet!
      </p>
         </div>
  )
}
