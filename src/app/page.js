"use client";
import { motion } from "framer-motion";
import Featured from "@/components/Featured";
import Project from "@/components/Project";
import Hero from "@/components/UI/Hero";
import VisualBg from "@/components/VisualBg";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
      >
        {/* <Navbar /> */}
        <Hero />
        <Project />
        <VisualBg />
        <Featured />
      </motion.div>
    </>
  );
}
