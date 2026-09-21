"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Menu, X, ArrowUpRight, FileText } from "lucide-react";

const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "Experience", href: "/#experience" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#FBFBF9]/85 backdrop-blur-md border-b border-[#E8E8E4]/80 py-3 shadow-sm"
          : "bg-[#FBFBF9]/60 backdrop-blur-sm py-4.5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand with custom UA Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#111827] hover:text-[#0D9488] transition-colors"
        >
          <div className="relative w-7 h-7 rounded-md overflow-hidden bg-black border border-[#111827] group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center shadow-2xs">
            <img
              src="/logo.png"
              alt="Usama Ali Logo"
              width={28}
              height={28}
              className="object-cover w-full h-full"
            />
          </div>
          <span>Usama Ali</span>
          <span className="hidden sm:inline-block text-xs font-mono text-[#6B7280] font-normal pl-2 border-l border-[#E8E8E4]">
            AI Engineer
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-[#4B5563]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#111827] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#0D9488] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}

          <Link
            href="/cv"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[#0D9488] hover:bg-[#CCFBF1]/30 font-mono text-xs font-semibold transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </Link>

          <a
            href="https://github.com/UsamaAliK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#E8E8E4] bg-white text-[#111827] hover:border-[#0D9488]/40 hover:bg-[#F4F4F0] transition-all text-xs font-medium shadow-2xs"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#9CA3AF]" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/cv"
            className="px-2 py-1 rounded bg-[#CCFBF1]/40 text-[#0F766E] text-xs font-mono font-semibold"
          >
            CV
          </Link>
          <a
            href="https://github.com/UsamaAliK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-[#4B5563] hover:text-[#111827] hover:bg-[#F4F4F0] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E8E4] bg-[#FBFBF9] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#4B5563] hover:text-[#111827] hover:bg-[#F4F4F0] rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/cv"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-[#0D9488] font-mono hover:bg-[#CCFBF1]/20 rounded-md transition-colors"
            >
              Curriculum Vitae (CV)
            </Link>
          </div>
          <div className="pt-2 border-t border-[#E8E8E4]">
            <a
              href="https://github.com/UsamaAliK"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-[#111827] bg-white border border-[#E8E8E4] rounded-md hover:bg-[#F4F4F0] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#6B7280]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
