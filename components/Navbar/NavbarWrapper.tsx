import React from "react";

type NavbarWrapperProps = {
  children: React.ReactNode;
};

const NavbarWrapper: React.FC<NavbarWrapperProps> = ({ children }) => {
  return (
    <nav className="px-[80px] py-[30px] flex items-center justify-between">
      {children}
    </nav>
  );
};

export default NavbarWrapper;
