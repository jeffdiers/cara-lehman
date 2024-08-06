"use client";

import {
  ModalPage,
  ModalPageTitle,
  ModalScrollBody,
} from "@/components/modal-page";
import { Button } from "@/components/ui/button";
import { BlendingModeIcon } from "@radix-ui/react-icons";

export default function ColorZenPage() {
  return (
    <ModalPage>
      <ModalPageTitle>Color Zen</ModalPageTitle>
      <ModalScrollBody>
        <Button asChild variant="outline" className="text-xl">
          <a href="https://color-zen-cyan.vercel.app/" target="_blank">
            <BlendingModeIcon className="h-6 w-6 mr-2" /> View App
          </a>
        </Button>
        <p className="mt-8">
          Color Zen is a color palette generator that I built using React. It
          generates a random palette of colors. The application is built with a
          mobile-first design in mind and is fully responsive. The app is hosted
          on Vercel and built with Next.js.
        </p>
      </ModalScrollBody>
    </ModalPage>
  );
}
