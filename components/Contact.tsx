"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, FileText, ArrowUpRight, Download, Copy, Check } from "lucide-react";
import Link from "next/link";

const EMAIL = "usamaaliawan88@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-mono text-[#0D9488] tracking-wider uppercase font-semibold block mb-3">
            07 / Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] mb-4">
            Let's build something useful.
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed mb-8">
            I'm interested in opportunities involving AI/ML systems, intelligent applications, Python backend development, and practical AI products.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#111827] dark:bg-[#F9FAFB] text-white dark:text-[#111827] hover:bg-[#1F2937] dark:hover:bg-[#E5E7EB] text-xs font-semibold tracking-wide transition-all shadow-sm group"
            >
              <Mail className="w-4 h-4 text-[#CCFBF1] dark:text-[#0D9488]" />
              <span>Send an email</span>
              <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <button
              onClick={handleCopyEmail}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-sm group cursor-pointer ${
                copied
                  ? "bg-[#0D9488] text-white border border-[#0D9488]"
                  : "bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] text-[#111827] dark:text-[#F9FAFB] hover:bg-[#F4F4F0] dark:hover:bg-[#1F2937] hover:border-[#0D9488]/40"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#0D9488]" />
                  <span>Copy email</span>
                </>
              )}
            </button>

<Link
              href="/resume"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0D9488] text-white hover:bg-[#0F766E] text-xs font-semibold tracking-wide transition-all shadow-sm group"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume Page</span>
            </Link>

            <a
              href="/Usama_Ali_Resume.pdf"
              target="_blank"
              download="Usama_Ali_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] text-[#111827] dark:text-[#F9FAFB] hover:bg-[#F4F4F0] dark:hover:bg-[#1F2937] hover:border-[#0D9488]/40 text-xs font-semibold tracking-wide transition-all group"
            >
              <Download className="w-4 h-4 text-[#0D9488]" />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href="https://github.com/UsamaAliK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] text-[#111827] dark:text-[#F9FAFB] hover:bg-[#F4F4F0] dark:hover:bg-[#1F2937] hover:border-[#0D9488]/40 text-xs font-semibold tracking-wide transition-all group"
            >
              <Github className="w-4 h-4 text-[#4B5563] dark:text-[#9CA3AF]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#0D9488] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/usama-ali-ai-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] text-[#111827] dark:text-[#F9FAFB] hover:bg-[#F4F4F0] dark:hover:bg-[#1F2937] hover:border-[#0D9488]/40 text-xs font-semibold tracking-wide transition-all group"
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
