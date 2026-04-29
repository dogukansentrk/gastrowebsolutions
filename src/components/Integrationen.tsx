import { motion } from 'framer-motion';
import { BookOpen, Truck, MapPin, Search } from 'lucide-react';

const integrations = [
  {
    icon: BookOpen,
    title: 'Digitale Speisekarten',
    desc: 'Immer aktuell, direkt am Smartphone abrufbar – als interaktive Webseite oder PDF. Änderungen jederzeit möglich, ohne technische Vorkenntnisse.',
    highlight: 'Aktualisierung auf Anfrage',
  },
  {
    icon: Truck,
    title: 'Lieferdienst-Verknüpfung',
    desc: 'Direkter Link zu Lieferando und anderen Plattformen – nahtlos in Ihre Webseite integriert, damit Gäste sofort bestellen können.',
    highlight: 'Ein Klick zur Bestellung',
  },
  {
    icon: MapPin,
    title: 'Google Maps Integration',
    desc: 'Ihre Gäste finden Sie auf Anhieb. Eingebettete Karte, Routenplanung und Standortinfos direkt auf Ihrer Webseite.',
    highlight: 'Sofort auffindbar',
  },
  {
    icon: Search,
    title: 'Google Business Optimierung',
    desc: 'Wir richten Ihren Google Business Eintrag ein und optimieren ihn, damit Sie bei lokalen Suchanfragen in Kufstein und Umgebung ganz oben stehen.',
    highlight: 'Lokal besser gefunden werden',
  },
];

export function Integrationen() {
  return (
    <section id="integrationen" className="py-20 md:py-28 px-6 md:px-12" style={{ background: '#0E1E38' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[2px] uppercase" style={{ color: '#3E6FB5' }}>
            Was wir integrieren
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Alles, was Ihre<br />Gäste brauchen.
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-8 mx-auto" style={{ background: '#1B3A6B' }} />
          <p className="text-base max-w-xl mx-auto leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.55)' }}>
            Wir verstehen die Gastronomie. Deshalb integrieren wir genau die Funktionen, die Ihre Gäste erwarten – und die Ihnen mehr Umsatz bringen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
          {integrations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-8 md:p-9 transition-all duration-300 group relative overflow-hidden"
              style={{
                background: 'rgba(10,22,40,0.5)',
                border: '1px solid rgba(232,237,245,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(27,58,107,0.4)';
                e.currentTarget.style.background = 'rgba(27,58,107,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(232,237,245,0.06)';
                e.currentTarget.style.background = 'rgba(10,22,40,0.5)';
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(27,58,107,0.15)',
                  border: '1px solid rgba(27,58,107,0.3)',
                }}
              >
                <item.icon size={22} style={{ color: '#3E6FB5' }} />
              </div>

              <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed font-light mb-4" style={{ color: 'rgba(232,237,245,0.5)' }}>
                {item.desc}
              </p>

              {/* Highlight badge */}
              <span
                className="inline-block text-[11px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(27,58,107,0.2)',
                  color: '#3E6FB5',
                  border: '1px solid rgba(27,58,107,0.3)',
                }}
              >
                {item.highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
