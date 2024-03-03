"use client";
import React, { useState } from "react";
import Arrow from '../../public/next.svg'

const Navbar: React.FC = () => {
  const navItems = [
  { text: 'Home', url: '/' },
  { text: 'Product', url: '/' },
  { text: 'Pricing', url: '/' },
  { text: 'Contact', url: '/' }
]
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

//   const handleHamburgerClick = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     setIsHamburgerClicked(!isHamburgerClicked);
//   };
  return (
    <>
      <div className="flex justify-between items-center align-middle text-black w-full h-14 px-[10%]">
        <div className="w-1/5 text-2xl font-bold">Va<span className="text-[#115faa]">id</span></div>
        <div className="hidden lg:flex justify-between w-2/6 text-[#737373] font-semibold">
          {navItems.map((item, index)=>(
            <a href={item.url} key={index}>{item.text}</a>
          ))}
        </div>
        <div className="flex w-1/6 justify-between align-middle font-bold">
                <a href="" className="text-[#fb5d3a] pt-2">About Us</a>
                <button className="bg-[#fb5d3a] px-7 py-2 text-white rounded">Login</button>
        </div>

        {/* <div className="lg:hidden">
          <button
            id="hamburger"
            className="text-white focus:outline-none focus:bg-gray-700 p-2"
            onClick={handleHamburgerClick}
          >
            {isHamburgerClicked ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div> */}
      </div>
      {/* {isMobileMenuOpen && (
      <div id="mobile-menu" className="lg:hidden flex w-2/5 top-0 right-0 h-full pt-11 fixed z-30 backdrop-blur-lg shadow-sm">
        <ul className="p-4">
        {navItems.map((item, index)=>(
            <a className="text-white block py-2" href={item.url} key={index}>{item.text}</a>
          ))}
        </ul>
      </div>
      )} */}
    </>
  );
}

export default Navbar;
