import React from "react";
import Link from "next/link";

type NavbarHeaderProps = {
  text: string;
};

const NavbarHeader: React.FC<NavbarHeaderProps> = ({ text }) => {
  return (
    <Link
      href="/"
      className="decoration-0 text-[#78350F] text-[32px] font-bold"
    >
      {text}
    </Link>
  );
};

export default NavbarHeader;
