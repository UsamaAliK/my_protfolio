import Reveal from "./Reveal";

export default function Skills() {
  const skillColumns = [
    {
      category: "AI & machine learning",
      skills: [
        "Python",
        "RAG",
        "LLM APIs",
        "Embeddings",
        "LangChain",
        "LangGraph",
        "Hybrid search",
        "Reranking",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
      ],
    },
    {
      category: "Backend",
      skills: [
        "FastAPI",
        "REST APIs",
        "SQLAlchemy",
        "Alembic",
        "Pydantic",
        "JWT authentication",
        "N8N",
        "Async Python",
      ],
    },
    {
      category: "Data & tools",
      skills: [
        "PostgreSQL",
        "pgvector",
        "ChromaDB",
        "FAISS",
        "SQLite",
        "Git",
        "GitHub Actions",
      ],
    },
  ];

  return (
    <section id="skills" className="py-10 sm:py-14 border-b border-[#E4E4DC]/60 dark:border-[#2B3830]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-2xl mb-6">
          <div>
            <span className="text-xs font-mono text-[#38685A] dark:text-[#9AC7A7] tracking-wider uppercase font-semibold block mb-3">
              Skills
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#222923] dark:text-[#EEF2EC] mb-3">
              Tools I use
            </h2>
            <p className="text-sm sm:text-base text-[#59645D] dark:text-[#B3BDB5] leading-relaxed">
              Languages, frameworks, and data tools used across my projects and engineering work.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillColumns.map((column) => (
            <Reveal key={column.category}>
              <div className="p-5 bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] rounded-xl h-full">
                <h3 className="text-sm font-semibold text-[#222923] dark:text-[#EEF2EC] mb-4">
                  {column.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {column.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded bg-[#FAF9F6] dark:bg-[#232E28] border border-[#E4E4DC] dark:border-[#39483D] text-xs text-[#59645D] dark:text-[#B3BDB5]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
