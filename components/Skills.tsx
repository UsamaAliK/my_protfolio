"use client";

import TechnicalPositioning from "./TechnicalPositioning";

export default function Skills() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      desc: "Start with the problem, the users, and what the system actually needs to accomplish.",
    },
    {
      number: "02",
      title: "Build",
      desc: "Start with a simple working pipeline before introducing unnecessary complexity.",
    },
    {
      number: "03",
      title: "Evaluate",
      desc: "Test retrieval quality, model outputs, edge cases, and the overall user experience.",
    },
    {
      number: "04",
      title: "Improve",
      desc: "Iterate toward reliability, maintainability, and production readiness.",
    },
  ];

  const skillColumns = [
    {
      category: "Languages & AI/ML",
      skills: [
        "Python",
        "SQL",
        "C++",
        "RAG Pipelines",
        "LLM APIs",
        "Embeddings",
        "LangChain",
        "LangGraph",
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Pandas",
        "NumPy",
      ],
    },
    {
      category: "Backend & Security",
      skills: [
        "FastAPI",
        "REST APIs",
        "SQLAlchemy",
        "Alembic",
        "JWT Authentication",
        "Authorization",
        "N8N Workflows",
        "Tool Calling",
        "AI Agents",
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        "PostgreSQL",
        "SQLite",
        "pgvector",
        "ChromaDB",
        "FAISS",
        "Git",
        "GitHub API",
        "Semantic Search",
        "Reranking",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-[#E8E8E4]/60 dark:border-[#1F2937]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono text-[#0D9488] dark:text-[#5EEAD4] tracking-wider uppercase font-semibold block mb-3">
            02 / Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] mb-3">
            What I work with
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            My work sits at the intersection of AI engineering, machine learning, and backend development.
          </p>
        </div>

        {/* Integrated Technical Positioning Diagram */}
        <TechnicalPositioning />

        {/* Consolidated 3-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {skillColumns.map((col) => (
            <div
              key={col.category}
              className="p-5 bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] rounded-xl hover:border-[#0D9488]/40 dark:hover:border-[#5EEAD4]/40 transition-colors shadow-2xs group"
            >
              <h3 className="text-xs font-mono text-[#111827] dark:text-[#F9FAFB] uppercase tracking-wider font-semibold mb-4 pb-2 border-b border-[#E8E8E4] dark:border-[#1F2937]">
                {col.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {col.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-[#FBFBF9] dark:bg-[#1F2937] border border-[#E8E8E4] dark:border-[#374151] text-xs font-medium text-[#111827] dark:text-[#9CA3AF] hover:border-[#0D9488]/40 dark:hover:border-[#5EEAD4]/40 hover:bg-[#CCFBF1]/20 dark:hover:bg-[#0D9488]/10 dark:hover:bg-[#5EEAD4]/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* How I Build */}
        <div className="mt-16">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] mb-2">
              How I build
            </h3>
            <p className="text-sm sm:text-base text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
              My engineering process prioritizes clarity, systematic evaluation, and incremental reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-6 bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] rounded-xl hover:border-[#0D9488]/40 dark:hover:border-[#5EEAD4]/40 transition-colors shadow-2xs flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#0D9488] dark:text-[#5EEAD4] block mb-3">
                    {step.number}
                  </span>
                  <h4 className="text-lg font-bold text-[#111827] dark:text-[#F9FAFB] mb-2 group-hover:text-[#0D9488] dark:group-hover:text-[#5EEAD4] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#E8E8E4]/50 dark:border-[#1F2937]/50 flex items-center justify-between text-[10px] font-mono text-[#9CA3AF] dark:text-[#6B7280]">
                  <span>Phase {step.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E4] dark:bg-[#374151] group-hover:bg-[#0D9488] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
