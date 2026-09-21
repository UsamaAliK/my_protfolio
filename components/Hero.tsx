"use client";

import { ArrowDown, Github, FileText, ArrowUpRight } from "lucide-react";
import HeroVisual from "./HeroVisual";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-[#E8E8E4]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E8E4] text-[11px] font-mono tracking-wider uppercase text-[#0D9488] mb-6 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
          <span>AI Engineer · Python · Machine Learning</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#111827] max-w-3xl leading-[1.15] mb-6">
          I build practical AI systems that turn ideas into useful software.
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl leading-relaxed mb-8">
          I'm Usama, an AI engineer focused on Python, machine learning, RAG systems,
          LLM applications, and backend development. I enjoy turning AI ideas into practical software
          that people can actually use.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-14">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111827] text-white hover:bg-[#1F2937] text-xs font-semibold tracking-wide transition-all shadow-sm group"
          >
            <span>View my work</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <Link
            href="/cv"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0D9488] text-white hover:bg-[#0F766E] text-xs font-semibold tracking-wide transition-all shadow-sm group"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View / Download CV</span>
          </Link>

          <a
            href="https://github.com/UsamaAliK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-[#E8E8E4] text-[#111827] hover:bg-[#F4F4F0] hover:border-[#0D9488]/40 text-xs font-semibold tracking-wide transition-all group"
          >
            <Github className="w-3.5 h-3.5 text-[#4B5563]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF] group-hover:text-[#0D9488] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>

        {/* Editorial Architecture Visual */}
        <HeroVisual />
      </div>
    </section>
  );
}
