import React from "react";
import Image from "next/image";

export default function questions() {
  const chooseItems = [
    {
      text: "How can I set up a Vaid account?",
    },
    {
      text: "How do I schedule a delivery?",
    },
    {
      text: "What are your hours of operation?",
    },
    {
      text: "Do you operate 24/7?",
    },
    {
      text: "What equipment do you have?",
    },
    {
      text: "Can I track my orders?",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#28a4a4] to-[#208585] w-full h-screen my-[6vh] py-[15vh] px-[10vh] flex justify-between">
      <div>
      <Image
              alt="1"
              className="absolute aspect-auto mt-[35vh] -ml-[10vh]"
              height="200"
              src="/radial 3.png"
              width="500"
            />
      </div>
      <div className="flex flex-col w-1/3 gap-4">
        <div className="text-7xl font-bold text-white">Have Any Questions?</div>
        <p className="text-base font-medium w-4/5 tracking-wide text-white">
        Ask anything, we are always here for your support.
        </p>
      </div>
      <div className="w-[60%] h-[70vh] flex flex-col bg-white rounded-3xl py-[25vh] px-[5vw] gap-[4vh] justify-center">
        {chooseItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-6"
          >
            <Image
              alt="1"
              className="aspect-square rounded-full"
              height="200"
              src="/assets/vaid-page-2/p8-have-any-ques/icon.svg"
              width="35"
            />
            <span className="text-2xl font-bold">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
