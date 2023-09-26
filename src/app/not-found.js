"use client";
import Image from "next/image";
import Link from "next/link";
import IMG from "../assets/404img.svg";

const NotFound = () => {
  return (
    <>
      <div className="container flex flex-col gap-6 items-center justify-center h-full w-full">
        <Image src={IMG} alt="This is 404 page, nothing to do here" />
        <div className="flex flex-col items-center gap-1">
          <p className="font-bold text-sm md:text-base leading-heading text-text-secondary">
            You landed on this page for a reason, god wants you to
          </p>
          <p className="font-bold text-sm md:text-base leading-heading text-text-secondary">
            Go touch some grass! 🍃
          </p>
        </div>

        <Link
          href="/"
          className="px-3 py-2 bg-text-primary font-medium text-white text-sm rounded-full"
        >
          Go back
        </Link>
      </div>
    </>
  );
};

export default NotFound;
