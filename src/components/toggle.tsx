"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(isDark);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
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