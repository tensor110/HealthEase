import React from "react";
import Image from "next/image";

export default function navbar() {
  return (
    <div className="flex justify-between items-center align-middle text-black w-full h-20 px-[10%]">
      <Image
            alt="1"
            className="aspect-auto"
            height="100"
            src="/white-logo-final.png"
            width="180"
          />
    </div>
  );
}
