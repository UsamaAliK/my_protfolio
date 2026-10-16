import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAF9F6] dark:bg-[#121815] text-[#222923] dark:text-[#EEF2EC] px-4">
      <div className="text-center max-w-md">
        <span className="text-xs font-mono text-[#38685A] uppercase tracking-wider font-semibold">
          404 — Page Not Found
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-[#222923] dark:text-[#EEF2EC] mt-2 mb-4">
          This page does not exist.
        </h1>
        <p className="text-sm text-[#59645D] dark:text-[#B3BDB5] mb-6">
          The requested page could not be found. Return to the home portfolio page.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#222923] dark:bg-[#EEF2EC] text-white dark:text-[#222923] text-xs font-semibold hover:bg-[#232E28] dark:hover:bg-[#E5E7EB] transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
