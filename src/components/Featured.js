import FeaturedCard from "./UI/FeaturedCard";
import IMG01 from "../assets/FeaturedPrjs/Bento Img.svg";
import IMG02 from "../assets/FeaturedPrjs/Figma Plugin Img.svg";
import IMG03 from "../assets/FeaturedPrjs/Hackathon Img.svg";
import IMG04 from "../assets/FeaturedPrjs/Freelance.svg";

const Featured = () => {
  return (
    <>
      <div className="container md:pt-32 pt-24 flex flex-col items-center justify-center">
        <div className="px-6 py-3 items-center bg-heading-green w-fit rounded-full rotate-[-4deg] justify-center">
          <p className="font-medium text-text-secondary md:text-2xl text-lg leading-heading">
            Featured Work
          </p>
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8 pt-16">
          <FeaturedCard
            img={IMG01}
            tag="Side Project"
            heading="🍱 Bento Widgets"
            content="Designed multiple widgets for my bento profile. These widgets are also featured on Bento’s official website."
          />
          <FeaturedCard
            img={IMG02}
            tag="Side Project"
            heading="🪄 Organise Wiz"
            content="Figma plugin to help you with page structure in your Figma files. More info soon!"
          />
          <FeaturedCard
            img={IMG03}
            tag="Hackathon Project"
            heading="Betokenized"
            content="Hackathon projects for which we won best UI/ UX design award."
          />
          <FeaturedCard
            img={IMG04}
            tag="Freelance Project"
            heading="Web3 Agency Landing Page"
            content="I designed the landing page for a web3 service agency named Giaaka, currently this website is under development, will update with the link soon!"
          />
        </div>
      </div>
    </>
  );
};

export default Featured;
