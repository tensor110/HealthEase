import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f0f0f0]">
      <div className="bg-white shadow-2xl h-fit w-[30%] rounded-3xl flex flex-col justify-center p-6 z-20">
        <div className="flex flex-col justify-between px-[3%]">
          <div className="flex w-full justify-between">
            <span className="font-semibold flex items-center">Welcome</span>
          <div className="flex flex-col">
            <span className="text-sm">Have an Account?</span>
            <Link
              href="/signin"
              className="text-[#28a4a4] text-sm cursor-pointer"
            >
              Sign in
            </Link>
          </div>
          </div>
            <div className="flex justify-between">
              <span className="text-4xl font-semibold">Sign Up</span>
            <Image
            alt="1"
            className="aspect-square rounded-full"
            height="100"
            src="/assets/vaid-page-3/doctor 3rd.svg"
            width="60"
          />
          </div>
        </div>
        <form action="" className="flex flex-col p-[3%] gap-2">
          <div className="flex justify-between">
            <div className="w-[30%] flex flex-col gap-2">
              <span className="font-semibold">First Name</span>
              <input
                type="text"
                placeholder="First Name"
                className="border-[1px] border-[#858585] rounded-lg p-[2.5%] placeholder-[#c1c1c1] focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="w-[30%] flex flex-col gap-2">
              <span className="font-semibold">Middle Name</span>
              <input
                type="text"
                placeholder="Middle Name"
                className="border-[1px] border-[#858585] rounded-lg p-[2.5%] placeholder-[#c1c1c1] focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="w-[30%] flex flex-col gap-2">
              <span className="font-semibold">Last Name</span>
              <input
                type="text"
                placeholder="Last Name"
                className="border-[1px] border-[#858585] rounded-lg p-[2.5%] placeholder-[#c1c1c1] focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col w-[48%] gap-2">
              <span className="font-semibold">D.O.B</span>
              <input
                type="date"
                placeholder=""
                className="border-[1px] border-[#858585] rounded-lg p-[2.5%] placeholder-[#c1c1c1] focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-[48%] gap-2">
              <span className="font-semibold">Contact Number</span>
              <input
                type="text"
                placeholder="+91"
                className="border-[1px] border-[#858585] rounded-lg p-[2.5%] placeholder-[#c1c1c1] focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col w-[48%] gap-2">
              <span className="font-semibold">Email</span>
              <input
                type="email"
                placeholder="Email"
                className="border-[1px] border-[#858585] rounded-lg p-[2.5%] placeholder-[#c1c1c1] focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-[48%] gap-2">
              <span className="font-semibold">Username</span>
              <input
                type="text"
                placeholder="Username"
                className="w-auto border-[1px] border-[#858585] rounded-lg p-[2.5%] placeholder-[#c1c1c1] focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Enter Your Password</span>
            <input
              type="password"
              placeholder="Password"
              className="border-[1px] border-[#858585] rounded-lg p-[2.5%] placeholder-[#c1c1c1] focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Confirm Password</span>
            <input
              type="password"
              placeholder="Password"
              className="border-[1px] border-[#858585] rounded-lg p-[2.5%] placeholder-[#c1c1c1] focus:border-blue-500 focus:outline-none"
            />
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="bg-[#fb5d3a] py-3  mt-2 rounded-2xl text-white font-semibold cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
