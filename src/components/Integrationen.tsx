import { motion } from 'framer-motion';
import { BookOpen, MapPin, Search, Palette, Phone, BarChart3 } from 'lucide-react';

const integrations = [
  {
    icon: Palette,
    title: 'Individuelles Design',
    desc: 'Kein Template, kein Baukasten. Jede Website wird von Grund auf für deinen Betrieb gestaltet – einzigartig und professionell.',
    highlight: 'Maßgeschneidert',
  },
  {
    icon: BookOpen,
    title: 'Digitale Speisekarte / Leistungsübersicht',
    desc: 'Ob Speisekarte, Dienstleistungen oder Produkte – übersichtlich dargestellt, auf jedem Gerät perfekt lesbar.',
    highlight: 'Änderungen jederzeit',
  },
  {
    icon: MapPin,
    title: 'Google Maps & Standort',
    desc: 'Deine Kunden finden dich auf Anhieb. Eingebettete Karte, Routenplanung und alle wichtigen Infos auf einen Blick.',
    highlight: 'Sofort auffindbar',
  },
  {
    icon: Search,
    title: 'Google Business & SEO',
    desc: 'Wir richten deinen Google Business Eintrag ein und optimieren deine Website für lokale Suchanfragen – damit Kunden dich finden.',
    highlight: 'Lokal ganz oben',
  },
  {
    icon: Phone,
    title: 'Direkte Kontaktaufnahme',
    desc: 'Click-to-Call, WhatsApp-Button, Kontaktformular – deine Kunden erreichen dich mit einem Klick.',
    highlight: 'Ein Klick genügt',
  },
  {
    icon: BarChart3,
    title: 'Besucherstatistiken',
    desc: 'Sieh genau, wie viele Besucher deine Website hat, woher sie kommen und welche Seiten sie ansehen.',
    highlight: 'Datenbasiert wachsen',
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
            Was steckt drin
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Alles, was dein<br />Betrieb braucht.
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-8 mx-auto" style={{ background: '#1B3A6B' }} />
          <p className="text-base max-w-xl mx-auto leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.55)' }}>
            Wir integrieren genau die Funktionen, die deine Kunden erwarten – und die dir messbar mehr Umsatz bringen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {integrations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-8 card-glow"
              style={{
                background: 'rgba(10,22,40,0.5)',
                border: '1px solid rgba(232,237,245,0.06)',
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
