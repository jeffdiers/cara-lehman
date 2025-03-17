import IMDb from "@/components/icons/Imdb";
import Instagram from "@/components/icons/Instagram";
import LinkedIn from "@/components/icons/LinkedIn";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
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
          Visual storytelling through photography and cinematography
        </p>

        {/* Navigation links */}
        <nav className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
          <Link
            href="/portfolio"
            className="border-b-2 border-transparent pb-1 text-lg transition-all duration-300 hover:border-white md:text-xl"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="border-b-2 border-transparent pb-1 text-lg transition-all duration-300 hover:border-white md:text-xl"
          >
            About
          </Link>
          <Link
            href="/services"
            className="border-b-2 border-transparent pb-1 text-lg transition-all duration-300 hover:border-white md:text-xl"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="border-b-2 border-transparent pb-1 text-lg transition-all duration-300 hover:border-white md:text-xl"
          >
            Contact
          </Link>
        </nav>

        {/* Social media links (optional) */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <Link
            href="https://www.instagram.com/caramariee/"
            target="_blank"
            aria-label="Instagram"
            className="transition-opacity hover:opacity-80"
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/cara-lehman-7621a5163/"
            aria-label="LinkedIn"
            className="transition-opacity hover:opacity-80"
          >
            <LinkedIn />
          </Link>
          <Link
            href="https://www.imdb.com/name/nm10593245/"
            aria-label="IMDb"
            className="transition-opacity hover:opacity-80"
          >
            <IMDb />
          </Link>
        </div>
      </div>
    </div>
  );
}
