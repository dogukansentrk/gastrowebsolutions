import { motion } from 'framer-motion';
import { UtensilsCrossed, Smartphone, Zap, Handshake } from 'lucide-react';

const features = [
  {
    icon: UtensilsCrossed,
    title: 'Gastro-Spezialisierung',
    desc: 'Wir kennen die Bedürfnisse der Gastronomie: Speisekarte, Öffnungszeiten, Kontaktdaten – alles, was Ihre Gäste brauchen.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Über 70 % der Suchen erfolgen per Smartphone. Ihre Seite ist auf jedem Gerät perfekt – von iPhone bis Android.',
  },
  {
    icon: Zap,
    title: 'Schnelle Umsetzung',
    desc: 'In 1–2 Wochen ist Ihre Webseite live. Keine langen Wartezeiten, kein Bürokratie-Dschungel.',
  },
  {
    icon: Handshake,
    title: 'Persönlicher Service',
    desc: 'Kein anonymer Online-Service. Wir kommen zu Ihnen, kennen die Region und verstehen Ihren Betrieb.',
  },
];

export function WarumWir() {
  return (
    <section id="warum" className="py-20 md:py-28 px-6 md:px-12" style={{ background: '#0E1E38' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-[2px] uppercase" style={{ color: '#3E6FB5' }}>
            Warum GastroWeb Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Mehr Gäste beginnen<br />mit Google.
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-8" style={{ background: '#1B3A6B' }} />
          <p className="text-base max-w-xl leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.55)' }}>
            Über 80 % der Restaurantgäste suchen online, bevor sie einen Tisch auswählen. Ohne professionelle Webseite verlieren Sie täglich potenzielle Kunden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-16 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(232,237,245,0.06)' }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 md:p-10 transition-colors"
              style={{ background: 'rgba(14,30,56,0.8)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(27,58,107,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(14,30,56,0.8)';
              }}
            >
              <feature.icon
                size={28}
                className="mb-4"
                style={{ color: '#3E6FB5' }}
              />
              <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.5)' }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Big stat card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-px p-8 md:p-10 rounded-b-2xl flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12"
          style={{
            background: 'rgba(27,58,107,0.1)',
            borderTop: '1px solid rgba(27,58,107,0.25)',
            border: '1px solid rgba(232,237,245,0.06)',
            borderTopColor: 'rgba(27,58,107,0.25)',
          }}
        >
          <div className="font-display text-5xl md:text-7xl font-bold flex-shrink-0" style={{ color: '#1B3A6B' }}>
            60.000+
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">Gastronomiebetriebe in Österreich</h3>
            <p className="text-sm leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.5)' }}>
              Ein Großteil verfügt über keine oder eine veraltete Webseite. Allein im Bezirk Kufstein haben hunderte Betriebe enormes Potenzial, das sie online nicht nutzen. Hier setzen wir an.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
