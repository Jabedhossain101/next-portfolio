import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import About from '@/components/About';
import Education from '@/components/Education';
import Navbar from '@/components/Navbar';
import CodeTerminal from '@/components/CodeTerminal';

export default function Home() {
  return (
    <main className="px-4 pt-20">
      <Navbar />
      <Hero />
      <CodeTerminal />
      <About></About>
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
