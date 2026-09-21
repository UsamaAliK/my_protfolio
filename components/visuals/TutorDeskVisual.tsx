"use client";

import { BookOpen, FileSpreadsheet, Workflow, Sparkles, GraduationCap } from "lucide-react";

export default function TutorDeskVisual() {
  const steps = [
    { name: "Course Docs", detail: "PDFs & Notes", icon: BookOpen },
    { name: "ChromaDB + Tavily", detail: "RAG & Web Search", icon: FileSpreadsheet },
    { name: "LangChain Orchestration", detail: "Structured Outputs", icon: Workflow },
    { name: "Gemini Synthesis", detail: "Educational Models", icon: Sparkles },
    { name: "Curriculum Artifacts", detail: "Quizzes & Lessons", icon: GraduationCap },
  ];

  return (
    <div className="w-full bg-[#FBFBF9] border border-[#E8E8E4] rounded-lg p-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-[#E8E8E4] pb-2.5 mb-3 text-[#6B7280]">
        <span className="font-semibold text-[#111827]">Educational LangChain Architecture</span>
        <span className="text-[10px] text-[#0D9488]">Structured Output</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center text-center">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.name}
              className="p-2.5 bg-white border border-[#E8E8E4] rounded flex flex-col items-center justify-center hover:border-[#0D9488]/40 transition-colors"
            >
              <Icon className="w-4 h-4 text-[#0D9488] mb-1" />
              <span className="font-semibold text-[#111827] text-[11px] leading-tight">
                {step.name}
              </span>
              <span className="text-[9px] text-[#9CA3AF] mt-0.5 leading-none">
                {step.detail}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

