import {
  Beef,
  ClipboardList,
  Clock,
  Flame,
  MessageCircle,
  Sparkles,
  UtensilsCrossed,
  Wrench,
} from 'lucide-react';
import {
  buildWhatsAppUrl,
  INCLUDED_ITEMS,
  type IncludedItem,
} from '../data/siteData';
import { EmberReveal, SectionHeading } from './MotionPrimitives';

const ICON_MAP: Record<IncludedItem['iconName'], typeof Flame> = {
  flame: Flame,
  beef: Beef,
  sparkles: Sparkles,
  utensils: UtensilsCrossed,
  wrench: Wrench,
  clock: Clock,
  clipboard: ClipboardList,
};

export function IncludedSection() {
  return (
    <section
      id="o-que-inclui"
      className="relative border-t border-[#7A4524]/35 bg-[#140F0C] py-20 sm:py-24 smoke-surface"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Entrega completa de ponta a ponta"
          title="Tudo o que está incluído no"
          highlight="nosso serviço"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED_ITEMS.map((item, index) => {
            const Icon = ICON_MAP[item.iconName];
            const isLastCentered = index === INCLUDED_ITEMS.length - 1;

            return (
              <EmberReveal
                key={item.id}
                delay={index * 0.05}
                className={
                  isLastCentered
                    ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2'
                    : ''
                }
              >
                <article className="group flex h-full flex-col rounded-xl border border-[#7A4524]/50 bg-[#2A1A12]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8661E]/75 hover:shadow-[0_14px_34px_-12px_rgba(232,102,30,0.35)]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#F2B33D]/35 bg-[#140F0C] text-[#F2B33D] transition-colors group-hover:border-[#F2B33D] group-hover:bg-[#E8661E]/15">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl text-[#F5E6C8] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#D8C4A4]">
                    {item.description}
                  </p>
                </article>
              </EmberReveal>
            );
          })}
        </div>

        <EmberReveal delay={0.22} className="mt-10 flex justify-center">
          <a
            href={buildWhatsAppUrl(
              'Olá, Jossel! Vi tudo o que está incluído no serviço do Dom Brazzeiro e gostaria de pedir meu orçamento personalizado.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ember-glow relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-md bg-[#E8661E] px-8 py-4 font-label text-sm font-semibold uppercase tracking-[0.16em] text-[#140F0C] transition-all hover:bg-[#F2B33D]"
          >
            <span
              aria-hidden="true"
              className="brand-gradient-bar absolute inset-x-0 bottom-0 h-1 opacity-85"
            />
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Peça seu orçamento personalizado</span>
          </a>
        </EmberReveal>
      </div>
    </section>
  );
}
