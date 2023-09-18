import ExperienceCard from "./UI/ExperienceCard";
import experienceData from "../../Data/ExperienceData";

const Experience = () => {
  return (
    <>
      <div className="container md:pt-36 pt-24">
        <p className="font-medium text-text-secondary text-2xl leading-heading">
          Experience
        </p>
        {experienceData.experiences.map((experience) => {
          return <ExperienceCard key={experience.id} {...experience} />;
        })}
      </div>
    </>
  );
};

export default Experience;
