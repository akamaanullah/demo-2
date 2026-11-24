import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ProjectItem, PROJECTS } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onInquireSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onInquireSimilar,
}) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject =
    PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md sm:p-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl p-5 sm:p-8"
        >
          {/* Top Modal Controls */}
          <div className="flex items-center justify-between gap-4 border-b border-zinc-900/10 dark:border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <span className="font-semibold text-[#E11D48]">{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{project.year}</span>
              <span aria-hidden="true">·</span>
              <span>{project.client}</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-900/10 dark:border-white/10 bg-zinc-900/5 dark:bg-white/5 text-zinc-900 dark:text-white transition-colors hover:border-[#E11D48] hover:text-[#E11D48] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* High-Resolution Media Frame */}
          <div className="mt-6 overflow-hidden rounded-xl border border-zinc-900/10 dark:border-white/10">
            <div className="aspect-[16/9] w-full">
              <ResilientImage
                src={project.image}
                alt={project.title}
                fallbackTitle={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Case Study Narrative & Tabular Metrics */}
          <div className="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-8">
              <h2
                id="modal-project-title"
                className="font-display text-2xl font-bold text-zinc-950 dark:text-white sm:text-3xl"
              >
                {project.title}
              </h2>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                {project.summary}
              </p>

              <div className="space-y-4 border-t border-zinc-900/10 dark:border-white/10 pt-5">
                <div>
                  <h3 className="font-display text-sm font-bold text-zinc-950 dark:text-white">
                    The Challenge
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-zinc-950 dark:text-white">
                    Solution &amp; Craft
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Spec Sheet */}
            <div className="flex flex-col justify-between gap-6 border-t border-zinc-900/10 dark:border-white/10 pt-5 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-7">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Measured Impact
                  </h3>
                  <div className="mt-3 space-y-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-baseline justify-between border-b border-zinc-900/10 dark:border-white/10 pb-2"
                      >
                        <span className="text-xs text-zinc-600 dark:text-zinc-300">
                          {metric.label}
                        </span>
                        <span className="font-display text-lg font-bold tabular-nums text-[#E11D48]">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    Deliverables
                  </h3>
                  <ul className="mt-2.5 space-y-1.5 text-xs font-medium text-zinc-900 dark:text-white">
                    {project.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onInquireSimilar(project.title)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E11D48] px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#BE123C] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48]"
              >
                <span>Discuss a Similar Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-zinc-900/10 dark:border-white/10 pt-5">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject)}
              className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-300 transition-colors hover:text-[#E11D48] cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous: {prevProject.title}</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-300 transition-colors hover:text-[#E11D48] cursor-pointer"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
