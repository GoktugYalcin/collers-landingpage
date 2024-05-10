import React from "react";
import Image from "next/image";
import BrandingImg from "@/assets/Branding.svg";

type BrandindWrapperProps = {
  children: React.ReactNode;
};

const BrandingWrapper: React.FC<BrandindWrapperProps> = ({ children }) => {
  return (
    <section className="waves flex flex-col p-[80px]">
      <h2 className="text-[56px] font-extrabold pb-[32px]">
        Grow your collection
      </h2>
      <span className="pb-[80px]">
        Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet
        dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit
        rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin
        neque placerat at bibendum quam tellus.
      </span>
      <div className="flex justify-between items-start gap-[80px]">
        <ul className="decoration-0 text-[20px] font-medium">{children}</ul>
        <div className="flex justify-center items-center pr-[160px]">
          <Image src={BrandingImg} alt={"Branding"} width={1000} />
        </div>
      </div>
    </section>
  );
};

export default BrandingWrapper;
