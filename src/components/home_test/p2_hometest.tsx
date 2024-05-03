import React from "react";

export default function hometest() {
  return (
    <div className="flex justify-center mb-[10vh]">
      <div className="flex flex-col w-[80vw] justify-center items-center bg-gradient-to-b from-[#e3ebff] to-white gap-4 rounded-2xl p-[3%]">
        <span className="text-5xl font-bold">Please Fill The Form</span>
        <p className="font-semibold">
          Our phlebotomist will visit your home on the agreed time slot and
          collects the Blood/Urine sample.
        </p>
        <form action="" className="flex flex-col w-[95%] p-[3%] bg-white gap-5 rounded-2xl">
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Full Name</span>
            <input
              type="text"
              placeholder="Enter your full name"
              className="border-[1px] border-[#858585] rounded-2xl p-[1%] placeholder-[#c1c1c1]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Email</span>
            <input
              type="text"
              placeholder="Enter your Email"
              className="border-[1px] border-[#858585] rounded-2xl p-[1%] placeholder-[#c1c1c1]"
            />
          </div>
          <div className="flex flex-col gap-2">
          <span className="font-semibold">Phone No.</span>
          <input
            type="text"
            placeholder="Enter your mobile no."
            className="border-[1px] border-[#858585] rounded-2xl p-[1%] placeholder-[#c1c1c1]"
          />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Address</span>
            <input
              type="text"
              placeholder="Enter your address"
              className="border-[1px] border-[#858585] rounded-2xl p-[1%] placeholder-[#c1c1c1]"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="bg-gradient-to-r from-[#28a4a4] to-[#208585] py-3 rounded-2xl mt-4 text-white font-semibold"
          />
        </form>
      </div>
    </div>
  );
}
