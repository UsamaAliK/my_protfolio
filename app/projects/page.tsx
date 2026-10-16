"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import MindlyVisual from "@/components/visuals/MindlyVisual";
import RepoGuideVisual from "@/components/visuals/RepoGuideVisual";
import TutorDeskVisual from "@/components/visuals/TutorDeskVisual";
import MovieRecVisual from "@/components/visuals/MovieRecVisual";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Github, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  const [activeId, setActiveId] = useState("mindly");

  const projects = [
    {
      id: "mindly",
      number: "01",
      title: "Mindly",
      subtitle: "Document search and answers",
      badge: "Live product",
      description:
        "A web app for uploading documents, searching them with PostgreSQL and pgvector, and getting streamed answers with citations.",
      longDescription:
        "Mindly brings PDFs, Markdown files, and web pages into one searchable workspace. It combines vector search with BM25 retrieval and returns answers with source references.",
      link: "https://mindly.one/",
      linkText: "Launch Mindly Web App ↗",
      tech: [
        "Python",
        "FastAPI",
        "pgvector",
        "PostgreSQL",
        "RAG Pipelines",
        "Vector Embeddings",
        "LLM APIs",
        "Next.js",
      ],
      features: [
        "Multi-modal document ingestion (PDFs, Markdown, Web URLs)",
        "Hybrid vector search using pgvector with HNSW indexing",
        "Cross-encoder reranking to optimize context relevance",
        "Real-time streaming answers with exact citation attribution",
      ],
      visual: <MindlyVisual />,
      featured: true,
    },
    {
      id: "repoguide",
      number: "02",
      title: "RepoGuide",
      subtitle: "Questions and search for codebases",
      badge: "Open source",
      description:
        "A developer tool that indexes GitHub repositories and answers questions with links to relevant files and lines.",
      longDescription:
        "RepoGuide splits code using its syntax structure, searches the resulting ChromaDB index, and links answers back to source code.",
      link: "https://github.com/UsamaAliK/RepoGuide",
      linkText: "View on GitHub ↗",
      tech: [
        "Python",
        "FastAPI",
        "RAG",
        "ChromaDB",
        "Jina AI",
        "Cross-Encoder Reranking",
        "PostgreSQL",
        "SQLAlchemy",
        "Alembic",
      ],
      features: [
        "AST-aware semantic code chunking across Python, JS, and TS",
        "Dense ChromaDB vector search with Jina AI embeddings",
        "Precise line-range source attribution on GitHub",
        "Alembic-managed database persistence for chat history",
      ],
      visual: <RepoGuideVisual />,
      featured: false,
    },
    {
      id: "tutordesk",
      number: "03",
      title: "TutorDesk",
      subtitle: "Course material and quiz generation",
      badge: "Open source",
      description:
        "A course assistant that uses LangChain and Pydantic outputs to organize learning material and generate quizzes.",
      longDescription:
        "TutorDesk takes textbook chapters and lecture transcripts and produces structured questions and answer keys.",
      link: "https://github.com/UsamaAliK/TutorDesk",
      linkText: "View on GitHub ↗",
      tech: [
        "Python",
        "FastAPI",
        "LangChain",
        "ChromaDB",
        "Gemini",
        "Pydantic v2",
        "Structured Outputs",
        "SQLAlchemy",
      ],
      features: [
        "Strict JSON schema validation via Pydantic v2",
        "Automated rubric alignment and quiz generation",
        "RAG over curriculum materials with ChromaDB",
        "FastAPI asynchronous assessment generation",
      ],
      visual: <TutorDeskVisual />,
      featured: false,
    },
    {
      id: "movierec",
      number: "04",
      title: "Movie Recommendation System",
      subtitle: "Movie recommendations with SVD and TF-IDF",
      badge: "Machine Learning Model",
      description:
        "A movie recommender that combines SVD collaborative filtering with TF-IDF content similarity.",
      longDescription:
        "The model uses user ratings and movie metadata to recommend titles, with an interactive Streamlit interface.",
      link: "https://github.com/UsamaAliK/Movie-Recomendation-System",
      linkText: "View on GitHub ↗",
      tech: [
        "Python",
        "Scikit-learn",
        "Surprise",
        "SVD Factorization",
        "Cosine Similarity",
        "Pandas",
        "Streamlit",
      ],
      features: [
        "Singular Value Decomposition (SVD) matrix factorization",
        "TF-IDF cosine similarity for content-based matching",
        "Cross-validated RMSE evaluation metrics",
        "Interactive Streamlit visualization interface",
      ],
      visual: <MovieRecVisual />,
      featured: false,
    },
  ];

  // Keep the active project tab aligned with the section nearest the reading area.
  useEffect(() => {
    let frame = 0;

    const updateActiveProject = () => {
      frame = 0;
      const readingLine = window.scrollY + window.innerHeight * 0.3;
      let currentId = projects[0].id;

      for (const project of projects) {
        const el = document.getElementById(project.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= readingLine) currentId = project.id;
        else break;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        currentId = projects[projects.length - 1].id;
      }

      setActiveId(currentId);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveProject);
    };

    updateActiveProject();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F6] dark:bg-[#121815] text-[#222923] dark:text-[#EEF2EC]">
      <Navbar fixed={false} />

      <main className="flex-grow pt-4 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Header navigation & title */}
          <div className="mb-10 pb-6 border-b border-[#E4E4DC] dark:border-[#2B3830]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#59645D] dark:text-[#B3BDB5] hover:text-[#38685A] dark:hover:text-[#9AC7A7] transition-colors mb-6 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 motion-reduce:transform-none transition-transform" />
              <span>Back to Portfolio Home</span>
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#38685A] dark:text-[#9AC7A7] tracking-wider uppercase font-semibold block mb-2">
                  Projects
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#222923] dark:text-[#EEF2EC]">
                  Selected projects
                </h1>
                <p className="text-sm sm:text-base text-[#59645D] dark:text-[#B3BDB5] mt-2 max-w-2xl leading-relaxed">
                  A closer look at what each project does, the tools behind it, and where to find the code.
                </p>
              </div>

              <div className="shrink-0 text-xs font-mono text-[#59645D] dark:text-[#B3BDB5]">
                <span>4 projects</span>
              </div>
            </div>
          </div>

          <nav
            aria-label="Jump to project"
            className="sticky top-0 z-40 -mx-4 sm:-mx-6 px-4 sm:px-6 py-3 mb-10 border-y border-[#E4E4DC]/80 dark:border-[#2B3830]/80 bg-[#FAF9F6]/95 dark:bg-[#121815]/95 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
              <span className="text-[11px] font-mono text-[#818980] dark:text-[#87948A] shrink-0 uppercase">
                Jump to:
              </span>
              <div className="flex items-center gap-2 shrink-0">
                {projects.map((p) => (
                  <a
                    key={p.id}
                    href={`#${p.id}`}
                    aria-current={activeId === p.id ? "location" : undefined}
                    onClick={() => setActiveId(p.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                      activeId === p.id
                        ? "bg-[#38685A] text-white font-semibold shadow-2xs"
                        : "bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] text-[#59645D] dark:text-[#B3BDB5] hover:text-[#222923] dark:hover:text-[#EEF2EC]"
                    }`}
                  >
                    <span>{p.number}</span>
                    <span>{p.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Vertical Scroll Stack with Scroll-Triggered Animations */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <section
                key={project.id}
                id={project.id}
                className="scroll-mt-36"
              >
                <Reveal delay={100}>
                  <div
                    className={`group bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] rounded-2xl p-6 sm:p-10 transition-all duration-300 shadow-sm hover:shadow-xl hover:border-[#38685A]/50 dark:hover:border-[#9AC7A7]/50 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none ${
                      project.featured
                        ? "ring-1 ring-[#38685A]/20 dark:ring-[#9AC7A7]/20 bg-linear-to-b from-white to-[#FAF9F6] dark:from-[#1B2420] dark:to-[#121815]"
                        : ""
                    }`}
                  >
                    {/* Project Header Info */}
                    <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6 mb-6">
                      <div className="space-y-2 max-w-2xl">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#E6F0E8] dark:bg-[#38685A]/20 text-[#38685A] dark:text-[#9AC7A7] text-xs font-mono font-bold">
                            {project.number}
                          </span>
                          <span className="text-[#D3D5CC] dark:text-[#39483D]">•</span>
                          <span className="text-xs font-mono text-[#38685A] dark:text-[#9AC7A7] font-semibold">
                            {project.badge}
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#222923] dark:text-[#EEF2EC]">
                          {project.title}
                        </h2>

                        <p className="text-xs sm:text-sm font-mono text-[#59645D] dark:text-[#B3BDB5]">
                          {project.subtitle}
                        </p>

                        <p className="text-sm text-[#59645D] dark:text-[#CBD5E1] leading-relaxed pt-2">
                          {project.longDescription || project.description}
                        </p>
                      </div>

                      {/* Direct External Action Link */}
                      <div className="shrink-0">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38685A] hover:bg-[#2D5549] text-white text-xs font-semibold tracking-wide transition-all shadow-sm group/btn hover:scale-105 active:scale-95"
                        >
                          <span>{project.linkText}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 motion-reduce:transform-none transition-transform" />
                        </a>
                      </div>
                    </div>

                    {/* Architecture Visual / Live Webpage */}
                    <div className="my-8 rounded-xl overflow-hidden border border-[#E4E4DC]/80 dark:border-[#2B3830]/80 shadow-xs">
                      {project.visual}
                    </div>

                    {/* Technical Features & Capabilities */}
                    {project.features && (
                      <div className="my-6 pt-6 border-t border-[#E4E4DC]/60 dark:border-[#2B3830]/60 space-y-3">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#818980] dark:text-[#87948A] block font-semibold">
                          Engineering Highlights
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {project.features.map((feat, i) => (
                            <div
                              key={i}
                              className="p-3 rounded-lg bg-[#FAF9F6] dark:bg-[#151C2C] border border-[#E4E4DC] dark:border-[#2B3830] flex items-start gap-2.5 text-xs text-[#334155] dark:text-[#CBD5E1]"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#38685A] dark:text-[#9AC7A7] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Tags */}
                    <div className="pt-4 border-t border-[#E4E4DC]/60 dark:border-[#2B3830]/60 flex flex-wrap gap-1.5 items-center justify-between">
                      <div className="flex flex-wrap gap-1.5 items-center">
                        <span className="text-[11px] font-mono text-[#818980] dark:text-[#87948A] mr-2">
                          Tech Stack:
                        </span>
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 rounded bg-[#FAF9F6] dark:bg-[#232E28] border border-[#E4E4DC] dark:border-[#39483D] text-[11px] font-mono text-[#59645D] dark:text-[#B3BDB5]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[#38685A] dark:text-[#9AC7A7] flex items-center gap-1 mt-2 sm:mt-0 font-medium hover:underline"
                      >
                        <span>Open Source / Live URL</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              </section>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-20 pt-8 border-t border-[#E4E4DC] dark:border-[#2B3830] flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#59645D] dark:text-[#B3BDB5] hover:text-[#38685A] dark:hover:text-[#9AC7A7] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio Home</span>
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#222923] dark:bg-[#EEF2EC] text-white dark:text-[#222923] text-xs font-semibold shadow-xs hover:bg-[#232E28] dark:hover:bg-[#E5E7EB] transition-colors"
            >
              <span>View Resume Page</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
