import Image from "next/image";
import GFO1 from "../../../assets/ProjectImgs/GFO/GFO01.svg";
import GFO2 from "../../../assets/ProjectImgs/GFO/GFO02.svg";
import GFO3 from "../../../assets/ProjectImgs/GFO/GFO03.svg";
import GFO4 from "../../../assets/ProjectImgs/GFO/GFO04.svg";
import AboutPrj from "../AboutPrj";
import projectData from "../../../../Data/ProjectData";

const ProjectCard = () => {
  return (
    <>
      <div className=" bg-orange-card md:py-12 md:px-8 py-8 px-4 flex flex-col gap-12 shadow-main-inner-shadow">
        <div>
          <p className="font-medium md:text-3xl text-2xl leading-heading text-text-primary">
            Group Food Ordering
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
          <div>
            <Image src={GFO1} alt="Project Image" />
          </div>
          <div>
            <Image src={GFO2} alt="Project Image" />
          </div>
          <div>
            <Image src={GFO3} alt="Project Image" />
          </div>
          <div>
            <Image src={GFO4} alt="Project Image" />
          </div>
        </div>
      </div>
      {/* About the project will be here */}
      {projectData.projects.map((project) => {
        return project.id == 1 ? (
          <AboutPrj
            key={project.id}
            role={project.role}
            tools={project.tools}
            time={project.timeline}
            des={project.description}
            cont={project.content}
          />
        ) : null;
      })}
    </>
  );
};

export default ProjectCard;
