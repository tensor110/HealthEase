import React from "react";

export default function firstcard() {
  const cardContent = [
    {
      heading: "Online/Physical Appointment",
      text: "Text For the mentioned service write here the content you want here to present, Vaid is the fastest growing website for medical uses.",
    },
    {
      heading: "Test NearBy",
      text: "Text For the mentioned servicewrite here the content you want....",
    },
    {
      heading: "Order Medicine via Doctor's Prescription",
      text: "Text For the mentioned service write here the content you want here to present........",
    },
  ];
  return (
    <div className="flex justify-between mt-[10%]">
      {cardContent.map((item, index) => (
        <div key={index} className="bg-white w-[31%] gap-10 p-12 shadow-md">
          <span className="font-bold text-lg mb-240">{item.heading}</span>
          <svg width="100" height="20" xmlns="http://www.w3.org/2000/svg" className="mt-8">
            <line
              x1="0"
              y1="0"
              x2="50"
              y2="0"
              stroke="#fb5d3a"
              stroke-width="5"
            />
          </svg>
          <p className="text-[#7c7c7c] font-light">{item.text}</p>
        </div>
      ))}
      {/* <div>
        <span>Test NearBy</span>
        <p>Text For the mentioned servicewrite here the content you want....</p>
      </div>
      <div>
        <span>Order Medicine via Doctor's Prescription</span>
        <p>Text For the mentioned service write here the content you want here to present........</p>
      </div> */}
    </div>
  );
}
