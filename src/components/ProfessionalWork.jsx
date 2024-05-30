import MultiProject from "./UI/Project Cards/MultiProject";
import BamosLogo from "../assets/Bamos/Bamos Logo.svg";
import Bamos1 from "../assets/Bamos/Bamos 1.svg";
import Bamos2 from "../assets/Bamos/Bamos 2.svg";
import Bamos3 from "../assets/Bamos/Bamos 3.svg";
import Bamos4 from "../assets/Bamos/Bamos 4.svg";
import AvalonLogo from "../assets/Avalon/Avalon Logo.svg";
import Avalon1 from "../assets/Avalon/Avalon 1.svg";
import Avalon2 from "../assets/Avalon/Avalon 2.svg";
import Avalon3 from "../assets/Avalon/Avalon 3.svg";
import Avalon4 from "../assets/Avalon/Avalon 4.svg";

const ProfessionalWork = () => {
  return (
    <>
      <div className="container pt-24 flex flex-col md:gap-4 gap-6">
        <div className="px-4 py-2 border border-text-primary w-fit rounded-full">
          <p className="font-heading text-text-primary text-xl leading-heading">
            Professional Work
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {/* <MultiProject
            company="TakeUforward"
            heading="Designed experience for TUF platforms premium subscription TUF+"
            timeline="Freelance, January 2024"
            description={
              "While preparing for cse, learning dsa and practicing questions requires aspirants to rush to different sources to understand the concepts of various problems. this causes distractions and confusion. to simplify this we have created an integrated platform that allows them to learn together and focus better."
            }
            link="www.google.com"
          /> */}
          <MultiProject
            logo={BamosLogo}
            company="Bamos"
            heading="Designed an AI tutoring platfrom for CAT aspirants"
            timeline="Freelance, January '24 - March '24"
            description={
              "We surveyed some people preparing for CAT exam and realised that they had trouble understanding different sections of exam but could not reach out to a teacher if they were engaging in self-study. we saw this as an opportunity to create an AI platform to help solve doubts without having to enroll with coaching centres to allow easy engagement and ready access for the aspirants."
            }
            link="/nda"
            prjImg1={Bamos1}
            prjImg2={Bamos4}
            prjImg3={Bamos3}
            prjImg4={Bamos2}
          />
          <MultiProject
            logo={AvalonLogo}
            company="Avalon Scenes"
            heading="Designed multiple client requested features and internal tools"
            timeline="December '22 - April '23"
            description={
              "At Avalon, I contributed to the development and enhancement of multiple features, including the weekly leaderboard, tag and hashtag creation, the revamp of the new post creation flow, and user profile redesigns. My work aimed to improve user engagement, streamline workflows, and enhance the overall user experience. "
            }
            link="/nda"
            prjImg1={Avalon1}
            prjImg2={Avalon2}
            prjImg3={Avalon3}
            prjImg4={Avalon4}
          />
        </div>
      </div>
    </>
  );
};

export default ProfessionalWork;
