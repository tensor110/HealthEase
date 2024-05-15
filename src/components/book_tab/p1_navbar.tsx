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
