import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function signin() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f0f0f0]">
      <div className="bg-white shadow-2xl h-[85vh] w-[30%] rounded-3xl flex flex-col justify-center p-6 z-20">
        <div className="flex justify-between px-[3%]">
          <div className="w-full gap-2">
            <span className="">Welcome to Vaid</span>
            <div className="text-4xl font-semibold">Sign In</div>
          </div>
          <div>
            <span className="text-sm">No Account?</span>
            <Link
          href='/signup'
          className="text-[#28a4a4] text-sm cursor-pointer"
        >Sign up</Link>
          </div>
        </div>
        <form action="" className="flex flex-col w-[95%] p-[3%] gap-2">
          <div className="flex flex-col gap-2 py-4">
            <span className="font-semibold">
              Enter your username or email address
            </span>
            <input
              type="text"
              placeholder="Username or email address"
              className="border-[1px] border-[#858585] rounded-lg p-[2.5%] placeholder-[#c1c1c1] focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Enter your password</span>
            <input
              type="password"
              placeholder="Password"
              className="border-[1px] border-[#858585] rounded-lg p-[2.5%] placeholder-[#c1c1c1] focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex justify-end">
            <span className="text-[#28a4a4] text-sm">Forgot Password</span>
          </div>
          <input
            type="submit"
            value="Sign In"
            className="bg-[#fb5d3a] py-3 rounded-2xl mt-4 text-white font-semibold cursor-pointer"
          />
          <div className="flex justify-center">
            <span className="">or</span>
          </div>
          <div className="flex justify-between gap-3">
            <button className="flex bg-[#000000] gap-4 px-10 py-3 rounded-lg">
              <Image
                alt="1"
                className="aspect-square rounded-full"
                height="100"
                src="/assets/signin_page/google.svg"
                width="20"
              />
              <span className="text-white text-sm">Sign In with Google</span>
            </button>
            <button className="bg-[#f6f6f6] p-3 rounded-lg">
              <Image
                alt="1"
                className="aspect-square rounded-full"
                height="100"
                src="/assets/signin_page/Facebook.svg"
                width="20"
              />
            </button>
            <button className="bg-[#f6f6f6] p-3 rounded-lg">
              <Image
                alt="1"
                className="aspect-square rounded-full"
                height="100"
                src="/assets/signin_page/apple.svg"
                width="20"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
