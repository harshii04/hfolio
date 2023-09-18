import Experience from "@/components/Experience";
import Featured from "@/components/Featured";
import Project from "@/components/Project";
import Header from "@/components/UI/Header";
import Hero from "@/components/UI/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Project />
      <Featured />
      <Experience />
    </>
  );
}
