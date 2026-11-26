import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { EmberReveal } from './MotionPrimitives';

export function FogoDeChaoSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#140F0C] py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        <EmberReveal className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-2xl border border-[#7A4524]/55 bg-[#2A1A12] shadow-[0_24px_60px_rgba(0,0,0,0.65)] aspect-[4/3]">
            <motion.img
              style={prefersReducedMotion ? undefined : { y: imageY, scale: 1.1 }}
              src="/assets/images/costela-fogo-de-chao.webp"
              alt="Mestre churrasqueiro Jossel Freitas da Dom Brazzeiro puxando o osso de uma costela fogo de chão macia sobre tábua rústica de madeira"
              width={1024}
              height={682}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#140F0C]/80 via-transparent to-[#140F0C]/20"
            />
          </div>
        </EmberReveal>

        <div className="lg:col-span-5">
          <EmberReveal delay={0.1}>
            <span className="font-label text-xs uppercase tracking-[0.26em] text-[#F2B33D]">
              Costela fogo de chão
            </span>
            <h2 className="mt-3 font-display text-3xl leading-[1.12] text-[#F5E6C8] sm:text-4xl lg:text-5xl">
              Horas de fogo lento para{' '}
              <span className="brand-gradient-text">este momento.</span>
            </h2>
          </EmberReveal>

          <EmberReveal delay={0.18}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#D8C4A4]">
              <p>
                A costela fogo de chão não aceita pressa. Ela começa cedo, no calor
                firme da lenha de qualidade, girando no ritmo certo enquanto a
                gordura derrete devagar e perfuma o ambiente inteiro.
              </p>
              <p>
                Quando chega a hora de servir, a casca está dourada e crocante, o
                aroma abre o apetite de longe e o osso se solta sem esforço. É o tipo
                de cena que reúne todo mundo ao redor da mesa e vira assunto do
                evento inteiro.
              </p>
            </div>
          </EmberReveal>
        </div>
      </div>
    </section>
  );
}
