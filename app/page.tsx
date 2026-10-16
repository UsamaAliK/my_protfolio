import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FBFBF9] dark:bg-[#0B0F1A] text-[#111827] dark:text-[#F9FAFB]">
      <Navbar />
      <main className="relative z-10 flex-grow">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <GitHubSection />
        <Contact />
      </main>
    </div>
  );
}
