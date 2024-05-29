"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [text, setText] = useState("");
  const fullText = "harshvardhanagarwal.";

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust the interval duration for typing speed

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <>
      <div className="container flex justify-between mt-8">
        <div>
          <Link href="/">
            <h1 className="font-heading">{text}</h1>
          </Link>
        </div>
        <div>
          <ul className="flex md:flex-row flex-col md:gap-4 gap-2 items-start">
            <li>
              <Link
                href="/work"
                className="font-heading text-sm  text-text-primary hover:underline hover:underline-offset-4 hover:italic transition-all duration-300 ease-in-out leading-heading"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="font-semibold text-sm  text-text-primary hover:underline hover:underline-offset-4 hover:italic transition-all duration-300 ease-in-out leading-heading"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://drive.google.com/file/d/1KmszXaNN4oyJrfciOEQQOxiGjqOchHEM/view?usp=sharing"
                }
                className=" text-sm font-semibold text-text-primary hover:underline hover:underline-offset-4 hover:italic transition-all duration-300 ease-in-out leading-heading"
                target="_blank"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
