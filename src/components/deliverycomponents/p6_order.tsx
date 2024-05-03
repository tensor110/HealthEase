import React from "react";
import Image from "next/image";

export default function order() {
    const orderCards = [
        {
          src: "/assets/vaid-page-2/p6-how-to-order/choose.svg",
          heading: "Choose the product you want to order",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
          src: "/assets/vaid-page-2/p6-how-to-order/pay.svg",
          heading: "Pay for the item, and it will be processed",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
          src: "/assets/vaid-page-2/p6-how-to-order/wait.svg",
          heading: "Please wait, your order will arrive soon",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
        {
          src: "/assets/vaid-page-2/p6-how-to-order/success.svg",
          heading: "Your order ha succesfully arrived",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        },
      ];
  return (
    <div className="h-[125vh] w-full bg-gradient-to-r from-[#28a4a4] to-[#208585] px-[10vw] py-[15vh]">
      <div className="flex flex-col items-center gap-6">
        <span className="text-6xl font-bold text-white">
          How To Order In <span className="text-[#fb5d3a]">Vaid</span>
        </span>
        <p className="text-base font-medium text-white text-center w-4/5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit
          consequatur vel aliquam assumenda harum voluptatibus hic explicabo
          ullam sed.
        </p>
      </div>
      <div className="flex my-[10vh] gap-[3vw]">
        {orderCards.map((item, index)=>(
            <div key = {index} className="flex flex-col justify-start px-[2vw] py-[7vh] gap-4 rounded-3xl bg-gradient-to-b from-[#70c3c3] to-white">
                <Image
                alt="1"
                className="aspect-square rounded-full"
                height="200"
                src={item.src}
                width="100"
              />
              <span className="text-2xl font-bold mt-[2vh]">{item.heading}</span>
              <p className="text-base font-semibold text-[#808787]">{item.text}</p>
            </div>
        ))}
      </div>
    </div>
  );
}
