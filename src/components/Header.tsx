import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BRAND, buildWhatsAppUrl, NAV_LINKS } from '../data/siteData';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-[#140F0C]/95 backdrop-blur-md border-b border-[#7A4524]/45 shadow-[0_8px_30px_rgba(0,0,0,0.55)]'
          : 'bg-gradient-to-b from-[#140F0C]/90 via-[#140F0C]/55 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="flex items-center gap-3 group"
          aria-label="Dom Brazzeiro - Voltar ao início"
        >
          <img
            src={BRAND.logoWebp}
            alt="Logo Dom Brazzeiro Mestre Churrasqueiro"
            width={64}
            height={64}
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14"
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-lg leading-none text-[#F5E6C8]">
              {BRAND.name}
            </span>
            <span className="font-label text-[10px] uppercase tracking-[0.26em] text-[#F2B33D] mt-1">
              {BRAND.signature}
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-label text-xs uppercase tracking-[0.18em] text-[#F5E6C8]/90 transition-colors hover:text-[#F2B33D]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={buildWhatsAppUrl(
              'Olá! Gostaria de verificar a disponibilidade e garantir minha data com a Dom Brazzeiro.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#E8661E] px-5 py-2.5 font-label text-xs font-semibold uppercase tracking-[0.18em] text-[#140F0C] transition-all hover:bg-[#F2B33D] focus-visible:ring-2 focus-visible:ring-[#F2B33D]"
          >
            Garanta sua data
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#7A4524]/60 bg-[#2A1A12]/80 text-[#F5E6C8] transition-colors hover:border-[#E8661E] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="border-t border-[#7A4524]/40 bg-[#140F0C] px-5 pb-8 pt-5 lg:hidden"
          >
            <nav className="flex flex-col gap-4" aria-label="Menu mobile">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-[#7A4524]/25 pb-3 font-label text-sm uppercase tracking-[0.2em] text-[#F5E6C8] transition-colors hover:text-[#F2B33D]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={buildWhatsAppUrl(
                  'Olá! Gostaria de verificar a disponibilidade e garantir minha data com a Dom Brazzeiro.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-[#E8661E] px-5 py-3.5 font-label text-sm font-semibold uppercase tracking-[0.18em] text-[#140F0C] transition-colors hover:bg-[#F2B33D]"
              >
                Garanta sua data
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
