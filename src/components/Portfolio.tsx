import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Hausmeisterdienste Morina',
    type: 'Hausmeister & Facility Management',
    image: '/bedri.webp',
    desc: 'Professioneller Webauftritt für einen regionalen Hausmeisterdienst – mit Leistungsübersicht und direkter Kontaktaufnahme.',
  },
  {
    name: 'Bruggnwirt – Restaurant',
    type: 'Restaurant & Gasthof',
    image: '/bruggnwirt.webp',
    desc: 'Premium-Website für den Bruggnwirt in Kundl – mit digitaler Speisekarte und Telefonbestellung.',
  },
];

function IPhoneMockup({ image, name }: { image: string; name: string }) {
  return (
    <div className="relative mx-auto" style={{ width: 280, height: 570 }}>
      {/* Phone outer frame */}
      <div
        className="absolute inset-0 rounded-[3rem] overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          border: '2px solid rgba(232,237,245,0.12)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(232,237,245,0.05), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
          style={{
            width: 120,
            height: 28,
            background: '#0a0a0f',
            borderRadius: '0 0 18px 18px',
          }}
        >
          <div
            className="absolute top-2.5 left-1/2 -translate-x-1/2 rounded-full"
            style={{ width: 10, height: 10, background: '#1a1a2e', border: '1.5px solid #2a2a4e' }}
          />
        </div>

        {/* Screen area */}
        <div
          className="absolute overflow-hidden"
          style={{
            top: 12,
            left: 12,
            right: 12,
            bottom: 12,
            borderRadius: '2.2rem',
          }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          {/* Subtle screen reflection */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Bottom bar (home indicator) */}
        <div
          className="absolute bottom-2.5 left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: 100, height: 4, background: 'rgba(232,237,245,0.15)' }}
        />
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 px-6 md:px-12" style={{ background: '#0A1628' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-[2px] uppercase" style={{ color: '#3E6FB5' }}>
            Unsere Referenzen
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Projekte, die<br />überzeugen.
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-8" style={{ background: '#1B3A6B' }} />
          <p className="text-base max-w-xl leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.55)' }}>
            Hier sehen Sie einige unserer bisherigen Projekte – jedes individuell für den jeweiligen Betrieb umgesetzt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              {/* iPhone mockup */}
              <div className="mb-8">
                <IPhoneMockup image={project.image} name={project.name} />
              </div>

              {/* Project info below phone */}
              <div className="text-center max-w-xs">
                <div className="text-xs font-medium tracking-wide uppercase mb-2" style={{ color: '#3E6FB5' }}>
                  {project.type}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'rgba(232,237,245,0.5)' }}>
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
