import Image from "next/image";
import Navbar from "@/components/Navbar";
import NavbarHeader from "@/components/Navbar/NavbarHeader";
import NavbarLink from "@/components/Navbar/NavbarLink";

import WatchIcon from "@/assets/heroWatchIcon.svg";
import NikeFootwear from "@/assets/nikeFootwear.svg";
import BelowHeroFirst from "@/assets/BelowHeroFirst.svg";
import BelowHeroSecond from "@/assets/BelowHeroSecond.svg";
import BelowHeroThird from "@/assets/BelowHeroThird.svg";
import CartIcon from "@/assets/CartIcon.svg";
import DecoVideo from "@/assets/DecoVideo.svg";
import Check from "@/assets/check.svg";

import BestFirst from "@/assets/BestFirst.png";
import BestSecond from "@/assets/BestSecond.png";
import BestThird from "@/assets/BestThird.png";

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
        {/* Hero */}
        <div className="flex justify-between items-start w-full p-[80px]">
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
        {/* Hero altı */}
        <div className="flex items-center justify-between gap-[80px] p-[80px]">
          <section className="flex flex-col gap-[16px] w-1/5">
            <Image src={BelowHeroFirst} alt={"Below hero first"} />
            <span className="text-[20px] font-[500]">Nibh viverra</span>
            <span className="text-[18px]">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</span>
          </section>
          <section className="flex flex-col gap-[16px] w-1/5">
            <Image src={BelowHeroSecond} alt={"Below hero second"} />
            <span className="text-[20px] font-[500]">Cursus amet</span>
            <span className="text-[18px]">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</span>
          </section>
          <section className="flex flex-col gap-[16px] w-1/5">
            <Image src={BelowHeroThird} alt={"Below hero third"} />
            <span className="text-[20px] font-[500]">Ipsum fermentum</span>
            <span className="text-[18px]">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</span>
          </section>
        </div>
      </section>
      {/* Backlights */}
      <section className='backlights bg-[#0F172A] p-[80px] gap-[80px] flex flex-col'>
        <div className='text-white flex w-full justify-between items-center'>
          <h2 className='font-extrabold text-[56px]'>The best of the best</h2>
          <span className='px-[48px] py-[20px] font-bold text-[24px] rounded-[12px] border-[2px] border-white'>Sign up now</span>
        </div>
        <div className='flex justify-between items-center gap-[48px]'>
          <div className='flex flex-col justify-center items-center shadow shadow-white w-[380px] rounded-[10px] overflow-hidden'>
            <Image src={BestFirst} alt={'Best First'} />
            <div className='flex flex-col p-[32px] bg-[#0F172A] text-white'>
              <span className='font-bold text-[24px] pb-[16px]'>Title</span>
              <span className='text-[18px] mb-[32px]'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</span>
              <span className='flex justify-center items-center w-full py-[18px] gap-[16px] text-[20px] rounded-[8px] border-white border-[2px]'>
                <Image src={CartIcon} alt={'Cart Icon'} />
                Buy Now
              </span>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center shadow shadow-white w-[380px] rounded-[10px] overflow-hidden'>
            <Image src={BestSecond} alt={'Best Second'} />
            <div className='flex flex-col p-[32px] bg-[#0F172A] text-white'>
              <span className='font-bold text-[24px] pb-[16px]'>Title</span>
              <span className='text-[18px] mb-[32px]'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</span>
              <span className='flex justify-center items-center w-full py-[18px] gap-[16px] text-[20px] rounded-[8px] border-white border-[2px]'>
                <Image src={CartIcon} alt={'Cart Icon'} />
                Buy Now
              </span>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center shadow shadow-white w-[380px] rounded-[10px] overflow-hidden'>
            <Image src={BestThird} alt={'Best Third'} />
            <div className='flex flex-col p-[32px] bg-[#0F172A] text-white'>
              <span className='font-bold text-[24px] pb-[16px]'>Title</span>
              <span className='text-[18px] mb-[32px]'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</span>
              <span className='flex justify-center items-center w-full py-[18px] gap-[16px] text-[20px] rounded-[8px] border-white border-[2px]'>
                <Image src={CartIcon} alt={'Cart Icon'} />
                Buy Now
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* DecoVideo */}
      <section className='bg-[#FFFDF4] px-[80px] py-[160px]'>
        <div className='shadow flex justify-between items-center bg-white overflow-visible px-[80px] py-[110px]'>
          <div className='flex flex-col gap-[24px] justify-center items-start'>
            <h1 className='font-extrabold text-[56px]'>Why join us</h1>
            <ul className='list-none'>
              <li className='flex items-center justify-start gap-[8px]'><Image src={Check} alt={'check'} />Est et in pharetra magna adipiscing ornare aliquam.</li>
              <li className='flex items-center justify-start gap-[8px]'><Image src={Check} alt={'check'} />Tellus arcu sed consequat ac velit ut eu blandit.</li>
              <li className='flex items-center justify-start gap-[8px]'><Image src={Check} alt={'check'} />Ullamcorper ornare in et egestas dolor orci.</li>
            </ul>
            <NavbarLink text={"Sign Up Now"} variant={"signUp"} />
          </div>
          <div className='absolute right-12'>
            <Image src={DecoVideo} alt={'DecoVideo'} />
          </div>
        </div>
      </section>
    </main>
  );
}
