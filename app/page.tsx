import Image from "next/image";
import Navbar from "@/components/Navbar";
import NavbarHeader from "@/components/Navbar/NavbarHeader";
import NavbarLink from "@/components/Navbar/NavbarLink";

import WatchIcon from "@/assets/heroWatchIcon.svg";
import NikeFootwear from "@/assets/nikeFootwear.svg";
import BelowHeroFirst from "@/assets/BelowHeroFirst.svg";

export default function Home() {
  return (
    <main>
      <Navbar>
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
      </Navbar>
      <section className="hero flex flex-col justify-start items-start w-full">
        <div className="flex justify-between items-start w-full p-[80px]">
          {/*@TODO: buraya bg gelecek*/}
          <section className="flex flex-col w-1/2">
            <span className="text-[72px] font-extrabold">
              Collectible Sneakers
            </span>
            <span className="my-[32px]">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </span>
            <div className="flex justify-start items-center gap-[16px]">
              <NavbarLink text={"Sign up now"} variant={"signUp"} />
              <div className="flex justify-between items-center gap-[8px] px-[8px] py-[12px] text-[#78350F]">
                <Image src={WatchIcon} alt={"Play Icon"} />
                <span>Watch Now</span>
              </div>
            </div>
          </section>
          <section>
            <Image
              src={NikeFootwear}
              alt={"Yellow Nike footwear with rounded square background"}
              className="animate-bounce nike"
            />
          </section>
        </div>
        <div className="flex items-center justify-between gap-[80px] p-[80px]">
          <section className="flex flex-col gap-[16px] w-1/5">
            <Image src={BelowHeroFirst} alt={"Below hero first"} />
            <span className="text-[20px] font-[500]">Nibh viverra</span>
            <span className="text-[18px]">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</span>
          </section>
          <section className="flex flex-col gap-[16px] w-1/5">
            <Image src={BelowHeroFirst} alt={"Below hero first"} />
            <span className="text-[20px] font-[500]">Nibh viverra</span>
            <span className="text-[18px]">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</span>
          </section>
          <section className="flex flex-col gap-[16px] w-1/5">
            <Image src={BelowHeroFirst} alt={"Below hero first"} />
            <span className="text-[20px] font-[500]">Nibh viverra</span>
            <span className="text-[18px]">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</span>
          </section>
        </div>
      </section>
    </main>
  );
}
