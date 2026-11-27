import { EVENT_TYPES } from '../data/siteData';
import { EmberReveal, SectionHeading } from './MotionPrimitives';

export function EventsSection() {
  return (
    <section id="eventos" className="relative bg-[#140F0C] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ocasiões atendidas em SC, RS e PR"
          title="Para cada encontro, o fogo na"
          highlight="medida certa"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EVENT_TYPES.map((eventItem, idx) => (
            <EmberReveal key={eventItem.id} delay={idx * 0.08}>
              <article className="group flex h-full flex-col rounded-xl border border-[#7A4524]/50 bg-[#2A1A12]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8661E]/80 hover:shadow-[0_14px_34px_-12px_rgba(232,102,30,0.28)]">
                <span className="inline-block self-start rounded border border-[#7A4524]/60 bg-[#140F0C]/85 px-2.5 py-1 font-label text-[11px] uppercase tracking-[0.18em] text-[#F2B33D]">
                  {eventItem.tag}
                </span>

                <h3 className="mt-4 font-display text-2xl text-[#F5E6C8]">
                  {eventItem.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#D8C4A4]">
                  {eventItem.microtext}
                </p>
              </article>
            </EmberReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
