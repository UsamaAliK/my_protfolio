"use client";

import { Github, ArrowUpRight, Code2 } from "lucide-react";
import Reveal from "./Reveal";

export default function GitHubSection() {
  const publicRepos = [
    { name: "Mindly", desc: "Multi-Source AI Knowledge Platform (Live Production)", link: "https://mindly.one/" },
    { name: "RepoGuide", desc: "Codebase Intelligence Engine & AST RAG Pipeline", link: "https://github.com/UsamaAliK/RepoGuide" },
    { name: "TutorDesk", desc: "Automated Curriculum Assistant with Structured Schema", link: "https://github.com/UsamaAliK/TutorDesk" },
    { name: "Movie Recommendation System", desc: "SVD Matrix Factorization & TF-IDF Cosine Similarity", link: "https://github.com/UsamaAliK/Movie-Recomendation-System" },
  ];

  return (
    <section className="py-10 sm:py-14 border-b border-[#E8E8E4]/60 dark:border-[#1F2937]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal className="bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] rounded-xl p-8 shadow-2xs">
          <div>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E8E8E4] dark:border-[#1F2937]">
              <div className="max-w-xl space-y-2">
                <span className="text-xs font-mono text-[#0D9488] dark:text-[#5EEAD4] tracking-wider uppercase font-semibold block">
                  GitHub
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB]">
                  More code
                </h2>
                <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">
                  Find the source code for these projects and more on my GitHub profile.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href="https://github.com/UsamaAliK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111827] dark:bg-[#F9FAFB] text-white dark:text-[#111827] hover:bg-[#1F2937] dark:hover:bg-[#E5E7EB] hover:-translate-y-0.5 motion-reduce:transform-none text-xs font-semibold tracking-wide transition-all shadow-sm group"
                >
                  <Github className="w-4 h-4" />
                  <span>Visit GitHub</span>
                  <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-white dark:group-hover:text-[#111827] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Compact Repo Preview List */}
            <div className="mt-6">
              <span className="text-xs font-mono text-[#9CA3AF] dark:text-[#6B7280] uppercase block mb-4">
                Selected Repositories
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {publicRepos.map((repo, i) => (
                  <Reveal key={repo.name} delay={120 + i * 70}>
                    <a
                      href={repo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 bg-[#FBFBF9] dark:bg-[#0B0F1A] hover:bg-white dark:hover:bg-[#1F2937] border border-[#E8E8E4] dark:border-[#1F2937] hover:border-[#0D9488]/40 dark:hover:border-[#5EEAD4]/40 hover:-translate-y-0.5 motion-reduce:transform-none rounded-lg transition-all flex items-center justify-between group h-full"
                    >
                      <div className="flex items-center gap-3">
                        <Code2 className="w-4 h-4 text-[#4B5563] dark:text-[#9CA3AF] group-hover:text-[#0D9488] dark:group-hover:text-[#5EEAD4] transition-colors" />
                        <div>
                          <h4 className="text-xs font-semibold text-[#111827] dark:text-[#F9FAFB] group-hover:text-[#0D9488] dark:group-hover:text-[#5EEAD4] transition-colors">
                            {repo.name}
                          </h4>
                          <p className="text-[11px] text-[#4B5563] dark:text-[#9CA3AF]">{repo.desc}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF] dark:text-[#6B7280] group-hover:text-[#0D9488] dark:group-hover:text-[#5EEAD4] transition-colors shrink-0" />
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
