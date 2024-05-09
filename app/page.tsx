import React from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroWrapper from "@/components/Hero/HeroWrapper";
import NavbarWrapper from "@/components/Navbar/NavbarWrapper";
import Backlights from "@/components/Backlights";
import DecoVideo from "@/components/DecoVideo";

export default function Home() {
  return (
    <main>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
      <Backlights />
      <DecoVideo />
    </main>
  );
}
