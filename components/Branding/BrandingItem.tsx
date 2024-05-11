import React, { MouseEventHandler } from "react";
import Image from "next/image";
import Arrow from "@/assets/arrow-right.svg";

export type BrandingItemProps = {
  icon: string;
  title: string;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLLIElement>;
};

const BrandingItem: React.FC<BrandingItemProps> = ({
  icon,
  selected,
  title,
  onClick,
}) => {
  const itemClasses = `p-[16px] flex justify-start lg:min-w-[270px] min-w-fit items-center gap-[16px] cursor-pointer rounded-[8px] transition-colors ${selected ? "bg-white shadow-md" : ""}`;
  return (
    <li className={itemClasses} onClick={onClick}>
      <Image src={icon} alt={"icon"} />
      <span>{title}</span>
      {selected && (
        <Image src={Arrow} alt={"icon"} className="hidden lg:flex" />
      )}
    </li>
  );
};

export default BrandingItem;
