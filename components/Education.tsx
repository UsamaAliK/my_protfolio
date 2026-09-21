"use client";

import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="py-16 sm:py-24 border-b border-[#E8E8E4]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono text-[#0D9488] tracking-wider uppercase font-semibold block mb-3">
            05 / Academic Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
            Education
          </h2>
        </div>

        {/* Concise Education Card */}
        <div className="max-w-2xl bg-white border border-[#E8E8E4] rounded-xl p-6 sm:p-7 shadow-2xs hover:border-[#0D9488]/40 transition-colors flex items-start gap-5">
          <div className="p-3 rounded-lg bg-[#FBFBF9] border border-[#E8E8E4] text-[#0D9488] shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono text-[#6B7280] uppercase tracking-wider block mb-1">
              Undergraduate Degree
            </span>
            <h3 className="text-lg font-bold text-[#111827]">
              BS Computer Science
            </h3>
            <p className="text-sm font-medium text-[#4B5563] mt-0.5">
              University of Management and Technology (UMT)
            </p>
            <p className="text-xs text-[#6B7280] mt-3 leading-relaxed border-t border-[#E8E8E4]/60 pt-3">
              Focus on computer science fundamentals, algorithms, database systems, software design, and applied machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

