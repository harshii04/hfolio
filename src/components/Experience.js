import ExperienceCard from "./UI/ExperienceCard";
import experienceData from "../../Data/ExperienceData";

const Experience = () => {
  return (
    <>
      <div className="container md:pt-56 pt-32" id="experience">
        <p className="font-bold text-text-primary md:text-5xl text-3xl leading-heading">
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
