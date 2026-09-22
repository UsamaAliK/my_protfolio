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
    <div className="w-full bg-[#FBFBF9] dark:bg-[#0B0F1A] border border-[#E8E8E4] dark:border-[#1F2937] rounded-lg p-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-[#E8E8E4] dark:border-[#1F2937] pb-2.5 mb-3 text-[#6B7280] dark:text-[#9CA3AF]">
        <span className="font-semibold text-[#111827] dark:text-[#F9FAFB]">Codebase Grounding Pipeline</span>
        <span className="text-[10px] text-[#0D9488]">Line-Level Citation</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center text-center">
        {pipelineSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.label}
              className="p-2.5 bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] rounded flex flex-col items-center justify-center hover:border-[#0D9488]/40 transition-colors"
            >
              <Icon className="w-4 h-4 text-[#0D9488] mb-1" />
              <span className="font-semibold text-[#111827] dark:text-[#F9FAFB] text-[11px] leading-tight">
                {step.label}
              </span>
              <span className="text-[9px] text-[#9CA3AF] dark:text-[#6B7280] mt-0.5 leading-none">
                {step.sub}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

