"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

const FeaturedCard = ({ link, img, tag, heading, content }) => {
  return (
    <>
      <Link href={link} target="_blank" draggable={false}>
        <div className="group flex flex-col gap-8 p-2 hover:bg-zinc-100 hover:cursor-pointer hover:rounded-xl transition-all duration-300 ease-in-out h-full">
          <div>
            <Image
              src={img}
              alt="Featured project image "
              draggable={false}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <p className="text-text-primary md:text-xl text-base font-heading leading-heading transition-all duration-300 ease-in-out ">
                  {heading}
                </p>
                <ArrowUpRight
                  size={24}
                  className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
                />
              </div>

              <p className="text-text-secondary md:text-base text-sm leading-body font-normal">
                {content}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default FeaturedCard;
