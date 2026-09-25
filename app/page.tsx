import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FBFBF9] dark:bg-[#0B0F1A] text-[#111827] dark:text-[#F9FAFB]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <GitHubSection />
        <Contact />
      </main>
    </div>
  );
}
