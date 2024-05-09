import React from "react";
import Image from "next/image";
import Check from "@/assets/check.svg";

type DecovideoListItemProps = {
  desc: string;
};

const DecovideoListItem: React.FC<DecovideoListItemProps> = ({ desc }) => {
  return (
    <li className="flex items-center justify-start gap-[8px]">
      <Image src={Check} alt={"check"} />
      {desc}
    </li>
  );
};

export default DecovideoListItem;
