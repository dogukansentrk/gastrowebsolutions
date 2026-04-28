import { motion } from 'framer-motion';
import { BackgroundPaths } from '@/components/ui/background-paths';

export function Hero() {
  return (
    <section id="hero">
      <BackgroundPaths
        title="GastroWeb Solutions"
        subtitle="Professionelle, mobiloptimierte Webseiten speziell für Restaurants, Cafés und Gastronomiebetriebe im Bezirk Kufstein – schnell, fair und persönlich."
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2"
        >
          <a
            href="#pakete"
            className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: '#1B3A6B', color: '#EDF2FA', border: '1px solid rgba(208,223,245,0.2)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3E6FB5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1B3A6B';
            }}
          >
            Pakete ansehen
          </a>
          <a
            href="#kontakt"
            className="px-8 py-4 rounded-xl text-base font-normal transition-all duration-300 border hover:-translate-y-0.5"
            style={{ borderColor: 'rgba(232,237,245,0.2)', color: '#E8EDF5' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(27,58,107,0.6)';
              e.currentTarget.style.color = '#D0DFF5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(232,237,245,0.2)';
              e.currentTarget.style.color = '#E8EDF5';
            }}
          >
            Kostenlos anfragen
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-12 sm:gap-16 mt-16 pt-12"
          style={{ borderTop: '1px solid rgba(232,237,245,0.08)' }}
        >
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl font-bold text-primary-100">1–2</div>
            <div className="text-xs mt-1 tracking-wide" style={{ color: 'rgba(232,237,245,0.45)' }}>Wochen bis zur fertigen Seite</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl font-bold text-primary-100">80 %</div>
            <div className="text-xs mt-1 tracking-wide" style={{ color: 'rgba(232,237,245,0.45)' }}>der Gäste suchen zuerst online</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl font-bold text-primary-100">100 %</div>
            <div className="text-xs mt-1 tracking-wide" style={{ color: 'rgba(232,237,245,0.45)' }}>Fokus auf Gastronomie</div>
          </div>
        </motion.div>
      </BackgroundPaths>
    </section>
  );
}
