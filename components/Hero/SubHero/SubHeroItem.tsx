import React from "react";

import Image from "next/image";

type SubHeroItemProps = {
  image: string;
  title: string;
  desc: string;
};

const SubHeroItem: React.FC<SubHeroItemProps> = ({ image, title, desc }) => {
  return (
    <section className="flex flex-col gap-[16px] lg:w-1/3 lg:items-start justify-center items-center">
      <Image src={image} alt={"Below hero"} />
      <span className="text-[20px] font-[500]">{title}</span>
      <span className="text-[18px] lg:text-left text-center">{desc}</span>
    </section>
  );
};

export default SubHeroItem;
