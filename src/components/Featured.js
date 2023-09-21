import FeaturedCard from "./UI/FeaturedCard";
import featureData from "../../Data/FeaturedData";

const Featured = () => {
  return (
    <>
      <div className="container md:pt-32 pt-24 flex flex-col items-center justify-center">
        <div className="px-6 py-3 items-center bg-heading-green w-fit rounded-full rotate-[-4deg] justify-center">
          <p className="font-medium text-text-secondary md:text-2xl text-lg leading-heading">
            Featured Work
          </p>
        </div>
        <div className=" grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 pt-16 flex-wrap">
          {featureData.featured.map((feature, index) => {
            return <div key={index}><FeaturedCard {...feature} /></div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Featured;
