import { MotionConfig } from 'framer-motion';
import { EventsSection } from './components/EventsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FogoDeChaoSection } from './components/FogoDeChaoSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { IncludedSection } from './components/IncludedSection';
import { MasterSection } from './components/MasterSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TrustBar } from './components/TrustBar';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#140F0C] text-[#F5E6C8]">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[#F2B33D] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#140F0C]"
        >
          Pular para o conteúdo principal
        </a>

        <Header />

        <main id="conteudo-principal">
          <HeroSection />
          <TrustBar />
          <MasterSection />
          <IncludedSection />
          <FogoDeChaoSection />
          <HowItWorksSection />
          <EventsSection />
          <GallerySection />
          <TestimonialsSection />
          <FaqSection />
          <FinalCtaSection />
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}

export default App;
