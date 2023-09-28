import FeaturedCard from "./UI/FeaturedCard";
import featureData from "../../Data/FeaturedData";

const Featured = () => {
  return (
    <>
      <div className="container md:pt-56 pt-24 flex flex-col items-center justify-center">
        <div className="flex flex-col md:gap-6 gap-2 items-center">
          <p className="font-bold text-text-primary md:text-5xl text-3xl leading-heading">
            Featured Work
          </p>
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
