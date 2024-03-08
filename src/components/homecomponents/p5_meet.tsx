import React from "react";
import Image from "next/image";

export default function meet() {
  return (
    <div className="flex mt-[6%] mx-[10%] items-center">
    <div className="w-full">
      <svg
        width="100"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-5"
      >
        <line x1="0" y1="0" x2="100" y2="0" stroke="#fb5d3a" strokeWidth="10" />
      </svg>
      <div className="text-4xl font-bold tracking-wide mb-[7%]">
        Meet Our Experts
      </div>
      <p className="w-2/3 text-[#7c7c7c] font-light mb-[7%]">
      We are committed to transforming the future of health through scientific excellence, human- centered technologies, and trusted infrastructure. Our team roll call includes engineers, clinicians, designers, and researchers—all dedicated to helping everyone live healthier lives every day.
      </p>
      <span className="text-[#28a4a4] font-semibold flex items-center gap-2">
        Learn More{" "}
        <span className="text-[#fb5d3a] font-light">
          {" "}
          <Image
            alt="1"
            className="aspect-square rounded-full"
            height="100"
            src="/assets/Vaid-page-1/p2-meet-our-experts/learnMore1.svg"
            width="22"
          />{" "}
        </span>{" "}
      </span>
    </div>
    <div>
    <Image
            alt="1"
            className="aspect-auto"
            height="100"
            src="/assets/Vaid-page-1/p2-meet-our-experts/testTubeHand.svg"
            width="1020"
          />
    </div>
    </div>
  );
}
