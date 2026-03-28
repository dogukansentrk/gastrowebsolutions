import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WarumWir } from '@/components/WarumWir';
import { Pakete } from '@/components/Pakete';
import { Team } from '@/components/Team';
import { Kontakt } from '@/components/Kontakt';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WarumWir />
      <Pakete />
      <Team />
      <Kontakt />
      <Footer />
    </>
  );
}

export default App;
