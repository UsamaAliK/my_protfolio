"use client";

import { Cpu, Database, Server, Layers, Layout } from "lucide-react";

export default function HeroVisual() {
  const systemNodes = [
    {
      id: "ai",
      title: "AI & LLMs",
      sub: "Embeddings / Generation",
      icon: Cpu,
      tag: "Input",
    },
    {
      id: "rag",
      title: "RAG Pipeline",
      sub: "Vector Search & Retrieval",
      icon: Layers,
      tag: "Context",
    },
    {
      id: "backend",
      title: "FastAPI Backend",
      sub: "REST APIs & Validation",
      icon: Server,
      tag: "Logic",
    },
    {
      id: "db",
      title: "PostgreSQL",
      sub: "pgvector & SQL Store",
      icon: Database,
      tag: "Data",
    },
    {
      id: "app",
      title: "Application",
      sub: "End-User Interface",
      icon: Layout,
      tag: "Output",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] rounded-xl p-6 shadow-sm relative overflow-hidden group">
      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#E8E8E4_1px,transparent_1px)] dark:bg-[radial-gradient(#1F2937_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E8E8E4] dark:border-[#1F2937] text-xs font-mono text-[#6B7280] dark:text-[#9CA3AF]">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488]" />
          <span className="font-semibold text-[#111827] dark:text-[#F9FAFB]">System Flow Architecture</span>
        </div>
        <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-[#F4F4F0] dark:bg-[#1F2937] text-[11px] text-[#4B5563] dark:text-[#9CA3AF]">
          End-to-End AI Stack
        </span>
      </div>

      {/* Flow Nodes Container */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-2 items-center">
        {systemNodes.map((node, index) => {
          const Icon = node.icon;
          const isLast = index === systemNodes.length - 1;

          return (
            <div key={node.id} className="flex flex-col sm:flex-row items-center w-full">
              {/* Node Card */}
              <div className="w-full p-3.5 bg-[#FBFBF9] dark:bg-[#0B0F1A] hover:bg-white dark:hover:bg-[#1F2937] border border-[#E8E8E4] dark:border-[#1F2937] hover:border-[#0D9488]/50 rounded-lg transition-all duration-200 shadow-2xs hover:shadow-sm group/card">
                <div className="flex items-center justify-between mb-2">
                  <span className="p-1.5 rounded bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] text-[#111827] dark:text-[#F9FAFB] group-hover/card:text-[#0D9488] group-hover/card:border-[#0D9488]/30 transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] font-mono text-[#9CA3AF] dark:text-[#6B7280] uppercase">
                    {node.tag}
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-[#111827] dark:text-[#F9FAFB] leading-tight">
                  {node.title}
                </h4>
                <p className="text-[11px] text-[#6B7280] dark:text-[#9CA3AF] mt-0.5 leading-snug">
                  {node.sub}
                </p>
              </div>

              {/* Connecting Connector/Arrow */}
              {!isLast && (
                <div className="py-2 sm:py-0 sm:px-1 flex items-center justify-center text-[#9CA3AF] dark:text-[#6B7280]">
                  {/* Down arrow on mobile, right arrow on desktop */}
                  <svg
                    className="w-4 h-4 sm:hidden text-[#0D9488]/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                  <svg
                    className="w-4 h-4 hidden sm:block text-[#0D9488]/60 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer bar */}
      <div className="mt-6 pt-3 border-t border-[#E8E8E4]/60 dark:border-[#1F2937]/60 flex items-center justify-between text-[11px] font-mono text-[#6B7280] dark:text-[#9CA3AF]">
        <span>AI Integration • RAG Pipelines • Vector Search</span>
        <span className="text-[#0D9488]">Production Ready</span>
      </div>
    </div>
  );
}
