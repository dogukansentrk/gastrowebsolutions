import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WarumWir } from '@/components/WarumWir';
import { Pakete } from '@/components/Pakete';
import { Team } from '@/components/Team';
import { FAQ } from '@/components/FAQ';
import { Kontakt } from '@/components/Kontakt';
import { Footer } from '@/components/Footer';
import { Impressum } from '@/components/Impressum';
import { Datenschutz } from '@/components/Datenschutz';

type Page = 'home' | 'impressum' | 'datenschutz';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <>
      <Navbar onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <WarumWir />
          <Pakete />
          <Team />
          <FAQ />
          <Kontakt />
        </>
      )}

      {currentPage === 'impressum' && <Impressum />}
      {currentPage === 'datenschutz' && <Datenschutz />}

      <Footer onNavigate={setCurrentPage} />
    </>
  );
}

export default App;
