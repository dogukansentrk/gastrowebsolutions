import { motion } from 'framer-motion';
import { Target, Heart, Code2 } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: '100% Gastro-Fokus',
    description: 'Wir machen keine Webseiten für Anwälte oder Autohäuser. Unsere gesamte Expertise fließt in die Lösung der Probleme, die Restaurants und Cafés haben.'
  },
  {
    icon: Code2,
    title: 'Handgemachte Qualität',
    description: 'Keine langsamen Baukästen. Wir programmieren jede Zeile Code von Hand, damit Ihre Seite pfeilschnell lädt und auf Google ganz oben steht.'
  },
  {
    icon: Heart,
    title: 'Lokaler Partner',
    description: 'Als Startup direkt aus dem Bezirk Kufstein sind wir greifbar. Bei uns gibt es keine anonymen Callcenter, sondern direkte WhatsApp-Betreuung.'
  }
];

export function UberUns() {
  return (
    <section id="ueber-uns" className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden" style={{ background: '#08111F' }}>
      
      {/* Decorative background circle */}
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
            Wir verstehen<br />Ihre Branche.
          </h2>
          <div className="w-16 h-1 mb-8 rounded-full" style={{ background: '#1B3A6B' }} />
          
          <div className="space-y-6 text-base md:text-lg font-light leading-relaxed" style={{ color: 'rgba(232,237,245,0.7)' }}>
            <p>
              GastroWeb Solutions entstand aus einer einfachen Beobachtung in unserer Heimat: Viele großartige Restaurants kochen fantastisch, haben aber einen Online-Auftritt aus dem Jahr 2010. Große Agenturen verlangen oft ein Vermögen, und bei billigen Baukästen sehen alle Seiten gleich aus.
            </p>
            <p>
              Als junges Startup aus dem Bezirk Kufstein haben *Dogukan Sentürk* und *Beqir Morina* beschlossen, genau das zu ändern.
            </p>
            <p>
              Unsere Vision ist es, Tirols Gastronomie ins moderne digitale Zeitalter zu bringen – mit atemberaubendem Design, fairen Preisen und einer persönlichen Betreuung, die Sie so noch nie erlebt haben.
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
              className="p-8 rounded-2xl relative overflow-hidden group"
              style={{
                background: 'rgba(14, 30, 56, 0.4)',
                border: '1px solid rgba(232, 237, 245, 0.05)',
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at top right, rgba(62, 111, 181, 0.15), transparent 70%)'
                }}
              />
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
