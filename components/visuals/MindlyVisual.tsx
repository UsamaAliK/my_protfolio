"use client";

import { Network, FileText, Video, Search, BrainCircuit } from "lucide-react";

export default function MindlyVisual() {
  return (
    <div className="w-full bg-[#FBFBF9] border border-[#E8E8E4] rounded-lg p-5 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-[#E8E8E4] pb-3 mb-4 text-[#6B7280]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
          <span className="font-semibold text-[#111827]">Knowledge Graph & RAG Flow</span>
        </div>
        <span className="text-[10px] text-[#9CA3AF]">Live Product Architecture</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center text-center">
        {/* Step 1: Input Concept */}
        <div className="p-3 bg-white border border-[#E8E8E4] rounded-md flex flex-col items-center">
          <div className="flex gap-1.5 mb-2 text-[#4B5563]">
            <FileText className="w-4 h-4 text-[#0D9488]" />
            <Video className="w-4 h-4 text-[#6B7280]" />
          </div>
          <span className="font-semibold text-[#111827] text-xs">Multimodal Inputs</span>
          <span className="text-[10px] text-[#9CA3AF] mt-0.5">Notes, Web & Videos</span>
        </div>

        {/* Step 2: Processing / Embeddings */}
        <div className="p-3 bg-white border border-[#E8E8E4] rounded-md flex flex-col items-center">
          <BrainCircuit className="w-5 h-5 text-[#0D9488] mb-1.5" />
          <span className="font-semibold text-[#111827] text-xs">Vector Embeddings</span>
          <span className="text-[10px] text-[#9CA3AF] mt-0.5">pgvector & Indexing</span>
        </div>

        {/* Step 3: Connected Knowledge */}
        <div className="p-3 bg-white border border-[#E8E8E4] rounded-md flex flex-col items-center">
          <Network className="w-5 h-5 text-[#4B5563] mb-1.5" />
          <span className="font-semibold text-[#111827] text-xs">Connected Graph</span>
          <span className="text-[10px] text-[#9CA3AF] mt-0.5">Semantic Relations</span>
        </div>

        {/* Step 4: Hybrid Search */}
        <div className="p-3 bg-white border border-[#E8E8E4] rounded-md flex flex-col items-center">
          <Search className="w-5 h-5 text-[#0D9488] mb-1.5" />
          <span className="font-semibold text-[#111827] text-xs">Hybrid Search</span>
          <span className="text-[10px] text-[#9CA3AF] mt-0.5">Contextual Recall</span>
        </div>
      </div>
    </div>
  );
}

