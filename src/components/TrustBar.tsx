import { Building2, Instagram, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/siteData';
import { EmberReveal } from './MotionPrimitives';
import { VerifiedBadgeIcon } from './VerifiedBadgeIcon';

const TRUST_PILLARS = [
  {
    id: 'instagram',
    icon: Instagram,
    title: BRAND.instagramHandle,
    href: BRAND.instagramUrl,
    verified: true,
  },
  {
    id: 'eventos',
    icon: Building2,
    title: 'Eventos sociais e corporativos',
    href: undefined,
    verified: false,
  },
  {
    id: 'costela',
    icon: ShieldCheck,
    title: 'Costela fogo de chão',
    href: undefined,
    verified: false,
  },
] as const;

export function TrustBar() {
  return (
    <section
      aria-label="Credenciais e confiança"
      className="relative border-y border-[#7A4524]/45 bg-[#2A1A12]/85 py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TRUST_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            const content = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#F2B33D]/30 bg-[#2A1A12] text-[#F2B33D]">
                  <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <p className="inline-flex items-center gap-2 font-label text-sm uppercase tracking-[0.14em] text-[#F5E6C8]">
                  <span>{item.title}</span>
                  {item.verified ? <VerifiedBadgeIcon /> : null}
                </p>
              </>
            );

            return (
              <EmberReveal key={item.id} delay={idx * 0.06}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.title} no Instagram (perfil verificado)`}
                    className="flex h-full items-center gap-3.5 rounded-lg border border-[#7A4524]/35 bg-[#140F0C]/65 p-4 transition-colors hover:border-[#E8661E]/75 hover:bg-[#140F0C]/90"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex h-full items-center gap-3.5 rounded-lg border border-[#7A4524]/35 bg-[#140F0C]/65 p-4">
                    {content}
                  </div>
                )}
              </EmberReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
