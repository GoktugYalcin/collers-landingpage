import React from "react";

type SubHeroProps = {
  children: React.ReactNode;
};

const SubHero: React.FC<SubHeroProps> = ({ children }) => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-[80px] gap-[32px] lg:p-[80px] px-[16px] py-[48px]">
      {children}
    </div>
  );
};

export default SubHero;
