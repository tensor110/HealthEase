import React from "react";

export default function contact() {
  return (
    <div className="px-[10%] py-[25vh] flex flex-col items-center bg-white">
      <div className="flex flex-col items-center">
        <span className="text-[#fb5d3a] font-semibold my-[3vh]">
          Newsletter
        </span>
        <span className="text-[rgb(40,164,164)] font-bold text-5xl mb-[3vh]">
          Contact Us
        </span>
        <p className="text-black font-light text-center w-1/2">
          Text For the mentioned service write here the content you want here to
          present. Vaid is the fastest growing website for medical uses.
        </p>
        <div className="my-[7%]">
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            className="bg-[#f9f9f9] text-black outline-1 focus:outline-1 focus:border-gray-800  w-[50vw] h-[8vh] border-[1px] border-gray-300 rounded-s-md placeholder-gray-500 px-5 text-sm font-semibold"
          />
          <button className="bg-[#fb5d3a] px-7 py-3 text-white font-extralight rounded-e-md">Submit</button>
        </div>
      </div>
    </div>
  );
}
