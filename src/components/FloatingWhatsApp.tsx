import { buildWhatsAppUrl } from '../data/siteData';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl(
        'Olá! Vim pelo site da Dom Brazzeiro e gostaria de pedir um orçamento personalizado.'
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Dom Brazzeiro no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center rounded-full p-1 text-[#E8661E] drop-shadow-[0_6px_18px_rgba(232,102,30,0.48)] transition-all duration-200 hover:scale-110 hover:text-[#F2B33D]"
    >
      <WhatsAppIcon className="h-11 w-11 sm:h-12 sm:w-12" />
    </a>
  );
}
