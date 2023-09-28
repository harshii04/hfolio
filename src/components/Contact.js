"use client";
import { Copy } from "@phosphor-icons/react";

const Contact = () => {
  return (
    <>
      <div className="container md:pt-56 pt-32 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-text-primary font-semibold md:text-4xl text-2xl leading-heading">
            Say Hello!
          </p>
          <p className="text-text-secondary font-medium md:text-2xl text-lg text-center leading-body">
            Have an opportunity, wanna collaborate on something cool or just say
            hello!
          </p>
        </div>
        <div>
          <a
            href="mailto:agarwal.harsh2021@gmail.com"
            target="_blank"
            draggable={false}
          >
            <button className="text-white md:text-base text-sm font-medium leading-heading px-4 py-3 bg-text-primary flex gap-2 rounded-full hover:bg-opacity-90">
              agarwal.harsh2021@gmail.com
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
