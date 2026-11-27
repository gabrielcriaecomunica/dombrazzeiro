import { buildWhatsAppUrl } from '../data/siteData';
import { EmberReveal } from './MotionPrimitives';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FinalCtaSection() {
  return (
    <section
      id="orcamento"
      className="relative overflow-hidden border-t border-[#7A4524]/50 py-20 sm:py-28"
    >
      {/* Fundo com degradê de brasa escurecido para manter contraste AA */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,#2A1A12_0%,#5C1C10_42%,#8B3A14_75%,#140F0C_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#140F0C]/55"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <EmberReveal>
          <span className="font-label text-xs uppercase tracking-[0.28em] text-[#F2B33D]">
            Orçamento sob medida
          </span>
          <h2 className="mt-3 font-display text-3xl leading-[1.1] text-[#F5E6C8] sm:text-5xl lg:text-6xl">
            Seu evento merece o{' '}
            <span className="brand-gradient-text">Dom da Brasa.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#F5E6C8]/90 sm:text-lg">
            Chame no WhatsApp, conte a data, a cidade e quantas pessoas você
            pretende receber. A gente monta a proposta ideal para o seu dia.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <a
              href={buildWhatsAppUrl(
                'Olá, Jossel (Dom Brazzeiro)! Gostaria de pedir um orçamento personalizado para o meu evento.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ember-glow relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-md bg-[#E8661E] px-8 py-4 font-label text-xs font-semibold uppercase tracking-[0.14em] text-[#140F0C] transition-all hover:bg-[#F2B33D] sm:w-auto sm:text-sm sm:tracking-[0.16em]"
            >
              <span
                aria-hidden="true"
                className="brand-gradient-bar absolute inset-x-0 bottom-0 h-1 opacity-85"
              />
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>Peça seu orçamento personalizado</span>
            </a>

            <div className="flex items-center gap-2.5 text-sm text-[#F2B33D]">
              <span className="h-2 w-2 rounded-full bg-[#E8661E]" aria-hidden="true" />
              <span>Atendimento direto com Jossel e equipe pelo WhatsApp</span>
            </div>
          </div>
        </EmberReveal>
      </div>
    </section>
  );
}
