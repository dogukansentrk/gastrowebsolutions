import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { UberUns } from '@/components/UberUns';
import { WarumWir } from '@/components/WarumWir';
import { Portfolio } from '@/components/Portfolio';
import { Pakete } from '@/components/Pakete';
import { Integrationen } from '@/components/Integrationen';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
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
  home: 'GastroWeb Solutions – Webdesign für die Gastronomie in Tirol',
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
          <Hero />
          <UberUns />
          <WarumWir />
          <Portfolio />
          <Pakete />
          <Integrationen />
          <Team />
          <Testimonials />
          <TerminBuchung />
          <FAQ />
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
