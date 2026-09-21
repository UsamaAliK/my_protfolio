import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Approach from "@/components/Approach";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FBFBF9] text-[#111827]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Approach />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
