import { HOW_IT_WORKS_STEPS } from '../data/siteData';
import { EmberReveal, SectionHeading } from './MotionPrimitives';

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="relative border-y border-[#7A4524]/35 bg-[#2A1A12]/45 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sem complicação do começo ao fim"
          title="Como funciona do primeiro"
          highlight="contato à festa"
        />

        <div className="relative mt-14">
          {/* Linha conectora no desktop */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#C2311A] via-[#E8661E] to-[#F2B33D]/40 md:left-0 md:right-0 md:top-9 md:bottom-auto md:h-px md:w-full md:bg-gradient-to-r"
          />

          <ol className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
            {HOW_IT_WORKS_STEPS.map((item, idx) => (
              <EmberReveal key={item.step} delay={idx * 0.09} className="relative pl-16 md:pl-0 md:pt-16">
                <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border border-[#F2B33D]/70 bg-[#140F0C] font-label text-base font-semibold tracking-[0.14em] text-[#F2B33D] shadow-[0_0_24px_rgba(232,102,30,0.28)] md:left-0 md:top-3">
                  {item.step}
                </div>
                <div className="rounded-xl border border-[#7A4524]/45 bg-[#140F0C]/85 p-5 h-full">
                  <h3 className="font-display text-xl text-[#F5E6C8]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#D8C4A4]">
                    {item.description}
                  </p>
                </div>
              </EmberReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
