"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDarkMode =
    theme === "dark" ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    if (isDarkMode) {
      setTheme("light");;
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] ${
          isDarkMode ? "text-gray-400" : "text-emerald-400"
        }`}
      />
      <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] ${
          isDarkMode ? "text-purple-600" : "text-gray-400"
        }`}
      />
    </div>
  );
}