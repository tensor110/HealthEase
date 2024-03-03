import Image from "next/image";
import React from "react";

export default function team() {
  const teamItems = [
    {
      src: "/image.jpg",
      name: "Doctor Name",
      specialization: "Specialization",
    },
    {
      src: "/image.jpg",
      name: "Doctor Name",
      specialization: "Specialization",
    },
    {
      src: "/image.jpg",
      name: "Doctor Name",
      specialization: "Specialization",
    },
    {
      src: "/image.jpg",
      name: "Doctor Name",
      specialization: "Specialization",
    },
  ];
  return (
    <div className="bg-[#28a4a4] pt-[20vh] pb-[5vh] px-[10%]">
      <div>
        <span className="text-white font-bold text-lg">Team</span>
        <div className="text-white font-bold text-6xl tracking-wider my-6">Our Team</div>
        <p className="text-white font-light w-3/5 tracking-wide">
          Text For the mentioned service write here the content you want here to
          present. Vaid is the fastest growing website for medical uses.
        </p>
      </div>
      <div className="flex justify-between mt-[20vh]">
        {teamItems.map((item, index) => (
          <div key ={index} className="bg-white text-black w-[23%] h-[78vh] rounded-3xl">
            <Image
              alt="1"
              className="aspect-square h-[50vh] rounded-t-3xl"
              height="100"
              src= {item.src}
              width="250"
            />
            <div className="flex flex-col justify-center items-center">
              <div className="text-xl font-bold mt-8">{item.name}</div>
              <div className="text-base font-light my-3">{item.specialization}</div>
              <div className="w-full h-[7vh]">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
