import React from "react";

type SubHeroProps = {
  children: React.ReactNode;
};

const SubHero: React.FC<SubHeroProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-between gap-[80px] p-[80px]">
      {children}
    </div>
  );
};

export default SubHero;
