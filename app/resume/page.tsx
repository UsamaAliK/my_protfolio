import Navbar from "@/components/Navbar";
import { Download, ArrowLeft, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Usama Ali — Resume",
  description: "Resume and professional summary of Usama Ali, AI Engineer and ML Engineer.",
};

const RESUME_PDF = "/Usama_Ali_Resume.pdf";

export default function ResumePage() {
  const pdfParams = "#view=FitH&toolbar=0&navpanes=0&scrollbar=1";

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F8F9FA] dark:bg-[#0B0F19] text-[#1E293B] dark:text-[#F1F5F9] transition-colors">
      <Navbar />

      <main className="relative z-10 flex-grow max-w-4xl w-full mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Navigation back and Download Resume header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8F0] dark:border-[#1E293B]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#94A3B8] hover:text-[#4A6B82] dark:hover:text-[#8EB1D6] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#121722] border border-[#E2E8F0] dark:border-[#1E2638] text-[#1E293B] dark:text-[#F1F5F9] hover:border-[#4A6B82]/40 dark:hover:border-[#8EB1D6]/40 text-xs font-semibold shadow-xs transition-all"
            >
              <ExternalLink className="w-4 h-4 text-[#4A6B82] dark:text-[#8EB1D6]" />
              <span>Open in new tab</span>
            </a>

            <a
              href={RESUME_PDF}
              download="Usama_Ali_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4A6B82] hover:bg-[#3D596E] text-white dark:bg-[#8EB1D6] dark:text-[#0B1019] dark:hover:bg-[#A3C5EA] text-xs font-semibold shadow-xs transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="bg-[#FFFFFF] dark:bg-[#121722] border border-[#E2E8F0] dark:border-[#1E2638] rounded-2xl p-3 sm:p-4 shadow-[0_4px_25px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between gap-3 px-2 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#94A3B8]">
              <FileText className="w-4 h-4 text-[#4A6B82] dark:text-[#8EB1D6]" />
              <span>Usama_Ali_Resume.pdf</span>
            </div>
            <a
              href={RESUME_PDF}
              download="Usama_Ali_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EBF1F7] dark:bg-[#1A2536] text-[#3D5A70] dark:text-[#8EB1D6] border border-[#D5E2EE] dark:border-[#24354D] hover:bg-[#DFEAF4] dark:hover:bg-[#202E42] text-[11px] font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>

          <object
            data={`${RESUME_PDF}${pdfParams}`}
            type="application/pdf"
            className="w-full h-[calc(100vh-240px)] min-h-[480px] sm:min-h-[560px] sm:h-[70vh] rounded-xl border border-[#E2E8F0] dark:border-[#1E2638] bg-[#F1F5F9] dark:bg-[#0B0F19]"
            aria-label="Usama Ali resume PDF"
          >
            <iframe
              src={`${RESUME_PDF}${pdfParams}`}
              title="Usama Ali resume PDF"
              loading="lazy"
              className="w-full h-[calc(100vh-240px)] min-h-[480px] sm:min-h-[560px] sm:h-[70vh] rounded-xl border border-[#E2E8F0] dark:border-[#1E2638]"
            />
          </object>
        </div>

        <p className="mt-5 text-center text-xs font-mono text-[#94A3B8] dark:text-[#64748B]">
          If the preview does not load,{" "}
          <a
            href={RESUME_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4A6B82] dark:text-[#8EB1D6] underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            open the PDF directly
          </a>{" "}
          or download it above.
        </p>
      </main>
    </div>
  );
}
