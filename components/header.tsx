import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";

export const navigationLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between border-b bg-background/80 px-4 backdrop-blur-sm lg:px-6">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold">CARA LEHMAN</span>
      </Link>
      <nav className="hidden items-center gap-6 md:flex">
        {navigationLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            {label}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
};
