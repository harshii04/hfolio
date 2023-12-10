/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import D01 from "../../../assets/ProjectImgs/Dive/Dive.png";
import AboutPrj from "../AboutPrj";
import projectData from "../../../../Data/ProjectData";

const ProjectCard = () => {
  const prj = projectData.projects[2];
  return (
    <>
      <div className="md:py-4">
        <Link
          href="https://bootcamp.uxdesign.cc/trivia-dive-intern-challenge-9bcefc186517"
          target="_blank"
          alt="This is my projects"
        >
          <div className=" bg-[#f4f6f8] hover:bg-purple-card transition-all duration-500 ease-in-out md:py-12 md:px-8 py-8 px-4 flex flex-col gap-12 md:rounded-2xl rounded-lg">
            <div>
              <p className="font-bold md:text-4xl text-2xl leading-heading text-text-primary">
                Creating Dive Platform's Trivia Game
              </p>
            </div>
            <div className="">
              <div>
                <Image
                  src={D01}
                  alt="Project Image"
                  draggable={false}
                  className="md:rounded-2xl rounded-lg shadow-imgShadow"
                />
              </div>
            </div>
          </div>
          {/* About the project will be here */}
        </Link>
        <AboutPrj {...prj} />
      </div>
    </>
  );
};

export default ProjectCard;
