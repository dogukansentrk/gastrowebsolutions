import { motion } from 'framer-motion';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { MapPin, CheckCircle2 } from 'lucide-react';

const trustPoints = [
  '2+ Projekte umgesetzt',
  'Standort: Kundl, Tirol',
  'Fokus: lokale Betriebe',
];

export function Hero() {
  return (
    <section id="hero">
      <BackgroundPaths
        overline="Webdesign-Agentur aus Tirol"
        title="Mehr Kunden durch eine Website, die überzeugt."
        subtitle="Wir bauen für Restaurants, Dienstleister und lokale Betriebe im Bezirk Kufstein maßgeschneiderte Websites – in 1–2 Wochen live, handgecodet, zu fairen Preisen."
      >
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2"
        >
          <a
            href="#pakete"
            className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 animate-pulse-glow"
            style={{ background: '#1B3A6B', color: '#EDF2FA', border: '1px solid rgba(208,223,245,0.2)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3E6FB5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1B3A6B';
            }}
          >
            Pakete & Preise ansehen
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

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10"
        >
          {trustPoints.map((point) => (
            <div 
              key={point}
              className="flex items-center gap-2 text-xs sm:text-sm font-light"
              style={{ color: 'rgba(232,237,245,0.5)' }}
            >
              <CheckCircle2 size={14} style={{ color: '#3E6FB5' }} />
              {point}
            </div>
          ))}
        </motion.div>

        {/* Founder intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mt-8 px-5 py-3 rounded-full mx-auto w-fit"
          style={{
            background: 'rgba(14,30,56,0.5)',
            border: '1px solid rgba(232,237,245,0.06)',
          }}
        >
          {/* Initials avatars stacked */}
          <div className="flex -space-x-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold"
              style={{
                background: 'linear-gradient(135deg, #1B3A6B, #3E6FB5)',
                color: '#EDF2FA',
                border: '2px solid rgba(10,22,40,0.8)',
              }}
            >
              DS
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold"
              style={{
                background: 'linear-gradient(135deg, #3E6FB5, #1B3A6B)',
                color: '#EDF2FA',
                border: '2px solid rgba(10,22,40,0.8)',
              }}
            >
              BM
            </div>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold"
              style={{
                background: 'linear-gradient(135deg, #1B3A6B, #3E6FB5)',
                color: '#EDF2FA',
                border: '2px solid rgba(10,22,40,0.8)',
              }}
            >
              AM
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-light" style={{ color: 'rgba(232,237,245,0.5)' }}>
              Dogukan, Beqir & Adrijan
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(27,58,107,0.3)', color: '#3E6FB5' }}>
              <MapPin size={10} className="inline -mt-0.5 mr-0.5" />
              Kundl
            </span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-12 sm:gap-16 mt-14 pt-10 pb-16"
          style={{ borderTop: '1px solid rgba(232,237,245,0.06)' }}
        >
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl font-bold text-primary-100">1–2</div>
            <div className="text-xs mt-1 tracking-wide" style={{ color: 'rgba(232,237,245,0.4)' }}>Wochen bis zur fertigen Seite</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl font-bold text-primary-100">80 %</div>
            <div className="text-xs mt-1 tracking-wide" style={{ color: 'rgba(232,237,245,0.4)' }}>der Kunden suchen zuerst online</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl font-bold text-primary-100">0 €</div>
            <div className="text-xs mt-1 tracking-wide" style={{ color: 'rgba(232,237,245,0.4)' }}>für Erstberatung & Angebot</div>
          </div>
        </motion.div>
      </BackgroundPaths>
    </section>
  );
}
