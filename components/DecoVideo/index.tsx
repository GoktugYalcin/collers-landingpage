import React from "react";
import Image from "next/image";
import NavbarLink from "@/components/Navbar/NavbarLink";
import Decovideo from "@/assets/DecoVideo.svg";
import DecovideoListItem from "@/components/DecoVideo/DecovideoListItem";

const DecoVideo = () => {
  return (
    <section className="bg-[#FFFDF4] lg:px-[80px] lg:py-[160px] p-[16px] pb-[56px] lg:overflow-visible overflow-hidden">
      <div className="shadow flex lg:flex-row flex-col justify-between items-center bg-white overflow-visible lg:px-[80px] lg:py-[110px] p-[16px] pt-[32px]">
        <div className="flex flex-col gap-[24px] justify-center lg:items-start items-center">
          <h1 className="font-extrabold lg:text-[56px] text-[32px]">
            Why join us
          </h1>
          <ul className="list-none">
            {[
              "Est et in pharetra magna adipiscing ornare aliquam.",
              "Tellus arcu sed consequat ac velit ut eu blandit.",
              "Ullamcorper ornare in et egestas dolor orci.",
            ].map((item, index) => (
              <DecovideoListItem desc={item} key={index} />
            ))}
          </ul>
          <NavbarLink text={"Sign up now"} variant={"signUp"} />
        </div>
        <div className="lg:absolute lg:right-12">
          <Image
            src={Decovideo}
            alt={"DecoVideo"}
            className="lg:right-12 lg:scale-100 lg:translate-x-0 lg:translate-y-0 translate-x-[5px] translate-y-[5px] scale-[1.4]"
          />
        </div>
      </div>
    </section>
  );
};

export default DecoVideo;
