"use client";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

const ExperienceCard = ({ company, timeline, role, about, link }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-start justify-between md:gap-8 gap-6 pt-10 md:pt-12">
        {/* Which position and timeline */}
        <div className="flex flex-col gap-2">
          <div className="group flex items-start gap-2">
            <Link href={link} target="_blank" rel="noreferrer">
              <p className="text-text-primary font-bold md:text-3xl text-xl leading-heading hover:cursor-pointer">
                {company}
              </p>
            </Link>
            <ArrowUpRight
              size={24}
              className="text-text-primary group-hover:ml-2 transition-all duration-300 ease-in-out"
            />
          </div>
          <p className="text-text-secondary text-base font-normal leading-heading">
            {timeline}
          </p>
        </div>

        {/* About the role */}
        <div className="flex flex-col md:gap-4 gap-2 max-w-lg">
          <p className="text-text-primary font-bold md:text-2xl text-lg leading-heading">
            {role}
          </p>
          <p className="text-text-secondary font-normal text-base leading-body">
            {about}
          </p>
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
