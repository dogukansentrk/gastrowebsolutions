import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SocialProof } from '@/components/SocialProof';
import { WarumWir } from '@/components/WarumWir';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { Pakete } from '@/components/Pakete';
import { UberUns } from '@/components/UberUns';
import { Integrationen } from '@/components/Integrationen';
import { Team } from '@/components/Team';
import { TerminBuchung } from '@/components/TerminBuchung';
import { FAQ } from '@/components/FAQ';
import { Kontakt } from '@/components/Kontakt';
import { Footer } from '@/components/Footer';
import { Impressum } from '@/components/Impressum';
import { Datenschutz } from '@/components/Datenschutz';
import { CookieBanner } from '@/components/CookieBanner';
import { ScrollToTop } from '@/components/ScrollToTop';

type Page = 'home' | 'impressum' | 'datenschutz';

const pageTitles: Record<Page, string> = {
  home: 'GastroWeb Solutions – Webdesign für lokale Betriebe in Tirol',
  impressum: 'Impressum | GastroWeb Solutions',
  datenschutz: 'Datenschutzerklärung | GastroWeb Solutions',
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pageTitles[currentPage];
  }, [currentPage]);

  return (
    <>
      <Navbar onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          {/* 1. Killer-Headline + Trust signals */}
          <Hero />
          
          {/* 2. Social Proof – sofort Vertrauen */}
          <SocialProof />
          
          {/* 3. Konkreter Nutzen – was bekommt der Kunde? */}
          <WarumWir />
          
          {/* 4. Beweis – echte Projekte */}
          <Portfolio />
          
          {/* 5. Kundenstimmen */}
          <Testimonials />
          
          {/* 6. Angebot – Pakete & Preise */}
          <Pakete />
          
          {/* 7. Wer steckt dahinter? */}
          <UberUns />
          
          {/* 8. Team mit Gesichtern */}
          <Team />
          
          {/* 9. Was steckt alles drin */}
          <Integrationen />
          
          {/* 10. FAQ */}
          <FAQ />
          
          {/* 11. Direkt erreichen */}
          <TerminBuchung />
          
          {/* 12. Kontaktformular */}
          <Kontakt />
        </>
      )}

      {currentPage === 'impressum' && <Impressum />}
      {currentPage === 'datenschutz' && <Datenschutz />}

      <Footer onNavigate={setCurrentPage} />
      
      {/* Scroll-to-Top Button */}
      <ScrollToTop />

      {/* Cookie Consent Banner */}
      <CookieBanner onNavigate={setCurrentPage} />
    </>
  );
}

export default App;
