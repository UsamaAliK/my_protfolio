"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`p-1.5 rounded-md text-[#59645D] dark:text-[#B3BDB5] hover:text-[#222923] dark:hover:text-[#EEF2EC] hover:bg-[#F1F0EB] dark:hover:bg-[#232E28] transition-colors ${className}`}
    >
      {mounted && !isDark ? (
        <Moon className="w-4 h-4 theme-icon-in" />
      ) : (
        <Sun className="w-4 h-4 theme-icon-in" />
      )}
    </button>
  );
}
