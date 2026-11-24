import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/siteData';

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(
        'Olá! Vim pelo site da Dom Brazzeiro e gostaria de pedir um orçamento personalizado.'
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Dom Brazzeiro no WhatsApp"
      className="btn-ember-glow fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full border border-[#F2B33D]/55 bg-[#E8661E] px-4 py-3.5 text-[#140F0C] shadow-xl transition-all hover:scale-105 hover:bg-[#F2B33D] sm:px-5"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden font-label text-xs font-semibold uppercase tracking-[0.16em] sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
