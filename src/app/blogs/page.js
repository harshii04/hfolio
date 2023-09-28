"use client";
import Image from "next/image";
import Link from "next/link";
import IMG from "../../assets/Empty State.png";

const NotFound = () => {
  return (
    <>
      <div className="container flex flex-col gap-6 items-center justify-center h-full w-full">
        <Image
          src={IMG}
          alt="This is 404 page, nothing to do here"
          height={400}
          width={400}
        />
        <div className="flex flex-col items-center gap-1">
          <p className="font-bold text-sm md:text-base leading-heading text-text-secondary">
            I am working on writing some cool articles about my life and design.
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
