"use client";

import { Cpu, Server, Database } from "lucide-react";

export default function TechnicalPositioning() {
  const tiers = [
    {
      title: "AI & ML Intelligence",
      tech: "RAG · LLMs · Embeddings · Agents · PyTorch · Scikit-learn",
      desc: "Designing retrieval pipelines, prompt structures, and ML models.",
      icon: Cpu,
    },
    {
      title: "Backend Services",
      tech: "Python · FastAPI · REST APIs · SQLAlchemy · Alembic · N8N",
      desc: "Building performant, type-safe APIs and automated workflows.",
      icon: Server,
    },
    {
      title: "Data & Storage",
      tech: "PostgreSQL · pgvector · ChromaDB · FAISS · SQLite",
      desc: "Managing relational schemas, vector indices, and similarity search.",
      icon: Database,
    },
  ];

  return (
    <div className="bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] rounded-xl p-6 shadow-2xs my-8">
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E8E8E4] dark:border-[#1F2937]">
        <div>
          <span className="text-xs font-mono text-[#0D9488] dark:text-[#5EEAD4] font-semibold uppercase tracking-wider">
            Technical Architecture
          </span>
          <h3 className="text-sm font-semibold text-[#111827] dark:text-[#F9FAFB] mt-0.5">
            Full-Stack AI & Backend Engineering Stack
          </h3>
        </div>
        <span className="text-[11px] font-mono text-[#6B7280] dark:text-[#9CA3AF]">
          End-to-End System
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map((tier, index) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.title}
              className="p-4 rounded-lg bg-[#FBFBF9] dark:bg-[#0B0F1A] border border-[#E8E8E4] dark:border-[#1F2937] hover:border-[#0D9488]/40 dark:hover:border-[#5EEAD4]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-1.5 rounded bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] text-[#0D9488] dark:text-[#5EEAD4]">
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] font-mono text-[#9CA3AF] dark:text-[#6B7280]">
                    Tier 0{index + 1}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-[#111827] dark:text-[#F9FAFB] mb-1">
                  {tier.title}
                </h4>
                <p className="text-[11px] font-mono text-[#0D9488] dark:text-[#5EEAD4] mb-2 leading-relaxed">
                  {tier.tech}
                </p>
              </div>
              <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] leading-normal pt-2 border-t border-[#E8E8E4]/60 dark:border-[#1F2937]/60">
                {tier.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
