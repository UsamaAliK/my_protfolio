import Navbar from "@/components/Navbar";
import { Download, ExternalLink, ArrowLeft, Mail, Phone, Github, Linkedin, Briefcase, GraduationCap, CheckCircle2, Code2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Usama Ali — Resume",
  description: "Resume and professional summary of Usama Ali, AI Engineer and ML Engineer.",
};

export default function ResumePage() {
  const experiences = [
    {
      role: "GenAI Engineer Intern",
      company: "CypherShield",
      period: "July – November 2025",
      points: [
        "Contributed to GenAI application workflows by integrating and working with LLM APIs.",
        "Built automation workflows using N8N to streamline recurring development tasks.",
        "Collaborated with team members to communicate requirements and support GenAI development activities.",
      ],
      skills: ["GenAI Workflows", "LLM APIs", "N8N Automation", "Python", "API Integration"],
    },
  ];

  const skillGroups = [
    {
      category: "Programming Languages",
      items: ["Python", "SQL", "C++"],
    },
    {
      category: "AI & Machine Learning",
      items: ["RAG Pipelines", "LLM APIs", "Embeddings", "LangChain", "PyTorch", "TensorFlow", "Scikit-learn"],
    },
    {
      category: "Backend & Security",
      items: ["FastAPI", "REST APIs", "SQLAlchemy", "Alembic", "JWT Auth", "Authorization"],
    },
    {
      category: "Databases & Vector Search",
      items: ["PostgreSQL", "SQLite", "pgvector", "ChromaDB", "FAISS"],
    },
    {
      category: "Tools & Automation",
      items: ["Pandas", "NumPy", "Git", "GitHub API", "N8N"],
    },
  ];

  const projects = [
    {
      title: "RepoGuide — AI-Powered Codebase Q&A",
      link: "https://github.com/UsamaAliK/RepoGuide",
      points: [
        "Built a tool that analyzes GitHub repositories and provides context-aware answers about their codebase using RAG.",
        "Implemented repository ingestion, code-aware chunking, embeddings, semantic search, and reranking using Python, FastAPI, ChromaDB, Gemini, Jina AI, and LangChain.",
        "Implemented PostgreSQL persistence using SQLAlchemy and Alembic migrations for users, repositories, conversations, and messages.",
      ],
    },
    {
      title: "Mindly — Knowledge-Based Learning System",
      link: "https://mindly.one/",
      points: [
        "Built a knowledge-based AI system using RAG, embeddings, and LLM APIs for context-aware responses.",
        "Implemented document ingestion and semantic retrieval using Python, Next.js, and pgvector.",
      ],
    },
    {
      title: "Movie Recommendation System",
      link: "https://github.com/UsamaAliK/Movie-Recomendation-System",
      points: [
        "Built a collaborative filtering movie recommendation system using Singular Value Decomposition (SVD).",
        "Implemented data preprocessing, model training, and recommendation generation using Python, Scikit-learn, and Surprise.",
      ],
    },
  ];

  const education = {
    degree: "Bachelor of Science in Computer Science",
    period: "2022 – 2026",
    institution: "University of Management and Technology (UMT), Lahore",
    details: "Coursework covering machine learning, data structures, algorithms, database systems, and software architecture.",
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F8F9FA] dark:bg-[#0B0F19] text-[#1E293B] dark:text-[#F1F5F9] transition-colors">
      <Navbar />

      <main className="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Navigation back and Download Resume header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8F0] dark:border-[#1E293B]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#94A3B8] hover:text-[#4A6B82] dark:hover:text-[#8EB1D6] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          <a
            href="/Usama_Ali_Resume.pdf"
            target="_blank"
            download="Usama_Ali_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4A6B82] hover:bg-[#3D596E] text-white dark:bg-[#8EB1D6] dark:text-[#0B1019] dark:hover:bg-[#A3C5EA] text-xs font-semibold shadow-xs transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>

        {/* Soft-Toned Resume Paper Container */}
        <div className="bg-[#FFFFFF] dark:bg-[#121722] border border-[#E2E8F0] dark:border-[#1E2638] rounded-2xl p-7 sm:p-11 shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.35)] space-y-9">
          
          {/* Header Section */}
          <div className="border-b border-[#E2E8F0] dark:border-[#1E2638] pb-7 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
                USAMA ALI
              </h1>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#4A6B82]/10 dark:bg-[#8EB1D6]/15 text-[#3D5A70] dark:text-[#8EB1D6] border border-[#4A6B82]/20 dark:border-[#8EB1D6]/25 self-center sm:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B82] dark:bg-[#8EB1D6] animate-pulse" />
                <span>AI Engineer · ML Engineer</span>
              </div>
            </div>

            {/* Soft Contact Chips */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs font-mono text-[#64748B] dark:text-[#94A3B8] mt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#172030] border border-[#E2E8F0] dark:border-[#1E293B]">
                <Phone className="w-3.5 h-3.5 text-[#4A6B82] dark:text-[#8EB1D6]" />
                +92 0318 4383585
              </span>
              <a
                href="mailto:usamaaliawan88@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#172030] border border-[#E2E8F0] dark:border-[#1E293B] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] hover:border-[#4A6B82]/40 dark:hover:border-[#8EB1D6]/40 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#4A6B82] dark:text-[#8EB1D6]" />
                usamaaliawan88@gmail.com
              </a>
              <a
                href="https://github.com/UsamaAliK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#172030] border border-[#E2E8F0] dark:border-[#1E293B] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] hover:border-[#4A6B82]/40 dark:hover:border-[#8EB1D6]/40 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#4A6B82] dark:text-[#8EB1D6]" />
                UsamaAliK
              </a>
              <a
                href="https://www.linkedin.com/in/usama-ali-ai-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F1F5F9] dark:bg-[#172030] border border-[#E2E8F0] dark:border-[#1E293B] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] hover:border-[#4A6B82]/40 dark:hover:border-[#8EB1D6]/40 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#4A6B82] dark:text-[#8EB1D6]" />
                usama-ali-ai-eng
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#E2E8F0] dark:border-[#1E2638]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B82] dark:bg-[#8EB1D6]" />
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                Summary
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed pt-0.5">
              AI/ML Engineer with hands-on experience building AI applications using Python, RAG pipelines, LLM APIs, embeddings, and machine learning. Experienced in FastAPI backend development, PostgreSQL, semantic search, and integrating AI technologies into practical applications.
            </p>
          </div>

          {/* Tools & Technology with Soft Colored Chips */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#E2E8F0] dark:border-[#1E2638]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B82] dark:bg-[#8EB1D6]" />
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                Tools & Technology
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {skillGroups.map((grp) => (
                <div key={grp.category} className="p-3.5 rounded-xl bg-[#F8FAFC] dark:bg-[#151C2A] border border-[#E2E8F0] dark:border-[#1E293B]">
                  <span className="text-xs font-semibold text-[#0F172A] dark:text-[#F8FAFC] block mb-2 font-mono">
                    {grp.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {grp.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#EBF1F7] dark:bg-[#1A2536] text-[#334E68] dark:text-[#A6C5E6] border border-[#D5E2EE] dark:border-[#24354D]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#E2E8F0] dark:border-[#1E2638]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B82] dark:bg-[#8EB1D6]" />
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                Experience
              </h2>
            </div>

            {experiences.map((exp) => (
              <div key={exp.role} className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#151C2A] border border-[#E2E8F0] dark:border-[#1E293B] space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-medium text-[#4A6B82] dark:text-[#8EB1D6]">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#EBF1F7] dark:bg-[#1A2536] text-[#475569] dark:text-[#94A3B8] border border-[#D5E2EE] dark:border-[#24354D]">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-1.5 pt-1">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4A6B82] dark:text-[#8EB1D6] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 border-t border-[#E2E8F0] dark:border-[#1E2638] flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#FFFFFF] dark:bg-[#121722] text-[#64748B] dark:text-[#94A3B8] border border-[#E2E8F0] dark:border-[#1E293B]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#E2E8F0] dark:border-[#1E2638]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B82] dark:bg-[#8EB1D6]" />
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                Selected Projects
              </h2>
            </div>

            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.title} className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#151C2A] border border-[#E2E8F0] dark:border-[#1E293B] space-y-2">
                  <div className="flex items-center justify-between gap-2 text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    <span className="text-xs font-semibold">{proj.title}</span>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono text-[#4A6B82] dark:text-[#8EB1D6] bg-[#EBF1F7] dark:bg-[#1A2536] hover:bg-[#DFEAF4] dark:hover:bg-[#202E42] transition-colors shrink-0"
                    >
                      <span>Link</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {proj.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                        <span className="text-[#4A6B82] dark:text-[#8EB1D6] font-bold mt-[-1px]">&bull;</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#E2E8F0] dark:border-[#1E2638]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A6B82] dark:bg-[#8EB1D6]" />
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
                Education
              </h2>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAFC] dark:bg-[#151C2A] border border-[#E2E8F0] dark:border-[#1E293B]">
              <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                <span className="font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                  {education.degree}
                </span>
                <span className="font-mono text-[#64748B] dark:text-[#94A3B8] text-[11px]">
                  {education.period}
                </span>
              </div>
              <p className="text-xs font-medium text-[#4A6B82] dark:text-[#8EB1D6] mt-0.5">
                {education.institution}
              </p>
              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-2 pt-2 border-t border-[#E2E8F0] dark:border-[#1E2638] leading-relaxed">
                {education.details}
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
