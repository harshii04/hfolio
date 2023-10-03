const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const dateAndMonth = ` ${month} 1, ${year}.`;

  return (
    <>
      <div className="container md:pt-36 pt-32 pb-8 flex md:flex-row flex-col md:justify-between md:items-end items-center gap-2">
        <div className="flex flex-col gap-2 md:items-start items-center">
          <p className="text-sm text-text-primary text-center leading-heading font-medium">
            © {year} Harshvardhan Agarwal. All rights reserved.
          </p>
          <p className="text-xs text-text-secondary text-center leading-heading font-medium">
            Made with love, missing some classes and overdose of caffeine.
          </p>
        </div>

        <p className="text-xs text-text-secondary text-center leading-heading font-medium">
          Last updated by Harsh on {dateAndMonth}{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
