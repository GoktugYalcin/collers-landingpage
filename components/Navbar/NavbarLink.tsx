import React from "react";

type NavbarLinksProps = {
  text: string;
  variant: "default" | "signUp";
};

const NavbarLink: React.FC<NavbarLinksProps> = ({ text, variant }) => {
  const classesByVariant = `transition-colors z-30 cursor-pointer text-[16px] text-[#78350F] font-[500] py-[12px] ${variant === "signUp" ? "border-[2px] px-[28px] border-[#78350F] rounded-[8px] hover:bg-[#78350F] hover:text-[#FFFBEC] " : "px-[8px]"}`;
  return <span className={classesByVariant}>{text}</span>;
};

export default NavbarLink;
