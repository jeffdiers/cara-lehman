"use client";

import {
  GlobeIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  HeartFilledIcon,
  SunIcon,
  MoonIcon,
} from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const [brooklynTime, setBrooklynTime] = useState("");

  useEffect(() => {
    const updateBrooklynTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric" as const,
        minute: "numeric",
        hour12: true,
        timeZone: "America/New_York",
      });
      setBrooklynTime(formatter.format(now));
    };

    updateBrooklynTime();
    const timer = setInterval(updateBrooklynTime, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <header className="sticky items-center top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container p-4 md:p-12 flex justify-end items-center w-full">
        <div className="flex items-center justify-center space-x-3 font-caprasimo italic mr-2">
          <span>Brooklyn, NY</span>
          <GlobeIcon className="h-5 w-5 text-secondary" />
          <span>{brooklynTime}</span>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <div className="sticky bottom-0 left-0 right-0 p-4 h-auto">
      <div className="container flex flex-col md:flex-row items-center justify-between h-12 gap-x-4 font-caprasimo italic text-lg">
        <div className="flex items-center gap-x-4">
          <span>Thank you for visiting</span>
          <HeartFilledIcon />
        </div>
        <div className="flex items-center gap-x-4">
          <span>Stay in touch</span>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="https://www.linkedin.com/in/jeff-diers/"
                  target="_blank"
                >
                  <Button variant="ghost" size="icon">
                    <LinkedInLogoIcon className="h-4 w-4" />
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="https://github.com/jeffdiers"
                  target="_blank"
                >
                  <Button variant="ghost" size="icon">
                    <GitHubLogoIcon className="h-4 w-4" />
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="mailto:jeff.diers@gmail.com"
                  target="_blank"
                >
                  <Button variant="ghost" size="icon">
                    <EnvelopeClosedIcon className="h-4 w-4" />
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
