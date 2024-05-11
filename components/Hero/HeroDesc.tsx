import React from "react";

type HeroDescProps = {
  desc: string;
};

const HeroDesc: React.FC<HeroDescProps> = ({ desc }) => {
  return <span className="my-[32px] lg:text-left text-center">{desc}</span>;
};

export default HeroDesc;
