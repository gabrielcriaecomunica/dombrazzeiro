import { EmberReveal } from './MotionPrimitives';

export function IdentificationSection() {
  return (
    <section className="relative bg-[#140F0C] py-20 sm:py-24 smoke-surface">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <EmberReveal>
          <span className="font-label text-xs uppercase tracking-[0.28em] text-[#E8661E]">
            Para quem quer viver a própria festa
          </span>
          <h2 className="mt-3 font-display text-3xl leading-[1.15] text-[#F5E6C8] sm:text-4xl lg:text-5xl">
            Já passou a festa inteira na churrasqueira?
          </h2>
        </EmberReveal>

        <EmberReveal delay={0.12}>
          <div className="mx-auto mt-7 max-w-3xl space-y-5 text-base leading-relaxed text-[#D8C4A4] sm:text-lg">
            <p>
              Você convida quem ama, prepara o espaço e, quando percebe, perdeu a
              conversa, o brinde e as fotos porque precisou ficar cuidando do fogo,
              cortando carne e repondo travessas. Na empresa acontece o mesmo: a
              responsabilidade pesa sobre quem organizou.
            </p>
            <p className="text-[#F5E6C8] font-medium">
              Com a Dom Brazzeiro, esse roteiro muda por completo. A gente chega antes
              dos primeiros convidados, acende a lenha, conduz o ponto de cada corte e
              mantém o buffet impecável até o último convidado ir embora.
            </p>
          </div>
        </EmberReveal>

        <EmberReveal delay={0.2}>
          <div className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#7A4524]" />
            <span className="font-label text-xs uppercase tracking-[0.24em] text-[#F2B33D]">
              Você recebe. A gente assa.
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#7A4524]" />
          </div>
        </EmberReveal>
      </div>
    </section>
  );
}
