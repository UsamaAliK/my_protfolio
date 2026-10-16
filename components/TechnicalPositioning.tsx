"use client";

import { Cpu, Server, Database } from "lucide-react";

export default function TechnicalPositioning() {
  const tiers = [
    {
      title: "AI & ML Intelligence",
      tech: "RAG · LLMs · Embeddings · Cross-Encoders · PyTorch · Scikit-learn",
      desc: "Dense & sparse vector retrieval, reranking, context assembly, and inference optimization.",
      icon: Cpu,
    },
    {
      title: "Backend Services",
      tech: "Python · FastAPI · REST APIs · SQLAlchemy · Alembic · N8N",
      desc: "Asynchronous microservices, strict Pydantic schemas, and workflow automation.",
      icon: Server,
    },
    {
      title: "Data & Storage",
      tech: "PostgreSQL · pgvector · ChromaDB · FAISS · SQLite",
      desc: "Normalized database design, vector index indexing (HNSW/IVFFlat), and hybrid querying.",
      icon: Database,
    },
  ];

  return (
    <div className="bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] rounded-xl p-6 shadow-2xs my-8">
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#E4E4DC] dark:border-[#2B3830]">
        <div>
          <span className="text-xs font-mono text-[#38685A] dark:text-[#9AC7A7] font-semibold uppercase tracking-wider">
            Technical Architecture
          </span>
          <h3 className="text-sm font-semibold text-[#222923] dark:text-[#EEF2EC] mt-0.5">
            Full-Stack AI & Backend Engineering Stack
          </h3>
        </div>
        <span className="text-[11px] font-mono text-[#59645D] dark:text-[#B3BDB5]">
          End-to-End System
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map((tier, index) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.title}
              className="p-4 rounded-lg bg-[#FAF9F6] dark:bg-[#121815] border border-[#E4E4DC] dark:border-[#2B3830] hover:border-[#38685A]/40 dark:hover:border-[#9AC7A7]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-1.5 rounded bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] text-[#38685A] dark:text-[#9AC7A7]">
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] font-mono text-[#818980] dark:text-[#87948A]">
                    Layer 0{index + 1}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-[#222923] dark:text-[#EEF2EC] mb-1">
                  {tier.title}
                </h4>
                <p className="text-[11px] font-mono text-[#38685A] dark:text-[#9AC7A7] mb-2 leading-relaxed">
                  {tier.tech}
                </p>
              </div>
              <p className="text-[11px] text-[#59645D] dark:text-[#B3BDB5] leading-normal pt-2 border-t border-[#E4E4DC]/60 dark:border-[#2B3830]/60">
                {tier.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
