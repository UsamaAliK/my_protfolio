"use client";

import { Github, Linkedin, Mail, FileText, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono text-[#0D9488] tracking-wider uppercase font-semibold block mb-3">
            07 / Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111827] mb-4">
            Let's build something useful.
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-8">
            I'm interested in opportunities involving AI/ML systems, intelligent applications, Python backend development, and practical AI products.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:usamaaliawan88@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#111827] text-white hover:bg-[#1F2937] text-xs font-semibold tracking-wide transition-all shadow-sm group"
            >
              <Mail className="w-4 h-4 text-[#CCFBF1]" />
              <span>Send an email</span>
              <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <Link
              href="/cv"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0D9488] text-white hover:bg-[#0F766E] text-xs font-semibold tracking-wide transition-all shadow-sm group"
            >
              <FileText className="w-4 h-4" />
              <span>View CV Page</span>
            </Link>

            <a
              href="/Usama_Ali_CV.pdf"
              target="_blank"
              download="Usama_Ali_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-[#E8E8E4] text-[#111827] hover:bg-[#F4F4F0] hover:border-[#0D9488]/40 text-xs font-semibold tracking-wide transition-all group"
            >
              <Download className="w-4 h-4 text-[#0D9488]" />
              <span>Download CV (PDF)</span>
            </a>

            <a
              href="https://github.com/UsamaAliK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-[#E8E8E4] text-[#111827] hover:bg-[#F4F4F0] hover:border-[#0D9488]/40 text-xs font-semibold tracking-wide transition-all group"
            >
              <Github className="w-4 h-4 text-[#4B5563]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#0D9488] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/usama-ali-ai-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-[#E8E8E4] text-[#111827] hover:bg-[#F4F4F0] hover:border-[#0D9488]/40 text-xs font-semibold tracking-wide transition-all group"
            >
              <Linkedin className="w-4 h-4 text-[#0077B5]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#0D9488] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
