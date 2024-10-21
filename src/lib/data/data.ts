import { IProjectCardProps } from "@/components/Card/ProjectCard/ProjectCard";
import { ISkillCard } from "@/components/Card/SkillsCard/SkillCard";
import { ProjectStatusEnum } from "../Enum/id";

export const SkillsData: ISkillCard[] = [
  { title: "React", image: "/react.svg" },
  { title: "Next.JS", image: "/next.svg" },
  { title: "Redux JS", image: "/static/skills/redux.svg" },
  { title: "JavaScript", image: "/static/skills/js.svg" },
  { title: "TypeScript", image: "/static/skills/typescript.svg" },
  { title: "Socket.io", image: "/static/skills/socket.svg" },
  { title: "Express JS", image: "/static/skills/express.svg" },
  { title: "Github", image: "/static/skills/github.svg" },
  { title: "Mongo DB", image: "/static/skills/mongo.svg" },
  { title: "Node JS", image: "/static/skills/node.svg" },
  { title: "Tailwind CSS", image: "/static/skills/tailwind.svg" },
  { title: "CSS", image: "/static/skills/css.svg" },
  { title: "Figma", image: "/static/skills/figma.svg" },
  { title: "HTML", image: "/static/skills/html.svg" },
];

export const ContactData: ISkillCard[] = [
  {
    title: "Instagram",
    image: "/static/contact/instagram.svg",
    src: "https://www.instagram.com/codehaku",
  },
  {
    title: "Github",
    image: "/static/contact/github.svg",
    src: "https://www.github.com/nvwns1",
  },
  {
    title: "Gmail",
    image: "/static/contact/gmail.svg",
    src: "mailto:nvwns12345@gmail.com",
  },
  {
    title: "LinkedIn",
    image: "/static/contact/linkedin.svg",
    src: "https://www.linkedin.com/in/suman-maharjan-b24268221/",
  },
];

export const ProjectData: IProjectCardProps[] = [
  {
    title: "News Classification Project",
    image: "/static/project/NewsClassification.png",
    description:
      "This project aims to classify news articles into various categories using a machine learning model.",
    status: ProjectStatusEnum.COMPLETED,
    technologyUsed: ["NodeJS", "MongoDB", "Daisy UI", "Flask", "Scikit-learn"],
    sourceCode: "https://github.com/nvwns1/News-Classification",
    // viewProject: "https://instagram-clone-suman.vercel.app/",
  },
  {
    title: "Incognito Message",
    image: "/static/project/incognitoMsg.png",
    description: "Anonymously message anyone",
    status: ProjectStatusEnum.COMPLETED,
    technologyUsed: ["NextJs", "MongoDB"],
    sourceCode: "https://github.com/nvwns1/incognito-msg",
    viewProject: "https://incognito-msg-alpha.vercel.app/",
  },
  {
    title: "Instagram Clone",
    image: "/static/project/instagramClone.png",
    description:
      "The Instagram Clone project aims to replicate the core functionalities of the popular social media platform, Instagram.",
    status: ProjectStatusEnum.IN_PROGRESS,
    technologyUsed: ["NextJs", "Tailwind CSS"],
    sourceCode: "https://github.com/nvwns1/Instagram-Clone",
    viewProject: "https://instagram-clone-suman.vercel.app/",
  },

  {
    title: "Online Art Gallery",
    image: "/static/project/oag.png",
    description:
      "An online art gallery is a digital platform presenting diverse artwork. It offers virtual spaces for artists to showcase and sell their creations, enabling art enthusiasts to explore, purchase, and appreciate art conveniently from anywhere with curated collections.",
    technologyUsed: ["HTML", "CSS", "JS", "MySql", "Php"],
    sourceCode: "https://github.com/nvwns1/onlineartgallery1/",
    // viewProject: "https://github.com/nvwns1/onlineartgallery1/",
  },
];
