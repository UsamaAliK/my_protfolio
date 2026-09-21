"use client";

export default function Approach() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      desc: "Start with the problem, the users, and what the system actually needs to accomplish.",
    },
    {
      number: "02",
      title: "Build",
      desc: "Start with a simple working pipeline before introducing unnecessary complexity.",
    },
    {
      number: "03",
      title: "Evaluate",
      desc: "Test retrieval quality, model outputs, edge cases, and the overall user experience.",
    },
    {
      number: "04",
      title: "Improve",
      desc: "Iterate toward reliability, maintainability, and production readiness.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-[#E8E8E4]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[#0D9488] tracking-wider uppercase font-semibold block mb-3">
            04 / Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mb-3">
            How I build
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            My engineering process prioritizes clarity, systematic evaluation, and incremental reliability.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 bg-white border border-[#E8E8E4] rounded-xl hover:border-[#0D9488]/40 transition-colors shadow-2xs flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#0D9488] block mb-3">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-[#111827] mb-2 group-hover:text-[#0D9488] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#E8E8E4]/50 flex items-center justify-between text-[10px] font-mono text-[#9CA3AF]">
                <span>Phase {step.number}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8E8E4] group-hover:bg-[#0D9488] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

