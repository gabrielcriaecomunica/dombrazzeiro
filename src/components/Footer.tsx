import { Instagram, MapPin } from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../data/siteData';
import { VerifiedBadgeIcon } from './VerifiedBadgeIcon';
import { WhatsAppIcon } from './WhatsAppIcon';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-[#7A4524]/45 bg-[#140F0C] py-12 text-[#D8C4A4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-center">
          <div className="flex items-center gap-4">
            <img
              src={BRAND.logoWebp}
              alt="Logo Dom Brazzeiro Mestre Churrasqueiro"
              width={72}
              height={72}
              loading="lazy"
              className="h-16 w-auto object-contain"
            />
            <div>
              <p className="font-display text-xl text-[#F5E6C8]">{BRAND.name}</p>
              <p className="font-label text-xs uppercase tracking-[0.24em] text-[#F2B33D] mt-0.5">
                {BRAND.signature}
              </p>
            </div>
          </div>

          <div className="space-y-2.5 text-sm">
            <div className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E8661E]" aria-hidden="true" />
              <div>
                <p className="text-[#F5E6C8]">{BRAND.region}</p>
                <p className="mt-0.5 text-xs text-[#D8C4A4]/85">
                  {BRAND.citiesStatus}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @dom_brazzeiro (perfil verificado)"
              className="inline-flex items-center gap-2 text-sm text-[#F5E6C8] transition-colors hover:text-[#F2B33D]"
            >
              <Instagram className="h-4 w-4 text-[#E8661E]" aria-hidden="true" />
              <span>{BRAND.instagramHandle}</span>
              <VerifiedBadgeIcon />
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${BRAND.whatsappDisplay}`}
              className="inline-flex items-center gap-2 text-sm text-[#F5E6C8] transition-colors hover:text-[#F2B33D]"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#E8661E]" />
              <span>{BRAND.whatsappDisplay}</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[#7A4524]/30 pt-6 text-xs text-[#D8C4A4]/75 sm:flex-row">
          <p>
            © {CURRENT_YEAR} {BRAND.name} | {BRAND.subtitle}. Todos os
            direitos reservados.
          </p>
          <p>
            Churrasco premium e costela fogo de chão com {BRAND.masterName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
