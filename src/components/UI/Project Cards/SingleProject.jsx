import Image from "next/image";
import Link from "next/link";

const SingleProject = ({
  imgSrc,
  company,
  heading,
  timeline,
  description,
  prjImg1,
}) => {
  return (
    <>
      <div className="flex flex-col gap-8 py-10">
        <div className="flex md:flex-row flex-col items-start justify-between gap-2">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <Image
                src={imgSrc}
                alt="Projet image"
                className="w-8 h-8 items-center"
              />
              <p className="font-medium leading-heading text-text-primary text-lg">
                {company}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-heading leading-heading text-2xl text-text-primary">
                {heading}
              </p>
              <p className="text-text-secondary leading-heading text-sm font-medium">
                {timeline}
              </p>
            </div>
          </div>
          <div className="md:w-1/2 w-full md:pt-0 pt-12">
            <p className="text-text-secondary text-base leading-body md:pt-0 pt-4">
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Link href={link} alt="Project Image">
            <div className="bg-[#F9FAFB] md:p-12 p-4 flex items-center justify-center rounded-2xl border border-[#E1E7EF] hover:cursor-pointer">
              <Image src={prjImg1} alt="Project Image" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleProject;
