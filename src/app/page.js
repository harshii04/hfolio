"use client";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Featured from "@/components/Featured";
import Project from "@/components/Project";
import Header from "@/components/UI/Header";
import Hero from "@/components/UI/Hero";
import VisualBg from "@/components/VisualBg";
import About from "../components/About";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div>
        <Header />
        <Hero />
        <Project />
        <VisualBg />
        <Featured />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}
