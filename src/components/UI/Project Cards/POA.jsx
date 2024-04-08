"use client";
import Image from "next/image";
import AboutPrj from "../AboutPrj";
import projectData from "../../../../Data/ProjectData";
import PSA1 from "../../../assets/ProjectImgs/PSA/PSA01.png";
import PSA2 from "../../../assets/ProjectImgs/PSA/PSA02.png";
import PSA3 from "../../../assets/ProjectImgs/PSA/PSA03.png";
import PSA4 from "../../../assets/ProjectImgs/PSA/PSA04.png";
import Link from "next/link";

const ProjectCard = () => {
  const prj = projectData.projects[0];
  return (
    <>
      <div className="md:py-4">
        <Link
          href="https://medium.com/@harsh_youx/sprout-concept-app-for-buying-plants-seeds-gardening-equipment-etc-fd78b2a83a18"
          target="_blank"
          alt="Project 1"
        >
          <div className=" bg-[#f4f6f8] hover:bg-green-card transition-all duration-500 ease-in-out md:py-12 md:px-8 py-8 px-4 flex flex-col gap-12 md:rounded-2xl rounded-lg">
            <div>
              <p className="font-bold md:text-4xl text-2xl leading-heading text-text-primary">
                Online Plant Ordering App
              </p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 ">
              <div>
                <Image
                  src={PSA1}
                  alt="Project Image"
                  draggable={false}
                  className="md:rounded-2xl rounded-lg shadow-imgShadow"
                  priority
                />
              </div>
              <div>
                <Image
                  src={PSA2}
                  alt="Project Image"
                  draggable={false}
                  className="md:rounded-2xl rounded-lg shadow-imgShadow"
                />
              </div>
              <div>
                <Image
                  src={PSA3}
                  alt="Project Image"
                  draggable={false}
                  className="md:rounded-2xl  rounded-lg  shadow-imgShadow"
                />
              </div>
              <div>
                <Image
                  src={PSA4}
                  alt="Project Image"
                  draggable={false}
                  className="md:rounded-2xl  rounded-lg  shadow-imgShadow"
                />
              </div>
            </div>
          </div>
          {/* This is about the project details */}
        </Link>
        <AboutPrj {...prj} />
      </div>
    </>
  );
};

export default ProjectCard;
