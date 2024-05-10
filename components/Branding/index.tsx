"use client";

import React, { useState } from "react";

import BrandingWrapper from "@/components/Branding/BrandingWrapper";
import BrandingItem, {
  BrandingItemProps,
} from "@/components/Branding/BrandingItem";

import Search from "@/assets/search.svg";
import Shield from "@/assets/shield-check.svg";
import Rocket from "@/assets/rocket.svg";
import Screen from "@/assets/screen.svg";
import Podcast from "@/assets/podcast.svg";
import Settings from "@/assets/settings-alt.svg";

const Branding = () => {
  const [selected, setSelected] = useState<number>(0);
  const BrandingItems: BrandingItemProps[] = [
    {
      title: "Bibendum tellus",
      icon: Search,
    },
    {
      title: "Cras eget",
      icon: Shield,
    },
    {
      title: "Dolor pharetra",
      icon: Rocket,
    },
    {
      title: "Amet, fringilla",
      icon: Screen,
    },
    {
      title: "Amet nibh",
      icon: Podcast,
    },
    {
      title: "Sed velit",
      icon: Settings,
    },
  ];
  return (
    <BrandingWrapper>
      {BrandingItems.map((item, index) => (
        <BrandingItem
          key={index}
          icon={item.icon}
          title={item.title}
          selected={index === selected}
          onClick={() => setSelected(index)}
        />
      ))}
    </BrandingWrapper>
  );
};

export default Branding;
