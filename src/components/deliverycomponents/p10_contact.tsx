import React from "react";
import Image from "next/image";

export default function contact() {
  return (
    <div className="flex justify-center">
      <div>
      <Image
              alt="1"
              className="absolute aspect-auto mt-[108vh] -ml-[10vh]"
              height="200"
              src="/radial 6.png"
              width="550"
            />
      </div>
      <div className="bg-gradient-to-b from-[#e3ebff] to-[#fafafa] w-[90%] h-[170vh] my-[15vh] flex flex-col items-center justify-center rounded-3xl gap-[12vh]">
        <div className="flex flex-col gap-[4vh] items-center">
          <span className="text-6xl text-black font-bold tracking-wide">
            Fill The Form To Contact Us
          </span>
        </div>
        <div className="flex justify-between w-[90%] gap-[3vw]">
          <div className="bg-[#fb5d3a] text-white flex flex-col w-2/5 rounded-3xl z-10 px-[3vw] gap-[4vh] h-[85vh] py-[15vh]">
            <span className="text-3xl font-semibold">Contact Information</span>
            <span className="font-semibold">
              Sed facilisis eleifend quam, non efficitur nisi mattis quis
            </span>
            <div className="flex gap-4">
            <Image
                  alt="1"
                  height="200"
                  className="aspect-square rounded-2xl"
                  src="/assets/vaid-page-2/p9-contact-form/email.svg"
                  width="18"
                />
              <span className="font-medium">maheswar.mahapatra@healthease.com</span>
            </div>
            <div className="flex gap-4">
            <Image
                  alt="1"
                  height="200"
                  className="aspect-square rounded-2xl"
                  src="/assets/vaid-page-2/p9-contact-form/address.svg"
                  width="18"
                />
              <span className="font-medium">
                4517, Jodhpur Rajasthan, 342015
              </span>
            </div>
            <div className="flex gap-4">
            <Image
                  alt="1"
                  height="200"
                  className="aspect-square rounded-2xl"
                  src="/assets/vaid-page-2/p9-contact-form/call.svg"
                  width="18"
                />
              <span className="font-medium">+91 6367764265</span>
            </div>
            <div className="flex gap-[3vw]">
              <span>
                <Image
                  alt="1"
                  height="200"
                  className="aspect-square rounded-2xl"
                  src="/assets/vaid-page-2/p9-contact-form/You tube.svg"
                  width="56"
                />
              </span>
              <span className="border-[1px] border-white w-12 h-12 rounded-2xl">
              <Image
                  alt="1"
                  height="200"
                  src="/assets/vaid-page-2/p9-contact-form/Twitter.svg"
                  width="180"
                />
              </span>
              <span className="border-[1px] border-white w-12 h-12 rounded-2xl">
              <Image
                  alt="1"
                  height="200"
                  src="/assets/vaid-page-2/p9-contact-form/Ig.svg"
                  width="180"
                />
              </span>
              <span className="border-[1px] border-white w-12 h-12 rounded-2xl">
              <Image
                  alt="1"
                  height="200"
                  src="/assets/vaid-page-2/p9-contact-form/FB.svg"
                  width="180"
                />
              </span>
            </div>
          </div>
          <div className="bg-white flex flex-col w-3/5 rounded-3xl px-[3vw] gap-[4vh] h-[107vh] py-[15vh] shadow-lg">
            <div className="flex flex-col gap-[3vh]">
              <span className="text-2xl font-bold">Full Name</span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your full name"
                className="w-full border-[1px] border-black px-6 py-3 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-[3vh]">
              <span className="text-xl font-semibold">Email</span>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                className="w-full border-[1px] border-black px-6 py-3 rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-[3vh]">
              <span className="text-xl font-semibold">Message</span>
              <textarea
                name=""
                id=""
                cols={20}
                rows={4}
                className="w-full border-[1px] border-black px-3 py-3 rounded-2xl"
              ></textarea>
            </div>
            <div className="my-[2vh]">
              <input
                type="submit"
                value="Submit"
                className="bg-gradient-to-r from-[#28a4a4] to-[#208585] w-full py-[3vh] rounded-2xl text-white font-semiboldd text-xl cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
