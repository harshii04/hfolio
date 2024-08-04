/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import D01 from "../../../assets/ProjectImgs/Dive/Dive.png";
import ProjectInfo from "./ProjectInfo";

const ProjectCard = () => {
  return (
    <>
      <div className="">
        <ProjectInfo
          heading={" Creating Dive Platform's Trivia Game"}
          timeline={"Takehome assignment, Jan 2022"}
          description={
            "Crafted an interactive trivia game for the Dive platform, boosting user engagement and helping improve the session dynamics. The game was designed to help users connect with their co-workers by initiating conversations during the game."
          }
        />

        <Link
          href="https://bootcamp.uxdesign.cc/trivia-dive-intern-challenge-9bcefc186517"
          target="_blank"
          alt="Project link"
        >
          <div className=" bg-[#f4f6f8] hover:bg-purple-card transition-all duration-500 ease-in-out md:py-12 md:px-8 py-8 px-4 flex flex-col gap-12 md:rounded-2xl rounded-lg">
            <div>
              <Image
                src={D01}
                alt="Project Image"
                draggable={false}
                className="md:rounded-2xl rounded-lg shadow-imgShadow"
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
