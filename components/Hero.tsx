import { ArrowDown, Github, FileText, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import Link from "next/link";
import TechStackFlow from "./TechStackFlow";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-14 border-b border-[#E8E8E4]/60 dark:border-[#1F2937]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">
          <div className="flex-1">
            <Reveal>
              <div className="text-sm font-medium text-[#4B5563] dark:text-[#9CA3AF] mb-4">
                AI Engineer · Python · Machine Learning
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] max-w-3xl leading-[1.15] mb-6">
                I build practical AI systems that turn ideas into useful software.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-base sm:text-lg text-[#4B5563] dark:text-[#9CA3AF] max-w-2xl leading-relaxed mb-8">
                I'm an AI engineer working on language model training and building AI applications with Python, RAG systems, LLM APIs, embeddings, and semantic search. Currently training GLMs at Hubble42. I enjoy turning AI ideas into practical software that people can actually use.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111827] dark:bg-[#F9FAFB] text-white dark:text-[#111827] hover:bg-[#1F2937] dark:hover:bg-[#E5E7EB] hover:-translate-y-0.5 motion-reduce:transform-none text-xs font-semibold tracking-wide transition-all shadow-sm group"
                >
                  <span>Explore projects</span>
                  <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 motion-reduce:transform-none transition-transform" />
                </a>

                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0D9488] text-white hover:bg-[#0F766E] hover:-translate-y-0.5 motion-reduce:transform-none text-xs font-semibold tracking-wide transition-all shadow-sm group"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Resume</span>
                </Link>

                <a
                  href="https://github.com/UsamaAliK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] text-[#111827] dark:text-[#F9FAFB] hover:bg-[#F4F4F0] dark:hover:bg-[#1F2937] hover:border-[#0D9488]/40 dark:hover:border-[#5EEAD4]/40 hover:-translate-y-0.5 motion-reduce:transform-none text-xs font-semibold tracking-wide transition-all group"
                >
                  <Github className="w-3.5 h-3.5 text-[#4B5563] dark:text-[#9CA3AF]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF] dark:text-[#6B7280] group-hover:text-[#0D9488] dark:group-hover:text-[#5EEAD4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Profile Picture */}
          <Reveal delay={200} className="shrink-0 mx-auto lg:mx-0 lg:mb-14">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-2xl overflow-hidden border border-[#E8E8E4] dark:border-[#1F2937] shadow-sm bg-white dark:bg-[#111827] group">
              <Image
                src="/profile.jpg"
                alt="Usama Ali"
                width={460}
                height={460}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
        <TechStackFlow />
      </div>
    </section>
  );
}
