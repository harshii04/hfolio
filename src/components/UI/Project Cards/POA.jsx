"use client";
import Image from "next/image";
import AboutPrj from "../AboutPrj";
import projectData from "../../../../Data/ProjectData";
import PSA1 from "../../../assets/ProjectImgs/PSA/PSA01.png";
import PSA2 from "../../../assets/ProjectImgs/PSA/PSA02.png";
import PSA3 from "../../../assets/ProjectImgs/PSA/PSA03.png";
import PSA4 from "../../../assets/ProjectImgs/PSA/PSA04.png";
import Link from "next/link";
import ProjectInfo from "./ProjectInfo";

const ProjectCard = () => {
  const prj = projectData.projects[0];
  return (
    <>
      <div className="md:py-4">
        <ProjectInfo
          heading={"Simplifying Urban Gardening"}
          timeline={"Concept project, June 2023"}
          description={
            "Designed a concept for a plant delivery app that streamlines the selection process by presenting each plant's specific care requirements. This intuitive feature guides users in choosing the perfect plants for their needs, making plant care more accessible and enjoyable. "
          }
        />
        <Link
          href="https://medium.com/@harsh_youx/sprout-concept-app-for-buying-plants-seeds-gardening-equipment-etc-fd78b2a83a18"
          target="_blank"
          alt="Project link"
        >
          <div className=" bg-[#f4f6f8] hover:bg-green-card transition-all duration-500 ease-in-out md:py-12 md:px-8 py-8 px-4 flex flex-col gap-12 md:rounded-2xl rounded-lg">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
              <div>
                <Image
                  src={PSA1}
                  alt="Project Image"
                  draggable={false}
                  className="md:rounded-2xl rounded-lg shadow-imgShadow"
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
                  className="md:rounded-2xl rounded-lg shadow-imgShadow"
                />
              </div>
              <div>
                <Image
                  src={PSA4}
                  alt="Project Image"
                  draggable={false}
                  className="md:rounded-2xl rounded-lg shadow-imgShadow"
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
