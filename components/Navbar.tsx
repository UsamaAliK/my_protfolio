"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Menu, X, ArrowUpRight, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Work", id: "work" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((link) => link.id);
    let frame = 0;

    const update = () => {
      frame = 0;
      let current = "";
      let bestTop = -Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top - 140;
        if (top <= 0 && top > bestTop) {
          bestTop = top;
          current = id;
        }
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        current = ids[ids.length - 1];
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-transparent ${
        scrolled
          ? "border-b border-[#E8E8E4]/80 dark:border-[#1F2937]/80 py-3"
          : "py-4.5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand with custom UA Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#111827] dark:text-[#F9FAFB] hover:text-[#0D9488] transition-colors"
        >
          <div className="relative w-7 h-7 rounded-md overflow-hidden bg-black border border-[#111827] dark:border-[#374151] group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center shadow-2xs">
            <img
              src="/logo.png"
              alt="Usama Ali Logo"
              width={28}
              height={28}
              className="object-cover w-full h-full"
            />
          </div>
          <span>Usama Ali</span>
          <span className="hidden sm:inline-block text-xs font-mono text-[#6B7280] dark:text-[#9CA3AF] font-normal pl-2 border-l border-[#E8E8E4] dark:border-[#1F2937]">
            AI Engineer
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-[#4B5563] dark:text-[#9CA3AF]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`/#${link.id}`}
              aria-current={activeSection === link.id ? "true" : undefined}
              className={`hover:text-[#111827] dark:hover:text-[#F9FAFB] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0D9488] hover:after:w-full after:transition-all after:duration-200 ${
                activeSection === link.id ? "text-[#0D9488] after:w-full" : ""
              }`}
            >
              {link.name}
            </a>
          ))}

          <Link
            href="/resume"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[#0D9488] hover:bg-[#CCFBF1]/30 dark:hover:bg-[#0D9488]/10 font-mono text-xs font-semibold transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </Link>

          <a
            href="https://github.com/UsamaAliK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#E8E8E4] dark:border-[#1F2937] bg-white dark:bg-[#111827] text-[#111827] dark:text-[#F9FAFB] hover:border-[#0D9488]/40 hover:bg-[#F4F4F0] dark:hover:bg-[#1F2937] transition-all text-xs font-medium shadow-2xs"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#9CA3AF] dark:text-[#6B7280]" />
          </a>

          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/resume"
            className="px-2 py-1 rounded bg-[#CCFBF1]/40 dark:bg-[#0D9488]/15 text-[#0F766E] dark:text-[#5EEAD4] text-xs font-mono font-semibold"
          >
            Resume
          </Link>
          <a
            href="https://github.com/UsamaAliK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-[#F9FAFB] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-[#F9FAFB] hover:bg-[#F4F4F0] dark:hover:bg-[#1F2937] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E8E4] dark:border-[#1F2937] bg-[#FBFBF9] dark:bg-[#0B0F1A] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`/#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={activeSection === link.id ? "true" : undefined}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === link.id
                    ? "text-[#0D9488] bg-[#CCFBF1]/30 dark:bg-[#0D9488]/10"
                    : "text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-[#F9FAFB] hover:bg-[#F4F4F0] dark:hover:bg-[#1F2937]"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-[#0D9488] font-mono hover:bg-[#CCFBF1]/20 dark:hover:bg-[#0D9488]/10 rounded-md transition-colors"
            >
              Resume
            </Link>
          </div>
          <div className="pt-2 border-t border-[#E8E8E4] dark:border-[#1F2937]">
            <a
              href="https://github.com/UsamaAliK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-[#111827] dark:text-[#F9FAFB] bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] rounded-md hover:bg-[#F4F4F0] dark:hover:bg-[#1F2937] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#6B7280] dark:text-[#9CA3AF]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
