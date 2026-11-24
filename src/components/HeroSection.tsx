import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Moon, Sun } from 'lucide-react';
import { PORTFOLIO_PROFILE } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  theme: 'dark' | 'light';
  onToggleTheme: (mode: 'dark' | 'light') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  onToggleTheme,
}) => {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top Utility Row: Editorial Kicker + Black&Red / White&Red Palette Switcher */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold text-[#E11D48]">
              {PORTFOLIO_PROFILE.ownerName}
            </span>
            <span aria-hidden="true">·</span>
            <span>{PORTFOLIO_PROFILE.roleTitle}</span>
            <span aria-hidden="true">·</span>
            <span>{PORTFOLIO_PROFILE.location}</span>
          </div>

          {/* Interactive Palette Mode Switcher (Black & Red vs White & Red) */}
          <div
            role="group"
            aria-label="Color palette mode"
            className="inline-flex items-center gap-1 rounded-xl border border-zinc-900/10 dark:border-white/12 bg-white/75 dark:bg-white/[0.04] p-1 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => onToggleTheme('dark')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'bg-[#E11D48] text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              <Moon className="h-3.5 w-3.5" />
              <span>Black &amp; Red</span>
            </button>
            <button
              type="button"
              onClick={() => onToggleTheme('light')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                theme === 'light'
                  ? 'bg-[#E11D48] text-white'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              <Sun className="h-3.5 w-3.5" />
              <span>White &amp; Red</span>
            </button>
          </div>
        </div>

        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Typographic Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div className="space-y-6">
              <h1
                className="font-display text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-[4.2rem] lg:leading-[1.03]"
                style={{ textWrap: 'balance' }}
              >
                {PORTFOLIO_PROFILE.headlineLead}{' '}
                <span className="relative inline-block text-[#E11D48]">
                  {PORTFOLIO_PROFILE.headlineAccent}
                  <svg
                    viewBox="0 0 180 14"
                    className="absolute -bottom-1 left-0 w-full text-[#E11D48]"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 10 C 48 3, 132 3, 178 9"
                      stroke="currentColor"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                {PORTFOLIO_PROFILE.headlineEnd}
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
                {PORTFOLIO_PROFILE.heroDescription}
              </p>

              {/* Primary CTA + Glass Secondary CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#E11D48] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#BE123C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48]"
                >
                  <span>Explore Selected Work</span>
                  <ArrowDownRight className="h-4 w-4" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-900/15 dark:border-white/15 bg-white/60 dark:bg-white/[0.05] px-5 py-3.5 text-sm font-semibold text-zinc-950 dark:text-white backdrop-blur-md transition-colors hover:border-[#E11D48] hover:text-[#E11D48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48]"
                >
                  <span>View Services</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Clean unboxed availability line */}
            <div className="mt-10 border-t border-zinc-900/10 dark:border-white/10 pt-5 text-xs text-zinc-600 dark:text-zinc-400 sm:mt-12">
              {PORTFOLIO_PROFILE.availability}
              <span className="mx-2 text-zinc-400 dark:text-zinc-600" aria-hidden="true">
                /
              </span>
              <a
                href={`mailto:${PORTFOLIO_PROFILE.email}`}
                className="font-medium text-zinc-950 dark:text-white transition-colors hover:text-[#E11D48]"
              >
                {PORTFOLIO_PROFILE.email}
              </a>
            </div>
          </motion.div>

          {/* Right Framed Visual with Subtle Geometric SVG Orbit + Glass Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            {/* Geometric SVG orbital ring behind glass frame */}
            <svg
              viewBox="0 0 320 320"
              aria-hidden="true"
              className="animate-slow-spin pointer-events-none absolute -top-10 -right-10 h-52 w-52 text-[#E11D48]/35"
              fill="none"
            >
              <circle
                cx="160"
                cy="160"
                r="140"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="6 10"
              />
              <circle
                cx="160"
                cy="160"
                r="108"
                className="stroke-zinc-900/15 dark:stroke-white/15"
                strokeWidth="1"
              />
            </svg>

            <GlassCard className="h-full min-h-[390px] p-2.5 sm:min-h-[470px]">
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <ResilientImage
                  src={PORTFOLIO_PROFILE.heroImage}
                  alt={`${PORTFOLIO_PROFILE.ownerName} in black and crimson architectural studio`}
                  fallbackTitle={PORTFOLIO_PROFILE.brandName}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                {/* Contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Frosted Glass Info Plate */}
                <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-black/65 px-4 py-3.5 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-display text-sm font-bold text-white">
                        Interface &amp; Visual Craft
                      </p>
                      <p className="mt-0.5 text-xs text-zinc-300">
                        HTML · CSS · JavaScript · Glass UI
                      </p>
                    </div>
                    <span className="text-xs font-bold tabular-nums text-[#E11D48]">
                      Est. 2018
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Full-Width 4-Column KPI Strip Below Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <GlassCard interactive={false} className="px-6 py-6 sm:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
              {PORTFOLIO_PROFILE.stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`${
                    idx > 0
                      ? 'sm:border-l sm:border-zinc-900/10 dark:sm:border-white/10 sm:pl-8'
                      : ''
                  }`}
                >
                  <div className="font-display text-2xl font-extrabold tabular-nums text-zinc-950 dark:text-white sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
