import React from "react";
import Image from "next/image";

export default function customers() {
  const customersItem = [
    {
      star: "/assets/Vaid-page-1/p4-happy-customer/stars.svg",
      text: "it gives detailed information of the tests and labs. It maintain records for each reports and prescription, really helpful app.",
      photo: "/assets/Vaid-page-1/p4-happy-customer/customer1.png",
      name: "Raghav",
      profession: "Lawyer",
    },
    {
      star: "/assets/Vaid-page-1/p4-happy-customer/stars.svg",
      text: "Vaid gave me the freedom to choose the best lab,slot and test based on the prices.",
      photo: "/assets/Vaid-page-1/p4-happy-customer/customer1.png",
      name: "Nakul",
      profession: "Chef",
    },
    {
      star: "/assets/Vaid-page-1/p4-happy-customer/stars.svg",
      text: "i had the best experience with Vaid.The booking process was easy and seamless,",
      photo: "/assets/Vaid-page-1/p4-happy-customer/customer1.png",
      name: "Atharva",
      profession: "Athlete",
    },
  ];
  return (
    <div className="mb-[15vh] px-[10vw] h-[100vh] flex flex-col justify-center">
      <div className="flex">
        <div className="w-2/3 mt-[15vh] flex flex-col gap-5">
          <span className="text-[#ff685b] font-bold text-base">Reviews</span>
          <div className="text-[#28a4a4] font-bold text-5xl tracking-wider">
            Happy Customers
          </div>
          <p className="w-2/3 text-black font-light text-sm">
            Experience our commitment to exceptional care at Vaid. Explore patient testimonials to see why Vaid is your trusted destination for personalized healthcare solutions.{" "}
          </p>
        </div>
        <div className="">
          <Image
            alt="1"
            className="aspect-auto absolute"
            height="100"
            src="/assets/Vaid-page-1/p4-happy-customer/happyCustomer.svg"
            width="500"
          />
        </div>
      </div>
      <div className="flex justify-between mt-[6%] h-[40vh]">
        {customersItem.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-[20vw] h-[40vh] justify-between items-center"
          >
            <span className="flex justify-center">
              <Image
                alt="1"
                className="aspect-square w-20 h-14 rounded-full"
                height="100"
                src={item.star}
                width="100"
              />
            </span>
            <p className="flex text-center w-[60%] font-light">{item.text}</p>
            <div className="flex justify-center">
              <div className="mt-[5vh] flex justify-center items-center">
                <Image
                  alt="1"
                  className="aspect-square rounded-full"
                  height="100"
                  src={item.photo}
                  width="60"
                />
              </div>
              <div className="flex flex-col justify-center ml-[10%] mt-[18%]">
                <span className="text-[#ff685b] font-bold text-sm">
                  {item.name}
                </span>
                <span className="">{item.profession}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
