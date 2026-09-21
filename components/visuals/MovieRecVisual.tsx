"use client";

import { Film, Sliders, Layers, Award } from "lucide-react";

export default function MovieRecVisual() {
  return (
    <div className="w-full bg-[#FBFBF9] border border-[#E8E8E4] rounded-lg p-3.5 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-[#E8E8E4] pb-2 mb-2.5 text-[#6B7280]">
        <div className="flex items-center gap-1.5 font-semibold text-[#111827] text-[11px]">
          <Film className="w-3.5 h-3.5 text-[#0D9488]" />
          <span>Hybrid ML Recommendation Pipeline</span>
        </div>
        <span className="text-[10px] text-[#6B7280]">MovieLens Dataset</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-[10px]">
        <div className="p-2 bg-white border border-[#E8E8E4] rounded flex flex-col items-center justify-center">
          <Layers className="w-3.5 h-3.5 text-[#0D9488] mb-1" />
          <span className="text-[#0D9488] font-semibold block mb-0.5">SVD Matrix Factorization</span>
          <span className="text-[#6B7280]">Collaborative Filtering</span>
        </div>

        <div className="p-2 bg-white border border-[#E8E8E4] rounded flex flex-col items-center justify-center">
          <Sliders className="w-3.5 h-3.5 text-[#0D9488] mb-1" />
          <span className="text-[#0D9488] font-semibold block mb-0.5">Cosine Similarity</span>
          <span className="text-[#6B7280]">Content-Based Filtering</span>
        </div>

        <div className="p-2 bg-white border border-[#E8E8E4] rounded flex flex-col items-center justify-center">
          <Award className="w-3.5 h-3.5 text-[#0D9488] mb-1" />
          <span className="text-[#0D9488] font-semibold block mb-0.5">Weighted Hybrid Score</span>
          <span className="text-[#6B7280]">Streamlit Interactive UI</span>
        </div>
      </div>
    </div>
  );
}
