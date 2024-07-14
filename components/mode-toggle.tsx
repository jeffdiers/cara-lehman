"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    if (theme === "dark") {
      setIsChecked(true);
    } else if (theme === "light") {
      setIsChecked(false);
    } else if (theme === "system") {
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsChecked(systemTheme);
    }
  }, [theme]);

  const handleToggle = () => {
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <div className="flex items-center">
      <SunIcon className="mr-2" />
      <Switch checked={isChecked} onCheckedChange={handleToggle} />
      <MoonIcon className="ml-2" />
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
