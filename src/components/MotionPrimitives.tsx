import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function EmberReveal({
  children,
  className = '',
  delay = 0,
  y = 22,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  breakHighlight?: boolean;
  description?: string;
  align?: 'center' | 'left';
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  breakHighlight = false,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignClasses =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <EmberReveal className={`flex flex-col max-w-3xl ${alignClasses}`}>
      <div className="inline-flex items-center gap-3 mb-3">
        <span className="h-px w-8 bg-[#7A4524]" aria-hidden="true" />
        <span className="font-label text-xs sm:text-sm uppercase tracking-[0.26em] text-[#F2B33D] font-medium">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-[#7A4524]" aria-hidden="true" />
      </div>

      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-[#F5E6C8]">
        {title}{' '}
        {highlight ? (
          <span
            className={
              breakHighlight ? 'brand-gradient-text mt-1 block' : 'brand-gradient-text'
            }
          >
            {highlight}
          </span>
        ) : null}
      </h2>

      {description ? (
        <p className="mt-4 text-base sm:text-lg text-[#D8C4A4] leading-relaxed">
          {description}
        </p>
      ) : null}
    </EmberReveal>
  );
}
