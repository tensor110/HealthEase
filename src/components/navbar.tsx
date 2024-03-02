"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const navItems = [
  { text: 'Home', url: '/' },
  { text: 'Projects', url: '/' },
  { text: 'Contact', url: '/' }
]
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsHamburgerClicked(!isHamburgerClicked);
  };
// function navbar() {
  return (
    <>
      <div className="flex justify-between items-center bg-blue-600 text-black h-14 px-10 fixed w-screen z-50 backdrop-blur-md backdrop-saturate-125 bg-opacity-85 background-color: rgba(17, 25, 40, 0.76);">
        <div className="w-1/5">Ronakspective</div>
        <div className="hidden lg:flex justify-around w-1/5">
          {navItems.map((item, index)=>(
            <a href={item.url} key={index}>{item.text}</a>
          ))}
        </div>
        <button className="bg-orange-600 px-3 py-1 ">Contact</button>

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
