import React from "react";
import Image from "next/image";
import Link from "next/link";

function hero() {
  const labcards = [
    {
      src: "/assets/labs_near/Standing Man.svg",
      name: "Health Check Basic",
      details: "83 test included",
      price: "1499 (1999)",
    },
    {
        src: "/assets/labs_near/Standing Man.svg",
      name: "Health Check Master",
      details: "90 test included",
      price: "2400 (3200)",
    },
    {
        src: "/assets/labs_near/Standing Man.svg",
      name: "(F)Full Body Checkup",
      details: "83 test included",
      price: "5499 (7332)",
    },
    {
        src: "/assets/labs_near/Standing Man.svg",
      name: "(M)Full Body Checkup",
      details: "83 test included",
      price: "4299 (5732)",
    },
    {
        src: "/assets/labs_near/Standing Man.svg",
      name: "Full Body Check Basic",
      details: "83 test included",
      price: "499 (665)",
    },
  ];
  return (
    <div className="flex">
      <aside className="flex flex-col w-[25%] h-[84vh] border-2 border-[#bcb7b7] rounded-3xl ml-[1%] p-[2%] gap-2">
        <span className="font-bold text-lg">Filters</span>
        <span className="font-bold text-lg">Types of Tests</span>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <span className="text-lg">Prefered</span>
        </div>
        <span className="font-bold text-lg">Must Have Tests</span>
        <div className="flex gap-2">
        <input type="checkbox" name="" id="" />
          <span className="text-lg">Complete Blood Count (CBC)</span>
        </div>
        <div className="flex gap-2">
        <input type="checkbox" name="" id="" />
          <span className="text-lg">Glucose ,Post Prandial(PP), 2 Hours (Post Meal)</span>
        </div>
        <div className="flex gap-2">
        <input type="checkbox" name="" id="" />
          <span className="text-lg">Thyroid Profile (Total T3 , Total T4, TSH)</span>
        </div>
        <div className="flex gap-2">
        <input type="checkbox" name="" id="" />
          <span className="text-lg">Lipid Profile</span>
        </div>
        <div className="flex gap-2">
        <input type="checkbox" name="" id="" />
          <span className="text-lg">Liver Function Test(LFT)</span>
        </div>
        <div className="flex gap-2">
        <input type="checkbox" name="" id="" />
          <span className="text-lg">Complete Urine Examination</span>
        </div>
        
      </aside>
      <div className="flex flex-col ml-[3%] w-2/3 gap-4">
        <span className="font-bold text-lg">Aarvee Lab, Gandhinagar</span>
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
                  Package
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-lg">{item.name}</span>
                <span className="text-lg font-light">{item.details}</span>
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-lg">₹ {item.price}</span>
                  <Link
                    href=""
                    className="bg-[#28a4a4] rounded-xl px-3 py-1 font-semibold text-white"
                  >
                    ADD
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
