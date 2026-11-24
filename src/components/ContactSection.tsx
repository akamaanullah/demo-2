import React, { useState, useEffect } from 'react';
import { Check, Copy, Send, ArrowUpRight } from 'lucide-react';
import {
  PORTFOLIO_PROFILE,
  SERVICES,
  PROCESS_STEPS,
  TESTIMONIALS,
} from '../data/portfolioData';
import { GlassCard } from './GlassCard';

interface ContactSectionProps {
  preselectedService: string;
  inquiryContextNote: string;
}

const BUDGET_RANGES = ['$3k – $8k', '$8k – $18k', '$18k – $35k', '$35k+'];

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  inquiryContextNote,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(
    preselectedService || SERVICES[0].title
  );
  const [budget, setBudget] = useState(BUDGET_RANGES[1]);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (inquiryContextNote) {
      setMessage((prev) =>
        prev.trim()
          ? prev
          : `Interested in a scope similar to ${inquiryContextNote}.`
      );
    }
  }, [inquiryContextNote]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* Proof & Process Section directly adjacent to Projects */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Client Testimonials */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((item) => (
              <GlassCard
                key={item.name}
                interactive={false}
                className="flex flex-col justify-between p-6 sm:p-8"
              >
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200 sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-900/10 dark:border-white/10 pt-4">
                  <div>
                    <p className="font-display text-sm font-bold text-zinc-950 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {item.role} · {item.company}
                    </p>
                  </div>
                  <span className="text-xs font-bold tabular-nums text-[#E11D48]">
                    {item.outcome}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* 4-Step Studio Process Strip */}
          <GlassCard interactive={false} className="mt-8 p-6 sm:p-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="font-display text-xl font-bold text-zinc-950 dark:text-white">
                Studio Workflow
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Four structured phases from initial architecture to handover
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.step}
                  className={`${
                    idx > 0
                      ? 'lg:border-l lg:border-zinc-900/10 dark:lg:border-white/10 lg:pl-6'
                      : ''
                  }`}
                >
                  <span className="font-display text-xs font-bold tabular-nums text-[#E11D48]">
                    {step.step}.
                  </span>
                  <h3 className="mt-1.5 font-display text-base font-bold text-zinc-950 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Contact & Inquiry Form */}
      <section id="contact" className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <GlassCard interactive={false} className="p-6 sm:p-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              {/* Left Direct Info */}
              <div className="flex flex-col justify-between lg:col-span-5">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-[#E11D48]">
                    Start a Conversation
                  </p>
                  <h2
                    className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl"
                    style={{ textWrap: 'balance' }}
                  >
                    Let&apos;s build something{' '}
                    <span className="text-[#E11D48]">unmistakable</span>.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Share a brief outline of your product, timeline, or design system goals. Expect a thoughtful reply within one business day.
                  </p>

                  <div className="mt-8 space-y-4 border-t border-zinc-900/10 dark:border-white/10 pt-6">
                    <div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Direct Email
                      </p>
                      <div className="mt-1.5 flex items-center gap-3">
                        <a
                          href={`mailto:${PORTFOLIO_PROFILE.email}`}
                          className="font-display text-base font-bold text-zinc-950 dark:text-white transition-colors hover:text-[#E11D48]"
                        >
                          {PORTFOLIO_PROFILE.email}
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          aria-label="Copy email address"
                          className="inline-flex items-center gap-1 rounded-lg border border-zinc-900/10 dark:border-white/10 bg-zinc-900/5 dark:bg-white/5 px-2.5 py-1 text-xs text-zinc-700 dark:text-zinc-300 transition-colors hover:border-[#E11D48] hover:text-[#E11D48] cursor-pointer"
                        >
                          {copiedEmail ? (
                            <>
                              <Check className="h-3 w-3 text-[#E11D48]" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">
                        Studio Hours &amp; Base
                      </p>
                      <p className="mt-1 text-sm font-medium text-zinc-950 dark:text-white">
                        {PORTFOLIO_PROFILE.location} · Mon–Fri, CET
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clean Social Links */}
                <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-zinc-900/10 dark:border-white/10 pt-5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {[
                    { label: 'GitHub', href: 'https://github.com' },
                    { label: 'Dribbble', href: 'https://dribbble.com' },
                    { label: 'LinkedIn', href: 'https://linkedin.com' },
                    { label: 'Read.cv', href: 'https://read.cv' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-[#E11D48]"
                    >
                      <span>{social.label}</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Interactive Inquiry Form */}
              <div className="lg:col-span-7">
                {submitted ? (
                  <div className="flex h-full flex-col items-start justify-center rounded-xl border border-[#E11D48]/35 bg-white/60 dark:bg-black/55 p-8">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E11D48] text-white">
                      <Check className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-zinc-950 dark:text-white">
                      Inquiry received, {name}.
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      Thank you for reaching out regarding{' '}
                      <span className="font-semibold text-zinc-950 dark:text-white">
                        {selectedService}
                      </span>{' '}
                      ({budget}). We will respond to{' '}
                      <span className="font-semibold text-[#E11D48]">{email}</span>{' '}
                      within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setMessage('');
                      }}
                      className="mt-6 rounded-xl border border-zinc-900/15 dark:border-white/15 bg-zinc-900/5 dark:bg-white/5 px-4 py-2.5 text-xs font-semibold text-zinc-950 dark:text-white transition-colors hover:border-[#E11D48] hover:text-[#E11D48] cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                        >
                          Your Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Sara Khalid"
                          className="mt-2 w-full rounded-xl border border-zinc-900/12 dark:border-white/12 bg-white/80 dark:bg-black/50 px-4 py-3 text-sm text-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 transition-colors focus:border-[#E11D48] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="mt-2 w-full rounded-xl border border-zinc-900/12 dark:border-white/12 bg-white/80 dark:bg-black/50 px-4 py-3 text-sm text-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 transition-colors focus:border-[#E11D48] focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Service Selector */}
                    <div>
                      <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        Primary Discipline
                      </span>
                      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {SERVICES.map((service) => {
                          const active = selectedService === service.title;
                          return (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => setSelectedService(service.title)}
                              className={`rounded-xl border px-3.5 py-2.5 text-left text-xs font-semibold transition-colors cursor-pointer ${
                                active
                                  ? 'border-[#E11D48] bg-[#E11D48]/12 text-zinc-950 dark:text-white'
                                  : 'border-zinc-900/10 dark:border-white/10 bg-white/60 dark:bg-black/40 text-zinc-600 dark:text-zinc-400 hover:border-zinc-900/25 dark:hover:border-white/25 hover:text-zinc-950 dark:hover:text-white'
                              }`}
                            >
                              {service.title}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget Range Selector */}
                    <div>
                      <span className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                        Estimated Budget
                      </span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {BUDGET_RANGES.map((range) => {
                          const active = budget === range;
                          return (
                            <button
                              key={range}
                              type="button"
                              onClick={() => setBudget(range)}
                              className={`rounded-lg border px-3.5 py-2 text-xs font-semibold tabular-nums whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                                active
                                  ? 'border-[#E11D48] bg-[#E11D48] text-white'
                                  : 'border-zinc-900/10 dark:border-white/10 bg-white/60 dark:bg-black/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                              }`}
                            >
                              {range}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300"
                      >
                        Project Brief
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your goals, timeline, and what you're looking to design or build..."
                        className="mt-2 w-full resize-none rounded-xl border border-zinc-900/12 dark:border-white/12 bg-white/80 dark:bg-black/50 px-4 py-3 text-sm text-zinc-950 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 transition-colors focus:border-[#E11D48] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#E11D48] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#BE123C] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48] sm:w-auto"
                    >
                      <span>Send Project Inquiry</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  );
};
