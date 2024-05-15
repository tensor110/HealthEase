import React, { useState } from "react";
import Image from "next/image";

export default function navbar() {
  const navItems = [
    { text: "Home", url: "/" },
    { text: "Product", url: "/" },
    { text: "Pricing", url: "/" },
    { text: "Contact", url: "/" },
  ];
  return (
    <div className="flex justify-between items-center align-middle text-black w-full h-20 px-[10%]">
      <div className="flex items-center gap-1">
      <Image
            alt="1"
            className="aspect-auto"
            height="100"
            src="/white-logo-final.png"
            width="180"
          />
        </div>
      <div className="flex">
        <Image
          alt="1"
          className="aspect-auto"
          height="100"
          src="/assets/physical_appointment/navbar/Location.svg"
          width="40"
        />
        <div className="flex flex-col justify-center">
          <span className="text-sm">Location</span>
          <span className="text-sm font-semibold flex gap-1">Select Address 
          <Image
          alt="1"
          className="aspect-auto cursor-pointer"
          height="100"
          src="/assets/physical_appointment/navbar/Next page.svg"
          width="25"
        /></span>
        </div>
        
      </div>
      <div className="w-3/5">
        <input type="search" name="" id="" placeholder="Search for lab test" className="border-[1px] border-black px-4 py-1 rounded-full w-full focus:outline-none focus:border-blue-500" />
      </div>
      <Image
        alt="1"
        className="aspect-square"
        height="100"
        src="/assets/book_tab/button_nav.svg"
        width="50"
      />
    </div>
  );
}
