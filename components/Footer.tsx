"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E8E4] bg-[#FBFBF9] py-10 text-xs text-[#6B7280]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left branding */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <span className="font-semibold text-[#111827]">Usama Ali</span>
          <span className="hidden sm:inline text-[#D1D1CB]">•</span>
          <span>AI Engineer · Python · AI/ML</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/UsamaAliK"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/usama-ali-ai-eng"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:usamaaliawan88@gmail.com"
            aria-label="Email Contact"
            className="p-1.5 text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-6 pt-6 border-t border-[#E8E8E4]/50 flex items-center justify-between text-[11px] text-[#9CA3AF]">
        <p>© 2026 Usama Ali. All rights reserved.</p>
        <p className="font-mono">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
