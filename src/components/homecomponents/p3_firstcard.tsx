import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function firstcard() {
  const cardContent = [
    {
      src: "/assets/Vaid-page-1/p1-Hero/heartLogo.svg",
      heading: "Online/Physical Appointment",
      text: "For you registration and appointment with doctor is made simpler. This will allow you to consult with healthcare professionals from the comfort of your home, eliminating the need for travel and waiting rooms.",
      href: "/appointment",
    },
    {
      src: "/assets/Vaid-page-1/p1-Hero/stethoIcon.svg",
      heading: "Test NearBy",
      text: "Booking a test is now made simple.You just have to select your desired diagnostic center.Once you've booked the pathology test you need with the diagnostic centre you prefer, you Will get a confirmation on your registered e-mail id and SMS.",
      href: "/test",
    },
    {
      src: "/assets/Vaid-page-1/p1-Hero/reportLogo.svg",
      heading: "Order Medicine via Doctor's Prescription",
      text: "Tired Of walking all the way to your local medicine store?N0w, order medicines online at Vaid.We make sure that you get your medicines in record time because we know how vital time is in any treatment. Sit back, and we will have all your medical necessities delivered to your doorstep.",
      href: "/delivery",
    },
  ];
  return (
    <div className="flex justify-between mt-[5%] px-[10%]">
      {cardContent.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className="bg-white w-[31%] gap-10 p-12 shadow-md z-10 hover:scale-[1.01]"
        >
          <div className="w-full">
            <div className="mb-10">
              <Image
                alt="1"
                className="aspect-square rounded-full"
                height="100"
                src={item.src}
                width="100"
              />
            </div>
            <span className="font-bold text-lg mb-240">{item.heading}</span>
            <svg
              width="100"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-8"
            >
              <line
                x1="0"
                y1="0"
                x2="50"
                y2="0"
                stroke="#fb5d3a"
                strokeWidth="5"
              />
            </svg>
            <p className="text-[#7c7c7c] font-light">{item.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
