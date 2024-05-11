"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import LeftButton from "@/assets/LeftButton.svg";
import RightButton from "@/assets/RightButton.svg";

import Logo1 from "@/assets/Logo1.svg";
import Logo2 from "@/assets/Logo2.svg";
import Logo3 from "@/assets/Logo3.svg";
import Logo4 from "@/assets/Logo4.svg";
import Logo5 from "@/assets/Logo5.svg";

import User1 from "@/assets/User1.svg";
import User2 from "@/assets/User2.svg";
import User3 from "@/assets/User3.svg";
import User4 from "@/assets/User4.svg";
import User5 from "@/assets/User5.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwipeCard, { SwipeCardProps } from "@/components/SwipeLand/SwipeCard";

const SwipeLand = () => {
  const swiperRef = useRef<any>();
  const swipeCards: SwipeCardProps[] = [
    {
      logo: Logo1,
      title: "Zoomerr",
      desc: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      user: {
        photo: User1,
        name: "Hellen Jummy",
        title: "Team Lead",
      },
    },
    {
      logo: Logo2,
      title: "SHELLS",
      desc: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      user: {
        photo: User2,
        name: "Hellena John",
        title: "Co-founder",
      },
    },
    {
      logo: Logo3,
      title: "ArtVenue",
      desc: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      user: {
        photo: User3,
        name: "David Oshodi",
        title: "Manager",
      },
    },
    {
      logo: Logo4,
      title: "WAVES",
      desc: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      user: {
        photo: User4,
        name: "Charolette Hanlin",
        title: "CEO",
      },
    },
    {
      logo: Logo5,
      title: "kontrastr",
      desc: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      user: {
        photo: User5,
        name: "Ralph Edwards",
        title: "Product Designer",
      },
    },
  ];
  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#FFFDF4] pb-[80px]">
      <div className="slider" />
      <div className="w-full flex lg:justify-between justify-center lg:p-[80px] px-[16px] py-[48px] items-center">
        <h2 className="lg:text-[56px] text-[32px] font-extrabold">
          Because they love us
        </h2>
        <div className="lg:flex hidden justify-center items-center gap-[24px]">
          <Image
            src={LeftButton}
            alt={"Left Button"}
            className="cursor-pointer transition-transform active:scale-90"
            onClick={() => swiperRef.current.slidePrev()}
          />
          <Image
            src={RightButton}
            alt={"Right Button"}
            className="cursor-pointer transition-transform active:scale-90"
            onClick={() => swiperRef.current.slideNext()}
          />
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        scrollbar={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        initialSlide={3}
        className="w-full"
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        centeredSlides={true}
        centeredSlidesBounds={true}
        centerInsufficientSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          760: {
            slidesPerView: 4.2,
            spaceBetween: 90,
          },
        }}
      >
        <SwiperSlide className="flex justify-center items-center mr-0">
          <SwipeCard {...swipeCards[0]} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center mr-0">
          <SwipeCard {...swipeCards[1]} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center mr-0">
          <SwipeCard {...swipeCards[2]} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center mr-0">
          <SwipeCard {...swipeCards[3]} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center mr-0">
          <SwipeCard {...swipeCards[4]} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwipeLand;
