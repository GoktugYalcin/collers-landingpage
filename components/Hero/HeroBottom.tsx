import React from "react";
import Image from "next/image";

import NavbarLink from "@/components/Navbar/NavbarLink";

import WatchIcon from "@/assets/heroWatchIcon.svg";

const HeroBottom = () => {
  return (
    <div className="flex lg:justify-start justify-center items-center gap-[16px]">
      <NavbarLink text={"Sign up now"} variant={"signUp"} />
      <div className="cursor-pointer flex justify-between items-center gap-[8px] px-[8px] py-[12px] text-[#78350F]">
        <Image src={WatchIcon} alt={"Play Icon"} />
        <span>Watch Demo</span>
      </div>
    </div>
  );
};

export default HeroBottom;
