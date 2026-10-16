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
    <section id="work" className="py-12 sm:py-16 border-b border-[#E4E4DC]/60 dark:border-[#2B3830]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <Reveal className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E4E4DC] dark:border-[#2B3830]">
            <div>
              <span className="text-xs font-mono text-[#38685A] dark:text-[#9AC7A7] tracking-wider uppercase font-semibold block mb-2">
                Selected work
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#222923] dark:text-[#EEF2EC] mb-1">
                Featured Projects
              </h2>
              <p className="text-xs sm:text-sm text-[#59645D] dark:text-[#B3BDB5]">
                A few projects I've worked on, from search tools to a recommendation model.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#38685A] hover:bg-[#2D5549] hover:-translate-y-0.5 motion-reduce:transform-none text-white text-xs font-semibold tracking-wide transition-all shadow-sm group shrink-0"
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
                className={`group block p-6 rounded-2xl bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] hover:border-[#38685A]/50 dark:hover:border-[#9AC7A7]/50 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none transition-all duration-200 shadow-2xs hover:shadow-md h-full flex flex-col justify-between ${
                  project.featured
                    ? "ring-1 ring-[#38685A]/20 dark:ring-[#9AC7A7]/20 bg-linear-to-b from-white to-[#FAF9F6] dark:from-[#1B2420] dark:to-[#121815]"
                    : ""
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#38685A] dark:text-[#9AC7A7]">
                      Project {project.number}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F1F0EB] dark:bg-[#232E28] text-[#59645D] dark:text-[#B3BDB5] border border-[#E4E4DC] dark:border-[#39483D]">
                      {project.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-[#222923] dark:text-[#EEF2EC] group-hover:text-[#38685A] dark:group-hover:text-[#9AC7A7] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#818980] dark:text-[#87948A] mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-[#59645D] dark:text-[#B3BDB5] leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E4E4DC]/60 dark:border-[#2B3830]/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#FAF9F6] dark:bg-[#232E28] border border-[#E4E4DC] dark:border-[#39483D] text-[10px] font-mono text-[#59645D] dark:text-[#B3BDB5]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#38685A] dark:text-[#9AC7A7] group-hover:translate-x-1 motion-reduce:transform-none transition-transform">
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
