import React from "react";
import Image from "next/image";
import Link from "next/link";

function hero() {
  const labcards = [
    {
      src: "/assets/labs_near/Test Tube Rack.svg",
      name: "Aarvee Lab",
      address: "Near Gandhi colony, VastraNagar",
      rating: "/assets/Vaid-page-1/p4-happy-customer/stars.svg",
    },
    {
      src: "/assets/labs_near/Test Tube Rack.svg",
      name: "HealthPriority Lab",
      address: "Near Aastha Bhavan, Paota",
      rating: "/assets/Vaid-page-1/p4-happy-customer/stars.svg",
    },
    {
      src: "/assets/labs_near/Test Tube Rack.svg", 
      name: "FeelFree Lab",
      address: "Shastrinagar",
      rating: "/assets/Vaid-page-1/p4-happy-customer/stars.svg",
    },
    {
      src: "/assets/labs_near/Test Tube Rack.svg",
      name: "MindRelief Lab",
      address: "Bhawanipura",
      rating: "/assets/Vaid-page-1/p4-happy-customer/stars.svg",
    },
    {
      src: "/assets/labs_near/Test Tube Rack.svg",
      name: "SumanSafe Lab",
      address: "Manji ka hatha",
      rating: "/assets/Vaid-page-1/p4-happy-customer/stars.svg",
    },
  ];
  return (
    <div className="flex">
      <aside className="flex flex-col w-[25%] h-[84vh] border-2 border-[#bcb7b7] rounded-3xl ml-[1%] p-[2%] gap-2">
        <span className="font-bold text-lg">Filters</span>
        <span className="font-bold text-lg">Labs Location</span>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <span className="text-lg">Prefered</span>
        </div>
        <span className="font-bold text-lg">Labs Rating</span>
        <div className="flex gap-2">
          <Image
            alt="1"
            className="aspect-auto"
            height="100"
            src="/assets/Vaid-page-1/p4-happy-customer/stars.svg"
            width="90"
          />
          <span>4.0</span>
        </div>
        <div className="flex gap-2">
          <Image
            alt="1"
            className="aspect-auto"
            height="100"
            src="/assets/Vaid-page-1/p4-happy-customer/stars.svg"
            width="90"
          />
          <span>4.0</span>
        </div>
        <div className="flex gap-2">
          <Image
            alt="1"
            className="aspect-auto"
            height="100"
            src="/assets/Vaid-page-1/p4-happy-customer/stars.svg"
            width="90"
          />
          <span>4.0</span>
        </div>
        <div className="flex gap-2">
          <Image
            alt="1"
            className="aspect-auto"
            height="100"
            src="/assets/Vaid-page-1/p4-happy-customer/stars.svg"
            width="90"
          />
          <span>4.0</span>
        </div>
        <div className="flex gap-2">
          <Image
            alt="1"
            className="aspect-auto"
            height="100"
            src="/assets/Vaid-page-1/p4-happy-customer/stars.svg"
            width="90"
          />
          <span>4.0</span>
        </div>
      </aside>
      <div className="flex flex-col ml-[3%] w-2/3 gap-4">
        <span className="font-bold text-lg">Labs Near You</span>
        <div className="flex flex-wrap justify-between gap-6">
          {labcards.map((item, index) => (
            <div
              key={index}
              className="border-2 border-[#bcb7b7] w-[48%] rounded-2xl p-4 flex gap-3 items-center"
            >
              <div className="border-2 border-[#bcb7b7] rounded-2xl flex flex-col justify-center items-center">
                <Image
                  alt="1"
                  className="aspect-auto"
                  height="100"
                  src={item.src}
                  width="90"
                />
                <button className="bg-[#c9e8e8] border-[1px] border-[#bcb7b7] rounded-3xl w-full">
                  Laboratory
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">{item.name}</span>
                <span className="text-lg font-light">{item.address}</span>
                <div className="flex gap-4 items-center">
                  <Image
                    alt="1"
                    className="aspect-auto"
                    height="100"
                    src={item.rating}
                    width="90"
                  />
                  <span>4.0</span>
                  <Link
                    href="labs/lab_name"
                    className="bg-[#28a4a4] rounded-xl px-3 py-1 font-semibold text-white"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default hero;
