"use client";

import { Film, Sliders, Layers, Award } from "lucide-react";

export default function MovieRecVisual() {
  return (
    <div className="w-full bg-[#FAF9F6] dark:bg-[#121815] border border-[#E4E4DC] dark:border-[#2B3830] rounded-lg p-3.5 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-[#E4E4DC] dark:border-[#2B3830] pb-2 mb-2.5 text-[#59645D] dark:text-[#B3BDB5]">
        <div className="flex items-center gap-1.5 font-semibold text-[#222923] dark:text-[#EEF2EC] text-[11px]">
          <Film className="w-3.5 h-3.5 text-[#38685A]" />
          <span>Hybrid ML Recommendation Pipeline</span>
        </div>
        <span className="text-[10px] text-[#59645D] dark:text-[#B3BDB5]">MovieLens Dataset</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-[10px]">
        <div className="p-2 bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] rounded flex flex-col items-center justify-center">
          <Layers className="w-3.5 h-3.5 text-[#38685A] mb-1" />
          <span className="text-[#38685A] font-semibold block mb-0.5">SVD Matrix Factorization</span>
          <span className="text-[#59645D] dark:text-[#B3BDB5]">Collaborative Filtering</span>
        </div>

        <div className="p-2 bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] rounded flex flex-col items-center justify-center">
          <Sliders className="w-3.5 h-3.5 text-[#38685A] mb-1" />
          <span className="text-[#38685A] font-semibold block mb-0.5">Cosine Similarity</span>
          <span className="text-[#59645D] dark:text-[#B3BDB5]">Content-Based Filtering</span>
        </div>

        <div className="p-2 bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] rounded flex flex-col items-center justify-center">
          <Award className="w-3.5 h-3.5 text-[#38685A] mb-1" />
          <span className="text-[#38685A] font-semibold block mb-0.5">Weighted Hybrid Score</span>
          <span className="text-[#59645D] dark:text-[#B3BDB5]">Streamlit Interactive UI</span>
        </div>
      </div>
    </div>
  );
}
