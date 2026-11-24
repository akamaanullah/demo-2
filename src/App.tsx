import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_PROFILE, ProjectItem, SERVICES } from './data/portfolioData';
import { AmbientBackdrop } from './components/AmbientBackdrop';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ProjectModal } from './components/ProjectModal';

const MARQUEE_PHRASES = [
  'interface architecture',
  'frosted glass systems',
  'crimson & obsidian craft',
  'motion engineering',
  'html · css · javascript',
  'digital flagships',
];

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].title);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [inquiryContextNote, setInquiryContextNote] = useState<string>('');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const handleStartProject = () => {
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInquireSimilar = (projectTitle: string) => {
    setActiveProject(null);
    setInquiryContextNote(projectTitle);
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FAFAFA] text-[#09090B] transition-colors duration-300 dark:bg-[#070709] dark:text-white">
      <AmbientBackdrop />

      <div className="relative z-10">
        <Navbar onStartProject={handleStartProject} />

        <main>
          <HeroSection theme={theme} onToggleTheme={setTheme} />

          {/* Subtle Editorial Marquee Divider */}
          <div
            aria-hidden="true"
            className="overflow-hidden border-y border-zinc-900/10 bg-white/60 py-4 backdrop-blur-sm dark:border-white/10 dark:bg-black/45"
          >
            <div className="animate-marquee flex items-center gap-8 text-xs font-semibold tracking-[0.14em] text-zinc-500 dark:text-zinc-400">
              {[...MARQUEE_PHRASES, ...MARQUEE_PHRASES].map((phrase, index) => (
                <span key={`${phrase}-${index}`} className="flex items-center gap-8 whitespace-nowrap">
                  <span>{phrase}</span>
                  <span className="text-[#E11D48]">·</span>
                </span>
              ))}
            </div>
          </div>

          <AboutSection />

          <ServicesSection
            selectedServiceId={selectedService}
            onSelectService={setSelectedService}
          />

          <ProjectsSection onOpenProject={setActiveProject} />

          <ContactSection
            preselectedService={selectedService}
            inquiryContextNote={inquiryContextNote}
          />
        </main>

        {/* Clean Minimal Footer */}
        <footer className="border-t border-zinc-900/10 bg-white/75 py-10 backdrop-blur-md dark:border-white/10 dark:bg-black/70">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
            <div>
              <span className="font-display text-base font-extrabold text-zinc-950 dark:text-white">
                {PORTFOLIO_PROFILE.brandName}
              </span>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                © {new Date().getFullYear()} {PORTFOLIO_PROFILE.ownerName}. Glassmorphism portfolio template in Black, White &amp; Crimson Red.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-600 dark:text-zinc-300">
              <a href="#about" className="transition-colors hover:text-[#E11D48]">
                About
              </a>
              <a href="#services" className="transition-colors hover:text-[#E11D48]">
                Services
              </a>
              <a href="#projects" className="transition-colors hover:text-[#E11D48]">
                Projects
              </a>
              <a href="#contact" className="transition-colors hover:text-[#E11D48]">
                Contact
              </a>
              <a
                href="#top"
                aria-label="Back to top"
                className="inline-flex items-center gap-1 rounded-lg border border-zinc-900/10 bg-zinc-900/5 px-3 py-1.5 font-semibold text-zinc-900 transition-colors hover:border-[#E11D48] hover:text-[#E11D48] dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <span>Top</span>
                <ArrowUp className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onSelectProject={setActiveProject}
        onInquireSimilar={handleInquireSimilar}
      />
    </div>
  );
}
