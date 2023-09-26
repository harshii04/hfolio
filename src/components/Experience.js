import ExperienceCard from "./UI/ExperienceCard";
import experienceData from "../../Data/ExperienceData";

const Experience = () => {
  return (
    <>
      <div className="container md:pt-36 pt-24">
        <p className="font-medium text-text-secondary text-2xl leading-heading">
          Experience
        </p>
        {experienceData.experiences.map((experience, index) => {
          return (
            <div key={index}>
              <ExperienceCard {...experience} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
