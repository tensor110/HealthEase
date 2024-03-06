import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function firstcard() {
  const cardContent = [
    {
      src:"/assets/heartLogo.svg",
      heading: "Online/Physical Appointment",
      text: "Text For the mentioned service write here the content you want here to present, Vaid is the fastest growing website for medical uses.",
      href: "/appointment"
    },
    {
      src:"/assets/stetholcon.svg",
      heading: "Test NearBy",
      text: "Text For the mentioned servicewrite here the content you want....",
      href: "/test"
    },
    {
      src:"'assets/reportLogo.svg",
      heading: "Order Medicine via Doctor's Prescription",
      text: "Text For the mentioned service write here the content you want here to present........",
      href: "/delivery"
    },
  ];
  return (
    <div className="flex justify-between mt-[10%]  px-[10%]">
      {cardContent.map((item, index) => (
        <Link href={item.href} key={index} className="bg-white w-[31%] gap-10 p-12 shadow-md">
        <div className="w-full">
            <div className="mb-10"><Image
              alt="1"
              className="aspect-square rounded-full"
              height="100"
              src= {item.src}
              width="100"
            /></div>
          <span className="font-bold text-lg mb-240">{item.heading}</span>
          <svg width="100" height="20" xmlns="http://www.w3.org/2000/svg" className="mt-8">
            <line
              x1="0"
              y1="0"
              x2="50"
              y2="0"
              stroke="#fb5d3a"
              strokeWidth="5"
            />
          </svg>
          <p className="text-[#7c7c7c] font-light">{item.text}</p>
        </div>
        </Link>
      ))}
    </div>
  );
}
