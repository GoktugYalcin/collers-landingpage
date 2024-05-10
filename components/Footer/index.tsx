import React from "react";
import Image from "next/image";

import AppStore from "@/assets/AppStore.svg";
import GooglePlay from "@/assets/GooglePlay.svg";
import SocialIcons from "@/assets/SocialIcons.svg";
import World from "@/assets/world.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#10172A] flex flex-col pt-[48px] px-[80px] text-white text-[16px] gap-[50px]">
      <div className="flex justify-between items-start">
        <div className="w-1/4 flex flex-col justify-start items-start gap-[24px]">
          <span className="font-medium">Product</span>
          <span>Pricing</span>
          <span>Overview</span>
          <span>Browse</span>
          <span>Accessibility</span>
          <span>Five</span>
        </div>
        <div className="w-1/4 flex flex-col justify-start items-start gap-[24px]">
          <span className="font-medium">Solutions</span>
          <span>Brainstorming</span>
          <span>Ideation</span>
          <span>Wireframing</span>
          <span>Research</span>
          <span>Design</span>
        </div>
        <div className="w-1/4 flex flex-col justify-start items-start gap-[24px]">
          <span className="font-medium">Support</span>
          <span>Contact Us</span>
          <span>Developers</span>
          <span>Documentation</span>
          <span>Integrations</span>
          <span>Reports</span>
        </div>
        <div className="w-1/4 flex flex-col justify-between items-start gap-[70px]">
          <div className="flex flex-col justify-start items-start">
            <span className="font-medium mb-[20px]">Get the App</span>
            <Image src={AppStore} alt={"App Store"} className="mb-[8px]" />
            <Image src={GooglePlay} alt={"Google Play"} />
          </div>
          <div className="flex flex-col justify-start items-start">
            <span className="font-medium mb-[20px]">Follow Us</span>
            <Image src={SocialIcons} alt={"Social Icons"} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-[37px] border-t border-[#2F3C50]">
        <span>Collers @ 2023. All rights reserved.</span>
        <div className="flex justify-start items-center gap-[32px]">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Contact</span>
          <span className="flex items-center">
            <Image src={World} alt={"World"} className="mr-[6px]" />
            EN
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
