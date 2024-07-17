import {
  PersonIcon,
  EyeOpenIcon,
  FileTextIcon,
  DownloadIcon,
  DashboardIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import { RiGamepadLine } from "@remixicon/react";
import { Badge } from "./ui/badge";
import { CardContent, CardHeader, CardLink, CardTitle } from "./ui/card";

const iconComponents = {
  PersonIcon: PersonIcon,
  EyeOpenIcon: EyeOpenIcon,
  RiGamepadLine: RiGamepadLine,
  FileTextIcon: FileTextIcon,
  DownloadIcon: DownloadIcon,
  DashboardIcon: DashboardIcon,
  ExternalLinkIcon: ExternalLinkIcon,
};

export interface HomeCardProps {
  number: string | number;
  href: string;
  icon: keyof typeof iconComponents;
  title: string;
  badges: string[];
  secondaryIcons: (keyof typeof iconComponents)[];
  className?: string;
}

import { cn } from "@/lib/utils";

export function HomeCard({
  number,
  href,
  icon,
  title,
  badges,
  secondaryIcons,
  className,
}: HomeCardProps) {
  const IconComponent = iconComponents[icon];

  return (
    <CardLink href={href} className={cn(className, "min-w-64 h-56")}>
      <CardHeader className="flex-grow">
        <div className="flex justify-between items-start">
          <span className="font-caprasimo text-3xl">0{number}.</span>
          <div className="flex flex-col items-end text-right w-[65px] gap-y-2">
            {secondaryIcons.map((SecondaryIcon, index) => {
              const SecondaryIconComponent = iconComponents[SecondaryIcon];
              return <SecondaryIconComponent key={index} className="h-5 w-5" />;
            })}
            <IconComponent className="h-5 w-5 " />
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col">
        <CardTitle>{title}</CardTitle>
        <div className="flex flex-wrap gap-1 my-2">
          {badges.map((badge, index) => (
            <Badge key={index} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>
    </CardLink>
  );
}
