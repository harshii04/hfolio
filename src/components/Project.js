import GFO from "../components/UI/Project Cards/GFO";
import POA from "../components/UI/Project Cards/POA";
import Dive from "../components/UI/Project Cards/Dive";
const Project = () => {
  return (
    <>
      <div className="container pt-36 flex flex-col gap-10">
        <div className="px-6 py-3 items-center bg-heading-yellow w-fit rounded-full rotate-[-4deg]">
          <p className="font-medium text-text-secondary md:text-2xl text-lg leading-heading">
            Selected Work
          </p>
        </div>
        <POA />
        <GFO />
        <Dive />
      </div>
    </>
  );
};

export default Project;
