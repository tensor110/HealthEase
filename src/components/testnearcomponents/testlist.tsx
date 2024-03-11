import React from "react";
import Image from "next/image";

export default function testlist() {
  const testlistCards = [
    {
      src: "",
      title: "Disorder of Growth",
      text: 'Showing 1-1 of 1 result for "Disorder of Growth"',
    },
    {
      src: "",
      title: "Bone",
      text: 'Showing 1-1 of 1 result for "Bone"',
    },
    {
      src: "",
      title: "AIDS",
      text: 'Showing 1-4 of 4 result for "AIDS"',
    },
    {
      src: "",
      title: "Allergy",
      text: 'Showing 1-1 of 1 result for "Allergy"',
    },
  ];
  return (
    <div>
      <span>Test List</span>
      <div>
        We offer a comprehensive coverage of more than 80+ medical tests with
        reliable results
      </div>
      <div>
        {testlistCards.map((item, index) => (
          <div key = {index}>
            <Image
              alt="1"
              className="aspect-square"
              height="100"
              src={item.src}
              width="100"
            />
            <span>{item.title}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
