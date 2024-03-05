import React from "react";
import Image from "next/image";

export default function says() {
  const statsCards = [
    {
      src: "/image.jpg",
      name: "Ravindra Gupta",
      profession: "Future Group Facilitator",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eos voluptatum quod ullam reiciendis, molestias cumque nulla officia ea repudiandae minus obcaecati ut? Eaque, delectus?",
    },
    {
      src: "/image.jpg",
      name: "Dilesh Chouhan",
      profession: "Dynamic Usability Specialist",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eos voluptatum quod ullam reiciendis, molestias cumque nulla officia ea repudiandae minus obcaecati ut? Eaque, delectus?",
    },
    {
      src: "/image.jpg",
      name: "Ayush Soni",
      profession: "Corporate Markets Consultant",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eos voluptatum quod ullam reiciendis, molestias cumque nulla officia ea repudiandae minus obcaecati ut? Eaque, delectus?",
    },
  ];
  return (
    <div className="bg-[#fafafa] flex flex-col items-center justify-center my-[15vh] gap-[12vh]">
      <div className="flex flex-col items-center justify-center gap-6">
        <span className="text-6xl font-bold">
          See What Others People Are Saing
        </span>
        <p className="w-2/3 text-center font-semibold text-[#666666]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, eos
          voluptatum quod ullam reiciendis, molestias cumque nulla officia ea
          repudiandae minus obcaecati ut? Eaque, delectus?
        </p>
      </div>
      <div className="flex justify-between items-center w-[70%] h-[80vh] bg-[#fb5d3a] rounded-3xl absolute z-10 mt-[34vh]"></div>
      <div className="flex justify-between items-center w-[90%] h-[80vh] rounded-3xl z-10">
        {statsCards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg w-[28vw] h-[50vh] px-[3vw] py-[4vh] gap-4 items-center justify-center rounded-3xl border-[1px] border-black"
          >
            <div className="flex flex-col gap-[3vh]">
            <div className="flex justify-start items-center gap-[2vw]">
                <Image
                  alt="1"
                  className="rounded-full aspect-square"
                  height="200"
                  src={item.src}
                  width="60"
                />
              <div>
                <div className="text-xl font-bold">{item.name}</div>
                <span className="text-[#666666] font-semibold text-sm">{item.profession}</span>
              </div>
            </div>
            <div>
              <p className="text-[#666666] font-semibold tracking-wide">{item.text}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
