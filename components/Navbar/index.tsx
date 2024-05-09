import React from "react";

type NavbarProps = {
  children: React.ReactNode;
};

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="px-[80px] py-[30px] flex items-center justify-between">
      {children}
    </nav>
  );
};

export default Navbar;
