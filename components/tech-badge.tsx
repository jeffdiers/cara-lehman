import {
  SiAmazonwebservices,
  SiCss3,
  SiDocker,
  SiGithub,
  SiGo,
  SiJavascript,
  SiJest,
  SiJquery,
  SiLinux,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { Badge, type BadgeProps } from "./ui/badge";

export const MY_STACK = {
  react: {
    icon: SiReact,
    text: "React.js",
  },
  redux: {
    icon: SiRedux,
    text: "Redux",
  },
  javascript: {
    icon: SiJavascript,
    text: "JavaScript",
  },
  typescript: {
    icon: SiTypescript,
    text: "TypeScript",
  },
  jest: {
    icon: SiJest,
    text: "Jest",
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
  netlify: {
    icon: SiNetlify,
    text: "Netlify",
  },
};

export type TECH_STACK_NAME = keyof typeof MY_STACK;

interface TechBadgeProps extends BadgeProps {
  type: TECH_STACK_NAME;
}

export function TechBadge({ type, ...props }: TechBadgeProps) {
  const Icon = MY_STACK[type].icon;
  return (
    <Badge className="text-sm" {...props}>
      <Icon className="h-4 w-4" />
      <span className="ml-2">{MY_STACK[type].text}</span>
    </Badge>
  );
}
