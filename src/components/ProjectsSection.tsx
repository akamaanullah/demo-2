import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import {
  PROJECTS,
  ProjectCategory,
  ProjectItem,
} from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { ResilientImage } from './ResilientImage';

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectItem) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Product & Web',
  'Brand Identity',
  'Spatial & Hardware',
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#E11D48]">
              Selected Works
            </p>
            <h2
              className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Case studies shaped by{' '}
              <span className="text-[#E11D48]">contrast</span> and precision.
            </h2>
          </div>

          {/* Functional Segmented Filter Controls */}
          <div
            role="group"
            aria-label="Filter projects by category"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-zinc-900/10 dark:border-white/10 bg-white/80 dark:bg-black/50 p-1 backdrop-blur-md"
          >
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48] ${
                    active
                      ? 'bg-[#E11D48] text-white'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const isSpanWide =
              activeCategory === 'All' && index === 0 && filteredProjects.length > 2;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={isSpanWide ? 'md:col-span-2' : ''}
              >
                <GlassCard className="overflow-hidden p-3 sm:p-4">
                  <button
                    type="button"
                    onClick={() => onOpenProject(project)}
                    className="block w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48] rounded-xl"
                  >
                    <div
                      className={`grid grid-cols-1 gap-5 ${
                        isSpanWide ? 'lg:grid-cols-12 lg:items-center lg:gap-8' : ''
                      }`}
                    >
                      {/* Media Container */}
                      <div
                        className={`relative overflow-hidden rounded-xl ${
                          isSpanWide
                            ? 'aspect-[4/3] lg:col-span-7'
                            : 'aspect-[4/3]'
                        }`}
                      >
                        <ResilientImage
                          src={project.image}
                          alt={`${project.title} — ${project.client}`}
                          fallbackTitle={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                      </div>

                      {/* Clean Editorial Copy & Unboxed Metadata */}
                      <div
                        className={`flex flex-col justify-between px-1 pb-1 ${
                          isSpanWide ? 'lg:col-span-5 lg:py-4 lg:pr-4' : ''
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                            <span className="font-semibold text-[#E11D48]">
                              {project.category}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="tabular-nums">{project.year}</span>
                            <span aria-hidden="true">·</span>
                            <span>{project.client}</span>
                          </div>

                          <h3 className="mt-2.5 font-display text-xl font-bold text-zinc-950 dark:text-white transition-colors group-hover:text-[#E11D48] sm:text-2xl">
                            {project.title}
                          </h3>

                          <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            {project.summary}
                          </p>
                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-zinc-900/10 dark:border-white/10 pt-4">
                          <span className="text-xs text-zinc-500 dark:text-zinc-400">
                            {project.deliverables.join(' / ')}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-950 dark:text-white whitespace-nowrap shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[#E11D48]">
                            View Case Study
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </GlassCard>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
