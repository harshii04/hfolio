"use client";
import Image from "next/image";
import D01 from "../../../assets/ProjectImgs/Dive/Dive.svg";
import AboutPrj from "../AboutPrj";
import projectData from "../../../../Data/ProjectData";
import { motion } from "framer-motion";

const ProjectCard = () => {
  const prj = projectData.projects[2];
  return (
    <motion.div>
      <div className=" bg-purple-card md:py-12 md:px-8 py-8 px-4 flex flex-col gap-12 shadow-main-inner-shadow">
        <div>
          <p className="font-medium md:text-3xl text-2xl leading-heading text-text-primary">
            Group Food Ordering
          </p>
        </div>
        <div className="">
          <div>
            <Image src={D01} alt="Project Image" draggable={false} />
          </div>
        </div>
      </div>
      <AboutPrj {...prj} />
      {/* About the project will be here */}
      {/* {projectData.projects.map((project) => {
        return project.id == 3 ? (
          <AboutPrj
            key={project.id}
            role={project.role}
            tools={project.tools}
            time={project.timeline}
            des={project.description}
            cont={project.content}
          />
        ) : null;
      })} */}
    </motion.div>
  );
};

export default ProjectCard;
