import { Instagram, MapPin } from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../data/siteData';
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
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <title>Perfil verificado</title>
                <path
                  fill="#3897F0"
                  d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484z"
                />
                <path
                  fill="#FFFFFF"
                  d="M10.48 16.03a.75.75 0 0 1-.53-.22l-2.75-2.75a.75.75 0 1 1 1.06-1.06l2.22 2.22 5.22-5.22a.75.75 0 1 1 1.06 1.06l-5.75 5.75a.75.75 0 0 1-.53.22z"
                />
              </svg>
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
