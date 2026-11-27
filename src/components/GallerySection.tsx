import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { GALLERY_PHOTOS } from '../data/siteData';
import { EmberReveal, SectionHeading } from './MotionPrimitives';

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);
  const showPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
    );
  }, []);
  const showNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % GALLERY_PHOTOS.length
    );
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

  const activePhoto = selectedIndex !== null ? GALLERY_PHOTOS[selectedIndex] : null;

  return (
    <section
      id="galeria"
      className="relative border-t border-[#7A4524]/35 bg-[#2A1A12]/55 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Bastidores do fogo e da mesa"
          title="O sabor começa antes do"
          highlight="primeiro corte"
          breakHighlight
        />

        {/*
          AVISO DE MANUTENÇÃO DAS FOTOS DA GALERIA:
          As imagens abaixo estão usando arquivos temporários em WebP dentro de /public/assets/images/.
          Para inserir as fotos reais da Dom Brazzeiro, substitua os arquivos mantendo as proporções
          ou atualize os caminhos em src/data/siteData.ts (GALLERY_PHOTOS).
        */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <EmberReveal
              key={photo.id}
              delay={idx * 0.05}
              className={photo.aspectClass}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(idx)}
                aria-label={
                  photo.videoSrc
                    ? `Ampliar vídeo: ${photo.caption}`
                    : `Ampliar foto: ${photo.caption}`
                }
                className="group relative h-full w-full overflow-hidden rounded-xl border border-[#7A4524]/45 bg-[#2A1A12] text-left focus-visible:ring-2 focus-visible:ring-[#F2B33D]"
              >
                {photo.videoSrc ? (
                  <video
                    src={photo.videoSrc}
                    poster={photo.src}
                    autoPlay={!prefersReducedMotion}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label={photo.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className={`h-full w-full object-cover ${photo.objectClass ?? 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                  />
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#140F0C]/90 via-[#140F0C]/15 to-transparent opacity-80 transition-opacity group-hover:opacity-95"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <p className="text-xs sm:text-sm font-medium text-[#F5E6C8]">
                    {photo.caption}
                  </p>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F2B33D]/40 bg-[#140F0C]/80 text-[#F2B33D] transition-colors group-hover:bg-[#E8661E] group-hover:text-[#140F0C]">
                    <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </EmberReveal>
          ))}
        </div>
      </div>

      {/* Lightbox acessível */}
      <AnimatePresence>
        {activePhoto ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Visualização ampliada: ${activePhoto.caption}`}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#140F0C]/95 p-4 backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[#7A4524]/70 bg-[#2A1A12] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#7A4524]/40 px-4 py-3 sm:px-6">
                <p className="text-sm font-medium text-[#F5E6C8]">
                  {activePhoto.caption}
                </p>
                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Fechar galeria"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#7A4524]/50 bg-[#140F0C] text-[#F5E6C8] transition-colors hover:border-[#E8661E] hover:text-[#F2B33D]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="relative flex flex-1 items-center justify-center bg-[#140F0C]">
                {activePhoto.videoSrc ? (
                  <video
                    src={activePhoto.videoSrc}
                    poster={activePhoto.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    aria-label={activePhoto.alt}
                    className="max-h-[72vh] w-auto max-w-full object-contain"
                  />
                ) : (
                  <img
                    src={activePhoto.src}
                    alt={activePhoto.alt}
                    className="max-h-[72vh] w-auto max-w-full object-contain"
                  />
                )}

                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Foto anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7A4524]/70 bg-[#140F0C]/85 text-[#F5E6C8] transition-colors hover:border-[#F2B33D] hover:text-[#F2B33D]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Próxima foto"
                  className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7A4524]/70 bg-[#140F0C]/85 text-[#F5E6C8] transition-colors hover:border-[#F2B33D] hover:text-[#F2B33D]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
