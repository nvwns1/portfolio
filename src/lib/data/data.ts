import { IProjectCardProps } from "@/components/Card/ProjectCard/ProjectCard";
import { ISkillCard } from "@/components/Card/SkillsCard/SkillCard";
import { ProjectStatusEnum } from "../Enum/id";

export const SkillsData: ISkillCard[] = [
  { title: "React", image: "/skills/react.svg" },
  { title: "Next.JS", image: "/next.svg" },
  { title: "Redux JS", image: "/skills/redux.svg" },
  { title: "JavaScript", image: "/skills/js.svg" },
  { title: "TypeScript", image: "/skills/typescript.svg" },
  { title: "Socket.io", image: "/skills/socket.svg" },
  { title: "Express JS", image: "/skills/express.svg" },
  { title: "Github", image: "/skills/github.svg" },
  { title: "Mongo DB", image: "/skills/mongo.svg" },
  { title: "Node JS", image: "/skills/node.svg" },
  { title: "Tailwind CSS", image: "/skills/tailwind.svg" },
  { title: "CSS", image: "/skills/css.svg" },
  { title: "Figma", image: "/skills/figma.svg" },
  { title: "HTML", image: "/skills/html.svg" },
];

export const ContactData: ISkillCard[] = [
  {
    title: "Instagram",
    image: "contact/instagram.svg",
    src: "https://www.instagram.com/codehaku",
  },
  {
    title: "Github",
    image: "contact/github.svg",
    src: "https://www.github.com/nvwns1",
  },
  {
    title: "Gmail",
    image: "contact/gmail.svg",
    src: "mailto:nvwns12345@gmail.com",
  },
  {
    title: "LinkedIn",
    image: "contact/linkedin.svg",
    src: "https://www.linkedin.com/in/suman-maharjan-b24268221/",
  },
];

export const ProjectData: IProjectCardProps[] = [
  {
    title: "Online Art Gallery",
    image: "/project/oag.png",
    description:
      "An online art gallery is a digital platform presenting diverse artwork. It offers virtual spaces for artists to showcase and sell their creations, enabling art enthusiasts to explore, purchase, and appreciate art conveniently from anywhere with curated collections.",
    technologyUsed: ["HTML", "CSS", "JS", "MySql", "Php"],
    sourceCode: "https://github.com/nvwns1/onlineartgallery1/",
    // viewProject: "https://github.com/nvwns1/onlineartgallery1/",
  },
  {
    title: "Sky Insight",
    image: "/project/skyInsight.png",
    description:
      "Get instant weather updates with Sky Insight. Your essential weather companion for accurate forecasts and real-time insights. Plan your day confidently with detailed forecasts, interactive maps, and personalized alerts. Sky Insight - simplifying your weather experience, wherever you are.",
    status: ProjectStatusEnum.IN_PROGRESS,
    technologyUsed: ["NextJs"],
    sourceCode: "https://github.com/nvwns1/Sky-Insight",
    viewProject: "https://sky-insight.vercel.app",
  },
];
