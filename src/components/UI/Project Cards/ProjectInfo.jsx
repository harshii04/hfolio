import Image from "next/image";

const ProjectInfo = ({ heading, timeline, description }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-start justify-between md:py-10 py-5">
        <div className="flex flex-col gap-2">
          <p className="font-heading leading-heading text-2xl text-text-primary">
            {heading}
          </p>
          <p className="text-text-secondary leading-heading text-sm font-medium">
            {timeline}
          </p>
        </div>

        <div className="md:w-1/2 ">
          <p className="text-text-secondary text-base leading-body">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
