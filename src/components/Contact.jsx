"use client";

import { useState } from "react";
import Link from "next/link";

const Contact = () => {
  const [copyStatus, setCopyStatus] = useState(false);
  function copyText(entryText) {
    navigator.clipboard.writeText(entryText);
    setCopyStatus(true);
    setTimeout(() => {
      setCopyStatus(false);
    }, 2000);
  }

  return (
    <>
      <div className="container md:mt-56 mt-32 md:py-24 py-16 flex flex-col items-center justify-center gap-8 bg-text-primary rounded-3xl">
        <div className="flex flex-col items-center gap-4">
          <p className="text-white font-medium md:text-4xl text-2xl leading-heading">
            Say Hello! 👋
          </p>
          <p className="text-zinc-400 md:px-48 px-4 font-medium md:text-4xl text-xl text-center leading-body">
            Have an opportunity, wanna collaborate on something cool or just say
            hello!
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:gap-2 gap-4 items-center">
          <div className="text-text-primary bg-white md:text-xl text-lg font-bold leading-heading px-4 h-[3.5rem] items-center flex gap-2 rounded-lg">
            <Link
              href="mailto:agarwal.harsh2021@gmail.com"
              target="_blank"
              draggable={false}
            >
              agarwal.harsh2021@gmail.com
            </Link>
          </div>

          <button
            onClick={() => copyText("agarwal.harsh2021@gmail.com")}
            className="items-center  text-text-primary bg-white text-lg font-bold leading-heading md:w-[5rem] justify-center h-[3.5rem] flex gap-2 rounded-lg hover:bg-opacity-90 w-full"
          >
            {copyStatus ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
