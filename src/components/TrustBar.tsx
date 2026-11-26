import { BadgeCheck, Building2, Flame, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/siteData';
import { EmberReveal } from './MotionPrimitives';

const TRUST_PILLARS = [
  {
    icon: Flame,
    title: BRAND.signature,
    subtitle: 'Essência do anfitrião do fogo',
  },
  {
    icon: BadgeCheck,
    title: BRAND.instagramHandle,
    subtitle: 'Perfil verificado no Instagram',
  },
  {
    icon: Building2,
    title: 'Eventos sociais e corporativos',
    subtitle: 'Aniversários, casamentos e empresas',
  },
  {
    icon: ShieldCheck,
    title: 'Costela fogo de chão',
    subtitle: 'Assada lentamente na brasa viva',
  },
] as const;

export function TrustBar() {
  return (
    <section
      aria-label="Credenciais e confiança"
      className="relative border-y border-[#7A4524]/45 bg-[#2A1A12]/85 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <EmberReveal
                key={item.title}
                delay={idx * 0.06}
                className="flex items-start gap-3.5 rounded-lg border border-[#7A4524]/35 bg-[#140F0C]/65 p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#F2B33D]/30 bg-[#2A1A12] text-[#F2B33D]">
                  <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-label text-sm uppercase tracking-[0.14em] text-[#F5E6C8]">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#D8C4A4]">
                    {item.subtitle}
                  </p>
                </div>
              </EmberReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
