import Image from "next/image";
import WIP from "../assets/Visual Bg.svg";

const VisualBg = () => {
  return (
    <>
      <div className="flex flex-col gap-16 items-center md:pt-32 pt-24">
        <p className="font-bold text-text-secondary text-2xl leading-heading">
          Some of my <span className="text-text-primary">work </span>that is{" "}
          <span className="text-text-primary">out there</span> on the{" "}
          <span className="text-text-primary">internet!</span>
        </p>
        <Image
          src={WIP}
          alt="This is my visual work represent"
          draggable={false}
        />
      </div>
    </>
  );
};

export default VisualBg;
