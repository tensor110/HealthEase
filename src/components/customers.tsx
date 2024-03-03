import React from "react";
import Image from "next/image";

export default function customers() {
  const customersItem = [
    {
      star: "",
      text: "Medicines are chemicals or compounds used to cure, halt, or prevent disease; ease symptoms.",
      photo: "/image.jpg",
      name: "Name",
      profession: "profession",
    },
    {
      star: "",
      text: "Medicines are chemicals or compounds used to cure, halt, or prevent disease; ease symptoms.",
      photo: "/image.jpg",
      name: "Name",
      profession: "profession",
    },
    {
      star: "",
      text: "Medicines are chemicals or compounds used to cure, halt, or prevent disease; ease symptoms.",
      photo: "/image.jpg",
      name: "Name",
      profession: "profession",
    },
  ];
  return (
    <div className="mt-[25vh] p-[10vw] h-[85vh]">
      <div>
        <span className="text-[#ff685b] font-bold text-base">Reviews</span>
        <div className="text-[#28a4a4] font-bold text-5xl tracking-wider">
          Happy Customers
        </div>
        <p className="w-1/2 text-black font-light text-sm mt-3">
          Text For the mentioned service write here the content you want here to
          present. Vaid is the fastest growing website for medical uses.
        </p>
      </div>
      <div className="flex justify-between mt-[12%] h-[40vh]">
      {customersItem.map((item, index) => (
        <div key={index} className="flex flex-col w-[20vw] h-[40vh] justify-center items-center">
          <span className="flex justify-center">{item.star}</span>
          <p className="flex text-center w-[60%] font-light">{item.text}</p>
          <div className="flex justify-center">
            <div className="mt-[5vh] flex justify-center items-center">
            <Image
              alt="1"
              className="aspect-square w-20 h-14 rounded-full"
              height="100"
              src={"/image.jpg"}
              width="100"
            />
            </div>
            <div className="flex flex-col justify-center ml-[10%] mt-[18%]">
                <span className="text-[#ff685b] font-bold text-sm">{item.name}</span>
                <span className="">{item.profession}</span>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
