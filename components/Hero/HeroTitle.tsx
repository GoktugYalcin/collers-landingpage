import React from "react";

type HeroTitleProps = {
  title: string;
};

const HeroTitle: React.FC<HeroTitleProps> = ({ title }) => {
  return <span className="text-[72px] font-extrabold">{title}</span>;
};

export default HeroTitle;
