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
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#7A4524]/50 bg-[#2A1A12]/80 transition-all duration-300 hover:-translate-y-1 hover:border-[#E8661E]/80">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#140F0C]">
                  <img
                    src={eventItem.image}
                    alt={eventItem.alt}
                    width={960}
                    height={720}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#2A1A12] via-transparent to-transparent"
                  />
                  <span className="absolute bottom-3 left-3 rounded bg-[#140F0C]/85 px-2.5 py-1 font-label text-[11px] uppercase tracking-[0.18em] text-[#F2B33D] border border-[#7A4524]/60">
                    {eventItem.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-2xl text-[#F5E6C8]">
                    {eventItem.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#D8C4A4]">
                    {eventItem.microtext}
                  </p>
                </div>
              </article>
            </EmberReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
