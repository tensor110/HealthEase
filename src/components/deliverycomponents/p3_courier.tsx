import React from "react";
import Image from "next/image";

export default function courier() {
  return (
    <div className="flex flex-col items-center mt-[10%]">
      <div>
        <Image
          alt="1"
          className="absolute aspect-auto -mt-[10%] right-0"
          height="200"
          src="/radial 4.png"
          width="450"
        />
      </div>
      <div className="text-6xl font-bold w-2/3 text-center py-4 tracking-wide">
        The Medical Courier Assists You Promptly Each Time
      </div>
      <video
        autoPlay
        loop
        src="/assets/vaid-page-2/p3-medical-courier-assists/ambulance.mp4"
        className="aspect-video w-[120vh] rounded-3xl mt-[5vh] z-0"
      ></video>
      <p className="w-2/3 text-center py-[3%]">
        When it comes to medical courier services, prompt and reliable delivery
        is essential. Whether it{"'"}s transporting critical specimens,
        medications, or medical equipment, these services play a vital role in
        healthcare logistics. We Offer timely deliveries Of medical supplies
        anywhere in India. Their feature-packed medical courier service saves
        time and reduces shipping costs.
      </p>
    </div>
  );
}
