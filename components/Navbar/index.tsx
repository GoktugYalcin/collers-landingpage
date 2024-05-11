"use client";

import React, { useState } from "react";
import Image from "next/image";

import NavbarHeader from "@/components/Navbar/NavbarHeader";
import NavbarLink from "@/components/Navbar/NavbarLink";

import BurgerMenu from "@/assets/menu-scale.svg";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
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
        <NavbarLink text={"Sign up now"} variant={"signUp"} />
      </section>
      <section className="lg:hidden">
        <Image
          src={BurgerMenu}
          alt={"Hamburger Menu"}
          className="transition active:scale-75"
          onClick={() => {
            document.body.style["overflow"] = !drawerOpen ? "hidden" : "";
            setDrawerOpen(!drawerOpen);
          }}
        />
        {drawerOpen && (
          <div
            className="lg:hidden fixed z-[999] left-0 mt-[15px] flex justify-start items-center !text-[#f5deb3] flex-col pt-[20px] w-full bg-[#bfb98f]"
            onClick={() => setDrawerOpen(false)}
          >
            <NavbarLink text={"Products"} variant={"default"} />
            <NavbarLink text={"Solutions"} variant={"default"} />
            <NavbarLink text={"Pricing"} variant={"default"} />
            <NavbarLink text={"Resources"} variant={"default"} />
            <NavbarLink text={"Log In"} variant={"default"} />
          </div>
        )}
      </section>
    </>
  );
};

export default Navbar;
