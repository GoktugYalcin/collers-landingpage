import React from "react";

type HeroTitleProps = {
  title: string;
};

const HeroTitle: React.FC<HeroTitleProps> = ({ title }) => {
  return (
    <span className="text-[72px] font-extrabold lg:text-left text-center">
      {title}
    </span>
  );
};

export default HeroTitle;
