import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { FAQ_ITEMS } from '../data/siteData';
import { EmberReveal, SectionHeading } from './MotionPrimitives';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="duvidas" className="relative bg-[#140F0C] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Tudo explicado com"
          highlight="transparência"
        />

        <div className="mt-12 space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;

            return (
              <EmberReveal key={item.id} delay={idx * 0.04}>
                <div
                  className={`overflow-hidden rounded-xl border transition-colors ${
                    isOpen
                      ? 'border-[#E8661E]/70 bg-[#2A1A12]/90'
                      : 'border-[#7A4524]/45 bg-[#2A1A12]/45 hover:border-[#7A4524]'
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span className="font-display text-lg text-[#F5E6C8] sm:text-xl">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#F2B33D] transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#7A4524]/30 px-5 pb-5 pt-3.5 text-sm leading-relaxed text-[#D8C4A4] sm:px-6 sm:text-base">
                          {item.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </EmberReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
