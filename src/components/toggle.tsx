"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      // Compute dark mode on the client side after mount
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(theme === "dark" || (!theme && prefersDark));
    }
  }, [theme]);

  const toggleTheme = React.useCallback(() => {
    // This runs client-side after initial render
    if (isDarkMode) {
      setTheme("light");
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", "light");
      }
    } else {
      setTheme("dark");
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", "dark");
      }
    }
  }, [isDarkMode, setTheme]);

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