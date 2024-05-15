import React from 'react'
import Image from 'next/image'

export default function p8_says() {
    const statsCards = [
        {
          src: "/assets/vaid-page-2/p7-see-what-other/person-test-1.png",
          name: "Ravindra Gupta",
          work: "Future Group Facilitator",
          text: "VAID has been invaluable in managing my diabetes. Their personalized insights helped me understand my condition better and provided practical guidance. Online appointments were convenient, and the doctors were knowledgeable and empathetic. VAID's seamless process and care left me satisfied and confident in managing my health.",
        },
        {
          src: "/assets/vaid-page-2/p7-see-what-other/person-test-2.png",
          name: "Dilesh Chouhan",
          work: "Dynamic Usability Specialist",
          text: "VAID's personalized approach exceeded my expectations in managing my high blood pressure. Their detailed analysis identified risks, and specialist recommendations connected me with a caring cardiologist. From booking to guidance, the process was seamless and reassuring. VAID has reduced my health stress. I recommend everyone seeking similar services go for VAID.",
        },
        {
          src: "/assets/vaid-page-2/p7-see-what-other/person-test-3.png",
          name: "Ayush Soni",
          work: "Corporate Markets Consultant",
          text: "Looking after my health matters to me, so I needed a healthcare provider that's easy to use and reliable. VAID has been exactly that. Ease of booking appointments online to the assurance of receiving expert guidance, VAID has truly simplified the healthcare experience for me. With VAID, I feel more sure about keeping track of my health.",
        },
      ];
  return (
    <div className="bg-[#fafafa] flex flex-col items-center justify-center my-[12vh] gap-[12vh]">
      <div className="flex flex-col items-center justify-center gap-6">
        <span className="text-6xl font-bold">
          See What Our Patients Are Saying
        </span>
        <p className='w-3/4 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate et aliquam vitae quas illo earum culpa commodi at veritatis soluta non enim quidem illum, expedita mollitia nihil quaerat tempore repudiandae.</p>
      </div>
    <div className="flex flex-col justify-between self-center w-[70%] h-[90vh] bg-[#28a4a4] rounded-3xl relative z-10">
        <div>
        <Image
                  alt="1"
                  className="aspect-square absolute -top-20 -left-20"
                  height="200"
                  src="/radial 5.png"
                  width="350"
                />
        </div>
        <div className="flex justify-between items-center w-[120%] h-[80vh] rounded-3xl z-10 -ml-[10%]">
        {statsCards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-2xl w-[26vw] min-h-[60vh] px-[3vw] py-[6vh] gap-4 items-center justify-center rounded-3xl"
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
              <div className="flex flex-col">
                <div className="text-xl font-bold">{item.name}</div>
                <div className="text-lg font-semibold text-[#666666]">{item.work}</div>
              </div>
            </div>
            <div>
              <p className="text-[#666666] font-semibold tracking-wide">{item.text}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
        <div>
        <Image
                  alt="1"
                  className="aspect-square absolute -bottom-20 -right-20"
                  height="200"
                  src="/radial 5.png"
                  width="350"
                />
        </div>
    </div>
    </div>
  )
}
