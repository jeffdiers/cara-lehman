import { IconGithub } from "@/components/icons";
import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import { TECH_STACK_NAME, TechBadge } from "@/components/tech-badge";
import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";
import { BlendingModeIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import colorZenScreenshot from "@/public/color_zen_screenshot.webp";
import Link from "next/link";

const TECH_STACK: TECH_STACK_NAME[] = [
  "react",
  "nextjs",
  "typescript",
  "tailwind",
  "prisma",
];

export default function ColorZenPage() {
  return (
    <ModalPage>
      <ModalPageTitle>Color Zen</ModalPageTitle>
      <ModalScrollBody>
        <Button asChild variant="outline" className="text-xl">
          <Link href="https://color-zen-cyan.vercel.app/" target="_blank">
            <BlendingModeIcon className="h-6 w-6 mr-2" />
            View Color Zen
          </Link>
        </Button>

        <Image
          src={colorZenScreenshot}
          alt="Color Zen screenshot"
          className="rounded-xl mt-8"
          priority
        />

        <H3 className="mt-8">About the Project</H3>
        <p className="mt-8">
          Color Zen is a color palette generator that I built using React,
          Prisma, Tailwind, and Next.js. It is a very basic app that generates a
          random palette of colors and save it. The application is built with a
          mobile-first design in mind and is fully responsive. The app is hosted
          on Vercel.
        </p>

        <H3 className="mt-8">Technologies Used</H3>
        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {TECH_STACK.map((badge) => (
            <TechBadge key={badge} type={badge} variant="secondary" />
          ))}
        </div>

        <Button asChild variant="link" className="mt-4">
          <Link href="https://github.com/jeffdiers/color-zen" target="_blank">
            <IconGithub className="w-4 h-4 mr-1" /> View GitHub
          </Link>
        </Button>
      </ModalScrollBody>
    </ModalPage>
  );
}
