"use client";

import { FolderGit2, SearchCode, Layers, MessageSquareCode, FileCheck } from "lucide-react";

export default function RepoGuideVisual() {
  const pipelineSteps = [
    { label: "GitHub Repo", sub: "AST & Chunking", icon: FolderGit2 },
    { label: "Code Retrieval", sub: "pgvector Semantic", icon: SearchCode },
    { label: "Jina Reranking", sub: "Cross-Encoder", icon: Layers },
    { label: "LLM Generation", sub: "Gemini Context", icon: MessageSquareCode },
    { label: "Grounded Answer", sub: "File & Line Refs", icon: FileCheck },
  ];

  return (
    <div className="w-full bg-[#FAF9F6] dark:bg-[#121815] border border-[#E4E4DC] dark:border-[#2B3830] rounded-lg p-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-[#E4E4DC] dark:border-[#2B3830] pb-2.5 mb-3 text-[#59645D] dark:text-[#B3BDB5]">
        <span className="font-semibold text-[#222923] dark:text-[#EEF2EC]">Codebase Grounding Pipeline</span>
        <span className="text-[10px] text-[#38685A]">Line-Level Citation</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center text-center">
        {pipelineSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.label}
              className="p-2.5 bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] rounded flex flex-col items-center justify-center hover:border-[#38685A]/40 transition-colors"
            >
              <Icon className="w-4 h-4 text-[#38685A] mb-1" />
              <span className="font-semibold text-[#222923] dark:text-[#EEF2EC] text-[11px] leading-tight">
                {step.label}
              </span>
              <span className="text-[9px] text-[#818980] dark:text-[#87948A] mt-0.5 leading-none">
                {step.sub}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

