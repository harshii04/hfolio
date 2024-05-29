"use client";
import { motion } from "framer-motion";
import POA from "@/components/UI/Project Cards/POA";
import GFO from "@/components/UI/Project Cards/GFO";
import Dive from "@/components/UI/Project Cards/Dive";

const Work = () => {
  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        <div className="container pt-24 flex flex-col md:gap-4 gap-6" id="work">
          <div>
            <p className="font-heading text-text-primary text-2xl leading-heading">
              Projects
            </p>
          </div>
          <div className="flex flex-col md:gap-8 gap-12">
            <POA />
            <GFO />
            <Dive />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
