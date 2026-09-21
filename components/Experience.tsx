"use client";

import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

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

  const education = {
    degree: "Bachelor of Science in Computer Science",
    period: "2022 – 2026",
    institution: "University of Management and Technology (UMT), Lahore",
    details:
      "Comprehensive coursework in Computer Science fundamentals, Machine Learning, Database Architecture, Software Engineering, and AI application development.",
  };

  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-[#E8E8E4]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono text-[#0D9488] tracking-wider uppercase font-semibold block mb-3">
            02 / Industry & Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] mb-3">
            Experience & Education
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            Hands-on work building production AI workflows and solid academic background in Computer Science.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Work Experience Column (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E8E8E4]">
              <Briefcase className="w-4 h-4 text-[#0D9488]" />
              <h3 className="text-sm font-semibold text-[#111827] font-mono uppercase tracking-wider">
                Work Experience
              </h3>
            </div>

            {experiences.map((exp) => (
              <div
                key={exp.role}
                className="bg-white border border-[#E8E8E4] rounded-xl p-6 hover:border-[#0D9488]/40 transition-colors shadow-2xs group"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-base font-bold text-[#111827] group-hover:text-[#0D9488] transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-semibold text-[#4B5563] mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F4F4F0] border border-[#E8E8E4] text-[11px] font-mono text-[#6B7280]">
                    <Calendar className="w-3 h-3 text-[#0D9488]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 my-4">
                  {exp.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#4B5563] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-[#E8E8E4]/60 flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded bg-[#FBFBF9] border border-[#E8E8E4] text-[10px] font-mono text-[#6B7280]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education Column (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E8E8E4]">
              <GraduationCap className="w-4 h-4 text-[#0D9488]" />
              <h3 className="text-sm font-semibold text-[#111827] font-mono uppercase tracking-wider">
                Education
              </h3>
            </div>

            <div className="bg-white border border-[#E8E8E4] rounded-xl p-6 hover:border-[#0D9488]/40 transition-colors shadow-2xs">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono text-[#0D9488] uppercase font-semibold">
                  Undergraduate
                </span>
                <span className="text-[11px] font-mono text-[#6B7280]">
                  {education.period}
                </span>
              </div>

              <h4 className="text-base font-bold text-[#111827]">
                {education.degree}
              </h4>
              <p className="text-xs font-semibold text-[#4B5563] mt-1">
                {education.institution}
              </p>

              <p className="text-xs text-[#6B7280] leading-relaxed mt-4 pt-3 border-t border-[#E8E8E4]/60">
                {education.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

