"use client";

import { H1, P } from "@/components/ui/typography";
import { HomeCard, HomeCardProps } from "./home-card";

const cardLinksData: Omit<HomeCardProps, "number">[] = [
  {
    href: "/about-me",
    icon: "PersonIcon",
    title: "About Me",
    badges: ["Bio", "Contact", "My stack"],
    secondaryIcons: ["EyeOpenIcon"],
  },
  {
    href: "/drug-wars",
    icon: "RiGamepadLine",
    title: "Drug Wars",
    badges: ["Game", "Development"],
    secondaryIcons: ["EyeOpenIcon"],
  },
  {
    href: "#",
    icon: "FileTextIcon",
    title: "Resume",
    badges: ["PDF", "Download"],
    secondaryIcons: ["DownloadIcon"],
  },
  {
    href: "#",
    icon: "DashboardIcon",
    title: "Storybook",
    badges: ["UI", "Design", "Development"],
    secondaryIcons: ["ExternalLinkIcon"],
  },
];

export default function HomeScreen() {
  return (
    <main className="flex flex-col justify-center">
      <div className="font-caprasimo space-y-0 p-4 md:p-12">
        <H1>Hello, my name is Jeff.</H1>
        <P className="text-md lg:text-xl text-destructive">
          I am a Software Engineer based in NYC.
        </P>
      </div>

      {/* Card Links */}
      <div className="flex overflow-x-auto flex-row space-x-4 pt-1 md:pt-4 h-64 hide-scrollbar">
        {cardLinksData.map((card, index) => (
          <HomeCard
            key={index}
            number={index + 1}
            href={card.href}
            icon={card.icon}
            title={card.title}
            badges={card.badges}
            secondaryIcons={card.secondaryIcons}
            className={index === 0 ? "ml-4" : ""}
          />
        ))}
      </div>
    </main>
  );
}
