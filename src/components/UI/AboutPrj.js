const AboutPrj = ({ role, tools, time, des, cont }) => {
  return (
    <>
      <div className="md:flex md:flex-row flex-col items-start justify-between md:pt-8 md:gap-24 gap-8">
        <div className="flex flex-row justify-between items-start md:flex-col gap-8 md:pb-0 pb-6 flex-wrap">
          <div className="flex flex-col gap-2">
            <p className="font-normal text-xs leading-heading text-text-secondary">
              MY ROLE
            </p>
            <p className="text-text-primary leading-body md:text-lg text-base">
              {role}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-normal text-xs leading-heading text-text-secondary">
              TOOLS
            </p>
            <p className="text-text-primary leading-body md:text-lg text-base">
              {tools}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-normal text-xs leading-heading text-text-secondary">
              TIMELINE
            </p>
            <p className="text-text-primary leading-body md:text-lg text-base">
              {time}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:pb-0 pb-6">
          <p className="font-normal text-xs leading-heading text-text-secondary">
            DESCRIPTION
          </p>
          <p className="text-text-primary leading-body md:text-lg text-base">
            {des}
          </p>
        </div>
        <div className="flex flex-col gap-2 md:pb-0 pb-6">
          <p className="font-normal text-xs leading-heading text-text-secondary">
            CONTENT
          </p>
          <p className="text-text-primary leading-body md:text-lg text-base">
            {cont}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPrj;
