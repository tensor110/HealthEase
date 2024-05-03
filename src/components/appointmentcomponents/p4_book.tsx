import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function book() {
  const bookCards = [
    {
      src: "/assets/vaid-page-3/p1-book-an-appointment/Frame 10.svg",
      top: "Heart Surgery",
      bottom: "Service",
    },
    {
      src: "/assets/vaid-page-3/p1-book-an-appointment/location.svg",
      top: "Location",
      bottom: "Delhi",
    },
    {
      src: "/assets/vaid-page-3/p1-book-an-appointment/Frame 12.svg",
      top: "Patient",
      bottom: "Ankit",
    },
    {
      src: "/assets/vaid-page-3/p1-book-an-appointment/calendar.svg",
      top: "Date / time",
      bottom: "12 dec / 11.00 am",
    },
  ];
  return (
    <div className="flex flex-col bg-[#d4eded] h-[70vh] gap-[5vh] items-center justify-center">
      <div className="text-5xl font-semibold">Book an appontment</div>
      <div className="flex justify-between w-[90%] gap-[3vw]">
        {bookCards.map((item, index) => (
          <div
            key={index}
            className="bg-white border-2 border-[#28a4a4] shadow-xl px-5 py-8 flex w-1/4 h-fit justify-start items-center gap-[1vw] rounded-2xl"
          >
            <Image
              alt="1"
              className="aspect-square rounded-2xl"
              height="200"
              src={item.src}
              width="80"
            />
            <div className="flex flex-col">
              <span className="text-xl font-medium">{item.top}</span>
              <span className="">{item.bottom}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-[20vw] h-[12vh] bg-[#fb5d3a] flex justify-center items-center rounded-2xl relative self-end mr-[5vw] text-2xl text-white">
        Book Now
      </button>
    </div>
  );
}
