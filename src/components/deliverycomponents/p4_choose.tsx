import React from "react";
import Image from "next/image";

export default function choose() {
  const chooseItems = [
    {
      src: "/assets/vaid-page-2/p4-why-choose/truck-orange.svg",
      heading: "Experienced Driver",
      text: "Our drivers highlight their experience, reliability, and commitment to safe and timely deliveries.They all have certifications (e.g., commercial driveds license).They emphasize their professionalism, punctuality, and customer service skills.",
    },
    {
      src: "/assets/vaid-page-2/p4-why-choose/quick--orange.svg",
      heading: "Quick Delivery",
      text: "Our company prioritizes reliability and prompt service. We understand that in critical situations, time matters. Our commitment to timely deliveries sets us  t.",
    },
    {
      src: "/assets/vaid-page-2/p4-why-choose/api-orange.svg",
      heading: "Integration of API",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    },
    {
      src: "/assets/vaid-page-2/p4-why-choose/service-orange.svg",
      heading: "Outstanding Service",
      text: "Text Text Text Text Text Text Text Text We believe in transparent communication. Our clients are informed at every step, ensuring trust and confidence. Text Text Text Text Text.",
    },
  ];
  return (
    <div className="bg-[#28a4a4] w-full my-[8vh] py-[5vh] px-[15vh] flex justify-between items-center">
      <div className="flex flex-col w-1/2 gap-4">
        <div className="text-7xl font-bold text-white">Why Choose Vaid?</div>
        <p className="text-base font-medium w-4/5 tracking-wide text-white">
        Certainly! When choosing a company, it{"'"}s essential to consider what sets one apart from the others. Here are some reasons why this company stands out:
        </p>
      </div>
      <div className="w-1/2 flex flex-wrap gap-6 justify-between">
        {chooseItems.map((item, index) => (
          <div key={index}  className="flex flex-col w-[48%] bg-white p-8 text-black gap-4 rounded-2xl border-[1px] border-black">
            <Image
              alt="1"
              className="aspect-square rounded-2xl"
              height="200"
              src={item.src}
              width="70"
            />
            <span className="text-xl font-extrabold">{item.heading}</span>
            <p className="text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
