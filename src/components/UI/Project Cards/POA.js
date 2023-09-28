"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import PSA1 from "../../../assets/ProjectImgs/PSA/PSA01.png";
import PSA2 from "../../../assets/ProjectImgs/PSA/PSA02.png";
import PSA3 from "../../../assets/ProjectImgs/PSA/PSA03.png";
import PSA4 from "../../../assets/ProjectImgs/PSA/PSA04.png";
import AboutPrj from "../AboutPrj";
import projectData from "../../../../Data/ProjectData";

const ProjectCard = () => {
  const prj = projectData.projects[1];
  return (
    <>
      <div className=" bg-green-card md:py-12 md:px-8 py-8 px-4 flex flex-col gap-12 shadow-main-inner-shadow md:rounded-2xl rounded-lg">
        <div>
          <p className="font-medium md:text-3xl text-2xl leading-heading text-text-primary">
            Online Plant Ordering App
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <div>
            <Image
              src={PSA1}
              alt="Project Image"
              draggable={false}
              className="md:rounded-2xl md:border-2 border rounded-lg border-text-primary"
            />
          </div>
          <div>
            <Image
              src={PSA2}
              alt="Project Image"
              draggable={false}
              className="md:rounded-2xl md:border-2 border rounded-lg border-text-primary"
            />
          </div>
          <div>
            <Image
              src={PSA3}
              alt="Project Image"
              draggable={false}
              className="md:rounded-2xl md:border-2 border rounded-lg border-text-primary"
            />
          </div>
          <div>
            <Image
              src={PSA4}
              alt="Project Image"
              draggable={false}
              className="md:rounded-2xl md:border-2 border rounded-lg border-text-primary"
            />
          </div>
        </div>
      </div>
      <AboutPrj {...prj} />
    </>
  );
};

export default ProjectCard;
