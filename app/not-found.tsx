import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FBFBF9] dark:bg-[#0B0F1A] text-[#111827] dark:text-[#F9FAFB] px-4">
      <div className="text-center max-w-md">
        <span className="text-xs font-mono text-[#0D9488] uppercase tracking-wider font-semibold">
          404 — Page Not Found
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-[#111827] dark:text-[#F9FAFB] mt-2 mb-4">
          This page does not exist.
        </h1>
        <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-6">
          The requested page could not be found. Return to the home portfolio page.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#111827] dark:bg-[#F9FAFB] text-white dark:text-[#111827] text-xs font-semibold hover:bg-[#1F2937] dark:hover:bg-[#E5E7EB] transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
