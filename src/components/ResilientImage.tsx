import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-zinc-200 via-zinc-100 to-zinc-200 dark:from-[#17171C] dark:via-[#0D0D11] dark:to-[#1C1216] p-6 text-center ${className}`}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-300 dark:border-white/10 bg-white/60 dark:bg-white/5 text-[#E11D48]">
          <ImageIcon className="h-5 w-5" />
        </div>
        {fallbackTitle && (
          <span className="font-display text-sm font-semibold text-zinc-900 dark:text-white/90">
            {fallbackTitle}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
