import React from "react";

import BacklightItem, {
  BacklightsItemProps,
} from "@/components/Backlights/BacklightItem";

import BestFirst from "@/assets/BestFirst.png";
import BestSecond from "@/assets/BestSecond.png";
import BestThird from "@/assets/BestThird.png";

const Backlights = () => {
  const backlightsItems: BacklightsItemProps[] = [
    {
      image: BestFirst,
      title: "Title",
      desc: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      image: BestSecond,
      title: "Title",
      desc: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
      image: BestThird,
      title: "Title",
      desc: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
  ];

  return (
    <section className="backlights bg-[#0F172A] lg:p-[80px] px-[16px] py-[48px] gap-[80px] flex flex-col">
      <div className="text-white flex lg:flex-row flex-col w-full lg:gap-0 gap-[32px] justify-between items-center">
        <h2 className="font-extrabold lg:text-[56px] text-[32px]">
          The best of the best
        </h2>
        <span className="px-[48px] py-[20px] font-bold text-[24px] rounded-[12px] border-[2px] border-white">
          Sign up now
        </span>
      </div>

      <div className="flex lg:flex-row flex-col justify-evenly items-center gap-[48px]">
        {backlightsItems.map((item, index) => (
          <BacklightItem {...item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Backlights;
