import React from "react";
import Image from "next/image";

export default function customers() {
  return (
    <div>
      <div>
        <span>Reviews</span>
        <div>Happy Customers</div>
        <p>
          goi the mentioned service 'Alite contert you want here to present.
          Vaid is tastest growing website tor medical uses.
        </p>
      </div>
      <div>
        <div></div>
        <p></p>
        <div>
        <Image
                alt="1"
                className="aspect-square w-10 h-10"
                height="100"
                src="/image.jpg"
                width="100"
              />
        </div>
      </div>
    </div>
  );
}
