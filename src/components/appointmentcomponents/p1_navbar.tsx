import React from "react";
import Image from "next/image";

export default function navbar() {
  return (
    <div className="flex justify-between items-center align-middle text-black w-full h-20 px-[10%]">
      <Image
            alt="1"
            className="aspect-square rounded-full"
            height="100"
            src="/assets/vaid-page-2/0-logo.svg"
            width="50"
          />
    </div>
  );
}
