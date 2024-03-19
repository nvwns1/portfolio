import { IProjectCardProps } from "@/components/Card/ProjectCard/ProjectCard";
import { ISkillCard } from "@/components/Card/SkillsCard/SkillCard";
import { ProjectStatusEnum } from "../Enum/id";

export const SkillsData: ISkillCard[] = [
  { title: "React", image: "/static/skills/react.svg" },
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
