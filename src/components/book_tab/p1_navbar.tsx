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
            className="aspect-square rounded-full"
            height="100"
            src="/assets/vaid-page-2/0-logo.svg"
            width="50"
          />
          <div className="w-1/5 text-2xl font-bold">
            Va<span className="text-[#115faa]">id</span>
          </div>
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
