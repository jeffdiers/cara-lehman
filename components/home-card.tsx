import { Badge } from "./ui/badge";
import { CardContent, CardHeader, CardLink, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "./icons/types";

export interface HomeCardProps {
  number: string | number;
  href: string;
  icon: IconType | any;
  title: string;
  badges: string[];
  secondaryIcon: IconType | any;
  className?: string;
}

export function HomeCard({
  number,
  href,
  icon: IconComponent,
  title,
  badges,
  secondaryIcon: SecondaryIconComponent,
  className,
}: HomeCardProps) {
  return (
    <CardLink href={href} className={cn(className, "min-w-64 h-56")}>
      <CardHeader className="flex-grow">
        <div className="flex justify-between items-start">
          <span className="font-caprasimo text-3xl">0{number}.</span>
          <div className="flex flex-col items-end text-right w-[65px] gap-y-2">
            <SecondaryIconComponent className="h-5 w-5" />
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
