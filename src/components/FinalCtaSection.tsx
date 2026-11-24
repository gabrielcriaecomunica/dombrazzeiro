import { MessageCircle } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { buildWhatsAppUrl } from '../data/siteData';
import { EmberReveal } from './MotionPrimitives';

const EVENT_OPTIONS = [
  'Aniversário',
  'Casamento',
  'Encontro de família',
  'Confraternização de empresa',
  'Outro evento',
] as const;

export function FinalCtaSection() {
  const [name, setName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [city, setCity] = useState('');
  const [guests, setGuests] = useState('');
  const [eventType, setEventType] = useState<string>(EVENT_OPTIONS[0]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedDate = eventDate
      ? eventDate.split('-').reverse().join('/')
      : 'A definir';

    const messageLines = [
      'Olá, equipe Dom Brazzeiro! Gostaria de pedir um orçamento personalizado.',
      '',
      `Nome: ${name.trim() || 'Não informado'}`,
      `Data do evento: ${formattedDate}`,
      `Cidade (SC): ${city.trim() || 'A definir'}`,
      `Número de convidados: ${guests.trim() || 'A definir'}`,
      `Tipo de evento: ${eventType}`,
    ];

    const url = buildWhatsAppUrl(messageLines.join('\n'));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="orcamento"
      className="relative overflow-hidden border-t border-[#7A4524]/50 py-20 sm:py-24"
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

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <EmberReveal className="lg:col-span-5">
            <span className="font-label text-xs uppercase tracking-[0.28em] text-[#F2B33D]">
              Orçamento sob medida
            </span>
            <h2 className="mt-3 font-display text-3xl leading-[1.1] text-[#F5E6C8] sm:text-4xl lg:text-5xl">
              Seu evento merece o{' '}
              <span className="brand-gradient-text">Dom da Brasa.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#F5E6C8]/90">
              Preencha os dados básicos ao lado. Ao clicar no botão, você já abre
              a conversa no nosso WhatsApp com tudo pronto para a gente montar a
              proposta ideal para o seu dia.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-[#F2B33D]">
              <span className="h-2 w-2 rounded-full bg-[#E8661E]" aria-hidden="true" />
              <span>Atendimento direto com nossa equipe pelo WhatsApp</span>
            </div>
          </EmberReveal>

          <EmberReveal delay={0.12} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#7A4524]/70 bg-[#140F0C]/92 p-6 shadow-[0_24px_55px_rgba(0,0,0,0.65)] sm:p-8"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="cta-name"
                    className="mb-1.5 block font-label text-xs uppercase tracking-[0.18em] text-[#F2B33D]"
                  >
                    Seu nome
                  </label>
                  <input
                    id="cta-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como podemos chamar você?"
                    className="w-full rounded-md border border-[#7A4524]/60 bg-[#2A1A12]/85 px-4 py-3 text-sm text-[#F5E6C8] placeholder:text-[#D8C4A4]/50 focus:border-[#E8661E] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cta-date"
                    className="mb-1.5 block font-label text-xs uppercase tracking-[0.18em] text-[#F2B33D]"
                  >
                    Data do evento
                  </label>
                  <input
                    id="cta-date"
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full rounded-md border border-[#7A4524]/60 bg-[#2A1A12]/85 px-4 py-3 text-sm text-[#F5E6C8] focus:border-[#E8661E] focus:outline-none [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cta-city"
                    className="mb-1.5 block font-label text-xs uppercase tracking-[0.18em] text-[#F2B33D]"
                  >
                    Cidade em SC
                  </label>
                  <input
                    id="cta-city"
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex.: Blumenau, Florianópolis..."
                    className="w-full rounded-md border border-[#7A4524]/60 bg-[#2A1A12]/85 px-4 py-3 text-sm text-[#F5E6C8] placeholder:text-[#D8C4A4]/50 focus:border-[#E8661E] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cta-guests"
                    className="mb-1.5 block font-label text-xs uppercase tracking-[0.18em] text-[#F2B33D]"
                  >
                    Número de convidados
                  </label>
                  <input
                    id="cta-guests"
                    type="number"
                    min={10}
                    max={2000}
                    required
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="Ex.: 60"
                    className="w-full rounded-md border border-[#7A4524]/60 bg-[#2A1A12]/85 px-4 py-3 text-sm text-[#F5E6C8] placeholder:text-[#D8C4A4]/50 focus:border-[#E8661E] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cta-type"
                    className="mb-1.5 block font-label text-xs uppercase tracking-[0.18em] text-[#F2B33D]"
                  >
                    Tipo de evento
                  </label>
                  <select
                    id="cta-type"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full rounded-md border border-[#7A4524]/60 bg-[#2A1A12]/85 px-4 py-3 text-sm text-[#F5E6C8] focus:border-[#E8661E] focus:outline-none"
                  >
                    {EVENT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-ember-glow relative mt-6 inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-md bg-[#E8661E] px-5 py-4 font-label text-xs font-semibold uppercase tracking-[0.12em] text-[#140F0C] transition-all hover:bg-[#F2B33D] sm:px-6 sm:text-sm sm:tracking-[0.16em] cursor-pointer"
              >
                <span
                  aria-hidden="true"
                  className="brand-gradient-bar absolute inset-x-0 bottom-0 h-1 opacity-85"
                />
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Peça seu orçamento personalizado</span>
              </button>
            </form>
          </EmberReveal>
        </div>
      </div>
    </section>
  );
}
