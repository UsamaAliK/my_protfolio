import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, ExternalLink, ArrowLeft, Mail, Phone, Github, Linkedin, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Usama Ali — Curriculum Vitae",
  description: "CV and professional summary of Usama Ali, AI Engineer and ML Engineer.",
};

export default function CVPage() {
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

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FBFBF9] text-[#111827]">
      <Navbar />

      <main className="flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Navigation back and Download CV header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E8E8E4]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#6B7280] hover:text-[#0D9488] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          <a
            href="/Usama_Ali_CV.pdf"
            target="_blank"
            download="Usama_Ali_CV.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0D9488] text-white hover:bg-[#0F766E] text-xs font-semibold shadow-2xs transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download Official CV (PDF)</span>
          </a>
        </div>

        {/* CV Paper Container */}
        <div className="bg-white border border-[#E8E8E4] rounded-xl p-8 sm:p-12 shadow-sm space-y-8">
          {/* Header */}
          <div className="border-b border-[#E8E8E4] pb-6 text-center sm:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-[#111827]">
              USAMA ALI
            </h1>
            <p className="text-sm font-semibold text-[#0D9488] mt-1 font-mono">
              AI Engineer &bull; ML Engineer
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-[#6B7280] mt-4">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#0D9488]" />
                +92 0318 4383585
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#0D9488]" />
                usamaaliawan88@gmail.com
              </span>
              <a
                href="https://github.com/UsamaAliK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#111827] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#0D9488]" />
                UsamaAliK
              </a>
              <a
                href="https://www.linkedin.com/in/usama-ali-ai-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#111827] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0D9488]" />
                usama-ali-ai-eng
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827] border-b border-[#E8E8E4] pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed pt-1">
              AI/ML Engineer with hands-on experience building AI applications using Python, RAG pipelines, LLM APIs, embeddings, and machine learning. Experienced in FastAPI backend development, PostgreSQL, semantic search, and integrating AI technologies into practical applications.
            </p>
          </div>

          {/* Tools & Technology */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827] border-b border-[#E8E8E4] pb-1">
              Tools & Technology
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#374151]">
              <div>
                <span className="font-semibold text-[#111827] block mb-0.5">Programming Languages:</span>
                <span className="text-[#6B7280]">Python</span>
              </div>
              <div>
                <span className="font-semibold text-[#111827] block mb-0.5">AI & Machine Learning:</span>
                <span className="text-[#6B7280]">RAG, LLM APIs, Embeddings, LangChain, PyTorch, TensorFlow</span>
              </div>
              <div>
                <span className="font-semibold text-[#111827] block mb-0.5">Backend & Security:</span>
                <span className="text-[#6B7280]">FastAPI, REST APIs, SQLAlchemy, Alembic, JWT Auth, Authorization</span>
              </div>
              <div>
                <span className="font-semibold text-[#111827] block mb-0.5">Databases & Vector Search:</span>
                <span className="text-[#6B7280]">PostgreSQL, SQLite, pgvector, ChromaDB, FAISS</span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-[#111827] block mb-0.5">Tools & Automation:</span>
                <span className="text-[#6B7280]">Pandas, NumPy, Git, GitHub API, N8N</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827] border-b border-[#E8E8E4] pb-1">
              Experience
            </h2>
            {experiences.map((exp) => (
              <div key={exp.role} className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                  <span className="font-bold text-[#111827]">
                    {exp.role} &mdash; <span className="font-normal text-[#4B5563]">{exp.company}</span>
                  </span>
                  <span className="font-mono text-[#6B7280] text-[11px]">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5 pl-1">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#4B5563]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827] border-b border-[#E8E8E4] pb-1">
              Selected Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.title} className="space-y-1.5">
                <div className="flex items-center justify-between gap-2 text-xs font-bold text-[#111827]">
                  <span>{proj.title}</span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono font-normal text-[#0D9488] hover:underline flex items-center gap-1 shrink-0"
                  >
                    <span>Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <ul className="space-y-1 pl-1">
                  {proj.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#4B5563]">
                      <span className="text-[#0D9488] font-bold">&bull;</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827] border-b border-[#E8E8E4] pb-1">
              Education
            </h2>
            <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
              <span className="font-bold text-[#111827]">
                Bachelor of Science in Computer Science
              </span>
              <span className="font-mono text-[#6B7280] text-[11px]">
                2022 &ndash; 2026
              </span>
            </div>
            <p className="text-xs text-[#4B5563]">
              University of Management and Technology, Lahore
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

