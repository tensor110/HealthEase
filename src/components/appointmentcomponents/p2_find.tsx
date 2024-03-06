import React from "react";
import Image from "next/image";

export default function find() {
  return (
    <div className="flex justify-between mx-[8vw]">
      <div className="w-3/5 flex flex-col gap-[4vh] my-[10vh]">
        <div className="text-7xl font-base">
          Find the Best Doctors for Your Health Concerns
        </div>
        <p className="font-medium">
          Get professional medical advice from the comfort of your own home. Our
          doctor consultation website connects you with licensed medical
          professionals for virtual consultations
        </p>
        <button className="bg-[#fb5d3a] text-white font-bold text-2xl w-3/5 px-[2vw] py-[3vh] rounded-3xl">Book an apponitment</button>
      </div>
      <div>
      <Image
            alt="1"
            className="aspect-auto"
            height="100"
            src="/assets/vaid-page-3/PngItem_1939059 3.png"
            width="400"
          />
      </div>
    </div>
  );
}
