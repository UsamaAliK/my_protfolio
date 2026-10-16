"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Menu, X, ArrowUpRight, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Projects", href: "/projects", id: "work" },
  { name: "Skills", href: "/#skills", id: "skills" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar({ fixed = true }: { fixed?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
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
      className={`${fixed ? "fixed top-0 left-0 right-0" : "relative"} z-50 transition-all duration-200 bg-transparent ${
        scrolled && fixed
          ? "border-b border-[#E4E4DC]/80 dark:border-[#2B3830]/80 py-3"
          : "py-4.5"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#38685A] dark:bg-[#9AC7A7] transition-opacity duration-300"
        style={{ transform: `scaleX(${progress})`, opacity: progress > 0.001 ? 1 : 0 }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand with custom UA Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#222923] dark:text-[#EEF2EC] hover:text-[#38685A] transition-colors"
        >
          <div className="relative w-7 h-7 rounded-md overflow-hidden bg-black border border-[#222923] dark:border-[#39483D] group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center shadow-2xs">
            <img
              src="/logo.png"
              alt="Usama Ali Logo"
              width={28}
              height={28}
              className="object-cover w-full h-full"
            />
          </div>
          <span>Usama Ali</span>
          <span className="hidden sm:inline-block text-xs font-mono text-[#59645D] dark:text-[#B3BDB5] font-normal pl-2 border-l border-[#E4E4DC] dark:border-[#2B3830]">
            AI Engineer
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-[#59645D] dark:text-[#B3BDB5]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-current={activeSection === link.id ? "true" : undefined}
              className={`hover:text-[#222923] dark:hover:text-[#EEF2EC] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#38685A] hover:after:w-full after:transition-all after:duration-200 ${
                activeSection === link.id ? "text-[#38685A] after:w-full" : ""
              }`}
            >
              {link.name}
            </a>
          ))}

          <Link
            href="/resume"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[#38685A] hover:bg-[#E6F0E8]/30 dark:hover:bg-[#2D5549]/10 font-mono text-xs font-semibold transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </Link>

          <a
            href="https://github.com/UsamaAliK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#E4E4DC] dark:border-[#2B3830] bg-white dark:bg-[#1B2420] text-[#222923] dark:text-[#EEF2EC] hover:border-[#38685A]/40 hover:bg-[#F1F0EB] dark:hover:bg-[#232E28] transition-all text-xs font-medium shadow-2xs"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#818980] dark:text-[#87948A]" />
          </a>

          <ThemeToggle />
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/resume"
            className="px-2 py-1 rounded bg-[#E6F0E8]/40 dark:bg-[#38685A]/15 text-[#38685A] dark:text-[#9AC7A7] text-xs font-mono font-semibold"
          >
            Resume
          </Link>
          <a
            href="https://github.com/UsamaAliK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 text-[#59645D] dark:text-[#B3BDB5] hover:text-[#222923] dark:hover:text-[#EEF2EC] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-[#59645D] dark:text-[#B3BDB5] hover:text-[#222923] dark:hover:text-[#EEF2EC] hover:bg-[#F1F0EB] dark:hover:bg-[#232E28] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="menu-enter md:hidden border-b border-[#E4E4DC] dark:border-[#2B3830] bg-[#FAF9F6] dark:bg-[#121815] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={activeSection === link.id ? "true" : undefined}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === link.id
                    ? "text-[#38685A] bg-[#E6F0E8]/30 dark:bg-[#38685A]/10"
                    : "text-[#59645D] dark:text-[#B3BDB5] hover:text-[#222923] dark:hover:text-[#EEF2EC] hover:bg-[#F1F0EB] dark:hover:bg-[#232E28]"
                }`}
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-[#38685A] font-mono hover:bg-[#E6F0E8]/20 dark:hover:bg-[#2D5549]/10 rounded-md transition-colors"
            >
              Resume
            </Link>
          </div>
          <div className="pt-2 border-t border-[#E4E4DC] dark:border-[#2B3830]">
            <a
              href="https://github.com/UsamaAliK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-[#222923] dark:text-[#EEF2EC] bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] rounded-md hover:bg-[#F1F0EB] dark:hover:bg-[#232E28] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#59645D] dark:text-[#B3BDB5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
