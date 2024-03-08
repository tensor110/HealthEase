import React from "react";
import Image from "next/image";

export default function stats() {
  const statsCards = [
    { black: "95%", green: "+", heading: "on-time delivery rate" },
    { black: "2600", green: "+", heading: "deliveries per month" },
    { black: "5-", green: "Star", heading: "reviews from the clients" },
    { black: "2M", green: "+", heading: "deliveryed samples" },
  ];
  return (
    <div className="bg-[#fafafa] flex flex-col items-center justify-center my-[15vh] gap-[12vh]">
       <div>
      <Image
              alt="1"
              className="absolute aspect-auto mt-[10vh] left-0 "
              height="200"
              src="/radial 1.png"
              width="250"
            />
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <span className="text-6xl font-bold">Stats For Medical Courier</span>
        <p className="w-2/3 text-center font-semibold text-[#666666]">
        Our Courier Specialists play a crucial role in ensuring the safe and efficient transport of medical supplies, pharmaceuticals, and biological materials.
        </p>
      </div>
      <div className="flex justify-between w-[90%]">
        {statsCards.map((item, index) => (
          <div key = {index} className="flex flex-col bg-white shadow-lg px-[4vw] py-[4vh] gap-4 items-center justify-center z-0 rounded-3xl">
            <span className="text-6xl font-bold">
              {item.black}
              <span className="text-[#2fb95d]">{item.green}</span>
            </span>
            <span className="font-semibold text-[#666666]">{item.heading}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
