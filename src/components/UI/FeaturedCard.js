import Image from "next/image";

const FeaturedCard = ({ img, tag, heading, content }) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div>
          <Image src={img} alt="Featured project image " />
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-full px-2 py-[2px] border w-fit border-tag-stroke bg-tag-fill leading-heading font-medium">
            <p className="text-xs text-purple-text">{tag}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-text-primary md:text-2xl text-lg font-bold leading-heading ">
              {heading}
            </p>
            <p className="text-text-secondary md:text-lg text-sm leading-body">
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
