import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/portfolioData';
import { GlassCard } from './GlassCard';
import { ServiceGraphic } from './ServiceGraphic';

interface ServicesSectionProps {
  selectedServiceId: string;
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedServiceId,
  onSelectService,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES[0].id);

  const handleBookService = (service: ServiceItem) => {
    onSelectService(service.title);
    const contactEl = document.getElementById('contact');
    contactEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#E11D48]">
              Capabilities &amp; Services
            </p>
            <h2
              className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Focused engagements built for{' '}
              <span className="text-[#E11D48]">lasting</span> impact.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Inspect deliverables for each discipline or select a service to pre-fill your project brief below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service, index) => {
            const isExpanded = expandedId === service.id;
            const isSelectedForInquiry = selectedServiceId === service.title;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <GlassCard className="flex h-full flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-display text-xs font-bold tabular-nums text-[#E11D48]">
                          {service.number}.
                        </span>
                        <h3 className="mt-1.5 font-display text-xl font-bold text-zinc-950 dark:text-white">
                          {service.title}
                        </h3>
                      </div>
                      <div className="shrink-0 rounded-xl border border-zinc-900/10 dark:border-white/10 bg-zinc-900/[0.03] dark:bg-white/[0.03] p-2">
                        <ServiceGraphic type={service.iconType} />
                      </div>
                    </div>

                    <p className="mt-3 text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                      {service.tagline}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </p>

                    {/* Expandable Deliverables List */}
                    <div className="mt-5 border-t border-zinc-900/10 dark:border-white/10 pt-4">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedId(isExpanded ? null : service.id)
                        }
                        aria-expanded={isExpanded}
                        className="flex w-full items-center justify-between text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:text-[#E11D48] dark:hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48] rounded-sm"
                      >
                        <span>
                          Scope &amp; Deliverables · Est. {service.timeline}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-[#E11D48]' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <ul className="mt-3.5 space-y-2">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-300"
                            >
                              <Check className="h-3.5 w-3.5 shrink-0 text-[#E11D48]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-zinc-900/10 dark:border-white/10 pt-4">
                    <span className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
                      Typical sprint: {service.timeline}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleBookService(service)}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E11D48] ${
                        isSelectedForInquiry
                          ? 'bg-[#E11D48] text-white'
                          : 'border border-zinc-900/15 dark:border-white/15 bg-zinc-900/5 dark:bg-white/5 text-zinc-900 dark:text-white hover:border-[#E11D48] hover:text-[#E11D48]'
                      }`}
                    >
                      <span>
                        {isSelectedForInquiry ? 'Selected for Inquiry' : 'Select Service'}
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
