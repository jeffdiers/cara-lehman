import { Badge, type BadgeProps } from "./ui/badge";
import {
  IconAmazonwebservices,
  IconBun,
  IconCss3,
  IconDocker,
  IconGithub,
  IconGo,
  IconJavascript,
  IconJest,
  IconJquery,
  IconLinux,
  IconMongodb,
  IconNetlify,
  IconNextdotjs,
  IconNodedotjs,
  IconNpm,
  IconPostgresql,
  IconPrisma,
  IconReact,
  IconRedux,
  IconStorybook,
  IconTailwindcss,
  IconTypescript,
  IconYarn,
} from "./icons";

export const MY_STACK = {
  javascript: {
    icon: IconJavascript,
    text: "JavaScript",
  },
  react: {
    icon: IconReact,
    text: "React.js",
  },
  typescript: {
    icon: IconTypescript,
    text: "TypeScript",
  },
  node: {
    icon: IconNodedotjs,
    text: "Node.js",
  },
  redux: {
    icon: IconRedux,
    text: "Redux",
  },
  nextjs: {
    icon: IconNextdotjs,
    text: "Next.js",
  },
  aws: {
    icon: IconAmazonwebservices,
    text: "AWS",
  },
  docker: {
    icon: IconDocker,
    text: "Docker",
  },
  github: {
    icon: IconGithub,
    text: "GitHub",
  },
  jest: {
    icon: IconJest,
    text: "Jest",
  },
  storybook: {
    icon: IconStorybook,
    text: "Storybook",
  },
  css3: {
    icon: IconCss3,
    text: "CSS3",
  },
  tailwind: {
    icon: IconTailwindcss,
    text: "Tailwind CSS",
  },
  postgres: {
    icon: IconPostgresql,
    text: "Postgres",
  },
  prisma: {
    icon: IconPrisma,
    text: "Prisma",
  },
  mongodb: {
    icon: IconMongodb,
    text: "MongoDB",
  },
  linux: {
    icon: IconLinux,
    text: "Linux",
  },
  netlify: {
    icon: IconNetlify,
    text: "Netlify",
  },
  npm: {
    icon: IconNpm,
    text: "NPM",
  },
  yarn: {
    icon: IconYarn,
    text: "Yarn",
  },
  go: {
    icon: IconGo,
    text: "Go",
  },
  bun: {
    icon: IconBun,
    text: "Bun",
  },
  jquery: {
    icon: IconJquery,
    text: "jQuery",
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
