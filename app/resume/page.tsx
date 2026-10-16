import Navbar from "@/components/Navbar";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Usama Ali — Resume",
  description: "Resume of Usama Ali, AI and machine learning engineer.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] dark:bg-[#0B0F1A] text-[#111827] dark:text-[#F9FAFB] transition-colors">
      <Navbar />

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 pt-24 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E8E8E4] dark:border-[#1F2937]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#4B5563] dark:text-[#9CA3AF] hover:text-[#0D9488] dark:hover:text-[#5EEAD4] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          <a
            href="/Usama_Ali_Resume.pdf"
            download="Usama_Ali_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white dark:bg-[#5EEAD4] dark:text-[#0B0F1A] text-xs font-semibold shadow-xs transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>

        <section aria-labelledby="resume-heading">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <h1 id="resume-heading" className="text-xl font-semibold text-[#111827] dark:text-[#F9FAFB]">
              Resume
            </h1>
            <a
              href="/Usama_Ali_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#0D9488] hover:underline dark:text-[#5EEAD4]"
            >
              Open PDF in a new tab
            </a>
          </div>

          <iframe
            src="/Usama_Ali_Resume.pdf#view=FitH"
            title="Usama Ali's resume"
            className="h-[calc(100vh-13rem)] min-h-[500px] w-full rounded-xl border border-[#E8E8E4] bg-white dark:border-[#1F2937]"
          />
        </section>
      </main>
    </div>
  );
}
