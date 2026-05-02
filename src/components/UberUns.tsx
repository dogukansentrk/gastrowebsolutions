import { motion } from 'framer-motion';
import { Target, Code2, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Nur lokale Betriebe. Keine Konzerne.',
    description: 'Wir arbeiten ausschließlich mit lokalen Unternehmen – Restaurants, Dienstleister, Handwerker. Wir kennen eure Herausforderungen, weil wir selbst aus der Region kommen.'
  },
  {
    icon: Code2,
    title: 'Kein Wix. Kein Jimdo. Handgecodet.',
    description: 'Jede Website wird von Grund auf programmiert. Das Ergebnis: pfeilschnelle Ladezeiten, Top-Rankings bei Google und ein Design, das sich von der Masse abhebt.'
  },
  {
    icon: Heart,
    title: 'Wir kommen zu dir. Persönlich. Vor Ort.',
    description: 'Kein anonymes Support-Ticket. Bei uns bekommst du einen direkten Ansprechpartner per WhatsApp – und wenn nötig, kommen wir auch vorbei.'
  }
];

export function UberUns() {
  return (
    <section id="ueber-uns" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden" style={{ background: '#08111F' }}>
      
      {/* Decorative background */}
      <div 
        className="absolute -right-[20%] -top-[10%] w-[50%] h-[50%] rounded-full blur-[120px] pointer-events-none opacity-20"
        style={{ background: '#3E6FB5' }}
      />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-[2px] uppercase mb-4 block" style={{ color: '#3E6FB5' }}>
            Über uns
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Dein Betrieb ist großartig.<br />Online merkt's nur keiner.
          </h2>
          <div className="w-16 h-1 mb-8 rounded-full" style={{ background: '#1B3A6B' }} />
          
          <div className="space-y-6 text-base md:text-lg font-light leading-relaxed" style={{ color: 'rgba(232,237,245,0.7)' }}>
            <p>
              Du machst einen fantastischen Job – ob im Restaurant, als Handwerker oder Dienstleister. Aber wenn Kunden nach dir googeln, finden sie entweder nichts oder eine veraltete Seite aus dem Jahr 2010.
            </p>
            <p>
              Genau hier setzen wir an. <strong className="font-medium text-white">Dogukan, Beqir und Adrijan</strong> – drei Gründer aus dem Bezirk Kufstein – bauen dir eine Website, die neue Kunden bringt. Nicht in 3 Monaten, sondern in 1–2 Wochen.
            </p>
            <p className="text-sm px-5 py-4 rounded-xl" style={{ background: 'rgba(27,58,107,0.15)', border: '1px solid rgba(27,58,107,0.25)', color: 'rgba(232,237,245,0.6)' }}>
              💡 <strong className="font-medium text-white">Warum wir günstiger sind:</strong> Als Startup ohne teure Büromieten können wir Agentur-Qualität zu einem Bruchteil des Preises liefern.
            </p>
          </div>
        </motion.div>

        {/* Values / Cards Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-2xl relative overflow-hidden card-glow"
              style={{
                background: 'rgba(14, 30, 56, 0.4)',
                border: '1px solid rgba(232, 237, 245, 0.05)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(27, 58, 107, 0.3)' }}
              >
                <item.icon size={24} style={{ color: '#3E6FB5' }} />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(232,237,245,0.5)' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
