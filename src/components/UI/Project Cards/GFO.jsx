"use client";
import Image from "next/image";
import Link from "next/link";
import AboutPrj from "../AboutPrj";
import projectData from "../../../../Data/ProjectData";
import GFO1 from "../../../assets/ProjectImgs/GFO/GFO01.png";
import GFO2 from "../../../assets/ProjectImgs/GFO/GFO02.png";
import GFO3 from "../../../assets/ProjectImgs/GFO/GFO03.png";
import GFO4 from "../../../assets/ProjectImgs/GFO/GFO04.png";

const ProjectCard = () => {
  const prj = projectData.projects[1];
  return (
    <>
      <div className="md:py-4">
        <Link
          href="https://bootcamp.uxdesign.cc/group-food-ordering-helping-people-order-food-online-in-groups-e669b696434d"
          target="_blank"
          alt="this is my link"
        >
          <div className=" bg-[#f4f6f8] hover:bg-orange-card transition-all duration-500 ease-in-out md:py-12 md:px-8 py-8 px-4 flex flex-col gap-12 md:rounded-2xl rounded-lg">
            <div>
              <p className="font-bold md:text-4xl text-2xl leading-heading text-text-primary">
                Group Food Ordering
              </p>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
              <div>
                <Image
                  src={GFO1}
                  alt="Project Image"
                  draggable={false}
                  className="md:rounded-2xl rounded-lg shadow-imgShadow"
                />
              </div>
              <div>
                <Image
                  src={GFO2}
                  alt="Project Image"
                  draggable={false}
                  className="md:rounded-2xl rounded-lg shadow-imgShadow"
                />
              </div>
              <div>
                <Image
                  src={GFO3}
                  alt="Project Image"
                  draggable={false}
                  className="md:rounded-2xl rounded-lg shadow-imgShadow"
                />
              </div>
              <div>
                <Image
                  src={GFO4}
                  alt="Project Image"
                  draggable={false}
                  className="md:rounded-2xl rounded-lg shadow-imgShadow"
                />
              </div>
            </div>
          </div>
          {/* This is about the project details here. */}
        </Link>
        <AboutPrj {...prj} />
      </div>
    </>
  );
};

export default ProjectCard;
