import React from "react";

type NavbarWrapperProps = {
  children: React.ReactNode;
};

const NavbarWrapper: React.FC<NavbarWrapperProps> = ({ children }) => {
  return (
    <nav className="lg:px-[80px] px-[16px] lg:py-[30px] py-[22px] flex items-center justify-between">
      {children}
    </nav>
  );
};

export default NavbarWrapper;
