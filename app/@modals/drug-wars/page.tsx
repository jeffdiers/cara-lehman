"use client";

import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import { H3, P } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { TECH_STACK_NAME, TechBadge } from "@/components/tech-badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IconGithub } from "@/components/icons";

const FEATURES = [
  { emoji: "💊", text: "Buy and sell drugs" },
  { emoji: "🔫", text: "Buy guns" },
  { emoji: "👮‍♂️", text: "Run from the cops" },
  { emoji: "🏰", text: "Grow your empire" },
  { emoji: "💰", text: "Make a fortune" },
  { emoji: "👑", text: "Become the kingpin" },
];

function Feature({ emoji, text }: { emoji: string; text: string }) {
  return (
    <Badge variant="secondary" className="text-sm">
      {emoji}
      <span className="ml-2 italic">{text}</span>
    </Badge>
  );
}

const TECH_STACK: TECH_STACK_NAME[] = [
  "react",
  "redux",
  "typescript",
  "jest",
  "netlify",
];

export default function DrugWarsPage() {
  return (
    <ModalPage>
      <ModalPageTitle>Drug Wars</ModalPageTitle>
      <ModalScrollBody>
        <Button asChild variant="outline" className="text-xl">
          <a href="https://drug-wars.netlify.app/" target="_blank">
            🕹️ Play Now
          </a>
        </Button>

        <Image
          src="/drug_wars_screenshot.jpg"
          alt="Drug Wars game screenshot"
          width={1550}
          height={912}
          className="rounded-xl mt-8"
        />

        <H3 className="mt-8">About the Game</H3>
        <P>
          Drug Wars is a turn-based strategy game that puts you in the shoes of
          a drug dealer. You start with a small amount of money and a few drugs,
          and you must make strategic decisions to grow your empire. This game
          has been around since the 1980s and has been played by millions of
          people around the world. This is my take on the classic.
        </P>

        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {FEATURES.map((feature, index) => (
            <Feature key={index} emoji={feature.emoji} text={feature.text} />
          ))}
        </div>

        <H3 className="mt-8">Gameplay</H3>
        <P>
          The game is played in rounds, with each round representing a day. The
          object is to pay off your debt to the loan shark and make a fortune.
          You can buy and sell drugs, but if you deal too heavily in drugs you
          might run into the police. The goal is to become the most powerful
          drug lord in the city.
        </P>

        <H3 className="mt-8">Technologies Used</H3>
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {TECH_STACK.map((badge) => (
            <TechBadge key={badge} type={badge} variant="secondary" />
          ))}
        </div>

        <Button asChild variant="link" className="mt-2">
          <a href="https://github.com/jeffdiers/drugwars" target="_blank">
            <IconGithub className="w-4 h-4 mr-1" /> View GitHub
          </a>
        </Button>
      </ModalScrollBody>
    </ModalPage>
  );
}
