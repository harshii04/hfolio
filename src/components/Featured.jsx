import FeaturedCard from "./UI/FeaturedCard";
import featureData from "../../Data/FeaturedData";

const Featured = () => {
  return (
    <>
      <div className="container md:pt-56 pt-32 flex flex-col items-center justify-center">
        <div className="flex flex-col md:gap-6 gap-2 items-center">
          <div className="px-4 py-2 border border-text-primary w-fit rounded-full">
            <p className="font-heading text-text-primary text-xl leading-heading">
              Side Projects
            </p>
          </div>
          <div className=" grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-8 pt-8 flex-wrap">
            {featureData.featured.map((feature, index) => {
              return (
                <div key={index}>
                  <FeaturedCard {...feature} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
