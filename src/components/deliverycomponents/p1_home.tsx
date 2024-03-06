import React from "react";
import Image from "next/image";

export default function delhome() {
  return (
    <div className="flex my-[7%]">
      <div className="w-1/2"><Image
            alt="1"
            className="aspect-square"
            height="100"
            src="/assets/vaid-page-2/p1-hero/Group.svg"
            width="500"
          /></div>
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
      </div>
    </div>
  );
}
