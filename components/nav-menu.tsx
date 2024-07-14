"use client";

import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

export function NavMennu() {
  return (
    <header className="absolute items-center top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 justify-end">
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
            <div className="h-5 px-2">
              <Separator orientation="vertical" />
            </div>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
