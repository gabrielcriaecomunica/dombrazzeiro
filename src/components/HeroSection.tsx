import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../data/siteData';
import { EmberParticles } from './EmberParticles';

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-[#140F0C] pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* Imagem de fundo da costela no fogo de chão */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-costela.webp"
          alt="Costela fogo de chão assando ao redor de brasas vivas à noite"
          width={1600}
          height={900}
          fetchPriority="high"
          className="h-full w-full object-cover object-center opacity-55"
        />
        {/* Camada escura para garantir contraste AA e clima de brasa */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#140F0C]/90 via-[#140F0C]/65 to-[#140F0C]"
        />
        <div
          aria-hidden="true"
          className="ember-breathe absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(ellipse_at_bottom,rgba(232,102,30,0.34),rgba(194,49,26,0.12)_48%,transparent_75%)]"
        />
      </div>

      {/* Partículas discretas de faísca */}
      <EmberParticles />

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 sm:mb-6"
        >
          <img
            src={BRAND.logoWebp}
            alt="Dom Brazzeiro Mestre Churrasqueiro"
            width={240}
            height={220}
            className="mx-auto h-36 w-auto object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.85)] sm:h-44 lg:h-48"
          />
        </motion.div>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-label text-xs sm:text-sm uppercase tracking-[0.28em] text-[#F2B33D] mb-3"
        >
          {BRAND.signature} · Santa Catarina
        </motion.p>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14 }}
          className="font-display text-4xl leading-[1.08] text-[#F5E6C8] sm:text-6xl lg:text-7xl"
        >
          O fogo é nosso.{' '}
          <span className="brand-gradient-text block sm:inline">A festa é sua.</span>
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-[#F5E6C8]/90 sm:text-lg"
        >
          Churrasco premium e costela fogo de chão para eventos em Santa Catarina.
          Mestre churrasqueiro e buffet completo para você receber seus convidados
          sem se preocupar com nada.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3.5 sm:w-auto sm:flex-row sm:gap-4"
        >
          <a
            href={buildWhatsAppUrl(
              'Olá! Vi a página da Dom Brazzeiro e quero pedir um orçamento personalizado para o meu evento.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ember-glow group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-md bg-[#E8661E] px-5 py-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-[#140F0C] transition-all hover:bg-[#F2B33D] sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.16em]"
          >
            <span
              aria-hidden="true"
              className="brand-gradient-bar absolute inset-x-0 bottom-0 h-1 opacity-85"
            />
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Peça seu orçamento personalizado</span>
          </a>

          <a
            href="#o-que-inclui"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#7A4524] bg-[#2A1A12]/80 px-6 py-4 font-label text-sm font-medium uppercase tracking-[0.16em] text-[#F5E6C8] transition-colors hover:border-[#F2B33D] hover:text-[#F2B33D] sm:w-auto"
          >
            <span>Veja o que está incluído</span>
            <ArrowDown className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
