import Image from "next/image";

const ProfessionalWorkInfo = ({
  logo,
  company,
  heading,
  timeline,
  description,
}) => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-start justify-between md:gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Image
              src={logo}
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
        <div className="md:w-1/2 md:py-0 py-4">
          <p className="text-text-secondary text-base leading-body">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfessionalWorkInfo;
