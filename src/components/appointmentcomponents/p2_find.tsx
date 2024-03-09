import React from "react";
import Image from "next/image";

export default function find() {
  return (
    <div className="flex justify-between mx-[8vw] w-1/2">
      <div className="w-full flex flex-col gap-[4vh] my-[10vh]">
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
            className="aspect-auto absolute right-40 top-32 z-20"
            height="100"
            src="/assets/vaid-page-3/doctor 3rd.svg"
            width="400"
          />
          {/* <div className='bg-[#28a4a4] w-[19vw] h-[60vh] absolute right-48 top-20 rounded-3xl'>.</div> */}
      </div>
    </div>
  );
}
