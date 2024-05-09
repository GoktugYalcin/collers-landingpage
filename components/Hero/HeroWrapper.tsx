import React from "react";

type HeroWrapperProps = {
  children: React.ReactNode;
};

const HeroWrapper: React.FC<HeroWrapperProps> = ({ children }) => {
  return (
    <section className="hero flex flex-col justify-start items-start w-full">
      {children}
    </section>
  );
};

export default HeroWrapper;
