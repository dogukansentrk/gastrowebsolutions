import { motion } from 'framer-motion';

const teamMembers = [
  {
    initials: 'DS',
    name: 'Dogukan Sentürk',
    role: 'Mitgründer – Web & Technik',
    school: 'HTL Anichstraße - 3. Klasse - Wirtschaftsingenieurwesen',
    desc: 'Dogukan bringt technisches Know-how und Programmiererfahrung mit. Er übernimmt die Entwicklung, den Aufbau und die technische Umsetzung jeder Webseite – von der ersten Zeile Code bis zur fertigen Seite.',
  },
  {
    initials: 'BM',
    name: 'Beqir Morina',
    role: 'Mitgründer – Kundenbeziehungen & Business',
    school: 'HAK Wörgl – 3. Klasse – Abteilung Business',
    desc: 'Beqir bringt betriebswirtschaftliches Denken und Verhandlungsgeschick mit. Er kümmert sich um Kundenkontakt, Angebote und die strategische Weiterentwicklung des Unternehmens.',
  },
  {
    initials: 'AM',
    name: 'Adrijan Marinovic',
    role: 'Neuzugang – Kundenbeziehungen & Business',
    school: 'HAK Wörgl – 3. Klasse – Abteilung Business',
    desc: 'Adrijan verstärkt das Team im Bereich Kundenbeziehungen und Business. Er unterstützt bei der Kundenbetreuung, Projektplanung und sorgt für reibungslose Abläufe.',
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 md:py-28 px-6 md:px-12" style={{ background: '#0E1E38' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-[2px] uppercase" style={{ color: '#3E6FB5' }}>
            Wer steckt dahinter
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Drei Schüler.<br />Eine Vision.
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-8" style={{ background: '#1B3A6B' }} />
          <p className="text-base max-w-xl leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.55)' }}>
            GastroWeb Solutions wurde von Schülern aus der Region gegründet – mit echtem Know-how aus Wirtschaft und Technik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: 'rgba(10,22,40,0.6)',
                border: '1px solid rgba(232,237,245,0.06)',
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 font-display text-xl font-bold"
                style={{
                  background: 'rgba(27,58,107,0.2)',
                  border: '2px solid rgba(27,58,107,0.4)',
                  color: '#3E6FB5',
                }}
              >
                {member.initials}
              </div>
              <div className="text-xl font-medium text-white mb-1">{member.name}</div>
              <div className="text-sm mb-1" style={{ color: '#3E6FB5' }}>{member.role}</div>
              <div className="text-xs font-light mb-5" style={{ color: 'rgba(232,237,245,0.35)' }}>{member.school}</div>
              <p className="text-sm leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.55)' }}>
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
