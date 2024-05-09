import React from "react";
import Image from "next/image";

import HeroTitle from "@/components/Hero/HeroTitle";
import HeroDesc from "@/components/Hero/HeroDesc";
import HeroBottom from "@/components/Hero/HeroBottom";

import NikeFootwear from "@/assets/nikeFootwear.svg";
import BelowHeroFirst from "@/assets/BelowHeroFirst.svg";
import BelowHeroSecond from "@/assets/BelowHeroSecond.svg";
import BelowHeroThird from "@/assets/BelowHeroThird.svg";
import SubHeroItem from "@/components/Hero/SubHero/SubHeroItem";
import SubHero from "@/components/Hero/SubHero";

const Hero = () => {
  return (
    <section className="hero flex flex-col justify-start items-start w-full">
      <div className="flex justify-between items-start w-full p-[80px]">
        <section className="flex flex-col w-1/2">
          <HeroTitle title={"Collectible Sneakers"} />
          <HeroDesc
            desc={
              "Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet."
            }
          />
          <HeroBottom />
        </section>
        <section>
          <Image
            src={NikeFootwear}
            alt={"Yellow Nike footwear with rounded square background"}
            className="animate-bounce nike"
          />
        </section>
      </div>
      <SubHero>
        <SubHeroItem
          desc={
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
          }
          title={"Nibh viverra"}
          image={BelowHeroFirst}
        />
        <SubHeroItem
          desc={
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
          }
          title={"Cursus amet"}
          image={BelowHeroSecond}
        />
        <SubHeroItem
          desc={
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
          }
          title={"Ipsum fermentum"}
          image={BelowHeroThird}
        />
      </SubHero>
    </section>
  );
};

export default Hero;
