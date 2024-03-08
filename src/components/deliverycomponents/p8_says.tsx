import React from "react";
import Image from "next/image";

export default function says() {
  const statsCards = [
    {
      src: "/assets/vaid-page-2/p7-see-what-other/person-test-1.png",
      name: "Ravindra Gupta",
      text: "I visited the health check-up department for a comprehensive whole-body check-up. The entire process, from check-in to completion, was seamless. The staff in the health check department exhibited courtesy, helpfulness, and attentiveness. I highly recommend this to anyone seeking similar services.",
    },
    {
      src: "/assets/vaid-page-2/p7-see-what-other/person-test-2.png",
      name: "Dilesh Chouhan",
      text: "This is India's most trusted online medical services so far. I appreciate the well- mannered staff and their coordination with patients. Their attentive care left a positive impression. Overall, my experience was quite satisfactory.",
    },
    {
      src: "/assets/vaid-page-2/p7-see-what-other/person-test-3.png",
      name: "Ayush Soni",
      text: "It has made a significant impact on myself. After suffering from blood in cough for a long time, i identified the problem and initiated the diagnosis, providing much-needed relief.I praise Vaid for excellent services and patients reception.",
    },
  ];
  return (
    <div className="bg-[#fafafa] flex flex-col items-center justify-center my-[15vh] gap-[12vh]">
      <div className="flex flex-col items-center justify-center gap-6">
        <span className="text-6xl font-bold">
          See What Others People Are Saing
        </span>
      </div>
      <div className="flex justify-between items-center w-[70%] h-[80vh] bg-[#fb5d3a] rounded-3xl absolute z-10 mt-[20vh]"></div>
      <div className="flex justify-between items-center w-[90%] h-[80vh] rounded-3xl z-10">
        {statsCards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg w-[28vw] h-[60vh] px-[3vw] py-[4vh] gap-4 items-center justify-center rounded-3xl border-[1px] border-black"
          >
            <div className="flex flex-col gap-[3vh]">
            <div className="flex justify-start items-center gap-[2vw]">
                <Image
                  alt="1"
                  className="rounded-full aspect-square"
                  height="200"
                  src={item.src}
                  width="60"
                />
              <div>
                <div className="text-xl font-bold">{item.name}</div>
              </div>
            </div>
            <div>
              <p className="text-[#666666] font-semibold tracking-wide">{item.text}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
