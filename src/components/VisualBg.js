import Image from "next/image";
import WIP from "../assets/Visual Bg.png";

const VisualBg = () => {
  return (
    <>
      <div className="flex flex-col gap-16 items-center md:pt-56 pt-32">
        <p className="container text-center font-bold text-text-secondary text-2xl leading-heading">
          Some of my <span className="text-text-primary">work </span>that is{" "}
          <span className="text-text-primary">out there</span> on the{" "}
          <span className="text-text-primary">internet!</span>
        </p>
        <div className="bg-gradient-to-t from-white">
          <Image
            src={WIP}
            alt="This is my visual work represent"
            draggable={false}
          />
        </div>
      </div>
    </>
  );
};

export default VisualBg;
