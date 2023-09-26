"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GFO1 from "../../../assets/ProjectImgs/GFO/GFO01.png";
import GFO2 from "../../../assets/ProjectImgs/GFO/GFO02.png";
import GFO3 from "../../../assets/ProjectImgs/GFO/GFO03.png";
import GFO4 from "../../../assets/ProjectImgs/GFO/GFO04.png";
import AboutPrj from "../AboutPrj";
import projectData from "../../../../Data/ProjectData";

const ProjectCard = () => {
  const prj = projectData.projects[0];
  return (
    <motion.div>
      <div className=" bg-orange-card md:py-12 md:px-8 py-8 px-4 flex flex-col gap-12 shadow-main-inner-shadow">
        <div>
          <p className="font-medium md:text-4xl text-2xl leading-heading text-text-primary">
            Group Food Ordering
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
          <div>
            <Image src={GFO1} alt="Project Image" draggable={false} />
          </div>
          <div>
            <Image src={GFO2} alt="Project Image" draggable={false} />
          </div>
          <div>
            <Image src={GFO3} alt="Project Image" draggable={false} />
          </div>
          <div>
            <Image src={GFO4} alt="Project Image" draggable={false} />
          </div>
        </div>
      </div>
      <AboutPrj {...prj} />
    </motion.div>
  );
};

export default ProjectCard;
