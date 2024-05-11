import React from "react";
import Image from "next/image";

import NavbarHeader from "@/components/Navbar/NavbarHeader";
import NavbarLink from "@/components/Navbar/NavbarLink";

import BurgerMenu from "@/assets/menu-scale.svg";

const Navbar = () => {
  return (
    <>
      <section>
        <NavbarHeader text={"Collers"} />
      </section>
      <section className="hidden lg:flex items-center justify-center gap-[16px]">
        {["Products", "Solutions", "Pricing", "Resources", "Log In"].map(
          (item, index) => (
            <NavbarLink text={item} variant={"default"} key={index} />
          ),
        )}
        <NavbarLink text={"Sign Up Now"} variant={"signUp"} />
      </section>
      <section className="lg:hidden">
        <Image
          src={BurgerMenu}
          alt={"Hamburger Menu"}
          className="transition active:scale-75"
        />
      </section>
    </>
  );
};

export default Navbar;
