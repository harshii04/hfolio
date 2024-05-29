/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import pImg1 from "../../assets/Personal Potrait 3.JPG";
import pImg2 from "../../assets/Landscape college.jpeg";
import newImg from "../../assets/Personal Landscape.jpg";

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
              <h1 className="text-text-secondary font-heading text-sm md:py-4 py-2 tracking-wider leading-heading">
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
                  <h1 className="text-text-primary font-heading md:text-8xl text-4xl leading-heading">
                    Harshvardhan Agarwal
                  </h1>
                </div>
                <div className="md:py-6 py-4">
                  <h1 className="text-text-secondary font-medium text-sm md:text-base leading-heading">
                    One of the top things on my bucket list is a solo trip to
                    Japan! 🇯🇵
                  </h1>
                </div>
              </div>
              <div className=" md:w-1/3 py-4">
                <Image
                  src={pImg1}
                  alt="This is my image"
                  className="rounded-lg w-auto h-auto shadow-imgShadow"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="md:mt-24 mt-6">
            <div className="flex md:flex-row justify-between items-center md:gap-24 gap-4 flex-col-reverse">
              <div className=" md:w-1/2 flex flex-col gap-1 items-center">
                <Image
                  src={newImg}
                  alt="This is my image"
                  className="rounded-lg w-auto h-auto shadow-imgShadow"
                />
                <p className="font-normal text-xs text-text-secondary">
                  Accomplishing 12,750 Ft
                </p>
              </div>
              <div className="flex flex-col md:w-1/2 h-fit justify-between">
                <div className="">
                  <h1 className="text-text-secondary font-heading md:py-4 py-2  text-sm tracking-wider leading-heading">
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
                    For quite some time, my focus has been crafting spaces that
                    invite people to wander and relish, aiming always to curate
                    immersive experiences within the built environment. This
                    journey has piqued my curiosity about different aesthetics,
                    driving me to create more innovative designs. The
                    intricacies and nuances of various themes and ideologies
                    continue to intrigue me, keeping me wanting more.
                  </p>
                  <p className="py-2 font-normal text-text-primary md:text-base text-sm leading-body">
                    During my freshman year, I redirected my career path toward
                    designing for people in technology-driven spaces, because I
                    found design holding the very essence of what engineering
                    meant to me and why I got into it in the first place.
                    Design, I’ve found, enhances people's lives and experiences
                    through emotion, functionality, and aesthetics. Unlike
                    strolling through physical spaces, today's interaction
                    involves scrolling through interfaces. The very human
                    element of design is what has kept me coming back to it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-24 mt-16 border-t border-border-stroke">
            <h1 className="text-text-secondary font-heading text-sm md:py-4 py-2 tracking-wider leading-heading">
              EDUCATION
            </h1>
          </div>
          <div className="md:mt-6 mt-4 flex md:flex-row flex-col justify-between md:items-center items-start md:gap-24 gap-4">
            <div className="flex flex-col md:gap-2 gap-4 md:w-1/2">
              <div className="flex flex-col">
                <div>
                  <h1 className="font-bold md:text-3xl text-2xl text-text-primary leading-heading tracking-tight">
                    Vellore Institute of Technology, Vellore
                  </h1>
                </div>
                <div>
                  <p className="text-text-secondary font-semibold md:text-lg text-base leading-heading tracking-wide py-1">
                    2020 - 2025
                  </p>
                </div>
              </div>
              <div>
                <p className="font-normal text-text-primary md:text-base text-sm leading-body">
                  Integrated Masters of Computer Science Engineering - a dual
                  degree program by VIT, Vellore.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1 md:w-1/2 items-center justify-between">
              <Image
                src={pImg2}
                alt="this is my college"
                className="rounded-lg w-auto h-auto shadow-imgShadow"
              />
              <p className="text-text-secondary font-normal text-xs pt-2">
                Magical sunsets from campus
              </p>
            </div>
          </div>
          <div className="md:mt-24 mt-16 border-t border-border-stroke">
            <h1 className="text-text-secondary font-heading text-sm md:py-4 py-2">
              MY VALUES
            </h1>
          </div>
          <div className="md:mt-6 mt-4 flex items-start justify-between gap-12 flex-col">
            <div className="flex md:flex-row flex-col gap-8 justify-evenly">
              <div className="md:w-1/2 h-fit">
                <div className="flex flex-col md:gap-4 gap-2">
                  <h1 className="font-heading md:text-xl text-lg text-text-primary leading-heading">
                    ❤️ Where Passion Leads, Everything Follows.
                  </h1>
                  <p className="font-normal md:text-base text-sm text-text-primary leading-body">
                    I've found myself working relentlessly on design projects at
                    3 AM, resisting sleep effortlessly because of my love for
                    the field. It has become a lifestyle, a core quality of
                    myself. I see design even in real life at times, always
                    gathering knowledge wherever and however possible.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 h-fit">
                <div className="flex flex-col md:gap-4 gap-2">
                  <h1 className="font-heading md:text-xl text-lg text-text-primary leading-heading">
                    📚 Never stop learning.
                  </h1>
                  <p className="font-normal md:text-base text-sm text-text-primary leading-body">
                    The field never bores or tires me, on the contrary, I find
                    places to learn from in my free time. Whether it's my social
                    media apps or some YouTube vlogs, I happily engage with it
                    endlessly. It actually brings me comfort, I engage in
                    competitions and collaborative projects dive into blogs and
                    actively contribute to the field because it values me just
                    as much.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-8 ">
              <div className="md:w-1/2 h-fit">
                <div className="flex flex-col gap-4">
                  <h1 className="font-heading md:text-xl text-lg text-text-primary leading-heading">
                    😃 Embody Your Humanity.
                  </h1>
                  <p className="font-normal md:text-base text-sm text-text-primary leading-body">
                    I’ve connected with so many people while working on
                    different projects that it has given me a multicoloured
                    perspective of what design could look like. I’ve learnt a
                    lot and realised how human the experience has made me,
                    making mistakes but then rectifying them, understanding what
                    somebody might like and how to put it across.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 h-fit">
                <div className="flex flex-col gap-4">
                  <h1 className="font-heading md:text-xl text-base text-text-primary leading-heading">
                    🗻 Embrace the Adventure Ahead.
                  </h1>
                  <p className="font-normal md:text-base text-sm text-text-primary leading-body">
                    For now, I’m just staying hungry for more opportunities and
                    better learning. everything that comes my way, I’m keeping
                    an open mind fueled by curiosity and optimism. Noah Khan
                    said in his song, that I live by “be surprised, keep
                    hungry!” and that is exactly what I intend to do.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-24 mt-16 border-t border-border-stroke">
            <h1 className="text-text-secondary font-heading text-sm md:py-4 py-2">
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
              <Link href="/resume.pdf" alt="Resume link" target="_blank">
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
