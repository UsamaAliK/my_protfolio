"use client";

import TechnicalPositioning from "./TechnicalPositioning";

export default function Skills() {
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
    <section id="skills" className="py-16 sm:py-24 border-b border-[#E8E8E4]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono text-[#0D9488] tracking-wider uppercase font-semibold block mb-3">
            03 / Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mb-3">
            What I work with
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
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
              className="p-5 bg-white border border-[#E8E8E4] rounded-xl hover:border-[#0D9488]/40 transition-colors shadow-2xs group"
            >
              <h3 className="text-xs font-mono text-[#111827] uppercase tracking-wider font-semibold mb-4 pb-2 border-b border-[#E8E8E4]">
                {col.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {col.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded bg-[#FBFBF9] border border-[#E8E8E4] text-xs font-medium text-[#111827] hover:border-[#0D9488]/40 hover:bg-[#CCFBF1]/20 transition-colors"
                  >
                    {skill}
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
