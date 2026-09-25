"use client";

import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "GenAI Engineer Intern",
      company: "CypherShield",
      period: "July – November 2025",
      type: "Internship",
      highlights: [
        "Contributed to GenAI application workflows by integrating and working with LLM APIs.",
        "Built automation workflows using N8N to streamline recurring development tasks.",
        "Collaborated with team members to communicate requirements and support GenAI development activities.",
      ],
      skills: ["GenAI Workflows", "LLM APIs", "N8N Automation", "Python", "API Integration"],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-[#E8E8E4]/60 dark:border-[#1F2937]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[#0D9488] dark:text-[#5EEAD4] tracking-wider uppercase font-semibold block mb-3">
            01 / Industry Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] mb-3">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
            Hands-on work building production AI workflows.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E8E8E4] dark:border-[#1F2937]">
            <Briefcase className="w-4 h-4 text-[#0D9488] dark:text-[#5EEAD4]" />
            <h3 className="text-sm font-semibold text-[#111827] dark:text-[#F9FAFB] font-mono uppercase tracking-wider">
              Roles
            </h3>
          </div>

          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="bg-white dark:bg-[#111827] border border-[#E8E8E4] dark:border-[#1F2937] rounded-xl p-6 hover:border-[#0D9488]/40 dark:hover:border-[#5EEAD4]/40 transition-colors shadow-2xs group"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-base font-bold text-[#111827] dark:text-[#F9FAFB] group-hover:text-[#0D9488] dark:group-hover:text-[#5EEAD4] transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-xs font-semibold text-[#4B5563] dark:text-[#9CA3AF] mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F4F4F0] dark:bg-[#1F2937] border border-[#E8E8E4] dark:border-[#374151] text-[11px] font-mono text-[#6B7280] dark:text-[#9CA3AF]">
                  <Calendar className="w-3 h-3 text-[#0D9488] dark:text-[#5EEAD4]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 my-4">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] dark:text-[#5EEAD4] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-[#E8E8E4]/60 dark:border-[#1F2937]/60 flex flex-wrap gap-1.5">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded bg-[#FBFBF9] dark:bg-[#1F2937] border border-[#E8E8E4] dark:border-[#374151] text-[10px] font-mono text-[#6B7280] dark:text-[#9CA3AF]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
