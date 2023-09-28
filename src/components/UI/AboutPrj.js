"use client";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutPrj = ({ role, tools, timeline, description, content, link }) => {
  return (
    <>
      <div className="md:flex md:flex-row flex-col items-start justify-between md:pt-8 md:gap-24 gap-8">
        <div className="flex flex-row justify-between items-start md:flex-col gap-8 md:pb-0 pb-6 flex-wrap">
          <div className="flex flex-col gap-2">
            <p className="font-normal text-xs leading-heading text-text-secondary">
              MY ROLE
            </p>
            <p className="text-text-primary leading-body md:text-lg text-base font-medium w-36">
              {role}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-normal text-xs leading-heading text-text-secondary">
              TOOLS
            </p>
            <p className="text-text-primary leading-body md:text-lg text-base font-medium w-fit">
              {tools}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-normal text-xs leading-heading text-text-secondary">
              TIMELINE
            </p>
            <p className="text-text-primary leading-body md:text-lg text-base font-medium">
              {timeline}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:pb-0 pb-6">
          <p className="font-normal text-xs leading-heading text-text-secondary">
            DESCRIPTION
          </p>
          <p className="text-text-primary leading-body md:text-lg text-base font-medium">
            {description}
          </p>
        </div>
        <div className="flex flex-col md:gap-6 gap-2">
          <div className="flex flex-col gap-2 md:pb-0 pb-6">
            <p className="font-normal text-xs leading-heading text-text-secondary">
              CONTENT
            </p>
            <p className="text-text-primary leading-body md:text-lg text-base font-medium">
              {content}
            </p>
          </div>

          <Link
            href={link}
            target="_blank"
            draggable={false}
            className=" group flex gap-2 py-3 px-3 rounded-full border-2 border-zinc-300 hover:border-text-primary hover:bg-text-primary hover:text-white text-text-primary items-center justify-center font-medium transition-all duration-300 ease-in-out"
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