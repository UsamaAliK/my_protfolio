import {
  AppWindow,
  ArrowRight,
  BrainCircuit,
  Database,
  Inbox,
  Search,
  Server,
} from "lucide-react";

const stages = [
  { label: "Input", detail: "Queries & documents", icon: Inbox },
  { label: "AI & LLMs", detail: "Embeddings & generation", icon: BrainCircuit },
  { label: "RAG Pipeline", detail: "Search & retrieval", icon: Search },
  { label: "FastAPI Backend", detail: "REST APIs & validation", icon: Server },
  { label: "Database", detail: "Vector & SQL storage", icon: Database },
  { label: "Application", detail: "Interface for users", icon: AppWindow },
];

export default function TechStackFlow() {
  return (
    <div className="mt-10 sm:mt-12">
      <h2 className="text-xs font-mono text-[#4B5563] dark:text-[#9CA3AF] mb-3">
        How an AI feature comes together
      </h2>

      <div className="grid grid-cols-2 gap-2 sm:hidden">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <div key={stage.label} className="rounded-lg border border-[#E8E8E4] dark:border-[#1F2937] bg-white/80 dark:bg-[#111827]/80 px-3 py-3">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-3.5 h-3.5 text-[#0D9488] dark:text-[#5EEAD4]" aria-hidden="true" />
                <span className="text-[10px] font-mono text-[#9CA3AF] dark:text-[#6B7280]">0{index + 1}</span>
              </div>
              <h3 className="text-xs font-semibold text-[#111827] dark:text-[#F9FAFB] mb-1">{stage.label}</h3>
              <p className="text-[11px] leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">{stage.detail}</p>
            </div>
          );
        })}
      </div>

      <div className="hidden sm:flex sm:items-stretch gap-1.5">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <div className="contents" key={stage.label}>
              <div className="flex-1 min-w-0 rounded-lg border border-[#E8E8E4] dark:border-[#1F2937] bg-white/80 dark:bg-[#111827]/80 px-2.5 py-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Icon className="w-3.5 h-3.5 text-[#0D9488] dark:text-[#5EEAD4]" aria-hidden="true" />
                  <span className="text-[10px] font-mono text-[#9CA3AF] dark:text-[#6B7280]">0{index + 1}</span>
                </div>
                <h3 className="text-xs font-semibold text-[#111827] dark:text-[#F9FAFB] mb-1">{stage.label}</h3>
                <p className="text-[10px] leading-relaxed text-[#4B5563] dark:text-[#9CA3AF]">{stage.detail}</p>
              </div>
              {index < stages.length - 1 && (
                <div className="flex items-center justify-center text-[#9CA3AF] dark:text-[#6B7280]" aria-hidden="true">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
