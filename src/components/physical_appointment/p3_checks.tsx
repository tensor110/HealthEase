import React from "react";
import Image from "next/image";

export default function checks() {
  const checkCards = [
    {
      src: "/assets/physical_appointment/health_checks/icon1.svg",
      title: "Full Body Checkup",
    },
    {
      src: "/assets/physical_appointment/health_checks/icon2.svg",
      title: "Diabetes",
    },
    {
      src: "/assets/physical_appointment/health_checks/icon3.svg",
      title: "Blood Test",
    },
    {
      src: "/assets/physical_appointment/health_checks/icon4.svg",
      title: "Kidney",
    },
    {
      src: "/assets/physical_appointment/health_checks/icon5.svg",
      title: "Vitamin",
    },
    {
      src: "/assets/physical_appointment/health_checks/icon6.svg",
      title: "Liver",
    },
    {
      src: "/assets/physical_appointment/health_checks/icon7.svg",
      title: "Hormone",
    },
    {
      src: "/assets/physical_appointment/health_checks/icon8.svg",
      title: "Thyroid",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#28a4a4] to-[#208585] flex flex-col justify-center items-center p-[5%] gap-4">
      <span className="text-white text-6xl font-bold">Doctor Created Health Checks</span>
      <p className="text-white font-semibold">Book your test in one click</p>
      <div className="flex flex-wrap gap-6 w-4/5 justify-between mt-10">
        {checkCards.map((item, index) => (
          <div key={index} className="flex flex-col justify-center bg-gradient-to-b from-[#7db7ba] to-white w-[15vw] h-[15vw] gap-4 pl-4 rounded-3xl">
            <Image
              alt="1"
              className="aspect-auto"
              height="150"
              src={item.src}
              width="80"
            />
            <span className="text-2xl">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
