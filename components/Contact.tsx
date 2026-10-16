import { Github, Linkedin, Mail, ArrowUpRight, Download } from "lucide-react";
import Reveal from "./Reveal";

const EMAIL = "usamaaliawan88@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <Reveal>
            <div>
              <span className="text-xs font-mono text-[#38685A] dark:text-[#9AC7A7] tracking-wider uppercase font-semibold block mb-3">
                Contact
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#222923] dark:text-[#EEF2EC] mb-4">
                Get in touch.
              </h2>
              <p className="text-base sm:text-lg text-[#59645D] dark:text-[#B3BDB5] leading-relaxed mb-8">
                I'm interested in AI engineering, machine learning, and Python backend roles. Email me or connect on LinkedIn.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#222923] dark:bg-[#EEF2EC] text-white dark:text-[#222923] hover:bg-[#232E28] dark:hover:bg-[#E5E7EB] hover:-translate-y-0.5 motion-reduce:transform-none text-xs font-semibold tracking-wide transition-all shadow-sm group"
              >
                <Mail className="w-4 h-4 text-[#E6F0E8] dark:text-[#38685A]" />
                <span>Email me</span>
                <ArrowUpRight className="w-4 h-4 text-[#818980] group-hover:text-white dark:group-hover:text-[#222923] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="/Usama_Ali_Resume.pdf"
                target="_blank"
                download="Usama_Ali_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] text-[#222923] dark:text-[#EEF2EC] hover:bg-[#F1F0EB] dark:hover:bg-[#232E28] hover:border-[#38685A]/40 dark:hover:border-[#9AC7A7]/40 hover:-translate-y-0.5 motion-reduce:transform-none text-xs font-semibold tracking-wide transition-all shadow-sm group"
              >
                <Download className="w-4 h-4 text-[#38685A] dark:text-[#9AC7A7]" />
                <span>Download PDF</span>
              </a>

              <a
                href="https://github.com/UsamaAliK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] text-[#222923] dark:text-[#EEF2EC] hover:bg-[#F1F0EB] dark:hover:bg-[#232E28] hover:border-[#38685A]/40 dark:hover:border-[#9AC7A7]/40 hover:-translate-y-0.5 motion-reduce:transform-none text-xs font-semibold tracking-wide transition-all shadow-sm group"
              >
                <Github className="w-4 h-4 text-[#59645D] dark:text-[#B3BDB5]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 text-[#818980] group-hover:text-[#38685A] dark:group-hover:text-[#9AC7A7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/usama-ali-ai-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-[#1B2420] border border-[#E4E4DC] dark:border-[#2B3830] text-[#222923] dark:text-[#EEF2EC] hover:bg-[#F1F0EB] dark:hover:bg-[#232E28] hover:border-[#38685A]/40 dark:hover:border-[#9AC7A7]/40 hover:-translate-y-0.5 motion-reduce:transform-none text-xs font-semibold tracking-wide transition-all shadow-sm group"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-[#818980] group-hover:text-[#38685A] dark:group-hover:text-[#9AC7A7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
