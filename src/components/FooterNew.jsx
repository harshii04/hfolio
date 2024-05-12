/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const FooterNew = () => {
  return (
    <>
      <div className="bg-[#F9F9F9] py-16 md:mt-56 mt-32">
        <div className=" flex flex-col gap-16 container">
          <div className="flex justify-between ">
            <div>
              <p className="text-text-primary font-bold md:text-xl text-lg leading-body md:max-w-md">
                Have an opportunity, wanna collaborate on something cool or just
                say hello!👋
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-8">
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="text-text-secondary font-medium  md:text-base text-sm tracking-wider leading-heading">
                  CONTACT ME
                </h1>
              </div>
              <div>
                <Link href="mailto:agarwal.harsh2021@gmail.com" target="_blank">
                  <span className="text-text-primary text-sm font-semibold leading-heading underline underline-offset-4">
                    agarwal.harsh2021@gmail.com
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-text-secondary font-medium  md:text-base text-sm tracking-wider leading-heading">
                LET'S CONNECT
              </h1>
              <div className="flex gap-2">
                <Link
                  href={"https://www.linkedin.com/in/harshui/"}
                  className="text-text-primary text-sm font-semibold leading-heading hover:italic hover:underline transition-all duration-300 ease-in-out"
                  target="_blank"
                >
                  LinkedIn
                </Link>
                <span className="text-text-secondary text-sm font-semibold leading-heading">
                  |
                </span>
                <Link
                  href={"https://twitter.com/harshii04"}
                  className="text-text-primary text-sm font-semibold leading-heading hover:italic hover:underline transition-all duration-300 ease-in-out"
                  target="_blank"
                >
                  Twitter
                </Link>
                <span className="text-text-secondary text-sm font-semibold leading-heading">
                  |
                </span>
                <Link
                  href={"https://peerlist.io/harshii04"}
                  className="text-text-primary text-sm font-semibold leading-heading hover:italic hover:underline transition-all duration-300 ease-in-out"
                  target="_blank"
                >
                  Peerlist
                </Link>
                <span className="text-text-secondary text-sm font-semibold leading-heading">
                  |
                </span>
                <Link
                  href={"https://github.com/harshii04"}
                  className="text-text-primary text-sm font-semibold leading-heading hover:italic hover:underline transition-all duration-300 ease-in-out"
                  target="_blank"
                >
                  Github
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <h1 className="text-text-secondary font-medium  md:text-base text-sm tracking-wider leading-heading">
                  ©2023 HARSHVARDHAN AGARWAL.
                </h1>
              </div>
              <div>
                <span className="text-text-primary text-sm font-semibold leading-heading">
                  Made with love, missing some classes and overdose of caffeine.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNew;
