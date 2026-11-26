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
      className="relative overflow-hidden bg-[#140F0C] py-24 sm:py-32 lg:py-40"
    >
      {/* Foto posicionada mais à esquerda, fundindo suavemente com o fundo escuro à direita */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative h-full w-full lg:w-[76%] lg:-translate-x-[5%]">
          <motion.img
            style={prefersReducedMotion ? undefined : { y: imageY, scale: 1.08 }}
            src="/assets/images/costela-fogo-de-chao.webp"
            alt=""
            width={1024}
            height={682}
            loading="lazy"
            className="h-full w-full object-cover object-[42%_center] opacity-55 lg:opacity-85"
          />
          <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-[#140F0C]" />
        </div>

        {/* Camadas de contraste para leitura nítida sem esconder a costela */}
        <div className="absolute inset-0 bg-[#140F0C]/50 lg:bg-transparent" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#140F0C]/30 via-[#140F0C]/45 via-45% to-[#140F0C] to-72%" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140F0C] via-transparent via-20% to-[#140F0C]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="ml-auto max-w-xl text-left">
          <EmberReveal delay={0.08}>
            <span className="font-label text-xs uppercase tracking-[0.28em] text-[#F2B33D]">
              Costela fogo de chão
            </span>
            <h2 className="mt-3 font-display text-3xl leading-[1.12] text-[#F5E6C8] sm:text-5xl lg:text-6xl">
              Horas de fogo lento para{' '}
              <span className="brand-gradient-text">este momento.</span>
            </h2>
          </EmberReveal>

          <EmberReveal delay={0.18}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#F5E6C8]/92 sm:text-lg">
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
