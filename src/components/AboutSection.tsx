import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { ResilientImage } from './ResilientImage';

type AboutTab = 'experience' | 'craft' | 'recognition';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AboutTab>('experience');

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#E11D48]">
              About the Practice
            </p>
            <h2
              className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Bridging bold visual craft with{' '}
              <span className="text-[#E11D48]">resilient</span> code.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Engineered to preserve visual precision across semantic HTML, layered CSS glassmorphism, and interactive JavaScript.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Studio Photography + Manifesto */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <GlassCard className="overflow-hidden p-2.5">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                <ResilientImage
                  src={PORTFOLIO_PROFILE.studioImage}
                  alt="Minimalist white and black architectural design studio with crimson sculpture"
                  fallbackTitle="Studio Workspace"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3.5 text-xs font-medium text-white/90">
                  Zurich Studio · Concrete, Steel &amp; Crimson
                </div>
              </div>
            </GlassCard>

            <GlassCard interactive={false} className="flex-1 p-6 sm:p-7">
              <p className="font-display text-lg font-bold leading-snug text-zinc-950 dark:text-white">
                {PORTFOLIO_PROFILE.aboutLead}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {PORTFOLIO_PROFILE.aboutBody}
              </p>
            </GlassCard>
          </div>

          {/* Interactive Tabbed Background & Craft Details */}
          <div className="lg:col-span-7">
            <GlassCard interactive={false} className="flex h-full flex-col p-6 sm:p-8">
              {/* Functional Segmented Tab Bar */}
              <div
                role="tablist"
                aria-label="Studio background details"
                className="inline-flex w-full flex-wrap items-center gap-1 rounded-xl border border-zinc-900/10 dark:border-white/10 bg-zinc-900/5 dark:bg-black/45 p-1 sm:w-auto sm:self-start"
              >
                {(
                  [
                    { id: 'experience', label: 'Experience' },
                    { id: 'craft', label: 'Craft & Stack' },
                    { id: 'recognition', label: 'Recognition' },
                  ] as const
                ).map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      type="button"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-lg px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48] ${
                        isActive
                          ? 'bg-[#E11D48] text-white shadow-sm'
                          : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Area */}
              <div className="mt-7 flex-1">
                <AnimatePresence mode="wait">
                  {activeTab === 'experience' && (
                    <motion.div
                      key="experience"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="divide-y divide-zinc-900/10 dark:divide-white/10"
                    >
                      {PORTFOLIO_PROFILE.experience.map((item) => (
                        <div
                          key={`${item.period}-${item.organization}`}
                          className="py-5 first:pt-0 last:pb-0"
                        >
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3 className="font-display text-base font-bold text-zinc-950 dark:text-white">
                              {item.role}
                            </h3>
                            <span className="text-xs font-semibold tabular-nums text-[#E11D48]">
                              {item.period}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                            {item.organization}
                          </p>
                          <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'craft' && (
                    <motion.div
                      key="craft"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="grid grid-cols-1 gap-8 sm:grid-cols-2"
                    >
                      {PORTFOLIO_PROFILE.craftPillars.map((pillar) => (
                        <div key={pillar.title} className="space-y-4">
                          <h3 className="border-b border-zinc-900/10 dark:border-white/10 pb-3 font-display text-base font-bold text-zinc-950 dark:text-white">
                            {pillar.title}
                          </h3>
                          <ul className="space-y-3">
                            {pillar.items.map((skill) => (
                              <li
                                key={skill}
                                className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                              >
                                <span
                                  aria-hidden="true"
                                  className="h-[2px] w-3.5 shrink-0 bg-[#E11D48]"
                                />
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'recognition' && (
                    <motion.div
                      key="recognition"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="divide-y divide-zinc-900/10 dark:divide-white/10"
                    >
                      {PORTFOLIO_PROFILE.recognition.map((award) => (
                        <div
                          key={award.title}
                          className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                        >
                          <div>
                            <h3 className="font-display text-base font-bold text-zinc-950 dark:text-white">
                              {award.title}
                            </h3>
                            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                              {award.body}
                            </p>
                          </div>
                          <span className="text-sm font-bold tabular-nums text-[#E11D48]">
                            {award.year}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
