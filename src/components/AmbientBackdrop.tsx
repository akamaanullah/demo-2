import React from 'react';

export const AmbientBackdrop: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#FAFAFA] transition-colors duration-300 dark:bg-[#070709]"
    >
      {/* Crisp architectural grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06] dark:opacity-[0.045]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="crimson-grid"
            width="88"
            height="88"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 88 0 L 0 0 0 88"
              fill="none"
              stroke="currentColor"
              className="text-zinc-900 dark:text-white"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crimson-grid)" />
      </svg>

      {/* Bold Crimson Red & White/Silver atmospheric light caustics for glass refraction */}
      <div
        className="absolute -top-36 right-[-8%] h-[580px] w-[580px] rounded-full opacity-25 blur-[130px] dark:opacity-45"
        style={{
          background:
            'radial-gradient(circle, rgba(225, 29, 72, 0.72) 0%, rgba(225, 29, 72, 0) 70%)',
        }}
      />
      <div
        className="absolute top-[22%] left-[-12%] h-[520px] w-[520px] rounded-full opacity-20 blur-[140px] dark:opacity-35"
        style={{
          background:
            'radial-gradient(circle, rgba(220, 38, 38, 0.55) 0%, rgba(0, 0, 0, 0) 72%)',
        }}
      />
      <div
        className="absolute top-[55%] right-[14%] h-[440px] w-[440px] rounded-full opacity-30 blur-[135px] dark:opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.45) 0%, rgba(0, 0, 0, 0) 72%)',
        }}
      />
      <div
        className="absolute bottom-[-140px] left-[20%] h-[520px] w-[520px] rounded-full opacity-20 blur-[140px] dark:opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(190, 18, 60, 0.6) 0%, rgba(0, 0, 0, 0) 72%)',
        }}
      />

      {/* Film grain overlay */}
      <div className="grain-overlay absolute inset-0" />
    </div>
  );
};
