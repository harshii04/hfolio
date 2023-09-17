"use client";
import Image from "next/image";
import Sushi from "../../assets/Header Illustration.svg";
import Link from "next/link";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

const Header = () => {
  return (
    <>
      {/* This is the image and the name, description section of the header. */}
      <div className="container pt-8 flex items-center justify-between">
        <div className="flex md:gap-2 gap-1 items-center">
          <Image
            src={Sushi}
            alt="Header Img"
            className="md:w-12 md:h-8 w-10 h-6"
          />
          <div className="flex flex-col gap-1">
            <p className="md:text-sm md:font-medium text-xs text-zinc-900 leading-heading">
              Harshvardhan Agarwal
            </p>
            <p className="md:text-sm text-xs text-zinc-500 leading-heading">
              Product Designer
            </p>
          </div>
        </div>

        {/* This is the navbar section. */}
        <div className="fixed left-1/2 transform -translate-x-1/2 bottom-0 -translate-y-[90%] md:top-6 md:translate-y-0 z-40">
          <div className="flex items-center justify-between px-2 rounded-full bg-white bg-opacity-70 shadow-nav-shadow border border-border-stroke backdrop-blur-lg">
            <div className="p-4 cursor-pointer">
              <Link
                href={"/"}
                className="md:text-sm text-xs text-text-primary leading-heading"
              >
                Home
              </Link>
            </div>
            <div className="p-4">
              {" "}
              <Link
                href={"/work"}
                className="md:text-sm text-xs text-text-secondary leading-heading"
              >
                Work
              </Link>{" "}
            </div>
            <div className="p-4">
              <Link
                href={"/about"}
                className="md:text-sm text-xs text-text-secondary leading-heading"
              >
                About
              </Link>
            </div>
            <div className="p-4">
              <Link
                href={"/about"}
                className="md:text-sm text-xs text-text-secondary leading-heading"
              >
                Blogs
              </Link>
            </div>
            <div className="px-4 py-2 rounded-full bg-text-primary text-white md:text-sm text-xs leading-heading hover:cursor-pointer">
              Resume
            </div>
          </div>
        </div>

        {/* This is the social links of the header. */}
        <div className="flex gap-2">
          <div className="group relative w-max p-1">
            <Link
              href={"https://twitter.com/harshii04"}
              className="leading-heading text-text-secondary hover:text-text-primary transition-all duration-300 ease-in-out"
            >
              <TwitterLogo weight="duotone" className="md:w-6 md:h-6 w-5 h-5" />
            </Link>
            <span class="pointer-events-none absolute -top-7 justify-center w-max opacity-0 transition-opacity group-hover:opacity-100 bg-text-primary text-white text-xs p-1 rounded hover:delay-200 text-center">
              Twitter
            </span>
          </div>
          <div className="group relative w-max p-1">
            {" "}
            <Link
              href={"https://www.linkedin.com/in/harshui/"}
              className="leading-heading text-text-secondary hover:text-text-primary transition-all duration-300 ease-in-out"
            >
              <LinkedinLogo
                weight="duotone"
                className="md:w-6 md:h-6 w-5 h-5"
              />
            </Link>
            <span class="pointer-events-none absolute -top-7 justify-center w-max opacity-0 transition-opacity group-hover:opacity-100 bg-text-primary text-white text-center text-xs py-1 px-2 rounded hover:delay-200">
              LinkedIn
            </span>
          </div>
          <div className="group relative w-max p-1">
            {" "}
            <Link
              href="https://github.com/harshii04"
              className="leading-heading text-text-secondary hover:text-text-primary transition-all duration-300 ease-in-out"
            >
              <GithubLogo weight="duotone" className="md:w-6 md:h-6 w-5 h-5" />
            </Link>
            <span class="pointer-events-none absolute -top-7 justify-center w-max opacity-0 transition-opacity group-hover:opacity-100 bg-text-primary text-white text-xs text-center p-1 rounded hover:delay-200">
              Github
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
