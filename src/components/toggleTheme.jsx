"use client";
import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="p-2 rounded bg-secondary-foreground dark:bg-primary-foreground"
    >
      {isDarkMode ? (
        <IconSun className="h-4 w-4 text-neutral-500 dark:text-white" />
      ) : (
        <IconMoon className="h-4 w-4 text-neutral-500 dark:text-white" />
      )}
    </button>
  );
}
