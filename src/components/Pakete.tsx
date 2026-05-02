import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const basicFeatures = [
  'Individuelle, handgecodete Website',
  'Digitale Speisekarte / Leistungsübersicht',
  '100 % mobiloptimiert (Smartphone & Tablet)',
  'Kontaktdaten, Öffnungszeiten & Standort',
  'Google Maps Integration',
  'Übergabe als eigenständige Website',
  '1 Monat kostenloser Support',
];

const premiumFeatures = [
  'Alles aus dem Starter-Paket',
  'Professionelles Webhosting inklusive',
  'Domain-Management & SSL-Zertifikat',
  'Laufende technische Betreuung & Updates',
  'Inhaltspflege auf Anfrage (Texte, Bilder, etc.)',
  'Google My Business Einrichtung & Optimierung',
  'Prioritäts-Support per WhatsApp',
  'Regelmäßige Sicherheits-Updates',
];

export function Pakete() {
  return (
    <section id="pakete" className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden" style={{ background: '#0A1628' }}>
      {/* Background decoration */}
      <div 
        className="absolute right-[10%] top-[30%] w-[30%] h-[30%] rounded-full blur-[100px] pointer-events-none opacity-10"
        style={{ background: '#3E6FB5' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-[2px] uppercase" style={{ color: '#3E6FB5' }}>
            Klare Preise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Was bekommst du genau?<br />Und was kostet es?
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-8" style={{ background: '#1B3A6B' }} />
          <p className="text-base max-w-xl leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.55)' }}>
            Transparente Preise – keine versteckten Kosten, keine bösen Überraschungen. Jede Website ist individuell gestaltet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {/* Starter Paket */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-8 md:p-10 card-glow"
            style={{
              background: '#0E1E38',
              border: '1px solid rgba(232,237,245,0.08)',
            }}
          >
            <div className="font-display text-2xl font-bold text-white mb-1">Starter</div>
            <div className="text-sm font-light mb-7" style={{ color: 'rgba(232,237,245,0.4)' }}>
              Einmalige Website – du hast die volle Kontrolle
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display text-4xl font-bold" style={{ color: '#3E6FB5' }}>ab 349 €</span>
            </div>
            <div className="text-xs font-light mb-8" style={{ color: 'rgba(232,237,245,0.35)' }}>
              Einmaliger Preis – keine monatlichen Kosten
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
              className="block text-center py-3.5 px-7 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
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

          {/* Rundum-sorglos (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-8 md:p-10 relative overflow-hidden card-glow"
            style={{
              background: 'rgba(27,58,107,0.08)',
              border: '1px solid rgba(27,58,107,0.4)',
            }}
          >
            {/* Subtle shimmer effect */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                background: 'linear-gradient(135deg, transparent 30%, rgba(62,111,181,0.1) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
              }}
            />

            <div
              className="absolute top-5 right-5 text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full"
              style={{ background: '#1B3A6B', color: '#EDF2FA' }}
            >
              Beliebteste Wahl
            </div>
            <div className="font-display text-2xl font-bold text-white mb-1">Rundum-sorglos</div>
            <div className="text-sm font-light mb-7" style={{ color: 'rgba(232,237,245,0.4)' }}>
              Wir kümmern uns um alles – dauerhaft
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display text-4xl font-bold" style={{ color: '#3E6FB5' }}>ab 349 €</span>
              <span className="text-lg font-light" style={{ color: 'rgba(232,237,245,0.4)' }}>+ 29 €/Monat</span>
            </div>
            <div className="text-xs font-light mb-8" style={{ color: 'rgba(232,237,245,0.35)' }}>
              Einmalig + monatliches Hosting – alles inklusive
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
              className="block text-center py-3.5 px-7 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 animate-pulse-glow"
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

        {/* Price comparison note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 p-5 rounded-xl text-center"
          style={{
            background: 'rgba(14,30,56,0.4)',
            border: '1px solid rgba(232,237,245,0.04)',
          }}
        >
          <p className="text-sm font-light" style={{ color: 'rgba(232,237,245,0.45)' }}>
            <span className="font-medium text-white">Zum Vergleich:</span> Große Agenturen verlangen 3.000–10.000 € für eine vergleichbare Website.
            <br />
            Wir liefern die gleiche Qualität – als schlankes Team, ohne den Agentur-Aufpreis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
