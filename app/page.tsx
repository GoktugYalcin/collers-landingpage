import React from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroWrapper from "@/components/Hero/HeroWrapper";
import NavbarWrapper from "@/components/Navbar/NavbarWrapper";
import Backlights from "@/components/Backlights";
import DecoVideo from "@/components/DecoVideo";
import SwipeLand from "@/components/SwipeLand";
import Branding from "@/components/Branding";
import Chart from "@/components/Chart";
import Footer from "@/components/Footer";

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
      <SwipeLand />
      <Branding />
      <Chart />
      <Footer />
    </main>
  );
}
