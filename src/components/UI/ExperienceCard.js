"use client";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

const ExperienceCard = ({ company, timeline, role, about, link }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-start justify-between md:gap-8 gap-6 pt-10 md:pt-16">
        {/* Which position and timeline */}
        <div className="flex flex-col gap-2">
          <div className="group flex items-start gap-2">
            <Link
              href={link}
              target="_blank"
              rel="noreferrer"
              draggable={false}
            >
              <p className="text-text-primary font-bold md:text-3xl text-xl leading-heading hover:cursor-pointer tracking-tight-2">
                {company}
              </p>
            </Link>
            <ArrowUpRight
              size={24}
              className="text-text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
            />
          </div>
          <p className="text-text-secondary md:text-base text-sm leading-heading font-medium tracking-wide">
            {timeline}
          </p>
        </div>

        {/* About the role */}
        <div className="flex flex-col md:gap-4 gap-4  max-w-lg">
          <div className="flex flex-col gap-2">
            <p className="text-text-primary font-bold md:text-2xl text-lg leading-heading tracking-tight">
              {role}
            </p>
            <p className="text-text-secondary md:text-base text-sm leading-body tracking-wide font-medium">
              {about}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
