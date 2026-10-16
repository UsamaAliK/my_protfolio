"use client";

import { ArrowUpRight, ShieldCheck, RefreshCw } from "lucide-react";

export default function MindlyVisual() {
  return (
    <div className="w-full bg-[#FAFAFA] dark:bg-[#0E131F] border border-[#E2E8F0] dark:border-[#1E2638] rounded-xl overflow-hidden shadow-sm">
      {/* Browser Chrome Header */}
      <div className="bg-[#F1F5F9] dark:bg-[#151C2C] px-4 py-2.5 border-b border-[#E2E8F0] dark:border-[#1E2638] flex items-center justify-between gap-3">
        {/* macOS Window Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-md mx-auto flex items-center justify-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-[#0B0F19] border border-[#CBD5E1] dark:border-[#1E293B] text-[11px] font-mono text-[#64748B] dark:text-[#94A3B8] shadow-2xs">
          <ShieldCheck className="w-3 h-3 text-[#38685A] dark:text-[#9AC7A7]" />
          <a
            href="https://mindly.one"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:text-[#38685A] dark:hover:text-[#9AC7A7] transition-colors"
          >
            https://mindly.one
          </a>
        </div>

        {/* Live Link */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://mindly.one"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#38685A] dark:text-[#9AC7A7] hover:underline"
          >
            <span>Live Site</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Embedded Live Mindly Webpage */}
      <div className="relative w-full h-[460px] sm:h-[540px] bg-white dark:bg-[#121815]">
        <iframe
          src="https://mindly.one"
          title="Mindly Live Webpage"
          className="w-full h-full border-0"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </div>
  );
}
