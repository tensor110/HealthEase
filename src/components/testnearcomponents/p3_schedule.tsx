import React from "react";
import Image from "next/image";

export default function schedule() {
  return (
    <div className="flex mb-[10vh]">
      <div className="w-2/5 flex justify-center">
        <Image
          alt="1"
          className="aspect-square"
          height="100"
          src="/assets/vaid-page-4/p3-schedule/Group 4.svg"
          width="400"
        />
      </div>
      <div className="flex flex-col w-3/5 gap-2">
        <span className="text-[#fb5d3a] font-semibold">Make a Schedule</span>
        <div className="font-bold text-5xl w-4/5">
          Make a schedule in advance with the available doctor
        </div>
        <p className="text-[#787b7b] w-4/5 py-2">
          Lab test is a very painful process, especially if you{"'"}re not
          taking care of your health and having regular check-ups. Vaid makes it
          easier for everyone to schedule a doctor{"'"}s appointment.
        </p>
        <div className="flex gap-2">
          <Image
            alt="1"
            className="aspect-square rounded-full"
            height="100"
            src="/assets/vaid-page-4/p3-schedule/Group 3.svg"
            width="20"
          />
          <span className="font-semibold">Make a schedule online is easy</span>
        </div>
        <div className="flex gap-2">
          <Image
            alt="1"
            className="aspect-square rounded-full"
            height="100"
            src="/assets/vaid-page-4/p3-schedule/Group 3.svg"
            width="20"
          />
          <span className="font-semibold">Easy to connect with nearest lab</span>
        </div>
        <button className='bg-[#fb5d3a] rounded-xl w-1/3 px-5 py-3 text-white font-semibold mt-6'>Make Schedule Now!</button>
      </div>
      <div>
      <Image
          alt="1"
          className="aspect-square absolute right-0 mt-[30vh]"
          height="100"
          src="/assets/vaid-page-4/p3-schedule/Laboratory-pana 1.svg"
          width="250"
        />
      </div>
    </div>
  );
}
