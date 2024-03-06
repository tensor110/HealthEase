import React from "react";
import Image from "next/image";

export default function service() {
  const serviceCards = [
    {
      src: "/assets/vaid-page-2/p5-vaid-med-del-service/stat-orange.svg",
      heading: "STAT Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      src: "/assets/vaid-page-2/p5-vaid-med-del-service/cold-chain-orange.svg",
      heading: "Cold Chain Logistics",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      src: "/assets/vaid-page-2/p5-vaid-med-del-service/location-orange.svg",
      heading: "Good and on-time service",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      src: "/assets/vaid-page-2/p5-vaid-med-del-service/multi-state-orange.svg",
      heading: "Multi-State Solutions",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ];
  return (
    <div className="flex flex-col items-center my-[15vh] gap-[20vh] bg-[#fafafa]">
      <div className="w-[75%] flex flex-col gap-4 items-center">
        <div className="text-6xl font-bold">
          The VAID Medical Delivery Service
        </div>
        <p className="text-center text-base font-medium w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa
          nobis, minus odit aliquam voluptatem cupiditate. Excepturi dolorum
          dolor enim dolorn ehgn.
        </p>
      </div>
      <div className="flex w-[85%] gap-10 flex-wrap justify-between">
        {serviceCards.map((item, index) => (
          <div key={index} className="bg-white flex p-[5vh] h-[30vh] rounded-2xl shadow-md justify-between items-center w-[48%]">
            <div>
              <Image
                alt="1"
                className="aspect-square rounded-2xl"
                height="200"
                src={item.src}
                width="90"
              />
            </div>
            <div className="mx-[4vw]">
              <span className="text-2xl font-bold">{item.heading}</span>
              <p className="font-semibold text-base text-[#b2b2b2]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
