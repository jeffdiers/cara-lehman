import React from "react";

import Image from "next/image";
import Link from "next/link";

import { navigationLinks } from "@/components/header";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "Cara Lehman",
  hideHeader: true, // Custom metadata field
};

export default function Home() {
  return (
    <main className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Theme toggle - add this */}
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      {/* Fullscreen background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-cover.webp"
          alt="Cara Lehman Photography"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
      </div>
      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-amber-200">
        {/* Name/Logo */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
          CARA LEHMAN
        </h1>

        {/* Intro text */}
        <p className="mb-12 text-xl text-amber-200/90 md:text-2xl">
          Visual storytelling - Film / TV / Commercial / Social / Photography
        </p>

        {/* Navigation links */}
        <nav className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
          {navigationLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="border-b-2 border-transparent pb-1 text-lg transition-all duration-300 hover:border-white md:text-xl"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social media links */}
        <SocialLinks />
      </div>
    </main>
  );
}
