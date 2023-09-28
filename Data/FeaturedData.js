import IMG01 from "../src/assets/FeaturedPrjs/Bento Img.png";
import IMG02 from "../src/assets/FeaturedPrjs/Figma Plugin Img.png";
import IMG03 from "../src/assets/FeaturedPrjs/Hackathon Img.png";
import IMG04 from "../src/assets/FeaturedPrjs/Freelance.png";

const featuredData = {
  featured: [
    {
      key: 1,
      link: "https://www.figma.com/community/file/1248522938889734014/bento-widgets",
      img: IMG01,
      tag: "Side Project",
      heading: "🍱 Bento Widgets",
      content:
        "Designed multiple widgets for my bento profile. These widgets are also featured on Bento’s official website.",
    },
    {
      key: 2,
      link: "https://x.com/harshii04/status/1653361157460185091?s=20",
      img: IMG02,
      tag: "Side Project",
      heading: "🪄 Organise Wiz",
      content:
        "Figma plugin to help you with page structure in your Figma files. More info soon!",
    },
    {
      key: 3,
      link: "https://github.com/BeTokenized/landing-page",
      img: IMG03,
      tag: "Hackathon Project",
      heading: "Betokenized",
      content: "Hackathon projects for which we won best UI/ UX design award.",
    },
    {
      key: 4,
      link: "",
      img: IMG04,
      tag: "Freelance Project",
      heading: "Web3 Agency Landing Page",
      content:
        "I designed the landing page for a web3 service agency named Giakaa, currently this website is under development, will update with the link soon!",
    },
  ],
};

export default featuredData;
