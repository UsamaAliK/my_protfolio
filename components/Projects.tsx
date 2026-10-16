import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Projects() {
  const previewProjects = [
    {
      id: "mindly",
      number: "01",
      title: "Mindly",
      subtitle: "Document search and answers",
      badge: "Live product",
      desc: "Upload documents, search them with PostgreSQL and pgvector, and get streamed answers with source citations.",
      tech: ["FastAPI", "pgvector", "RAG", "Next.js", "LLM APIs"],
      link: "/projects#mindly",
      featured: true,
    },
    {
      id: "repoguide",
      number: "02",
      title: "RepoGuide",
      subtitle: "Ask questions about a codebase",
      badge: "Open source",
      desc: "Indexes GitHub repositories and answers questions with links to the relevant files and lines.",
      tech: ["Python", "FastAPI", "ChromaDB", "Jina AI", "PostgreSQL"],
      link: "/projects#repoguide",
      featured: false,
    },
    {
      id: "tutordesk",
      number: "03",
      title: "TutorDesk",
      subtitle: "Course material and quiz generation",
      badge: "Open source",
      desc: "Uses course material to create structured quizzes, with FastAPI and Pydantic handling the output.",
      tech: ["Python", "FastAPI", "LangChain", "Gemini", "Pydantic"],
      link: "/projects#tutordesk",
      featured: false,
    },
    {
      id: "movierec",
      number: "04",
      title: "Movie Recommendation System",
      subtitle: "Movie recommendations with SVD and TF-IDF",
      badge: "Machine learning",
      desc: "Combines collaborative filtering with content similarity to recommend movies.",
      tech: ["Python", "Scikit-learn", "Surprise", "SVD", "Streamlit"],
      link: "/projects#movierec",
      featured: false,
    },
  ];

  return (
    <section id="work" className="py-12 sm:py-16 border-b border-[#E8E8E4]/60 dark:border-[#1F2937]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <Reveal className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E8E8E4] dark:border-[#1F2937]">
            <div>
              <span className="text-xs font-mono text-[#0D9488] dark:text-[#5EEAD4] tracking-wider uppercase font-semibold block mb-2">
                Selected work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] mb-1">
                Featured Projects
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5563] dark:text-[#9CA3AF]">
                A few projects I've worked on, from search tools to a recommendation model.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] hover:-translate-y-0.5 motion-reduce:transform-none text-white text-xs font-semibold tracking-wide transition-all shadow-sm group shrink-0"
            >
              <span>All projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none transition-transform" />
            </Link>
          </div>
        </Reveal>

        {/* 4 Project Cards Grid linking to the dedicated Projects Page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {previewProjects.map((project, idx) => (
            <Reveal key={project.id} delay={60 + idx * 60}>
              <Link
                href={project.link}
                className={`group block p-6 rounded-2xl bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] hover:border-[#0D9488]/50 dark:hover:border-[#5EEAD4]/50 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none transition-all duration-200 shadow-2xs hover:shadow-md h-full flex flex-col justify-between ${
                  project.featured
                    ? "ring-1 ring-[#0D9488]/20 dark:ring-[#5EEAD4]/20 bg-linear-to-b from-white to-[#FBFBF9] dark:from-[#111827] dark:to-[#0B0F1A]"
                    : ""
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0D9488] dark:text-[#5EEAD4]">
                      Project {project.number}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F4F4F0] dark:bg-[#1F2937] text-[#4B5563] dark:text-[#9CA3AF] border border-[#E8E8E4] dark:border-[#374151]">
                      {project.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] group-hover:text-[#0D9488] dark:group-hover:text-[#5EEAD4] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#9CA3AF] dark:text-[#6B7280] mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E8E8E4]/60 dark:border-[#1F2937]/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#FBFBF9] dark:bg-[#1F2937] border border-[#E8E8E4] dark:border-[#374151] text-[10px] font-mono text-[#4B5563] dark:text-[#9CA3AF]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#0D9488] dark:text-[#5EEAD4] group-hover:translate-x-1 motion-reduce:transform-none transition-transform">
                    <span>Project details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
