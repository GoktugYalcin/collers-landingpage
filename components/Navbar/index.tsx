import React from "react";
import NavbarHeader from "@/components/Navbar/NavbarHeader";
import NavbarLink from "@/components/Navbar/NavbarLink";

const Navbar = () => {
  return (
    <>
      <section>
        <NavbarHeader text={"Collers"} />
      </section>
      <section className="flex items-center justify-center gap-[16px]">
        {["Products", "Solutions", "Pricing", "Resources", "Log In"].map(
          (item, index) => (
            <NavbarLink text={item} variant={"default"} key={index} />
          ),
        )}
        <NavbarLink text={"Sign Up Now"} variant={"signUp"} />
      </section>
    </>
  );
};

export default Navbar;
