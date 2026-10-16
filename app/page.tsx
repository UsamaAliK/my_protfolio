import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FAF9F6] dark:bg-[#121815] text-[#222923] dark:text-[#EEF2EC]">
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
