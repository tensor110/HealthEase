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
          Whether you prefer the convenience of online appointments or the
          reassurance of in-person consultations, rest assured that our team of
          experts is dedicated to your well-being. Book your appointment today
          and experience personalized, insightful healthcare that always
          prioritizes you.
        </p>
        <button className="bg-[#fb5d3a] text-white font-bold text-2xl w-3/5 px-[2vw] py-[3vh] rounded-3xl">
          Book an appointment
        </button>
      </div>
      <div>
        <Image
          alt="1"
          className="aspect-auto absolute right-40 top-32 z-20"
          height="100"
          src="/assets/vaid-page-3/doctor 3rd.svg"
          width="400"
        />
      </div>
      <Image
                alt="1"
                className="aspect-square absolute right-10 bottom-20"
                height="100"
                src="/assets/Vaid-page-1/p1-Hero/Group 516.svg"
                width="100"
              />
    </div>
  );
}
