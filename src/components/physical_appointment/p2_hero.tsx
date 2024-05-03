import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function hero() {
    const heroCards = [
        {src:"/assets/physical_appointment/hero/icon1.svg", text: "98% on time report"},
        {src:"/assets/physical_appointment/hero/icon2.svg", text: "97% timely sample collection"},
        {src:"/assets/physical_appointment/hero/icon3.svg", text: "99% positive reviews"},
        {src:"/assets/physical_appointment/hero/icon4.svg", text: "NABL, CAP and UKAS"},
    ]
  return (
    <div>
      <div className="flex flex-col items-center mt-[5%]">
        <div className="text-6xl font-bold w-2/3 text-center">Get Your Sample Collected In The Next 24 Hours!</div>
        <div className="flex w-full justify-between">
            <Image
              alt="1"
              className="aspect-auto w-1/3"
              height="150"
              src="/assets/physical_appointment/hero/pic1.png"
              width="300"
            />
          <div className="w-auto flex flex-wrap gap-5 py-[10vh] justify-center">
            {heroCards.map((item, index)=>(
            <div key = {index} className="w-[35%] bg-[#d9d9d9] flex flex-col justify-center items-center rounded-2xl py-10">
            <Image
              alt="1"
              className="aspect-auto"
              height="150"
              src={item.src}
              width="60"
            />
              <span>{item.text}</span>
            </div>
            ))}
            <Link
          href="physicaltest/labs"
          className="bg-[#fb5d3a] font-semibold text-white text-lg h-fit px-10 py-3 mt-10 rounded-full"
        >Look For Best Lab Near You</Link>

          </div>
            <Image
              alt="1"
              className="aspect-auto w-1/3"
              height="150"
              src="/assets/physical_appointment/hero/pic2.png"
              width="350"
            />
        </div>
      </div>
    </div>
  );
}
