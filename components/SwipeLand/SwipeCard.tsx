import React from "react";
import Image from "next/image";
import Logo1 from "@/assets/Logo1.svg";
import User1 from "@/assets/User1.svg";
import { SwiperSlide } from "swiper/react";

type SwipeCardUser = {
  photo: string;
  name: string;
  title: string;
};

export type SwipeCardProps = {
  logo: string;
  title: string;
  desc: string;
  user: SwipeCardUser;
};

const SwipeCard: React.FC<SwipeCardProps> = ({ logo, user, title, desc }) => {
  return (
    <div className="lg:w-[384px] rounded-[20px] bg-white  pt-[48px] pb-[32px] lg:px-[32px] px-[24px] flex flex-col justify-between items-start shadow-lg">
      <span className="flex justify-start items-center gap-[8px] lg:py-[16px] pb-[16px] text-[24px] text-[#475569] font-bold">
        <Image src={logo} alt={"Logo"} />
        {title}
      </span>
      <span className="lg:text-[24px] lg:space-y-2 text-[16px]">{desc}</span>
      <div className="flex justify-start items-center gap-[16px] mt-[32px]">
        <Image src={user.photo} alt={"User photo"} />
        <div className="flex flex-col justify-start items-start">
          <span className="text-[18px]">{user.name}</span>
          <span className="text-[16px] text-[#475569]">{user.title}</span>
        </div>
      </div>
    </div>
  );
};

export default SwipeCard;
