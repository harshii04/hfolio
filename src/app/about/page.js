/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Img1 from "../../assets/Profile Header 1.jpg";
import Img2 from "../../assets/CollegeImg.svg";
import GroupImg from "../../assets/GroupImg 1.svg";
import Img3 from "../../assets/CollegeImg06.svg";
import Link from "next/link";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <div className="container mt-24">
          <div className="flex flex-col gap-4">
            <div>
              {" "}
              <h1 className="text-text-secondary font-bold text-sm md:py-4 py-2 tracking-wider leading-heading">
                ABOUT ME...
              </h1>
            </div>
            <div className="flex md:flex-row flex-col justify-around md:items-center items-start py-4">
              <div className="flex flex-col gap-2 md:w-1/2 z-10">
                <div>
                  <h1 className="text-text-primary font-medium md:text-xl text-base leading-heading">
                    Hi, I'm
                  </h1>
                </div>
                <div>
                  <h1 className="text-text-primary font-bold md:text-8xl text-4xl leading-heading">
                    Harshvardhan Agarwal
                  </h1>
                </div>
                <div className="md:py-6 py-4">
                  <h1 className="text-text-secondary font-medium text-base leading-heading">
                    One of the top things on my bucket list is a solo trip to
                    Japan!
                  </h1>
                </div>
              </div>
              <div className="py-4">
                <Image
                  src={Img1}
                  alt="This is my image"
                  className="rounded-lg w-auto h-auto -z-10 hover:shadow-imgShadow transition-all duration-300 ease-in-out -rotate-3"
                  height={400}
                  width={400}
                  priority
                />
                <Image
                  src={Img2}
                  alt="This is my image"
                  className="rounded-lg md:absolute md:block hidden top-16 right-4 -z-10  w-72 h-auto rotate-3 hover:shadow-imgShadow transition-all duration-300 ease-in-out"
            
                />
              </div>
            </div>
          </div>
          <div className="md:mt-24 mt-6">
            <div className="flex md:flex-row justify-between items-start md:gap-24 gap-4 flex-col-reverse">
              <div className="md:w-1/2 flex flex-col gap-1 items-center">
                <Image
                  src={GroupImg}
                  alt="This is my image"
                  className="rounded-lg w-auto h-auto hover:shadow-imgShadow transition-all duration-300 ease-in-out"
                />
                <p className="font-extralight text-xs text-text-secondary">
                  My first hackathon team.
                </p>
              </div>
              <div className="flex flex-col md:w-1/2 h-fit justify-between">
                <div className="">
                  <h1 className="text-text-secondary font-bold md:py-4 py-2  text-sm tracking-wider leading-heading">
                    INFO
                  </h1>
                </div>

                <div>
                  <p className="py-2 font-normal text-text-primary  md:text-base text-sm leading-body">
                    I’m an undergraduate student at the Vellore Institute of
                    Technology, Vellore studying Computer Science Engineering
                    and graduating in May 2025.
                  </p>
                  <p className="py-2 font-normal text-text-primary md:text-base text-sm leading-body">
                    For a long time, I’ve been designing spaces that people can
                    enjoy strolling around, always striving to curate an
                    engaging human experience as they navigate the built
                    environment. Throughout this journey, I’ve been curious
                    about understanding human interaction to build more
                    intuitive things – there are many complexities in human
                    relationships with nature and architecture with so much
                    still to explore.
                  </p>
                  <p className="py-2 font-normal text-text-primary md:text-base text-sm leading-body">
                    During my freshman year, I decided to shift my career
                    towards designing for people in computing spaces because of
                    a desire to work at larger and faster scales. While
                    computing and architecture slowly evolve, still, at the
                    heart of these disciplines are what makes design valuable –
                    it improves people’s lives holistically through emotion,
                    functionality, and aesthetics. Instead of strolling spaces,
                    however, people are now scrolling interfaces more. Learning
                    about technology has given me a spatial 'taste' of design in
                    the real world and allows me to bring a systems view to
                    designing interfaces that feel more humane.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-24 mt-16 border-t border-border-stroke">
            <h1 className="text-text-secondary font-bold text-sm md:py-4 py-2 tracking-wider leading-heading">
              EDUCATION
            </h1>
          </div>
          <div className="md:mt-6 mt-4 flex md:flex-row flex-col justify-between md:items-center items-start md:gap-24 gap-4">
            <div className="flex flex-col md:gap-8 gap-4 md:w-1/2">
              <div className="flex flex-col gap-1">
                <div>
                  <h1 className="font-bold md:text-3xl text-2xl text-text-primary leading-heading tracking-tight">
                    Vellore Institute of Technology, Vellore
                  </h1>
                </div>
                <div>
                  <p className="text-text-secondary font-semibold md:text-lg text-base leading-heading tracking-wide py-2">
                    2020 - 2024
                  </p>
                </div>
              </div>
              <div>
                <p className="font-normal text-text-primary md:text-base text-sm leading-body">
                  Integrated Masters of Computer Science Engineering, a dual
                  degree program by VIT, Vellore.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 md:w-1/2 items-center justify-between">
              <Image
                src={Img3}
                alt="this is my college"
                className="rounded-lg w-auto h-auto hover:shadow-imgShadow transition-all duration-300 ease-in-out"
              />
              <p className="text-text-secondary font-light text-xs pt-2">
                Get to witness magical sunsets from campus.
              </p>
            </div>
          </div>
          <div className="md:mt-24 mt-16 border-t border-border-stroke">
            <h1 className="text-text-secondary font-bold text-sm md:py-4 py-2">
              MY VALUES
            </h1>
          </div>
          <div className="md:mt-6 mt-4 flex items-start justify-between gap-12 flex-col">
            <div className="flex md:flex-row flex-col gap-8 justify-evenly">
              <div className="md:w-1/2 h-fit">
                <div className="flex flex-col md:gap-4 gap-2">
                  <h1 className="font-bold md:text-xl text-lg text-text-primary leading-heading">
                    ❤️ Passion is everything.
                  </h1>
                  <p className="font-normal md:text-base text-sm text-text-primary leading-body">
                    I found that because I enjoy what I do, I have the drive and
                    initiative to pour my heart into the things I believe in. I
                    push for boundless creativity and to join other passionate
                    people to make the world a happier place.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 h-fit">
                <div className="flex flex-col md:gap-4 gap-2">
                  <h1 className="font-bold md:text-xl text-lg text-text-primary leading-heading">
                    📚 Never stop learning.
                  </h1>
                  <p className="font-medium md:text-base text-sm text-text-primary leading-body">
                    I am always seeking challenges to continually develop
                    myself, such as participating in competitions, collaborating
                    on projects, reading blogs, and involving myself in the
                    design community where I learn from others and also give
                    back through mentorship and sharing my experiences and
                    skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-8 ">
              <div className="md:w-1/2 h-fit">
                <div className="flex flex-col gap-4">
                  <h1 className="font-bold md:text-xl text-lg text-text-primary leading-heading">
                    😃 Be human.
                  </h1>
                  <p className="font-medium md:text-base text-sm text-text-primary leading-body">
                    Empathy and kindness go a long way. Share our knowledge and
                    take time to understand different perspectives. Build
                    towards a culture of inclusion and respect, and stay true to
                    yourself and to others.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 h-fit">
                <div className="flex flex-col gap-4">
                  <h1 className="font-bold md:text-xl text-base text-text-primary leading-heading">
                    🗻 Embrace the journey.
                  </h1>
                  <p className="font-medium md:text-base text-sm text-text-primary leading-body">
                    Embrace the learning curves and failures and discomfort.
                    Open your mind and let curiosity and optimism drive you.
                    Believe in yourself, and also have fun along the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-24 mt-16 border-t border-border-stroke">
            <h1 className="text-text-secondary font-bold text-sm md:py-4 py-2">
              EXPERIENCE
            </h1>
          </div>
          <div className="mt-2 flex flex-col items-start gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-sm text-text-primary tracking-wide leading-heading">
                Product Design Intern @{" "}
                <Link
                  href="https://www.buildonscenes.com/"
                  target="_blank"
                  className="underline underline-offset-2"
                >
                  {" "}
                  Avalon Scenes{" "}
                </Link>
              </h1>
              <p className="font-medium text-sm text-text-primary leading-heading">
                Dec 2022 - Apr 2023
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-sm text-text-primary tracking-wide leading-heading">
                Product Design Intern @{" "}
                <Link
                  href="https://www.letsdive.io/"
                  target="_blank"
                  className="underline underline-offset-2 "
                >
                  {" "}
                  Dive{" "}
                </Link>
              </h1>
              <p className="font-medium text-sm text-text-primary leading-heading">
                Jan 2022 - Mar 2022
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-sm text-text-primary tracking-wide leading-heading">
                Product Design Intern @{" "}
                <Link
                  href="https://www.winuall.com/"
                  target="_blank"
                  className="underline underline-offset-2 "
                >
                  {" "}
                  Winuall{" "}
                </Link>
              </h1>
              <p className="font-medium text-sm text-text-primary leading-heading">
                Sep 2021 - Dec 2021
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-sm text-text-primary tracking-wide leading-heading">
                Product Design Intern @{" "}
                <Link
                  href="https://www.pebbl.life/"
                  target="_blank"
                  className="underline underline-offset-2 "
                >
                  {" "}
                  Unlearners Tech{" "}
                </Link>
              </h1>
              <p className="font-medium text-sm text-text-primary leading-heading">
                July 2021 - Nov 2021
              </p>
            </div>
            <div>
              <Link href="" alt="Resume link">
                <p className="after:content-['_↓'] font-medium text-sm text-text-primary underline underline-offset-2 hover:text-opacity-60 transition-all duration-300 ease-in-out cursor-pointer">
                  View full resume here
                </p>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
