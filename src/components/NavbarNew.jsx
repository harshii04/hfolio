"use client";
import { ArrowUpRight, List } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [text, setText] = useState("");
  const fullText = "Harshvardhan Agarwal";

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <h1 className="font-heading text-text-primary text-xl">{text}</h1>
          </Link>
        </div>
        <div className="hidden md:flex transition-all duration-300 ease-in-out">
          <Link
            href="/"
            className="font-heading p-4 text-sm text-text-primary hover:cursor-pointer transition-all duration-300 ease-in-out leading-heading"
          >
            Home
          </Link>
          {/* <Link
            href="/work"
            className="font-heading p-4 text-sm text-text-primary hover:cursor-pointer  transition-all duration-300 ease-in-out leading-heading"
          >
            Work
          </Link> */}
          <Link
            href="/about"
            className="font-heading p-4 text-sm text-text-primary hover:cursor-pointer transition-all duration-300 ease-in-out leading-heading"
          >
            About
          </Link>

          {/* <Link
            href="/blogs"
            className="p-4 text-sm font-semibold text-text-primary hover:opacity-70 transition-all duration-300 ease-in-out leading-heading"
          >
            Blog
          </Link> */}
          <Link
            href="/resume.pdf"
            className="group flex gap-1 items-center justify-center p-4 text-sm font-heading text-text-primary leading-heading"
            target="_blank"
          >
            Resume
          </Link>
        </div>
        <div className="md:hidden flex items-center justify-center transition-all duration-300 ease-in-out">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <List size={24} fill="#4f4f4f" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white transition-all duration-500 ease-in-out">
          <div className="mt-4 rounded-lg bg-white flex flex-col gap-1 pt-4 items-center justify-center">
            {/* <Link
              href="/work"
              className="p-2 text-sm font-heading text-text-primary  leading-heading"
              onClick={handleClick}
            >
              Work
            </Link> */}
            <Link
              href="/about"
              className="p-2 text-sm font-heading text-text-primary  leading-heading"
              onClick={handleClick}
            >
              About
            </Link>
            {/* <Link
              href="/blogs"
              className="p-2 text-sm font-heading text-text-primary  leading-heading"
              onClick={handleClick}
            >
              Blogs
            </Link> */}
            <Link
              href="/resume.pdf"
              className="p-2 text-sm font-heading text-text-primary  leading-heading"
              onClick={handleClick}
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarNew;

