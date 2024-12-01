/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import D01 from "../../../assets/ProjectImgs/InvoiceFlo/CoverImg.png";
import ProjectInfo from "./ProjectInfo";

const ProjectCard = () => {
  return (
    <>
      <div className="">
        <ProjectInfo
          heading={"Crafting a Seamless Onboarding Journey for Business Owners"}
          timeline={"Freelance project, Jul 2024"}
          description={
            "Designed an onboarding for MSME business owners using account aggregator and e-KYC."
          }
        />

        <Link
          href="https://medium.com/@harsh_youx/crafting-a-seamless-onboarding-journey-for-business-owners-5d8419916ae7"
          target="_blank"
          alt="Project link"
        >
          <div className=" bg-[#f4f6f8] hover:bg-[#E3EDFD] transition-all duration-500 ease-in-out md:py-12 md:px-8 py-8 px-4 flex flex-col gap-12 md:rounded-2xl rounded-lg">
            <div>
              <Image
                src={D01}
                alt="Project Image"
                draggable={false}
                className="md:rounded-2xl rounded-lg shadow-imgShadow"
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
