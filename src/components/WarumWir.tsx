import { motion } from 'framer-motion';
import { Smartphone, Zap, MessageCircle, Search } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Perfekt auf dem Handy',
    desc: '80 % deiner Kunden suchen per Smartphone. Deine Website sieht auf jedem Gerät perfekt aus – garantiert.',
    stat: '80%',
    statLabel: 'Mobile Suchen',
  },
  {
    icon: Zap,
    title: 'In 1–2 Wochen live',
    desc: 'Keine monatelangen Wartezeiten. Wir bauen deine Website schnell, damit du schneller Kunden gewinnst.',
    stat: '14',
    statLabel: 'Tage max.',
  },
  {
    icon: MessageCircle,
    title: 'Änderungen per WhatsApp',
    desc: 'Neue Speisekarte? Geänderte Öffnungszeiten? Eine kurze Nachricht an uns genügt – wir erledigen den Rest.',
    stat: '24h',
    statLabel: 'Reaktionszeit',
  },
  {
    icon: Search,
    title: 'Bei Google ganz oben',
    desc: 'Wir optimieren deine Website und richten Google Business ein, damit lokale Kunden dich sofort finden.',
    stat: '#1',
    statLabel: 'Lokale Suche',
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
            Was du bekommst
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Konkrete Ergebnisse.<br />Kein Gelaber.
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-8" style={{ background: '#1B3A6B' }} />
          <p className="text-base max-w-xl leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.55)' }}>
            Jede Website, die wir bauen, hat ein Ziel: dir mehr Kunden zu bringen. Hier ist, was du konkret erwarten kannst.
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
              className="p-8 md:p-10 transition-all duration-300 group relative overflow-hidden"
              style={{ background: 'rgba(14,30,56,0.8)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(27,58,107,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(14,30,56,0.8)';
              }}
            >
              {/* Stat number in background */}
              <div 
                className="absolute -right-2 -top-4 font-display text-[5rem] md:text-[6rem] font-bold leading-none pointer-events-none select-none transition-opacity duration-300 opacity-[0.04] group-hover:opacity-[0.08]"
                style={{ color: '#3E6FB5' }}
              >
                {feature.stat}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <feature.icon
                    size={24}
                    style={{ color: '#3E6FB5' }}
                  />
                  <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-1 rounded-full"
                    style={{ background: 'rgba(27,58,107,0.2)', color: '#3E6FB5' }}
                  >
                    {feature.statLabel}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.5)' }}>
                  {feature.desc}
                </p>
              </div>
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
            border: '1px solid rgba(232,237,245,0.06)',
            borderTopColor: 'rgba(27,58,107,0.25)',
          }}
        >
          <div className="font-display text-5xl md:text-7xl font-bold flex-shrink-0" style={{ color: '#1B3A6B' }}>
            60.000+
          </div>
          <div>
            <h3 className="text-lg font-medium text-white mb-2">Betriebe in Österreich ohne professionelle Website</h3>
            <p className="text-sm leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.5)' }}>
              Ein Großteil der lokalen Unternehmen verfügt über keine oder eine veraltete Webseite. Allein im Bezirk Kufstein haben hunderte Betriebe enormes ungenutztes Potenzial online. Hier setzen wir an.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
