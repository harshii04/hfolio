import GFO from "./UI/Project Cards/GFO";
import Dive from "./UI/Project Cards/Dive";

const Project = () => {
  return (
    <>
      <div className="container pt-24 flex flex-col md:gap-4 gap-6">
        <div className="px-4 py-2 border border-text-primary w-fit rounded-full">
          <p className="font-heading text-text-primary text-xl leading-heading">
            Selected work
          </p>
        </div>
        <div className="flex flex-col md:gap-8 gap-12">
          <GFO />
          <Dive />
        </div>
      </div>
    </>
  );
};

export default Project;
