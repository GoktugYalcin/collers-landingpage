import React from "react";
import Image, { StaticImageData } from "next/image";
import BestFirst from "@/assets/BestFirst.png";
import CartIcon from "@/assets/CartIcon.svg";

export type BacklightsItemProps = {
  image: StaticImageData;
  title: string;
  desc: string;
};

const BacklightItem: React.FC<BacklightsItemProps> = ({
  image,
  title,
  desc,
}) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-md shadow-white w-[380px] rounded-[10px] overflow-hidden">
      <Image src={image} alt={"Best Item"} />
      <div className="flex flex-col p-[32px] bg-[#0F172A] text-white">
        <span className="font-bold text-[24px] pb-[16px]">{title}</span>
        <span className="text-[18px] mb-[32px]">{desc}</span>
        <span className="cursor-pointer transition-colors flex justify-center items-center w-full py-[18px] gap-[16px] text-[20px] rounded-[8px] border-white border-[2px] hover:bg-white hover:text-[#0F172A]">
          <Image src={CartIcon} alt={"Cart Icon"} />
          Buy Now
        </span>
      </div>
    </div>
  );
};

export default BacklightItem;
