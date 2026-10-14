import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfiniteLogoMarquee from './components/InfiniteLogoMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectCaseStudy from './components/ProjectCaseStudy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-200 selection:bg-blue-600 selection:text-white flex flex-col justify-between relative overflow-x-hidden">
      {/* Sticky Navigation Bar */}
      <Navbar onNavigate={handleCloseCaseStudy} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Infinite Logo Marquee directly beneath Hero */}
        <InfiniteLogoMarquee />

        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Featured Projects & Case Studies */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Contact & Inquiry Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top button */}
      <ScrollToTop />

      {/* Full-screen Case Study Modal rendered at Root Level */}
      {selectedProject && (
        <ProjectCaseStudy
          project={selectedProject}
          onClose={handleCloseCaseStudy}
        />
      )}
    </div>
  );
}
