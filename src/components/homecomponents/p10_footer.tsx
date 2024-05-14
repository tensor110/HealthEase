import React from "react";
import Image from "next/image";

export default function footer() {
  const footerItems = [
    {
      text1: "Company Info",
      text2: "About Us",
      text3: "Carrier",
      text4: "We are hiring",
      text5: "Blog",
    },
    {
      text1: "Legal",
      text2: "About Us",
      text3: "Carrier",
      text4: "We are hiring",
      text5: "Blog",
    },
    {
      text1: "Features",
      text2: "Business Marketing",
      text3: "User Analytic",
      text4: "Live Chat",
      text5: "Unlimited Support",
    },
    {
      text1: "Resources",
      text2: "IOS & Android",
      text3: "Watch a Demo",
      text4: "Customers",
      text5: "API",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#28a4a4] to-[#208585] py-[8vh] px-[10%] text-white">
      <div className="flex justify-between">
        {footerItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-bold my-4">{item.text1}</span>
            <span className="font-semibold text-sm my-2">{item.text2}</span>
            <span className="font-semibold text-sm my-2">{item.text3}</span>
            <span className="font-semibold text-sm my-2">{item.text4}</span>
            <span className="font-semibold text-sm my-2">{item.text5}</span>
          </div>
        ))}
        <div className="flex flex-col">
          <span className="font-bold my-4">Get In Touch</span>
          <div className="font-semibold text-sm my-2 flex">
            <div className="mr-5">
              <Image
                alt="1"
                className="aspect-square"
                height="100"
                src="/assets/Vaid-page-1/p6-footer/phone.svg"
                width="25"
              />
            </div>
            <span>6367764265</span>
          </div>
          <div className="font-semibold text-sm my-2 flex">
            <div className="mr-5">
              <Image
                alt="1"
                className="aspect-square"
                height="100"
                src="/assets/Vaid-page-1/p6-footer/location.svg"
                width="25"
              />
            </div>
            <span className="w-2/3">4517 Jodhpur . Rajasthan, 342015 </span>
          </div>
          <div className="font-semibold text-sm my-2 flex">
            <div className="mr-5">
              <Image
                alt="1"
                className="aspect-square"
                height="100"
                src="/assets/Vaid-page-1/p6-footer/mail.svg"
                width="25"
              />
            </div>
            <span>maheswar.mahapatra@healthease.com</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[6%]">
        <div>
          <span className="font-bold text-sm">Credits</span>
        </div>
        <div className="w-[12%] flex justify-between">
          <Image
            alt="1"
            className="aspect-square"
            height="100"
            src="/assets/Vaid-page-1/p6-footer/facebook.svg"
            width="25"
          />
          <Image
            alt="1"
            className="aspect-square"
            height="100"
            src="/assets/Vaid-page-1/p6-footer/instagram.svg"
            width="25"
          />
          <Image
            alt="1"
            className="aspect-square"
            height="100"
            src="/assets/Vaid-page-1/p6-footer/twitter.svg"
            width="25"
          />
        </div>
      </div>
    </div>
  );
}
