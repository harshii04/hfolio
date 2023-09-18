"use client";
import { CaretDown } from "@phosphor-icons/react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="container md:pt-48 pt-28 flex flex-col md:gap-8 gap-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-new shadow-main-inner-shadow w-fit rounded-full ">
          <span className="h-2 w-2 rounded-full bg-green-500 opacity-75"></span>
          <span className="md:text-sm text-xs  text-text-secondary leading-heading">
            Avaliable for work
          </span>
        </div>
        <div>
          <p className="font-bold lg:text-7xl text-5xl leading-heading text-text-primary  ">
            Curious designer, Storyteller, Crafting Experiences & Interactions
          </p>
        </div>
        <div>
          <p className="font-normal md:text-2xl text-lg leading-heading text-text-secondary">
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
