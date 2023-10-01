/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import IMG from "../assets/Empty State 2.png";
import { ArrowRight } from "@phosphor-icons/react";

const NotFound = () => {
  return (
    <>
      <div className="container flex flex-col gap-6 items-center justify-center h-screen w-screen">
        <Image
          src={IMG}
          alt="This is 404 page, nothing to do here"
          height={400}
          width={400}
        />
        <div className="flex flex-col items-center gap-1">
          <p className="font-bold text-xl text-center md:text-2xl leading-heading text-text-secondary">
            The page you're looking for does not exist or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className=" flex gap-2  items-center hover:bg-opacity-90 px-3 py-2 bg-text-primary font-medium text-white text-sm rounded-full transition-all duration-300 ease-in-out"
          aria-label="Go back to home"
        >
          Back to home
          <ArrowRight />
        </Link>
      </div>
    </>
  );
};

export default NotFound;
