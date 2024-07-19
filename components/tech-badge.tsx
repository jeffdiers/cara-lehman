import {
  SiAmazonwebservices,
  SiCss3,
  SiDocker,
  SiGithub,
  SiGo,
  SiJavascript,
  SiJquery,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { Badge, type BadgeProps } from "./ui/badge";

export const MY_STACK = {
  react: {
    icon: SiReact,
    text: "React.js",
  },
  javascript: {
    icon: SiJavascript,
    text: "JavaScript",
  },
  typescript: {
    icon: SiTypescript,
    text: "TypeScript",
  },
  go: {
    icon: SiGo,
    text: "Go",
  },
  css3: {
    icon: SiCss3,
    text: "CSS3",
  },
  postgres: {
    icon: SiPostgresql,
    text: "Postgres",
  },
  mongodb: {
    icon: SiMongodb,
    text: "MongoDB",
  },
  nextjs: {
    icon: SiNextdotjs,
    text: "Next.js",
  },
  tailwind: {
    icon: SiTailwindcss,
    text: "Tailwind CSS",
  },
  linux: {
    icon: SiLinux,
    text: "Linux",
  },
  jquery: {
    icon: SiJquery,
    text: "jQuery",
  },
  node: {
    icon: SiNodedotjs,
    text: "Node.js",
  },
  github: {
    icon: SiGithub,
    text: "GitHub",
  },
  aws: {
    icon: SiAmazonwebservices,
    text: "AWS",
  },
  docker: {
    icon: SiDocker,
    text: "Docker",
  },
};

type TECH_STACK_NAME = keyof typeof MY_STACK;

interface TechBadgeProps extends BadgeProps {
  type: TECH_STACK_NAME;
}

export function TechBadge({ type, ...props }: TechBadgeProps) {
  const Icon = MY_STACK[type].icon;
  return (
    <Badge {...props}>
      <Icon className="h-4 w-4" />
      <span className="ml-1">{MY_STACK[type].text}</span>
    </Badge>
  );
}
