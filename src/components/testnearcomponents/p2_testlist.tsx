import React from "react";
import Image from "next/image";

export default function testlist() {
  const testlistCards = [
    {
      src: "/assets/vaid-page-4/p2-testlist/Dna.svg",
      title: "Disorder of Growth",
      text: 'Showing 1-1 of 1 result for "Disorder of Growth"',
    },
    {
      src: "/assets/vaid-page-4/p2-testlist/Knee Joint.svg",
      title: "Bone",
      text: 'Showing 1-1 of 1 result for "Bone"',
    },
    {
      src: "/assets/vaid-page-4/p2-testlist/AIDS Ribbon.svg",
      title: "AIDS",
      text: 'Showing 1-4 of 4 result for "AIDS"',
    },
    {
      src: "/assets/vaid-page-4/p2-testlist/Virus DNA.svg",
      title: "Allergy",
      text: 'Showing 1-1 of 1 result for "Allergy"',
    },
  ];
  return (
    <div>
      <div>
        <Image
          alt="1"
          className="aspect-square absolute z-10 right-0"
          height="100"
          src="/assets/vaid-page-4/p2-testlist/Group 488.svg"
          width="300"
        />
      </div>
      <div className="flex flex-col justify-center items-center my-[20vh]">
        <span className="text-[#fb5d3a] font-semibold">Test List</span>
        <div className="text-4xl font-semibold w-[55%] text-center">
          We offer a comprehensive coverage of more than 80+ medical tests with
          reliable results
        </div>
        <div className="flex my-[5vh] w-full justify-between px-[5vw]">
          {testlistCards.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border-t-4 border-[#fb5d3a] rounded-b-2xl shadow-lg w-[20vw] px-[3vw] py-[5vh] gap-5"
            >
              <Image
                alt="1"
                className="aspect-square"
                height="100"
                src={item.src}
                width="60"
              />
              <div>
                <span className="font-semibold">{item.title}</span>
                <p className="text-[#787b7b] text-xs">{item.text}</p>
              </div>
            </div>
          ))}
          <Image
            alt="1"
            className="aspect-square"
            height="100"
            src="/assets/vaid-page-4/p2-testlist/Group 489.svg"
            width="60"
          />
        </div>
      </div>
    </div>
  );
}
