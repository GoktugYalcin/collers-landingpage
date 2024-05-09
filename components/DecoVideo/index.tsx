import React from "react";
import Image from "next/image";
import NavbarLink from "@/components/Navbar/NavbarLink";
import Decovideo from "@/assets/DecoVideo.svg";
import DecovideoListItem from "@/components/DecoVideo/DecovideoListItem";

const DecoVideo = () => {
  return (
    <section className="bg-[#FFFDF4] px-[80px] py-[160px]">
      <div className="shadow flex justify-between items-center bg-white overflow-visible px-[80px] py-[110px]">
        <div className="flex flex-col gap-[24px] justify-center items-start">
          <h1 className="font-extrabold text-[56px]">Why join us</h1>
          <ul className="list-none">
            {[
              "Est et in pharetra magna adipiscing ornare aliquam.",
              "Tellus arcu sed consequat ac velit ut eu blandit.",
              "Ullamcorper ornare in et egestas dolor orci.",
            ].map((item, index) => (
              <DecovideoListItem desc={item} key={index} />
            ))}
          </ul>
          <NavbarLink text={"Sign Up Now"} variant={"signUp"} />
        </div>
        <div className="absolute right-12">
          <Image src={Decovideo} alt={"DecoVideo"} />
        </div>
      </div>
    </section>
  );
};

export default DecoVideo;
