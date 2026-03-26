import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="bg-grid opacity-[0.03] fixed inset-0 pointer-events-none -z-10"></div>

      <div className="space-y-4">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
