import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function p2_book() {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="text-5xl font-bold">Book A Lab Test</div>
      <span>
        It{"'"}s important to take care of your{" "}
        <span className="text-[#28a4a4]">health</span> even if you seem healthy.
      </span>
    <div className="flex flex-col justify-between self-center w-[60%] h-[65vh] bg-gradient-to-r from-[#28a4a4] to-[#208585] rounded-3xl relative z-10">
        <div>
        <Image
                  alt="1"
                  className="aspect-square absolute -top-20 -left-20"
                  height="200"
                  src="/radial 5.png"
                  width="320"
                />
        </div>
        <div className="flex justify-center bg-transparent w-full h-[65vh] rounded-3xl items-center gap-[5vw] z-30">
        <Link
          href="book/physicaltest"
          className="bg-white rounded-3xl h-2/3 w-[40%] px-[2vw] flex flex-col justify-center items-center cursor-pointer"
        >
          <div className="flex gap-8 items-center">
            <Image
              alt="1"
              className="aspect-square"
              height="100"
              src="/assets/book_tab/Group 1.svg"
              width="70"
            />
            <span className="font-bold tracking-wide">
              BOOK A PHYSICAL APPOINTMENT
            </span>
          </div>
          <svg
            width="300"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-8"
          >
            <line
              x1="0"
              y1="0"
              x2="500"
              y2="0"
              stroke="#fb5d3a"
              strokeWidth="5"
            />
          </svg>
          <p className="text-sm font-semibold text-[#787b7b]">
            You have to visit your nearest or selected laboratory on the agreed
            time slot and they will collect the Blood/Urine sample.
          </p>
        </Link>
        <Link
          href="book/hometest"
          className="bg-white rounded-3xl h-2/3 w-[40%] px-[2vw] flex flex-col justify-center items-center cursor-pointer"
        >
          <div className="flex gap-8 items-center">
            <Image
              alt="1"
              className="aspect-square"
              height="100"
              src="/assets/book_tab/Group 2.svg"
              width="70"
            />
            <span className="font-bold tracking-wide">
              BOOK A HOME TEST APPOINTMENT
            </span>
          </div>
          <svg
            width="300"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-8"
          >
            <line
              x1="0"
              y1="0"
              x2="500"
              y2="0"
              stroke="#fb5d3a"
              strokeWidth="5"
            />
          </svg>
          <p className="text-sm font-semibold text-[#787b7b]">
            Our phlebotomist will visit your home on the agreed time slot and
            collects the Blood/Urine sample.
          </p>
        </Link>
      </div>
        <div>
        <Image
                  alt="1"
                  className="aspect-square absolute -bottom-20 -right-20"
                  height="200"
                  src="/radial 5.png"
                  width="320"
                />
        </div>
    </div>
    </div>
  )
}
