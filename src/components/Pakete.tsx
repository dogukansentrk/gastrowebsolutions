import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const basicFeatures = [
  'Professionelle, individuelle Webseite',
  'Digitale Speisekarte (einfach aktualisierbar)',
  '100 % mobiloptimiert (Smartphone & Tablet)',
  'Kontaktdaten & Öffnungszeiten',
  'Google Maps Integration',
  'Übergabe als eigenständige Webseite',
  '1 Monat kostenloser Support',
];

const premiumFeatures = [
  'Alles aus dem Basic-Paket',
  'Professionelles Webhosting durch uns',
  'Domain-Management & SSL-Zertifikat',
  'Laufende technische Betreuung',
  'Inhaltspflege auf Anfrage (Speisekarte, etc.)',
  'Regelmäßige Updates & Sicherheit',
  'Google My Business Einrichtung & Pflege',
  'Prioritäts-Support direkt per WhatsApp',
];

export function Pakete() {
  return (
    <section id="pakete" className="py-20 md:py-28 px-6 md:px-12" style={{ background: '#0A1628' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-[2px] uppercase" style={{ color: '#3E6FB5' }}>
            Unsere Angebote
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Zwei Pakete.<br />Ein Ziel.
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-8" style={{ background: '#1B3A6B' }} />
          <p className="text-base max-w-xl leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.55)' }}>
            Wählen Sie das Paket, das zu Ihrem Betrieb passt. Jede Webseite ist individuell gestaltet – keine Templates, kein Copy-Paste.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {/* Web Basic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 md:p-10 transition-all duration-300"
            style={{
              background: '#0E1E38',
              border: '1px solid rgba(232,237,245,0.08)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(27,58,107,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(232,237,245,0.08)';
            }}
          >
            <div className="font-display text-2xl font-bold text-white mb-1">Web Basic</div>
            <div className="text-sm font-light mb-7" style={{ color: 'rgba(232,237,245,0.4)' }}>
              Einmalige Website – Sie haben die volle Kontrolle
            </div>
            <div className="font-display text-4xl font-bold mb-1" style={{ color: '#3E6FB5' }}>Auf Anfrage</div>
            <div className="text-xs font-light mb-8" style={{ color: 'rgba(232,237,245,0.35)' }}>
              Einmaliger Preis – Keine monatlichen Kosten
            </div>
            <ul className="flex flex-col gap-3 mb-8">
              {basicFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-light" style={{ color: 'rgba(232,237,245,0.7)' }}>
                  <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#1B3A6B' }} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="block text-center py-3 px-7 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                border: '1px solid rgba(232,237,245,0.2)',
                color: '#E8EDF5',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(27,58,107,0.6)';
                e.currentTarget.style.color = '#D0DFF5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(232,237,245,0.2)';
                e.currentTarget.style.color = '#E8EDF5';
              }}
            >
              Jetzt anfragen
            </a>
          </motion.div>

          {/* Web + Hosting (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-300"
            style={{
              background: 'rgba(27,58,107,0.08)',
              border: '1px solid rgba(27,58,107,0.4)',
            }}
          >
            <div
              className="absolute top-5 right-5 text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full"
              style={{ background: '#1B3A6B', color: '#EDF2FA' }}
            >
              Empfehlung
            </div>
            <div className="font-display text-2xl font-bold text-white mb-1">Web + Hosting</div>
            <div className="text-sm font-light mb-7" style={{ color: 'rgba(232,237,245,0.4)' }}>
              Wir kümmern uns um alles – dauerhaft
            </div>
            <div className="font-display text-4xl font-bold mb-1" style={{ color: '#3E6FB5' }}>Auf Anfrage</div>
            <div className="text-xs font-light mb-8" style={{ color: 'rgba(232,237,245,0.35)' }}>
              Einmalig + monatliches Hosting – Alles inkl.
            </div>
            <ul className="flex flex-col gap-3 mb-8">
              {premiumFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm font-light" style={{ color: 'rgba(232,237,245,0.7)' }}>
                  <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#3E6FB5' }} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              className="block text-center py-3 px-7 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ background: '#1B3A6B', color: '#EDF2FA' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#3E6FB5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1B3A6B';
              }}
            >
              Jetzt anfragen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
