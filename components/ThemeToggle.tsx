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
      className={`p-1.5 rounded-md text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-[#F9FAFB] hover:bg-[#F4F4F0] dark:hover:bg-[#1F2937] transition-colors ${className}`}
    >
      {mounted && !isDark ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </button>
  );
}
