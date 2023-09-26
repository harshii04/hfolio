/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import CoverIMG from "../assets/Cover Img.svg";

const About = () => {
  return (
    <>
      <div className="container md:pt-32 pt-24 flex flex-col items-center justify-center">
        <div className="px-6 py-3 items-center bg-heading-green w-fit rounded-full rotate-[-4deg] justify-center">
          <p className="font-medium text-text-secondary md:text-2xl text-lg leading-heading">
            About Me
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:gap-24 gap-8 pt-12 md:px-12 items-start ">
          <div className="">
            <Image src={CoverIMG} alt="Ths is me lol" className="rounded-xl" />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-text-primary font-medium md:text-2xl text-xl leading-body ">
              Hey, I'm Harsh. A product designer currently living in the shoes
              of an engineer.
            </p>
            <p className="text-text-primary font-medium md:text-2xl text-xl leading-body ">
              I started designing since my first year of college when I was
              introduced about design by one of seniors, since then I have
              become a well rounded designer who feels comfortable throughout
              the whole process of creating digital products from start to
              finish.
            </p>
            <p className="text-text-primary font-medium md:text-2xl text-xl leading-body ">
              Having an engineering background I have experienced with both
              design and web development, because of which I have a good
              understanding of different tech stacks and their possibilities.
              This helps me empathise with both designers and developers, trying
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
