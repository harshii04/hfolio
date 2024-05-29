/* eslint-disable react/no-unescaped-entities */
"use client";
import { CaretDown } from "@phosphor-icons/react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = () => {
  return (
    <>
      <div className="container flex flex-col gap-8 items-start justify-start md:py-20 py-20">
        <div className="flex flex-col gap-3 md:max-w-[579px]">
          <div>
            <p className="md:text-[32px] text-2xl leading-heading text-text-primary font-heading">
              An engineer turned product designer with a flair for research and
              problem-solving.{" "}
            </p>
          </div>
          <div>
            <p className="md:text-base text-sm leading-body text-text-primary ">
              I was working as product design intern at{" "}
              <Link
                href={"https://graphy.com/community-platform/"}
                className="underline underline-offset-2 text-text-primary "
                target="_blank"
              >
                Avalon Scenes
              </Link>{" "}
              &{" "}
              <Link
                href={"https://www.letsdive.io/"}
                target="_blank"
                className="underline underline-offset-2 text-text-primary"
              >
                Dive
              </Link>{" "}
              , I have worked on productising client-requested features,
              internal tools, educational platform to teach coding, and game
              design.
            </p>
          </div>
        </div>

        <button className="px-6 py-3 rounded-lg border border-[#0065F4] bg-custom-gradient text-white font-medium text-base leading-heading hover:shadow-main-cta hover:bg-custom-hover-gradient transition-all ease-in-out duration-300">
          <Link href={"https://x.com/harshii04"} target="_blank">
            Say "Hello"
          </Link>
        </button>
      </div>
    </>
  );
};

export default Hero;
