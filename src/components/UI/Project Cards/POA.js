import Image from "next/image";
import PSA1 from "../../../assets/ProjectImgs/PSA/PSA01.svg";
import PSA2 from "../../../assets/ProjectImgs/PSA/PSA02.svg";
import PSA3 from "../../../assets/ProjectImgs/PSA/PSA03.svg";
import PSA4 from "../../../assets/ProjectImgs/PSA/PSA04.svg";
import AboutPrj from "../AboutPrj";
import projectData from "../../../../Data/ProjectData";

const ProjectCard = () => {
  const prj = projectData.projects[1]
  return (
    <>
      <div className=" bg-green-card md:py-12 md:px-8 py-8 px-4 flex flex-col gap-12 shadow-main-inner-shadow">
        <div>
          <p className="font-medium md:text-3xl text-2xl leading-heading text-text-primary">
            Group Food Ordering
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
          <div>
            <Image src={PSA1} alt="Project Image" draggable={false} />
          </div>
          <div>
            <Image src={PSA2} alt="Project Image" draggable={false} />
          </div>
          <div>
            <Image src={PSA3} alt="Project Image" draggable={false} />
          </div>
          <div>
            <Image src={PSA4} alt="Project Image" draggable={false} />
          </div>
        </div>
      </div>
      <AboutPrj {...prj} />
      {/* About the project will be here */}
      {/* {projectData.projects.map((project) => {
        return project.id == 2 ? (
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
    </>
  );
};

export default ProjectCard;
