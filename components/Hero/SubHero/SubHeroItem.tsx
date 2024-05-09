import React from "react";

import Image from "next/image";

type SubHeroItemProps = {
  image: string;
  title: string;
  desc: string;
};

const SubHeroItem: React.FC<SubHeroItemProps> = ({ image, title, desc }) => {
  return (
    <section className="flex flex-col gap-[16px] w-1/5">
      <Image src={image} alt={"Below hero"} />
      <span className="text-[20px] font-[500]">{title}</span>
      <span className="text-[18px]">{desc}</span>
    </section>
  );
};

export default SubHeroItem;
