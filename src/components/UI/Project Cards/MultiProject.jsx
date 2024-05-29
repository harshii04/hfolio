import Image from "next/image";
import ProjectInfo from "./ProfesionalWorkInfo";
import Link from "next/link";

const MultiProject = ({
  logo,
  company,
  heading,
  timeline,
  description,
  prjImg1,
  prjImg2,
  prjImg3,
  prjImg4,
  link,
}) => {
  return (
    <>
      <div className="flex flex-col gap-8 py-10">
        <ProjectInfo
          logo={logo}
          company={company}
          heading={heading}
          timeline={timeline}
          description={description}
        />

        <div className="flex flex-col gap-4">
          <Link href={link} alt="Project Image">
            <div className="group bg-[#F9FAFB] md:p-12 p-4 flex items-center justify-center rounded-2xl border border-[#E1E7EF] hover:cursor-pointer">
              <Image
                src={prjImg1}
                alt="Project Image"
                draggable={false}
                className="group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          </Link>
          <div className="flex md:flex-row flex-col gap-4 items-start justify-between">
            <div className="md:w-1/2 w-full ">
              <Link href={link} alt="Project Image">
                <div className="group bg-[#F9FAFB] h-full w-full md:p-12 p-4 flex items-center justify-center rounded-2xl border border-[#E1E7EF] hover:cursor-pointer">
                  <Image
                    src={prjImg2}
                    alt="Project Image"
                    draggable={false}
                    className="group-hover:scale-105 transition-all duration-500 ease-in-out"
                  />
                </div>
              </Link>
            </div>
            <div className=" md:w-1/2 w-full">
              <Link href={link} alt="Project Image">
                <div className="group bg-[#F9FAFB] h-full w-full md:p-12 p-4 flex items-center justify-center rounded-2xl border border-[#E1E7EF] hover:cursor-pointer">
                  <Image
                    src={prjImg3}
                    alt="Project Image"
                    draggable={false}
                    className="group-hover:scale-105 transition-all duration-500 ease-in-out"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div>
            <Link href={link} alt="Project Image">
              <div className=" group bg-[#F9FAFB] md:p-12 p-4 flex items-center justify-center rounded-2xl border border-[#E1E7EF] hover:cursor-pointer">
                <Image
                  src={prjImg4}
                  alt="Project Image"
                  draggable={false}
                  className="group-hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiProject;
