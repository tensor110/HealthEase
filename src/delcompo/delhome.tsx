import React from "react";
import Image from "next/image";

export default function delhome() {
  return (
    <div className="flex mt-[10%]">
      {/* <div className='flex'> */}
      <div className="w-2/5">Image</div>
      <div className="flex flex-col">
        <span className="text-black font-bold text-6xl my-8 tracking-wide">
          Medical Courier
        </span>
        <span className="text-[#28a4a4] font-bold text-6xl w-1/3 py-4">
          Specialist
        </span>
        <p className="text-black text-sm w-2/3 py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          numquam enim earum hic maxime delectus! Dicta vitae rerum ex!
          Asperiores?
        </p>
        <div className="flex w-1/3 justify-between items-center my-6">
          <button className="text-white bg-[#28a4a4] px-5 py-2 rounded-full text-lg font-semibold">
            Order Now
          </button>
          <button className="flex">
            <span>img</span>
            <span className="text-base font-semibold text-[#666666]">
              Watch Video
            </span>
          </button>
        </div>
        <div className="flex justify-between items-center w-1/3">
          <div className="flex">
            <Image
              alt="1"
              className="rounded-full aspect-square"
              height="200"
              src="/image.jpg"
              width="50"
            />
            <Image
              alt="1"
              className="rounded-full aspect-square border-2 border-black"
              height="200"
              src="/image.jpg"
              width="50"
              style={{
                marginLeft: "-15px",
                zIndex: "1",
                border: "1px solid white",
              }}
            />
            <Image
              alt="1"
              className="rounded-full aspect-square"
              height="200"
              src="/image.jpg"
              width="50"
              style={{
                marginLeft: "-10px",
                zIndex: "1",
                border: "1px solid white",
              }}
            />
            <Image
              alt="1"
              className="rounded-full aspect-square"
              height="200"
              src="/image.jpg"
              width="50"
              style={{
                marginLeft: "-20px",
                zIndex: "1",
                border: "1px solid white",
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-black font-semibold text-2xl">
              95K <span className="text-[#28a4a4]">+</span>{" "}
            </span>
            <span className="text-black font-bold text-sm">
              Joined in already
            </span>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <div className='text-[#ff685b] my-[7%] font-medium'>Join Us</div> */}
      {/* <div>
        <span className='text-7xl font-bold'>A Great Place to Receive Care</span>
        <p className='my-[8%] text-xl font-medium text-[#737373] tracking-widest'>Medical Recover is most focused in helping you discover your most beauiful smile</p>
        <div className='flex gap-4 font-medium'>
            <button className='bg-[#fb5d3a] px-12 py-4 text-white rounded'>Get Medicine Now</button>
            <button className='px-12 py-4 text-[#fb5d3a] border-2 border-[#fb5d3a] rounded'>Learn More</button>
        </div>
      </div> */}
    </div>
  );
}
