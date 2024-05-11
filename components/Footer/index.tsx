import React from "react";
import Image from "next/image";

import AppStore from "@/assets/AppStore.svg";
import GooglePlay from "@/assets/GooglePlay.svg";
import SocialIcons from "@/assets/SocialIcons.svg";
import World from "@/assets/world.svg";
import FooterLinkSection from "@/components/Footer/FooterLinkSection";

const Footer = () => {
  return (
    <footer className="w-full bg-[#10172A] flex flex-col pt-[48px] lg:px-[80px] px-[45px] text-white text-[16px] gap-[50px]">
      <div className="flex lg:flex-row flex-col justify-between lg:items-start items-center lg:gap-0 gap-[80px]">
        <FooterLinkSection
          title="Product"
          items={["Pricing", "Overview", "Browse", "Accessibility", "Five"]}
        />
        <FooterLinkSection
          title="Solutions"
          items={[
            "Brainstorming",
            "Ideation",
            "Wireframing",
            "Research",
            "Design",
          ]}
        />
        <FooterLinkSection
          title="Support"
          items={[
            "Contact Us",
            "Developers",
            "Documentation",
            "Integrations",
            "Reports",
          ]}
        />
        <div className="lg:w-1/4 flex flex-col justify-between lg:items-start items-center lg:gap-[70px] gap-[80px]">
          <div className="flex flex-col justify-start lg:items-start items-center">
            <span className="font-medium lg:mb-[20px] mb-[12px]">
              Get the App
            </span>
            <Image src={AppStore} alt={"App Store"} className="mb-[8px]" />
            <Image src={GooglePlay} alt={"Google Play"} />
          </div>
          <div className="flex flex-col justify-start lg:items-start items-center">
            <span className="font-medium mb-[20px]">Follow Us</span>
            <Image
              src={SocialIcons}
              alt={"Social Icons"}
              className="lg:ml-0 ml-[90px]"
            />
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center lg:py-[37px] pt-[48px] border-t border-[#2F3C50]">
        <span className="lg:pb-0 pb-[24px]">
          Collers @ 2023. All rights reserved.
        </span>
        <div className="flex justify-start items-center gap-[32px] lg:pb-0 pb-[48px]">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Contact</span>
          <div className="flex items-center justify-center">
            <Image src={World} alt={"World"} className="mr-[6px]" />
            <span>EN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
