"use client";
import { CaretDown } from "@phosphor-icons/react";

const Hero = () => {
  return (
    <>
      <div className="container flex flex-col md:gap-8 gap-6 md:h-screen md:mt-0 mt-24 justify-center">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-new shadow-main-inner-shadow w-fit rounded-full ">
          <span className="h-2 w-2 rounded-full bg-green-500 opacity-75"></span>
          <span className="md:text-sm text-xs  text-text-secondary leading-heading font-medium">
            Available for work
          </span>
        </div>
        <div>
          <p className="font-bold md:text-[80px] text-5xl md:leading-heading leading-mobile-heading text-text-primary tracking-tight-2 ">
            Curious designer, Storyteller, Crafting Experiences & Interactions
          </p>
        </div>
        <div>
          <p className="font-medium md:text-2xl text-xl leading-body text-text-secondary tracking-[0.48px]">
            I’m based out of India, was formerly at Avalon Scenes and Dive.
          </p>
        </div>
        <div className="flex gap-2 animate-bounce pt-6 items-center">
          <CaretDown
            size={40}
            className="fill-text-secondary"
            weight="regular"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
