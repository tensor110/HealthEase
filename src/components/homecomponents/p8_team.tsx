import Image from "next/image";
import React from "react";

export default function team() {
  const teamItems = [
    {
      src: "/assets/Vaid-page-1/p5-our-team/user-cover-1.png",
      name: "Dr. Rajesh Kumar",
      specialization: "Orthopedic Surgeon",
    },
    {
      src: "/assets/Vaid-page-1/p5-our-team/user-cover-2.png",
      name: "Dr. Nisha Patel",
      specialization: "Pediatrician",
    },
    {
      src: "/assets/Vaid-page-1/p5-our-team/user-cover-3.png",
      name: "Dr. Sanjay Desai",
      specialization: "Psychiatrist",
    },
    {
      src: "/assets/Vaid-page-1/p5-our-team/user-cover-4.png",
      name: "Dr. Priya Sharma",
      specialization: "Neurologist",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#28a4a4] to-[#218686] pt-[20vh] pb-[5vh] px-[10%]">
      <div className="flex flex-col gap-4">
        <span className="text-white font-bold text-lg">Team</span>
        <div className="text-white font-bold text-6xl tracking-wider">
          Our Team
        </div>
        <p className="text-white font-light w-3/5 tracking-wide">
        Meet our team of specialized doctors ready to deliver exceptional healthcare services with compassion and expertise.
        </p>
      </div>
      <div className="flex justify-between mt-[10vh]">
        {teamItems.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black w-[23%] h-[78vh] rounded-3xl"
          >
            <Image
              alt="1"
              className="aspect-square w-full h-3/5 rounded-t-3xl"
              height="100"
              src={item.src}
              width="400"
            />
            <div className="flex flex-col justify-center items-center">
              <div className="text-xl font-bold mt-8">{item.name}</div>
              <div className="text-base font-light my-3">
                {item.specialization}
              </div>
              <div className="w-full h-[7vh] flex justify-center gap-[1.4vw]">
                <div>
                  <Image
                    alt="1"
                    className="aspect-square"
                    height="100"
                    src="/assets/Vaid-page-1/p5-our-team/facebook.svg"
                    width="25"
                  />
                </div>
                <div>
                  <Image
                    alt="1"
                    className="aspect-square"
                    height="100"
                    src="/assets/Vaid-page-1/p5-our-team/instagram.svg"
                    width="25"
                  />
                </div>
                <div>
                  <Image
                    alt="1"
                    className="aspect-square"
                    height="100"
                    src="/assets/Vaid-page-1/p5-our-team/twitter.svg"
                    width="25"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
