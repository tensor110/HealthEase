import React from "react";

export default function details() {
  const detailContent = [
    {
      number: "15K",
      text: "Happy Customers",
    },
    {
      number: "150K",
      text: "Monthly Visitors",
    },
    {
      number: "15",
      text: "Countries Worldwide",
    },
    {
      number: "100+",
      text: "Top Partners",
    },
  ];
  return (
    <div className="bg-[#28a4a4] flex justify-evenly align-middle w-full mt-24 py-[15vh]">
      {detailContent.map((item, index) => (
        <div key={index} className="flex flex-col justify-center align-middle">
          <span className="text-white text-5xl font-bold flex justify-center">{item.number}</span>
          <span className="text-[#252b42] font-bold mt-4">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
