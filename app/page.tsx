"use client";

import { NavMennu } from "@/components/nav-menu";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardLink,
  CardTitle,
} from "@/components/ui/card";
import { H1, P } from "@/components/ui/typography";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import {
  ArrowRightIcon,
  DashboardIcon,
  DownloadIcon,
  EnterFullScreenIcon,
  ExternalLinkIcon,
  EyeOpenIcon,
  FileTextIcon,
  PersonIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { RiGamepadLine } from "@remixicon/react";

export default function Home() {
  return (
    <div className="relative flex flex-col bg-background text-foreground">
      <NavMennu />

      <main className="flex container h-screen flex-col justify-center p-4 md:p-12">
        <div>
          <div className="font-caprasimo space-y-2 ">
            <H1>Hello, my name is Jeff.</H1>
            <P className="text-lg lg:text-xl text-destructive">
              I am a Software Engineer based in NYC.
            </P>
          </div>
          <div className="mt-4 flex flex-row space-x-4 pt-4">
            <CardLink href="#">
              <CardHeader className="flex-grow">
                <div className="flex justify-between items-start">
                  <Badge className="p-2">
                    <PersonIcon className="h-5 w-5" />
                  </Badge>
                  <div className="flex flex-col items-end text-right w-[65px] gap-y-1">
                    <EyeOpenIcon className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col">
                <CardTitle>About Me</CardTitle>

                <div className="flex flex-wrap gap-1 my-2">
                  <Badge variant="secondary">Bio</Badge>
                  <Badge variant="secondary">Contact</Badge>
                  <Badge variant="secondary">My stack</Badge>
                </div>
              </CardContent>
            </CardLink>
            <CardLink href="#" className="w-64 h-64">
              <CardHeader className="flex-grow">
                <div className="flex justify-between items-start">
                  <Badge className="p-2">
                    <RiGamepadLine className="h-5 w-5" />
                  </Badge>
                  <div className="flex flex-col items-end text-right w-[65px] gap-y-1">
                    <EyeOpenIcon className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>Drug Wars</CardTitle>
                <div className="flex flex-wrap gap-1 my-2">
                  <Badge variant="secondary">Game</Badge>
                  <Badge variant="secondary">Development</Badge>
                </div>
              </CardContent>
            </CardLink>
            <CardLink href="#" className="w-64 h-64">
              <CardHeader className="flex-grow">
                <div className="flex justify-between items-start">
                  <Badge className="p-2">
                    <FileTextIcon className="h-5 w-5" />
                  </Badge>
                  <div className="flex flex-col items-end text-right w-[65px] gap-y-1">
                    <DownloadIcon className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>Resume</CardTitle>
                <div className="flex flex-wrap gap-1 my-2">
                  <Badge variant="secondary">PDF</Badge>
                  <Badge variant="secondary">Download</Badge>
                </div>
              </CardContent>
            </CardLink>
            <CardLink href="#" className="w-64 h-64">
              <CardHeader className="flex-grow">
                <div className="flex justify-between items-start">
                  <Badge className="p-2">
                    <DashboardIcon className="h-5 w-5" />
                  </Badge>
                  <div className="flex flex-col items-end text-right w-[65px] gap-y-1">
                    <ExternalLinkIcon className="h-4 w-4" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>Storybook</CardTitle>
                <div className="flex flex-wrap gap-1 my-2">
                  <Badge variant="secondary">UI</Badge>
                  <Badge variant="secondary">Design</Badge>
                  <Badge variant="secondary">Development</Badge>
                </div>
              </CardContent>
            </CardLink>
          </div>
        </div>
      </main>
    </div>
  );
}
