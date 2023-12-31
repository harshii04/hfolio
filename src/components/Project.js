import GFO from "../components/UI/Project Cards/GFO";
import POA from "../components/UI/Project Cards/POA";
import Dive from "../components/UI/Project Cards/Dive";
const Project = () => {
  return (
    <>
      <div className="container pt-24 flex flex-col md:gap-4 gap-6" id="work">
        <div>
          <p className="font-bold text-text-primary text-2xl leading-heading">
            Projects
          </p>
        </div>
        <div className="flex flex-col md:gap-8 gap-12">
          <POA />
          <GFO />
          <Dive />
        </div>
      </div>
    </>
  );
};

export default Project;
