import { Award, Flame, HeartHandshake } from 'lucide-react';
import { BRAND } from '../data/siteData';
import { EmberReveal } from './MotionPrimitives';

export function MasterSection() {
  return (
    <section
      id="o-mestre"
      className="relative border-t border-[#7A4524]/35 bg-[#2A1A12]/50 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <EmberReveal className="lg:col-span-5">
          {/* Comentário de manutenção: substituir public/assets/images/mestre-jossel.webp por foto real de Jossel Freitas quando disponível */}
          <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-[#7A4524]/60 bg-[#140F0C] shadow-[0_24px_55px_rgba(0,0,0,0.65)] aspect-[3/4]">
            <img
              src="/assets/images/mestre-jossel.webp"
              alt="Jossel Freitas, mestre churrasqueiro da Dom Brazzeiro, com chapéu e camisa preta junto à brasa"
              width={1000}
              height={1333}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#140F0C] via-transparent to-transparent opacity-85"
            />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-label text-xs uppercase tracking-[0.24em] text-[#F2B33D]">
                Mestre Churrasqueiro
              </p>
              <p className="mt-1 font-display text-2xl text-[#F5E6C8]">
                {BRAND.masterName}
              </p>
            </div>
          </div>
        </EmberReveal>

        <div className="lg:col-span-7">
          <EmberReveal delay={0.1}>
            <span className="font-label text-xs uppercase tracking-[0.26em] text-[#F2B33D]">
              Quem assina cada evento
            </span>
            <h2 className="mt-3 font-display text-3xl leading-[1.12] text-[#F5E6C8] sm:text-4xl lg:text-5xl">
              Tradição, respeito ao corte e o{' '}
              <span className="brand-gradient-text">fogo como ofício</span>
            </h2>
          </EmberReveal>

          <EmberReveal delay={0.18}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#D8C4A4] sm:text-lg">
              <p>
                À frente da Dom Brazzeiro está <strong className="text-[#F5E6C8] font-semibold">Jossel Freitas</strong>.
                Para ele, dominar a brasa nunca foi apenas acender carvão e assar
                carne. É saber ler o tempo do fogo, respeitar cada corte e cuidar de
                cada pessoa que se aproxima da bancada.
              </p>
              <p>
                De chapéu, camisa preta e luvas prontas, Jossel conduz o churrasco
                como quem recebe em casa. Com postura firme, conversa leve e olho
                atento em cada detalhe, ele transforma o momento do almoço ou jantar
                em parte inesquecível da celebração.
              </p>
            </div>
          </EmberReveal>

          <EmberReveal delay={0.26}>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-[#7A4524]/45 bg-[#140F0C]/75 p-4">
                <Flame className="h-5 w-5 text-[#E8661E]" strokeWidth={1.6} aria-hidden="true" />
                <p className="mt-2.5 font-label text-xs uppercase tracking-[0.18em] text-[#F5E6C8]">
                  Domínio da brasa
                </p>
                <p className="mt-1 text-xs text-[#D8C4A4]">
                  Temperatura controlada para cada tipo de corte.
                </p>
              </div>
              <div className="rounded-lg border border-[#7A4524]/45 bg-[#140F0C]/75 p-4">
                <HeartHandshake className="h-5 w-5 text-[#F2B33D]" strokeWidth={1.6} aria-hidden="true" />
                <p className="mt-2.5 font-label text-xs uppercase tracking-[0.18em] text-[#F5E6C8]">
                  Anfitrião de verdade
                </p>
                <p className="mt-1 text-xs text-[#D8C4A4]">
                  Atendimento cordial para sua família e convidados.
                </p>
              </div>
              <div className="rounded-lg border border-[#7A4524]/45 bg-[#140F0C]/75 p-4">
                <Award className="h-5 w-5 text-[#E8661E]" strokeWidth={1.6} aria-hidden="true" />
                <p className="mt-2.5 font-label text-xs uppercase tracking-[0.18em] text-[#F5E6C8]">
                  Padrão constante
                </p>
                <p className="mt-1 text-xs text-[#D8C4A4]">
                  Pontualidade, limpeza e entrega impecável.
                </p>
              </div>
            </div>
          </EmberReveal>
        </div>
      </div>
    </section>
  );
}
