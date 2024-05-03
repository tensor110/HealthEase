"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  const handleLinkClick = (url: string) => {
    setActiveLink(url);
  };
  const navItems = [
    { text: "Home", url: "/" },
    { text: "Buy Medicines", url: "/delivery" },
    { text: "Find Doctors", url: "/appointment" },
    { text: "Lab Test", url: "/test" },
  ];
  return (
    <>
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
        <div className="flex justify-between w-2/5 text-[#737373] font-semibold">
          {navItems.map((item, index) => (
            <Link href={item.url} key={index} className={`${
              activeLink === item.url ? "border-b-2 border-[#fb5d3a]" : ""
            }`}
            onClick={() => handleLinkClick(item.url)}>
              {item.text}
            </Link>
          ))}
        </div>
        <div className="flex w-[23%] justify-between align-middle font-bold">
          <a href="" className="text-[#fb5d3a] pt-2 pr-[1vw] w-[10vw]">
            About Us
          </a>
          <Link
            href="/signin"
            className="bg-[#fb5d3a] px-7 py-2 text-white rounded gap-[1vw] flex items-center"
          >
            Login
            <Image
              alt="1"
              className="aspect-square rounded-full"
              height="100"
              src="/assets/Vaid-page-1/p1-Hero/loginArrow.svg"
              width="12"
            />
          </Link>
          <button></button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
