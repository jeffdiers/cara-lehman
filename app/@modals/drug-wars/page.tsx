import { DialogTitle } from "@/components/ui/dialog";
import ModalPage from "../_components/modal-page";
import { H3, P } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { TECH_STACK_NAME, TechBadge } from "@/components/tech-badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
      <DialogTitle>Drug Wars</DialogTitle>
      <div className="h-full p-4 overflow-y-auto pb-8">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/drug_wars_screenshot.jpg"
            alt="Drug Wars game screenshot"
            width={1550}
            height={912}
            className="rounded-xl"
          />

          <Button asChild variant="outline" className="text-xl mt-8">
            <a href="https://drug-wars.netlify.app/" target="_blank">
              🕹️ Play Now
            </a>
          </Button>
          <P>
            Drug Wars is a turn-based strategy game that puts you in the shoes
            of a drug dealer. You start with a small amount of money and a few
            drugs, and you must make strategic decisions to grow your empire.
            This game has been around since the 1980s and has been played by
            millions of people around the world. This is my take on the classic.
          </P>

          <H3 className="mt-8">Gameplay</H3>
          <P>
            The game is played in rounds, with each round representing a day.
            The object is to pay off your debt to the loan shark and make a
            fortune. You can buy and sell drugs, but if you deal too heavily in
            drugs you might run into the police. The goal is to become the most
            powerful drug lord in the city.
          </P>

          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {FEATURES.map((feature, index) => (
              <Feature key={index} emoji={feature.emoji} text={feature.text} />
            ))}
          </div>

          <H3 className="mt-8">Strategy</H3>
          <P>
            Drug Wars is a game of strategy. You must make smart decisions to
            grow your empire and defeat your rivals. Here are a few tips to help
            you succeed:
          </P>
          <div className="text-center list-disc list-inside font-bold italic text-lg mt-2">
            <div>Invest in high-profit drugs</div>
            <div>Hire henchmen to protect your empire</div>
            <div>Expand your territory</div>
            <div>Eliminate rival drug dealers</div>
          </div>

          <H3 className="mt-8">Technologies Used</H3>
          <div className="flex flex-wrap gap-1 justify-center mt-4">
            {TECH_STACK.map((badge) => (
              <TechBadge key={badge} type={badge} variant="secondary" />
            ))}
          </div>
        </div>
      </div>
    </ModalPage>
  );
}
