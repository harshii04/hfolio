/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import D01 from "../../../assets/ProjectImgs/Dive/Dive.png";
import AboutPrj from "../AboutPrj";
import projectData from "../../../../Data/ProjectData";

const ProjectCard = () => {
  const prj = projectData.projects[2];
  return (
    <>
      <div className="md:py-8">
        <div className=" bg-purple-card md:py-12 md:px-8 py-8 px-4 flex flex-col gap-12 shadow-main-inner-shadow md:rounded-2xl rounded-lg">
          <div>
            <p className="font-medium md:text-3xl text-2xl leading-heading text-text-primary">
              Creating Dive Platform's Trivia Game
            </p>
          </div>
          <div className="">
            <div>
              <Image
                src={D01}
                alt="Project Image"
                draggable={false}
                className="md:rounded-2xl md:border-2 border rounded-lg border-text-primary"
              />
            </div>
          </div>
        </div>
        {/* About the project will be here */}
        <AboutPrj {...prj} />
      </div>
    </>
  );
};

export default ProjectCard;
