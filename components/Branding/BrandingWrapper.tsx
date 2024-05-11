import React from "react";
import Image from "next/image";
import BrandingImg from "@/assets/Branding.svg";

type BrandindWrapperProps = {
  children: React.ReactNode;
};

const BrandingWrapper: React.FC<BrandindWrapperProps> = ({ children }) => {
  return (
    <section className="waves flex flex-col lg:p-[80px] px-[16px] bg-[#FFFDF4]">
      <h2 className="lg:text-[56px] text-[32px] font-extrabold pb-[32px] lg:text-left text-center">
        Grow your collection
      </h2>
      <span className="pb-[80px] lg:text-left text-center">
        Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet
        dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit
        rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin
        neque placerat at bibendum quam tellus.
      </span>
      <div className="flex lg:flex-row flex-col justify-between items-start lg:gap-[80px] gap-[32px]">
        <ul className="branding-list decoration-0 text-[20px] font-medium">
          {children}
        </ul>
        <div className="flex justify-center items-center lg:pr-[160px]">
          <Image src={BrandingImg} alt={"Branding"} width={1000} />
        </div>
      </div>
    </section>
  );
};

export default BrandingWrapper;
