"use client";

import React, { useRef } from "react";
import Image from "next/image";
import LeftButton from "@/assets/LeftButton.svg";
import RightButton from "@/assets/RightButton.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Logo1 from "@/assets/Logo1.svg";
import Logo2 from "@/assets/Logo2.svg";
import Logo3 from "@/assets/Logo3.svg";
import Logo4 from "@/assets/Logo4.svg";
import Logo5 from "@/assets/Logo5.svg";
import Logo6 from "@/assets/Logo6.svg";
import Logo7 from "@/assets/Logo7.svg";

import User1 from "@/assets/User1.svg";
import User2 from "@/assets/User2.svg";
import User3 from "@/assets/User3.svg";
import User4 from "@/assets/User4.svg";
import User5 from "@/assets/User5.svg";
import User6 from "@/assets/User6.svg";
import User7 from "@/assets/User7.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Index = () => {
  const swiperRef = useRef<any>();
  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#FFFDF4] pb-[80px]">
      <div className="slider" />
      <div className="w-full flex justify-between p-[80px] items-center">
        <h2 className="text-[56px] font-extrabold">Because they love us</h2>
        <div className="flex justify-center items-center gap-[24px]">
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
        slidesPerView={4.2}
        scrollbar={false}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        initialSlide={3}
        className="w-full"
        centeredSlides={true}
        centeredSlidesBounds={true}
        centerInsufficientSlides={true}
      >
        <SwiperSlide className="flex justify-center items-center mr-0">
          <div className="w-[384px] rounded-[20px] bg-white  pt-[48px] pb-[32px] px-[32px] flex flex-col justify-between items-start shadow-lg">
            <span className="flex justify-start items-center gap-[8px] py-[16px] text-[24px] text-[#475569] font-bold">
              <Image src={Logo1} alt={"Logo"} />
              Zoomerr
            </span>
            <span className="text-[24px] space-y-2">
              Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus,
              viverra turpis lorem. Varius a turpis urna id porttitor.
            </span>
            <div className="flex justify-start items-center gap-[16px] mt-[32px]">
              <Image src={User1} alt={"User photo"} />
              <div className="flex flex-col justify-start items-start">
                <span className="text-[18px]">Hellen Jummy</span>
                <span className="text-[16px] text-[#475569]">Team Lead</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center mr-0">
          <div className="w-[384px] rounded-[20px] bg-white  pt-[48px] pb-[32px] px-[32px] flex flex-col justify-between items-start shadow-lg">
            <span className="flex justify-start items-center gap-[8px] py-[16px] text-[24px] text-[#475569] font-bold">
              <Image src={Logo2} alt={"Logo"} />
              SHELLS
            </span>
            <span className="text-[24px] space-y-2">
              Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet
              enim. Sit purus venenatis velit semper lectus sed ornare quam
              nulla.
            </span>
            <div className="flex justify-start items-center gap-[16px] mt-[32px]">
              <Image src={User2} alt={"User photo"} />
              <div className="flex flex-col justify-start items-start">
                <span className="text-[18px]">Hellena John</span>
                <span className="text-[16px] text-[#475569]">Co-founder</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center mr-0">
          <div className="w-[384px] rounded-[20px] bg-white  pt-[48px] pb-[32px] px-[32px] flex flex-col justify-between items-start shadow-lg">
            <span className="flex justify-start items-center gap-[8px] py-[16px] text-[24px] text-[#475569] font-bold">
              <Image src={Logo3} alt={"Logo"} />
              ArtVenue
            </span>
            <span className="text-[24px] space-y-2">
              A eget sed posuere dui risus habitasse mauris. Venenatis aliquet
              id ultrices a lacus. Pretium vehicula pretium posuere justo sed.
            </span>
            <div className="flex justify-start items-center gap-[16px] mt-[32px]">
              <Image src={User3} alt={"User photo"} />
              <div className="flex flex-col justify-start items-start">
                <span className="text-[18px]">David Oshodi</span>
                <span className="text-[16px] text-[#475569]">Manager</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center mr-0">
          <div className="w-[384px] rounded-[20px] bg-white  pt-[48px] pb-[32px] px-[32px] flex flex-col justify-between items-start shadow-lg">
            <span className="flex justify-start items-center gap-[8px] py-[16px] text-[24px] text-[#475569] font-bold">
              <Image src={Logo4} alt={"Logo"} />
              WAVES
            </span>
            <span className="text-[24px] space-y-2">
              Magna egestas aliquet ut integer non. Sed diam enim nibh sit.
              Aliquam laoreet aenean metus nibh eu scelerisque.
            </span>
            <div className="flex justify-start items-center gap-[16px] mt-[32px]">
              <Image src={User4} alt={"User photo"} />
              <div className="flex flex-col justify-start items-start">
                <span className="text-[18px]">Charolette Hanlin</span>
                <span className="text-[16px] text-[#475569]">CEO</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center mr-0">
          <div className="w-[384px] rounded-[20px] bg-white  pt-[48px] pb-[32px] px-[32px] flex flex-col justify-between items-start shadow-lg">
            <span className="flex justify-start items-center gap-[8px] py-[16px] text-[24px] text-[#475569] font-bold">
              <Image src={Logo5} alt={"Logo"} />
              kontrastr
            </span>
            <span className="text-[24px] space-y-2">
              Amet morbi enim sodales quis dui, in habitant pharetra. Risus id
              fringilla sed adipiscing volutpat sit varius turpis. Sed pretium
              se.
            </span>
            <div className="flex justify-start items-center gap-[16px] mt-[32px]">
              <Image src={User5} alt={"User photo"} />
              <div className="flex flex-col justify-start items-start">
                <span className="text-[18px]">Ralph Edwards</span>
                <span className="text-[16px] text-[#475569]">
                  Product Designer
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Index;
