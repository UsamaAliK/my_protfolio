"use client";

import { ArrowUpRight } from "lucide-react";
import MindlyVisual from "./visuals/MindlyVisual";
import RepoGuideVisual from "./visuals/RepoGuideVisual";
import TutorDeskVisual from "./visuals/TutorDeskVisual";
import MovieRecVisual from "./visuals/MovieRecVisual";

export default function Projects() {
  const projects = [
    {
      id: "mindly",
      number: "01",
      title: "Mindly",
      subtitle: "AI Knowledge Workspace",
      description:
        "An AI-powered knowledge workspace designed to help people learn, think, and remember by turning information from different sources into connected, searchable knowledge.",
      isLive: true,
      link: "https://mindly.one/",
      linkText: "Visit Mindly ↗",
      tech: [
        "AI",
        "LLMs",
        "RAG",
        "Embeddings",
        "Vector Search",
        "FastAPI",
        "Next.js",
        "PostgreSQL",
        "pgvector",
      ],
      visual: <MindlyVisual />,
      featured: true,
    },
    {
      id: "repoguide",
      number: "02",
      title: "RepoGuide",
      subtitle: "Understand any codebase like someone who built it explained it.",
      description:
        "An AI-powered GitHub repository assistant that lets developers ask questions about unfamiliar codebases and receive answers grounded in retrieved source code, with clickable file and line references.",
      isLive: false,
      link: "https://github.com/UsamaAliK/RepoGuide",
      linkText: "View on GitHub ↗",
      tech: [
        "Python",
        "FastAPI",
        "RAG",
        "Gemini",
        "PostgreSQL",
        "pgvector",
        "Semantic Search",
        "Reranking",
        "Sentence Transformers",
        "Jina AI",
      ],
      visual: <RepoGuideVisual />,
      featured: false,
    },
    {
      id: "tutordesk",
      number: "03",
      title: "TutorDesk",
      subtitle: "AI Teaching Assistant",
      description:
        "An AI teaching assistant that helps teachers work with course material, generate lesson plans, quizzes, assignments, explanations, and research-backed educational content.",
      isLive: false,
      link: "https://github.com/UsamaAliK/TutorDesk",
      linkText: "View on GitHub ↗",
      tech: [
        "Python",
        "FastAPI",
        "LangChain",
        "RAG",
        "Gemini",
        "ChromaDB",
        "Tavily",
        "SQL",
        "PostgreSQL",
        "Structured LLM Outputs",
      ],
      visual: <TutorDeskVisual />,
      featured: false,
    },
    {
      id: "movierec",
      number: "04",
      title: "Movie Recommendation System",
      subtitle: "Hybrid Recommendation Engine",
      description:
        "A movie recommendation system exploring collaborative filtering, content-based similarity, and hybrid recommendation techniques using the MovieLens dataset.",
      isLive: false,
      link: "https://github.com/UsamaAliK/Movie-Recomendation-System",
      linkText: "View on GitHub ↗",
      tech: [
        "Python",
        "Scikit-learn",
        "Surprise",
        "SVD",
        "Collaborative Filtering",
        "Content-Based Filtering",
        "Streamlit",
      ],
      visual: <MovieRecVisual />,
      featured: false,
    },
  ];

  return (
    <section id="work" className="py-16 sm:py-24 border-b border-[#E8E8E4]/60 dark:border-[#1F2937]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[#0D9488] tracking-wider uppercase font-semibold block mb-3">
            03 / Selected Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] mb-3">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            A few projects I've built across AI engineering, machine learning, and backend development.
          </p>
        </div>

        {/* Editorial Asymmetrical Layout */}
        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] rounded-xl p-6 sm:p-8 hover:border-[#0D9488]/50 transition-all duration-200 shadow-2xs hover:shadow-sm ${
                project.featured ? "ring-1 ring-[#0D9488]/20 bg-linear-to-b from-white to-[#FBFBF9] dark:from-[#111827] dark:to-[#0B0F1A]" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6 mb-6">
                <div className="space-y-2 max-w-2xl">
                  {/* Top Metadata row */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#6B7280] dark:text-[#9CA3AF] group-hover:text-[#0D9488] transition-colors">
                      {project.number}
                    </span>
                    <span className="text-[#D1D1CB] dark:text-[#374151]">•</span>
                    {project.isLive && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#CCFBF1]/50 dark:bg-[#0D9488]/15 border border-[#99F6E4] dark:border-[#0D9488]/40 text-[10px] font-mono text-[#0F766E] dark:text-[#5EEAD4] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
                        Live Product
                      </span>
                    )}
                    <span className="text-xs font-mono text-[#9CA3AF] dark:text-[#6B7280]">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB]">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed pt-1">
                    {project.description}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="shrink-0">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F4F4F0] dark:bg-[#1F2937] hover:bg-[#111827] dark:hover:bg-[#F9FAFB] hover:text-white dark:hover:text-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] text-[#111827] dark:text-[#F9FAFB] text-xs font-semibold tracking-wide transition-all group/btn"
                  >
                    <span>{project.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6B7280] dark:text-[#9CA3AF] group-hover/btn:text-white dark:group-hover/btn:text-[#111827] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>

              {/* Architecture Visual */}
              <div className="my-6">{project.visual}</div>

              {/* Tech Tags */}
              <div className="pt-4 border-t border-[#E8E8E4]/60 dark:border-[#1F2937]/60 flex flex-wrap gap-1.5 items-center">
                <span className="text-[11px] font-mono text-[#9CA3AF] dark:text-[#6B7280] mr-2">Tech Stack:</span>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded bg-[#FBFBF9] dark:bg-[#1F2937] border border-[#E8E8E4] dark:border-[#374151] text-[11px] font-mono text-[#4B5563] dark:text-[#9CA3AF]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

