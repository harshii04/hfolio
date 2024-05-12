/* eslint-disable react/no-unescaped-entities */
"use client";
import { CaretDown } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

const Hero = () => {
  // const [hovered, setHovered] = useState(false);

  const [emojis, setEmojis] = useState(["✌️", "🎉", "😎", "🤪", "😂", "🫶"]); // Add more emojis to this array if needed
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 500); // Change the interval duration here (in milliseconds)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [emojis.length]);

  return (
    <>
      <div className="container flex flex-col md:gap-2 gap-3 md:mt-48 mt-24 md:pb-24 justify-center">
        <div>
          <p className="font-bold md:text-4xl text-2xl md:leading-body leading-body text-text-primary ">
            Hi, i'm Harshvardhan{" "}
            {/* <span role="img" aria-label="Changing Emoji">
              {emojis[currentEmojiIndex]}
            </span> */}
          </p>
        </div>
        <div>
          <p className="font-bold md:text-4xl text-2xl md:leading-body leading-body text-text-primary ">
            Exploring designing intelligent interfaces.
          </p>
        </div>
        <div>
          <p className="font-bold md:text-4xl text-2xl md:leading-body leading-body text-text-primary ">
            Previously worked at Avalon Scenes and Dive.
          </p>
        </div>
        <div>
          <p className="font-bold md:text-4xl text-2xl md:leading-body leading-body text-text-primary  ">
            Currently looking for new opportunities.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
