/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import CoverIMG from "../assets/Cover Img.png";

const About = () => {
  return (
    <>
      <div
        className="container md:pt-56 pt-32 flex flex-col items-center justify-center"
        id="about"
      >
        <p className="font-bold text-text-primary md:text-5xl text-3xl leading-heading">
          About Me
        </p>

        <div className="flex md:flex-row flex-col md:gap-16 gap-8 pt-12 md:px-16 items-start ">
          <div>
            <Image
              src={CoverIMG}
              alt="Ths is me lol"
              className="rounded-xl"
              width={3200}
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-text-secondary font-medium md:text-2xl text-xl leading-body ">
              Hey, I'm Harsh. A product designer currently living in the shoes
              of an engineer.
            </p>
            <p className="text-text-secondary font-medium md:text-2xl text-xl leading-body ">
              I started designing since my first year of college when I was
              introduced about design by one of seniors, since then I have
              become a well rounded designer who feels comfortable throughout
              the whole process of creating digital products from start to
              finish.
            </p>
            <p className="text-text-secondary font-medium md:text-2xl text-xl leading-body ">
              Having an engineering background I have experienced with both
              design and web development, because of which I have a good
              understanding of different tech stacks and their possibilities.
              This helps me empathies with both designers and developers, trying
              to find elegant solutions which are both functionally and visually
              pleasing but are always within the technical constraints.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
