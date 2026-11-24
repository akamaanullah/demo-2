import React from 'react';

interface ServiceGraphicProps {
  type: 'architecture' | 'glass' | 'motion' | 'brand';
}

export const ServiceGraphic: React.FC<ServiceGraphicProps> = ({ type }) => {
  switch (type) {
    case 'architecture':
      return (
        <svg viewBox="0 0 80 80" className="h-14 w-14 text-[#E11D48]" fill="none" aria-hidden="true">
          <rect
            x="10"
            y="10"
            width="60"
            height="60"
            rx="10"
            stroke="currentColor"
            strokeOpacity="0.45"
            strokeWidth="1.4"
          />
          <line
            x1="10"
            y1="30"
            x2="70"
            y2="30"
            className="stroke-zinc-900/25 dark:stroke-white/25"
            strokeWidth="1.2"
          />
          <line
            x1="34"
            y1="30"
            x2="34"
            y2="70"
            className="stroke-zinc-900/25 dark:stroke-white/25"
            strokeWidth="1.2"
          />
          <rect
            x="42"
            y="38"
            width="20"
            height="24"
            rx="4"
            fill="currentColor"
            fillOpacity="0.18"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="22" cy="20" r="3.5" fill="currentColor" />
        </svg>
      );
    case 'glass':
      return (
        <svg viewBox="0 0 80 80" className="h-14 w-14 text-[#E11D48]" fill="none" aria-hidden="true">
          <rect
            x="14"
            y="24"
            width="38"
            height="38"
            rx="8"
            className="stroke-zinc-900/35 dark:stroke-white/35"
            strokeWidth="1.3"
          />
          <rect
            x="28"
            y="14"
            width="38"
            height="38"
            rx="8"
            fill="currentColor"
            fillOpacity="0.16"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M35 24 L58 24"
            className="stroke-zinc-900/70 dark:stroke-white/80"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M35 32 L50 32"
            className="stroke-zinc-900/40 dark:stroke-white/45"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'motion':
      return (
        <svg viewBox="0 0 80 80" className="h-14 w-14 text-[#E11D48]" fill="none" aria-hidden="true">
          <path
            d="M14 58 C 28 58, 28 22, 44 22 C 56 22, 56 46, 66 20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="14" cy="58" r="3.5" className="fill-zinc-900 dark:fill-white" />
          <circle
            cx="44"
            cy="22"
            r="4.5"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="66" cy="20" r="3.5" fill="currentColor" />
          <line
            x1="14"
            y1="66"
            x2="66"
            y2="66"
            className="stroke-zinc-900/20 dark:stroke-white/20"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </svg>
      );
    case 'brand':
      return (
        <svg viewBox="0 0 80 80" className="h-14 w-14 text-[#E11D48]" fill="none" aria-hidden="true">
          <circle
            cx="40"
            cy="40"
            r="24"
            className="stroke-zinc-900/30 dark:stroke-white/30"
            strokeWidth="1.3"
          />
          <circle
            cx="40"
            cy="40"
            r="14"
            fill="currentColor"
            fillOpacity="0.16"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="40"
            y1="8"
            x2="40"
            y2="72"
            className="stroke-zinc-900/20 dark:stroke-white/20"
            strokeWidth="1.1"
          />
          <line
            x1="8"
            y1="40"
            x2="72"
            y2="40"
            className="stroke-zinc-900/20 dark:stroke-white/20"
            strokeWidth="1.1"
          />
        </svg>
      );
  }
};
