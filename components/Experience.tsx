import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

export default function Experience() {
  const experiences = [
    {
      role: "GenAI Engineer Intern",
      company: "CypherShield",
      period: "July – November 2025",
      type: "Internship",
      highlights: [
        "Integrated LLM APIs into backend services, using Pydantic validation and retries to handle inconsistent responses.",
        "Automated data processing with n8n webhooks, Python scripts, and internal REST endpoints.",
        "Added checks for retrieval quality, latency, and response consistency.",
      ],
      skills: ["LLM Orchestration", "Python", "FastAPI", "N8N Automation", "Pydantic", "API Integration"],
    },
  ];

  return (
    <section id="experience" className="py-10 sm:py-14 border-b border-[#E4E4DC]/60 dark:border-[#2B3830]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <Reveal className="max-w-2xl mb-6">
          <div>
            <span className="text-xs font-mono text-[#38685A] dark:text-[#9AC7A7] tracking-wider uppercase font-semibold block mb-3">
              Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#222923] dark:text-[#EEF2EC] mb-3">
              Work Experience
            </h2>
            <p className="text-sm sm:text-base text-[#59645D] dark:text-[#B3BDB5] leading-relaxed">
              At CypherShield, I worked on LLM integrations and the backend workflows around them.
            </p>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={80}>
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E4E4DC] dark:border-[#2B3830]">
              <Briefcase className="w-4 h-4 text-[#38685A] dark:text-[#9AC7A7]" />
              <h3 className="text-sm font-semibold text-[#222923] dark:text-[#EEF2EC] font-mono uppercase tracking-wider">
                Positions Held
              </h3>
            </div>
          </Reveal>

          {experiences.map((exp, index) => (
            <Reveal key={exp.role} delay={160 + index * 80}>
              <div className="bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] rounded-xl p-6 hover:border-[#38685A]/40 dark:hover:border-[#9AC7A7]/40 transition-colors shadow-2xs group">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-base font-bold text-[#222923] dark:text-[#EEF2EC] group-hover:text-[#38685A] dark:group-hover:text-[#9AC7A7] transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-semibold text-[#59645D] dark:text-[#B3BDB5] mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F1F0EB] dark:bg-[#232E28] border border-[#E4E4DC] dark:border-[#39483D] text-[11px] font-mono text-[#59645D] dark:text-[#B3BDB5]">
                    <Calendar className="w-3 h-3 text-[#38685A] dark:text-[#9AC7A7]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 my-4">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#59645D] dark:text-[#B3BDB5] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38685A] dark:text-[#9AC7A7] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-[#E4E4DC]/60 dark:border-[#2B3830]/60 flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-[#FAF9F6] dark:bg-[#232E28] border border-[#E4E4DC] dark:border-[#39483D] text-[10px] font-mono text-[#59645D] dark:text-[#B3BDB5]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
