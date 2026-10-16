import Navbar from "@/components/Navbar";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Usama Ali — Resume",
  description: "Resume of Usama Ali, AI and machine learning engineer.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] dark:bg-[#121815] text-[#222923] dark:text-[#EEF2EC] transition-colors">
      <Navbar />

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 pt-24 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[#E4E4DC] dark:border-[#2B3830]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#59645D] dark:text-[#B3BDB5] hover:text-[#38685A] dark:hover:text-[#9AC7A7] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          <a
            href="/Usama_Ali_Resume.pdf"
            download="Usama_Ali_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#38685A] hover:bg-[#2D5549] text-white dark:bg-[#9AC7A7] dark:text-[#121815] text-xs font-semibold shadow-xs transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>

        <section aria-labelledby="resume-heading">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <h1 id="resume-heading" className="text-xl font-semibold text-[#222923] dark:text-[#EEF2EC]">
              Resume
            </h1>
            <a
              href="/Usama_Ali_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#38685A] hover:underline dark:text-[#9AC7A7]"
            >
              Open PDF in a new tab
            </a>
          </div>

          <iframe
            src="/Usama_Ali_Resume.pdf#view=FitH"
            title="Usama Ali's resume"
            className="h-[calc(100vh-13rem)] min-h-[500px] w-full rounded-xl border border-[#E4E4DC] bg-white dark:border-[#2B3830]"
          />
        </section>
      </main>
    </div>
  );
}
