import { motion } from 'framer-motion';
import { MapPin, MessageCircle } from 'lucide-react';

const teamMembers = [
  {
    initials: 'DS',
    name: 'Dogukan Sentürk',
    role: 'Mitgründer – Web & Technik',
    school: 'HTL Anichstraße – Wirtschaftsingenieurwesen',
    desc: 'Dogukan entwickelt jede Website von Grund auf – kein Baukasten, kein Copy-Paste. Von der ersten Zeile Code bis zur fertigen, optimierten Seite.',
    gradient: 'linear-gradient(135deg, #1B3A6B 0%, #3E6FB5 100%)',
  },
  {
    initials: 'BM',
    name: 'Beqir Morina',
    role: 'Mitgründer – Kunden & Business',
    school: 'HAK Wörgl – Abteilung Business',
    desc: 'Beqir ist dein Ansprechpartner. Er kümmert sich um deine Wünsche, erstellt Angebote und sorgt dafür, dass alles reibungslos läuft.',
    gradient: 'linear-gradient(135deg, #3E6FB5 0%, #1B3A6B 100%)',
  },
  {
    initials: 'AM',
    name: 'Adrijan Marinovic',
    role: 'Neuzugang – Kunden & Business',
    school: 'HAK Wörgl – Abteilung Business',
    desc: 'Adrijan verstärkt das Team in der Kundenbetreuung und Projektplanung. Er sorgt dafür, dass Projekte pünktlich und reibungslos abgeschlossen werden.',
    gradient: 'linear-gradient(135deg, #1B3A6B 0%, #3E6FB5 100%)',
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden" style={{ background: '#0E1E38' }}>
      {/* Subtle background decoration */}
      <div 
        className="absolute -left-[15%] top-[20%] w-[40%] h-[40%] rounded-full blur-[120px] pointer-events-none opacity-10"
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
            Wer steckt dahinter
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Echte Menschen.<br />Kein anonymes Team.
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-6" style={{ background: '#1B3A6B' }} />
          <p className="text-base max-w-xl leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.55)' }}>
            Drei junge Gründer aus dem Bezirk Kufstein – mit echtem Know-how aus Wirtschaft und Technik. Bei uns weißt du immer, mit wem du sprichst.
          </p>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full"
            style={{
              background: 'rgba(27,58,107,0.15)',
              border: '1px solid rgba(27,58,107,0.3)',
            }}
          >
            <MapPin size={14} style={{ color: '#3E6FB5' }} />
            <span className="text-xs font-medium" style={{ color: '#3E6FB5' }}>
              Kundl, Tirol – Bezirk Kufstein
            </span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl p-8 md:p-10 card-glow"
              style={{
                background: 'rgba(10,22,40,0.6)',
                border: '1px solid rgba(232,237,245,0.06)',
              }}
            >
              {/* Avatar with gradient */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5 font-display text-xl font-bold shadow-lg"
                style={{
                  background: member.gradient,
                  color: '#EDF2FA',
                  boxShadow: '0 8px 24px rgba(27,58,107,0.3)',
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

        {/* WhatsApp CTA under team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/436767719737?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Webseite."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'rgba(37,211,102,0.1)',
              border: '1px solid rgba(37,211,102,0.3)',
              color: '#25D366',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(37,211,102,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(37,211,102,0.1)';
            }}
          >
            <MessageCircle size={16} />
            Direkt per WhatsApp schreiben
          </a>
        </motion.div>
      </div>
    </section>
  );
}
