import React from "react";
import Image from "next/image";

export default function company() {
  return (
    <div className="bg-[#28a4a4] text-white flex items-center align-middle w-full h-[60vh]">
        <div className="">
        <Image
              alt="1"
              className="absolute -mt-56 z-20"
              height="200"
              src="/radial 2.png"
              width="180"
            />
        </div>
      <div className="w-[50%] px-14 z-10">
        <span className="text-6xl font-bold">
          Trusted By Top Companies
        </span>
        <p className="text-base font-medium tracking-wide pt-3">
        When it comes to trust, we prioritize reliability, quality, and customer satisfaction.
        </p>
      </div>
      <div className="w-2/3">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center items-center gap-[4vw]">
            <div className="w-1/2 flex justify-end items-center">
              <Image
              alt="1"
              className=""
              height="200"
              src="/assets/vaid-page-2/p2-trusted-by-top-companies/labadiellc.svg"
              width="180"
            />
            </div>
            <div className="w-1/2 flex justify-start items-center">
              <Image
              alt="1"
              className=""
              height="200"
              src="/assets/vaid-page-2/p2-trusted-by-top-companies/schumm.svg"
              width="200"
            />
            </div>
          </div>
          <div className="flex justify-center items-center gap-[4vw]">
            <div className="w-1/2 flex justify-end items-center">
              <Image
              alt="1"
              className=""
              height="200"
              src="/assets/vaid-page-2/p2-trusted-by-top-companies/bayergroup.svg"
              width="180"
            />
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <Image
              alt="1"
              className=""
              height="200"
              src="/assets/vaid-page-2/p2-trusted-by-top-companies/wucketinc.svg"
              width="200"
            />
            </div>
            <div className="w-1/2 flex justify-start items-center">
              <Image
              alt="1"
              className=""
              height="200"
              src="/assets/vaid-page-2/p2-trusted-by-top-companies/labadiellc.svg"
              width="200"
            />
            </div>
          </div>
          <div className="flex justify-center items-center gap-[4vw]">
            <div className="w-1/2 flex justify-end items-center">
              <Image
              alt="1"
              className=""
              height="200"
              src="/assets/vaid-page-2/p2-trusted-by-top-companies/wucketinc.svg"
              width="180"
            />
            </div>
            <div className="w-1/2 flex justify-start items-center">
              <Image
              alt="1"
              className=""
              height="200"
              src="/assets/vaid-page-2/p2-trusted-by-top-companies/schumm.svg"
              width="200"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
