import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function home() {
  return (
    <div className="flex bg-[#e7ffff] px-[15vw] pt-[10vh]">
      <div className="w-3/5 flex flex-col gap-2">
        <div className="font-semibold text-4xl tracking-wide w-4/5">
          Vaid Labs are India{"'"}s first fully{" "}
          <span className="text-[#28a4a4]">
            automated integrated diagnostic laboratories
          </span>
        </div>
        <p className="text-[#787b7b] w-2/3 py-3">
          with a focus on providing quality at affordable costs to laboratories
          and hospitals in India.
        </p>
        <Link
          href="appointment/book"
          className="bg-[#fb5d3a] rounded-2xl px-5 py-2 text-white font-semibold w-1/3 text-center"
        >
          Test Nearby
        </Link>
      </div>
      <div>
        <Image
          alt="1"
          className="aspect-auto"
          height="150"
          src="/assets/vaid-page-4/p1-hero/home.svg"
          width="500"
        />
      </div>
    </div>
  );
}
