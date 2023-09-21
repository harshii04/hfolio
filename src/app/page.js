import Experience from "@/components/Experience";
import Featured from "@/components/Featured";
import Project from "@/components/Project";
import Header from "@/components/UI/Header";
import Hero from "@/components/UI/Hero";
import VisualBg from "@/components/VisualBg";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Project />
      <VisualBg />
      <Featured />
      <Experience />
    </>
  );
}
