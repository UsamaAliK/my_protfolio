"use client";

export default function About() {
  const profileItems = [
    { label: "Focus", value: "AI Engineering & Practical ML Systems" },
    { label: "Core Stack", value: "Python · Machine Learning · RAG · LLM APIs" },
    { label: "Backend", value: "FastAPI · REST APIs · SQLAlchemy · Alembic" },
    { label: "Databases & Vector", value: "PostgreSQL · pgvector · ChromaDB · FAISS" },
    { label: "Currently Exploring", value: "AI Agents · Evaluation · N8N Automation" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 border-b border-[#E8E8E4]/60 dark:border-[#1F2937]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main About Text (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-[#0D9488] tracking-wider uppercase font-semibold block mb-2">
              01 / Background & Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] mb-4">
              A little about me
            </h2>

            <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">
              I'm a Computer Science student and AI Engineer focused on building practical AI applications,
              RAG pipelines, and Python backend services. My work combines machine learning, LLM integration,
              and API development with FastAPI, backed by SQL and PostgreSQL databases.
            </p>
            <p className="text-sm sm:text-base text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">
              I enjoy understanding how AI systems work under the hood and turning that knowledge into working products —
              from codebase assistants and knowledge management workspaces to recommendation engines and automated GenAI workflows.
            </p>
          </div>

          {/* Clean Streamlined Profile Card (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] rounded-xl p-6 shadow-2xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8E8E4] dark:border-[#1F2937]">
              <h3 className="text-xs font-mono text-[#111827] dark:text-[#F9FAFB] uppercase tracking-wider font-semibold">
                Core Specifications
              </h3>
              <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
            </div>

            <div className="space-y-3.5">
              {profileItems.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-[10px] font-mono text-[#9CA3AF] dark:text-[#6B7280] uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="text-xs font-medium text-[#111827] dark:text-[#F9FAFB] mt-0.5">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
