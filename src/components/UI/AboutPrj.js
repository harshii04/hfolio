"use client";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

const AboutPrj = ({ role, tools, timeline, description, content, link }) => {
  return (
    <>
      <div className="md:flex md:flex-row flex-col items-start justify-between md:pt-8 pt-6 md:gap-24 gap-8">
        <div className="flex flex-row justify-between items-start md:flex-col gap-8 md:pb-0 pb-6 flex-wrap md:w-[20%]">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xs leading-heading text-text-secondary tracking-wider">
              MY ROLE
            </p>
            <p className="text-text-primary leading-body md:text-base text-sm font-medium w-36">
              {role}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xs leading-heading text-text-secondary tracking-wider">
              TOOLS
            </p>
            <p className="text-text-primary leading-body md:text-base text-sm font-normal w-fit">
              {tools}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xs leading-heading text-text-secondary tracking-wider">
              TIMELINE
            </p>
            <p className="text-text-primary leading-body md:text-base text-sm font-normal">
              {timeline}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:pb-0 pb-6 md:w-[40%]">
          <p className="font-semibold text-xs leading-heading text-text-secondary tracking-wider">
            DESCRIPTION
          </p>
          <p className="text-text-primary leading-body md:text-base text-sm font-normal ">
            {description}
          </p>
        </div>
        <div className="flex flex-col md:gap-8 gap-2 md:w-[40%]">
          <div className="flex flex-col gap-2 md:pb-0 pb-6">
            <p className="font-semibold text-xs leading-heading text-text-secondary tracking-wider">
              CONTENT
            </p>
            <p className="text-text-primary leading-body md:text-base text-sm font-normal ">
              {content}
            </p>
          </div>

          <Link
            href={link}
            target="_blank"
            draggable={false}
            className=" group md:hidden md:text-base text-sm flex gap-2 py-3 px-3 rounded-full border-2 border-border-stroke hover:border-text-primary hover:bg-text-primary hover:text-white text-text-primary items-center justify-center font-medium transition-all duration-300 ease-in-out"
          >
            Read Case Study
            <ArrowUpRight size={16} className="hover:text-white" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutPrj;
