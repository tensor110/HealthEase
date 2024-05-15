import React from "react";
import Image from "next/image";

export default function background() {
  return (
    <div className="bg-[#fffffe] flex absolute">
      <div className="h-screen w-[50vw]">
        <Image
          alt="1"
          className="aspect-auto h-screen absolute left-0"
          height="1000"
          src="/assets/signin_page/background/Rectangle 328.png"
          width="1200"
        />
        <div className="text-5xl text-white absolute w-[30vw] top-4 left-4">It{"'"}s important to take care of your <span className="text-[#fb5d3a]">health</span> even if you seem healthy.</div>
        <div>
          <Image
            alt="1"
            className="aspect-auto absolute left-[10%] bottom-[10%]"
            height="1000"
            src="/assets/signin_page/background/Group 502 (1).svg"
            width="300"
          />
        </div>
      </div>
      <div className=" absolute z-10 right-10 top-5 flex items-center gap-2">
      <div className="flex items-center gap-1">
          <Image
            alt="1"
            className="aspect-auto"
            height="100"
            src="/white-logo-final.png"
            width="180"
          />
        </div>
      </div>
      <div className="bg-[#fffffe] ml-[40vw] flex flex-col justify-center items-center">
        <Image
          alt="1"
          className="aspect-auto w-[20vw]"
          height="1000"
          src="/assets/signin_page/background/Group 497.svg"
          width="300"
        />
      </div>
    </div>
  );
}
