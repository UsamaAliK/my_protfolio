import { ArrowDown, Github, FileText, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 sm:pt-28 sm:pb-14 border-b border-[#E4E4DC]/60 dark:border-[#2B3830]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">
          <div className="flex-1">
            <Reveal>
              <div className="text-sm font-medium text-[#59645D] dark:text-[#B3BDB5] mb-4">
                AI/ML Engineer
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#222923] dark:text-[#EEF2EC] max-w-3xl leading-[1.15] mb-6">
                I build AI and machine learning applications with Python.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-base sm:text-lg text-[#59645D] dark:text-[#B3BDB5] max-w-2xl leading-relaxed mb-8">
                I'm an AI engineer focused on Python, machine learning, RAG systems, LLM applications, and backend development. I enjoy turning AI ideas into practical software that people can actually use. I work across machine learning, LLMs, and Python backend development, building models, APIs, and retrieval systems that turn data into useful features.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#222923] dark:bg-[#EEF2EC] text-white dark:text-[#222923] hover:bg-[#232E28] dark:hover:bg-[#E5E7EB] hover:-translate-y-0.5 motion-reduce:transform-none text-xs font-semibold tracking-wide transition-all shadow-sm group"
                >
                  <span>Explore projects</span>
                  <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 motion-reduce:transform-none transition-transform" />
                </a>

                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38685A] text-white hover:bg-[#2D5549] hover:-translate-y-0.5 motion-reduce:transform-none text-xs font-semibold tracking-wide transition-all shadow-sm group"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Resume</span>
                </Link>

                <a
                  href="https://github.com/UsamaAliK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] text-[#222923] dark:text-[#EEF2EC] hover:bg-[#F1F0EB] dark:hover:bg-[#232E28] hover:border-[#38685A]/40 dark:hover:border-[#9AC7A7]/40 hover:-translate-y-0.5 motion-reduce:transform-none text-xs font-semibold tracking-wide transition-all group"
                >
                  <Github className="w-3.5 h-3.5 text-[#59645D] dark:text-[#B3BDB5]" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#818980] dark:text-[#87948A] group-hover:text-[#38685A] dark:group-hover:text-[#9AC7A7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Profile Picture */}
          <Reveal delay={200} className="shrink-0 mx-auto lg:mx-0 lg:mb-14">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-2xl overflow-hidden border border-[#E4E4DC] dark:border-[#2B3830] shadow-sm bg-white dark:bg-[#1B2420] group">
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
      </div>
    </section>
  );
}
