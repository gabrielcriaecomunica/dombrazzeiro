import { buildWhatsAppUrl } from '../data/siteData';
import { EmberReveal } from './MotionPrimitives';
import { WhatsAppIcon } from './WhatsAppIcon';

const DIAGONAL_SLICES = [
  {
    src: '/assets/images/galeria-buffet.webp',
    clipPath: 'polygon(0% 0%, 29% 0%, 21% 100%, 0% 100%)',
    objectClass: 'object-[center_35%]',
  },
  {
    src: '/assets/images/galeria-cortes.webp',
    clipPath: 'polygon(29% 0%, 54% 0%, 46% 100%, 21% 100%)',
    objectClass: 'object-[center_32%]',
  },
  {
    src: '/assets/images/cta-bg-4.webp',
    clipPath: 'polygon(54% 0%, 79% 0%, 71% 100%, 46% 100%)',
    objectClass: 'object-[55%_42%]',
  },
  {
    src: '/assets/images/mestre-jossel.webp',
    clipPath: 'polygon(79% 0%, 100% 0%, 100% 100%, 71% 100%)',
    objectClass: 'object-[center_28%]',
  },
] as const;

export function FinalCtaSection() {
  return (
    <section
      id="orcamento"
      className="relative overflow-hidden border-t border-[#7A4524]/50 bg-[#140F0C] py-24 sm:py-32"
    >
      {/* Fundo em tela cheia com as 4 fotos cortadas em diagonal e suavizadas */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        {DIAGONAL_SLICES.map((slice) => (
          <div
            key={slice.src}
            style={{ clipPath: slice.clipPath }}
            className="absolute inset-0 overflow-hidden"
          >
            <img
              src={slice.src}
              alt=""
              loading="lazy"
              className={`h-full w-full object-cover ${slice.objectClass} opacity-35 saturate-[0.82]`}
            />
          </div>
        ))}

        {/* Linhas diagonais na identidade visual do site */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="diagonal-ember-line" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7A4524" stopOpacity="0.2" />
              <stop offset="30%" stopColor="#E8661E" stopOpacity="0.7" />
              <stop offset="55%" stopColor="#F2B33D" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#E8661E" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7A4524" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <line
            x1="29"
            y1="0"
            x2="21"
            y2="100"
            stroke="url(#diagonal-ember-line)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="54"
            y1="0"
            x2="46"
            y2="100"
            stroke="url(#diagonal-ember-line)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="79"
            y1="0"
            x2="71"
            y2="100"
            stroke="url(#diagonal-ember-line)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Camadas escuras sutis para manter leitura limpa sem embolar com o fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_70%_at_50%_50%,rgba(20,15,12,0.8)_0%,rgba(20,15,12,0.52)_65%,rgba(20,15,12,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(194,49,26,0.14),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140F0C] via-transparent via-18% to-[#140F0C]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <EmberReveal>
          <span className="font-label text-xs uppercase tracking-[0.28em] text-[#F2B33D]">
            Orçamento sob medida
          </span>
          <h2 className="mt-3 font-display text-3xl leading-[1.1] text-[#F5E6C8] sm:text-5xl lg:text-6xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.65)]">
            Seu evento merece o{' '}
            <span className="brand-gradient-text">Dom da Brasa.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#F5E6C8]/92 sm:text-lg">
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
