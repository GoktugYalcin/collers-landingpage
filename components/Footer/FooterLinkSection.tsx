import React from "react";

type FooterLinkSectionProps = {
  title: string;
  items: string[];
};

const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  items,
}) => {
  return (
    <div className="lg:w-1/4 flex flex-col justify-start lg:items-start items-center gap-[24px]">
      <span className="font-bold">{title}</span>
      {items.map((sub, index) => (
        <span className="cursor-pointer" key={index}>
          {sub}
        </span>
      ))}
    </div>
  );
};

export default FooterLinkSection;
