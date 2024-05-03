import React from "react";
import Image from "next/image";

export default function delhome() {
  return (
    <div className="flex my-[7%] gap-[2%]">
      <div className="w-auto">
        <Image
          alt="1"
          className="aspect-square"
          height="100"
          src="/assets/vaid-page-2/p1-hero/Group.svg"
          width="600"
        />
      </div>
      <div className="flex flex-col gap-6">
        <span className="text-black font-bold text-7xl">Medical Courier</span>
        <span className="text-[#28a4a4] font-bold text-7xl">
          Specialist
        </span>
        <p className="text-black text-sm w-[70%] py-2">
          Our Courier Specialists play a crucial role in ensuring the safe and
          efficient transport of medical supplies, pharmaceuticals, and
          biological materials.
        </p>
        <div className="flex w-[45%] justify-between items-center my-6">
          <button className="text-white bg-[#28a4a4] px-12 py-4 rounded-full text-lg font-semibold">
            Order Now
          </button>
          <button className="flex items-center gap-[1vw]">
            <Image
              alt="1"
              className="aspect-square"
              height="100"
              src="/assets/vaid-page-2/p1-hero/watchVideo.svg"
              width="15"
            />
            <span className="text-base font-semibold text-[#666666]">
              Watch Video
            </span>
          </button>
        </div>
        <div className="flex justify-between items-center w-[45%]">
          <div className="flex">
            <Image
              alt="1"
              className="rounded-full aspect-square"
              height="200"
              src="/assets/vaid-page-2/p1-hero/image 20 (1).png"
              width="50"
            />
            <Image
              alt="1"
              className="rounded-full aspect-square border-2 border-black"
              height="200"
              src="/assets/vaid-page-2/p1-hero/image 20 (2).png"
              width="50"
              style={{
                marginLeft: "-8px",
                zIndex: "1",
                border: "1px solid white",
              }}
            />
            <Image
              alt="1"
              className="rounded-full aspect-square"
              height="200"
              src="/assets/vaid-page-2/p1-hero/image 20 (3).png"
              width="50"
              style={{
                marginLeft: "-8px",
                zIndex: "1",
                border: "1px solid white",
              }}
            />
            <Image
              alt="1"
              className="rounded-full aspect-square"
              height="200"
              src="/assets/vaid-page-2/p1-hero/image 20 (4).png"
              width="50"
              style={{
                marginLeft: "-8px",
                zIndex: "1",
                border: "1px solid white",
              }}
            />
            <Image
              alt="1"
              className="rounded-full aspect-square"
              height="200"
              src="/assets/vaid-page-2/p1-hero/image 20.png"
              width="50"
              style={{
                marginLeft: "-8px",
                zIndex: "1",
                border: "1px solid white",
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-black font-semibold text-4xl">
              95K <span className="text-[#28a4a4]">+</span>{" "}
            </span>
            <span className="text-black font-bold text-xs">
              Joined in already
            </span>
          </div>
        </div>
          <div className="flex justify-end">
          <Image
                alt="1"
                className="aspect-square relative right-20"
                height="100"
                src="/assets/Vaid-page-1/p1-Hero/Group 516.svg"
                width="100"
              />
          </div>
      </div>
    </div>
  );
}
