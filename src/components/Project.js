import GFO from "../components/UI/Project Cards/GFO";
import POA from "../components/UI/Project Cards/POA";
import Dive from "../components/UI/Project Cards/Dive";
const Project = () => {
  return (
    <>
      <div className="container md:pt-36 pt-32 flex flex-col gap-12">
        <div>
          <p className="font-bold text-text-primary md:text-5xl text-3xl leading-heading">
            Selected Work
          </p>
        </div>
        <div className="flex flex-col md:gap-24 gap-12">
          <POA />
          <GFO />
          <Dive />
        </div>
      </div>
    </>
  );
};

export default Project;
