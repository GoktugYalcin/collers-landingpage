import React from "react";

type HeroDescProps = {
  desc: string;
};

const HeroDesc: React.FC<HeroDescProps> = ({ desc }) => {
  return <span className="my-[32px]">{desc}</span>;
};

export default HeroDesc;
