"use client";

import { Github, ArrowUpRight, Code2 } from "lucide-react";

export default function GitHubSection() {
  const publicRepos = [
    { name: "Mindly", desc: "AI Knowledge Workspace (Live Product)", link: "https://mindly.one/" },
    { name: "RepoGuide", desc: "AI Codebase Assistant & Retrieval Grounding", link: "https://github.com/UsamaAliK/RepoGuide" },
    { name: "TutorDesk", desc: "AI Teaching Assistant with LangChain & RAG", link: "https://github.com/UsamaAliK/TutorDesk" },
    { name: "Movie Recommendation System", desc: "Hybrid ML Engine with SVD & Cosine Similarity", link: "https://github.com/UsamaAliK/Movie-Recomendation-System" },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-[#E8E8E4]/60 dark:border-[#1F2937]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] rounded-xl p-8 shadow-2xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E8E8E4] dark:border-[#1F2937]">
            <div className="max-w-xl space-y-2">
              <span className="text-xs font-mono text-[#0D9488] tracking-wider uppercase font-semibold block">
                06 / Open Source & Code
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB]">
                Building in public
              </h2>
              <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">
                Most of my work lives on GitHub, where I experiment with AI systems, machine learning, RAG pipelines, and backend engineering.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://github.com/UsamaAliK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111827] dark:bg-[#F9FAFB] text-white dark:text-[#111827] hover:bg-[#1F2937] dark:hover:bg-[#E5E7EB] text-xs font-semibold tracking-wide transition-all shadow-sm group"
              >
                <Github className="w-4 h-4" />
                <span>Explore my GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Compact Repo Preview List */}
          <div className="mt-6">
            <span className="text-xs font-mono text-[#9CA3AF] dark:text-[#6B7280] uppercase block mb-4">
              Featured Repositories & Work
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {publicRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-[#FBFBF9] dark:bg-[#0B0F1A] hover:bg-white dark:hover:bg-[#1F2937] border border-[#E8E8E4] dark:border-[#1F2937] hover:border-[#0D9488]/40 rounded-lg transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Code2 className="w-4 h-4 text-[#6B7280] dark:text-[#9CA3AF] group-hover:text-[#0D9488] transition-colors" />
                    <div>
                      <h4 className="text-xs font-semibold text-[#111827] dark:text-[#F9FAFB] group-hover:text-[#0D9488] transition-colors">
                        {repo.name}
                      </h4>
                      <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF]">{repo.desc}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#9CA3AF] dark:text-[#6B7280] group-hover:text-[#0D9488] transition-colors shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

