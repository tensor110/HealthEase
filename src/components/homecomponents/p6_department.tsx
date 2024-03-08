// import { it } from "node:test";
import React from "react";
import Image from "next/image";

export default function department() {
  const departmentItems = [
    {
      feature: "Painless Procedures",
      star: '4.9',
      title: "Quick Examination",
      text: "Diagnostic tests available for quick evaluation. Examples include X-rays, blood tests, and rapid strep tests,",
      src:"/assets/Vaid-page-1/p3-our-department/depratment1.png",
      sales: "15",
      original_price: "1648",
      discounted_price: "648",
    },
    {
      feature: "Cancer Care",
      star: '4.9',
      title: "Online Appointment",
      text: "Encourage patients to book quick examination slots online. Any available features like real-time availability updates will be displayed.",
      src:"/assets/Vaid-page-1/p3-our-department/department2.png",
      sales: "15",
      original_price: "1648",
      discounted_price: "648",
    },
    {
      feature: "Best Dental Surgeons",
      star: '4.9',
      title: "Emergency Case",
      text: "Highlight the availability of urgent care services for patients who need immediate attention. These services are designed for quick assessments and treatment of non- life-threatening conditions.",
      src:"/assets/Vaid-page-1/p3-our-department/department3.png",
      sales: "15",
      original_price: "1648",
      discounted_price: "648",
    },
  ];
  return (
    <div className="bg-[#28a4a4] w-full h-[195vh] mt-[5%] px-[10%] pt-[10%]">
      <span className="text-white font-medium text-base">Practice Advice</span>
      <div className="text-white text-4xl font-bold mt-5 mb-5">
        Our Department
      </div>
      <p className="font-light text-base text-white w-2/3">
      Our department is dedicated to pushing the boundaries of medical innovation, research, and patient care. We are a team of passionate professionals who collaborate to make a meaningful impact on global health.
      </p>
      <div className="flex justify-between mt-[5%]">
        {departmentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white w-[25vw] h-[110vh] flex rounded-lg flex-col"
          >
            <div>
              <Image
                alt="1"
                className="aspect-square rounded-t-lg absolute w-[25vw] h-[50vh] z-10"
                height="100"
                src= {item.src}
                width="350"
              />
              <div className="absolute z-20 p-[1%]">
                <div className="absolute z-20 bg-[#ff685b] text-white px-2 py-1 rounded">
                  Sale
                </div>
                <div className="absolute z-20 flex justify-between w-[10vw] mt-[38vh] ml-[7vw]">
                  <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                  <Image
                alt="1"
                className=""
                height="100"
                src="/assets/Vaid-page-1/p3-our-department/like.svg"
                width="50"
              />
                  </div>
                  <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                  <Image
                alt="1"
                className=""
                height="100"
                src="/assets/Vaid-page-1/p3-our-department/basket.svg"
                width="50"
              />
                  </div>
                  <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center">
                  <Image
                alt="1"
                className=""
                height="100"
                src="/assets/Vaid-page-1/p3-our-department/view.svg"
                width="50"
              />
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-5 flex flex-col pt-8 mt-[50vh] pr-5">
              <div className="flex justify-between">
                <span className="text-[#ff685b] font-medium text-base mb-2">
                  {item.feature}
                </span>
                <span className="bg-black text-white px-2 py-1 rounded-2xl flex justify-center gap-2">
                <Image
                alt="1"
                className=""
                height="100"
                src="/assets/Vaid-page-1/p3-our-department/star-1.svg"
                width="15"
              />
              {item.star}</span>
              </div>
              <span className="text-black font-bold text-lg mb-2">
                {item.title}
              </span>
              <p className="text-black font-light text-base w-4/5 mb-1">
                {item.text}
              </p>
              <div className="flex gap-2">
              <Image
                alt="1"
                className=""
                height="100"
                src="/assets/Vaid-page-1/p3-our-department/downloads.svg"
                width="15"
              />
                <span className="text-[#c2c2c2] font-bold text-base">
                    {item.sales} Sales
                </span>
              </div>
              <div className="my-3">
                <span className="text-[#bdbdbd] font-bold text-lg mr-3">
                  ₹ {item.original_price}
                </span>
                <span className="text-[#28a4a4] font-bold text-lg">
                  ₹ {item.discounted_price}
                </span>
              </div>
              <button className="border-[1px] border-[#ff685b] text-[#ff685b] font-bold rounded-full px-4 py-3 my-2 w-[50%] flex gap-2 items-center">
                Learn More
                <Image
                alt="1"
                className=""
                height="100"
                src="/assets/Vaid-page-1/p3-our-department/learnMore2.svg"
                width="10"
              />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
