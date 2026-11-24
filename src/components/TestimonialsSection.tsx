import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';
import { TESTIMONIALS } from '../data/siteData';
import { EmberReveal, SectionHeading } from './MotionPrimitives';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section
      aria-label="Depoimentos de clientes"
      className="relative border-y border-[#7A4524]/35 bg-[#2A1A12]/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Prova social"
          title="Quem já confiou a festa à"
          highlight="Dom Brazzeiro"
          description="Espaço reservado para relatos reais de clientes atendidos em Santa Catarina."
        />

        <EmberReveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-dashed border-[#7A4524]/80 bg-[#140F0C]/90 p-6 sm:p-10">
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-2 rounded border border-[#E8661E]/60 bg-[#2A1A12] px-3 py-1 font-mono text-xs text-[#F2B33D]">
                {TESTIMONIALS[activeIndex].status}
              </span>
              <Quote className="h-7 w-7 text-[#7A4524]" aria-hidden="true" />
            </div>

            <blockquote className="min-h-[6rem] text-lg leading-relaxed text-[#F5E6C8] sm:text-xl">
              “{TESTIMONIALS[activeIndex].quote}”
            </blockquote>

            <div className="mt-6 flex flex-col justify-between gap-4 border-t border-[#7A4524]/35 pt-5 sm:flex-row sm:items-center">
              <div>
                <p className="font-label text-sm uppercase tracking-[0.16em] text-[#F2B33D]">
                  {TESTIMONIALS[activeIndex].author}
                </p>
                <p className="mt-0.5 text-xs text-[#D8C4A4]">
                  {TESTIMONIALS[activeIndex].eventInfo}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Depoimento anterior"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7A4524]/60 bg-[#2A1A12] text-[#F5E6C8] transition-colors hover:border-[#E8661E] hover:text-[#F2B33D]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar depoimento">
                  {TESTIMONIALS.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={idx === activeIndex}
                      aria-label={`Depoimento ${idx + 1}`}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        idx === activeIndex
                          ? 'w-7 bg-[#E8661E]'
                          : 'w-2.5 bg-[#7A4524] hover:bg-[#F2B33D]/70'
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Próximo depoimento"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7A4524]/60 bg-[#2A1A12] text-[#F5E6C8] transition-colors hover:border-[#E8661E] hover:text-[#F2B33D]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </EmberReveal>
      </div>
    </section>
  );
}
