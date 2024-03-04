import React from "react";
import Image from "next/image";

export default function videoPart() {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <div className="text-5xl font-bold w-1/2 text-center py-4">
        The Medical Courier Assists You Promptly Each Time
      </div>
      <div className="w-2/3 h-1/3 bg-black mt-4 rounded-3xl">
        Video
        <Image alt="1" className="w-screen" height="200" src="/image.jpg" width="200" />
      </div>
      <p className="w-2/3 text-center py-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
        quibusdam necessitatibus iste delectus officia provident sed blanditiis
        perferendis fuga sequi voluptas mollitia dolorum modi inventore alias
        laudantium harum, ex nisi animi quia, vitae adipisci eveniet!
      </p>
    </div>
  );
}
