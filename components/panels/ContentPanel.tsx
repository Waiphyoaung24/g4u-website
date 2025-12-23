'use client';

import { LucideIcon } from 'lucide-react';

interface ContentPanelProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: 'green' | 'dark' | 'gradient';
  ctaText?: string;
  ctaHref?: string;
  isLast?: boolean;
}

export default function ContentPanel({
  number,
  title,
  description,
  icon: Icon,
  variant = 'green',
  ctaText,
  ctaHref,
  isLast = false,
}: ContentPanelProps) {
  const getBackgroundClasses = () => {
    switch (variant) {
      case 'green':
        return 'bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white';
      case 'dark':
        return 'bg-black dark:bg-white text-white dark:text-black transition-colors duration-300';
      case 'gradient':
        return 'bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white';
      default:
        return 'bg-gradient-to-br from-green-400 via-green-500 to-green-600 text-white';
    }
  };

  const getNumberOpacity = () => {
    return variant === 'dark' ? 'opacity-10 dark:opacity-5' : 'opacity-10';
  };

  return (
    <section
      className={`panel absolute inset-0 h-screen flex items-center justify-center overflow-hidden ${getBackgroundClasses()}`}
    >
      {/* Background Number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className={`text-[40vw] sm:text-[35vw] md:text-[30vw] font-bold ${getNumberOpacity()} font-[var(--font-montserrat)] leading-none select-none`}
        >
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-3xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <Icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto opacity-80" strokeWidth={1.5} />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 font-[var(--font-montserrat)] tracking-tight">
          {title}
        </h2>

        <p
          className={`text-base sm:text-lg md:text-xl font-[var(--font-montserrat)] leading-relaxed max-w-xl mx-auto ${
            variant === 'dark' ? 'opacity-80 dark:opacity-70' : 'opacity-90'
          } ${ctaText ? 'mb-8 sm:mb-12' : ''}`}
        >
          {description}
        </p>

        {/* Optional CTA */}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="inline-block px-6 sm:px-8 py-3 bg-white text-green-600 font-[var(--font-montserrat)] font-medium text-sm uppercase tracking-wider hover:bg-green-50 transition-all duration-300 hover:shadow-lg"
          >
            {ctaText}
          </a>
        )}

        {/* Decorative Line for dark variant */}
        {variant === 'dark' && !ctaText && (
          <div className="mt-8 sm:mt-12 w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto"></div>
        )}
      </div>

      {/* Decorative Elements */}
      {variant === 'green' && (
        <>
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 w-8 h-8 sm:w-12 sm:h-12 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-6 h-6 sm:w-8 sm:h-8 border border-white/20"></div>
        </>
      )}

      {/* Bottom pagination dots for last panel */}
      {isLast && (
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      )}
    </section>
  );
}
