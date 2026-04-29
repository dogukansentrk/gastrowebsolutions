import { motion } from 'framer-motion';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

const channels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+43 676 7719737',
    desc: 'Schreiben Sie uns direkt per WhatsApp – unkompliziert und schnell. Wir antworten in der Regel innerhalb weniger Stunden.',
    href: 'https://wa.me/436767719737?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Webseite%20f%C3%BCr%20meinen%20Gastronomiebetrieb.',
    btnText: 'WhatsApp öffnen',
    color: '#25D366',
    bgHover: 'rgba(37,211,102,0.15)',
    borderColor: 'rgba(37,211,102,0.3)',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'gastrowebsolutions@gmail.com',
    desc: 'Senden Sie uns eine E-Mail mit Ihren Wünschen. Wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot.',
    href: 'mailto:gastrowebsolutions@gmail.com?subject=Anfrage%20Webseite&body=Hallo%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20eine%20Webseite%20f%C3%BCr%20meinen%20Gastronomiebetrieb.%0A%0AMit%20freundlichen%20Gr%C3%BC%C3%9Fen',
    btnText: 'E-Mail schreiben',
    color: '#3E6FB5',
    bgHover: 'rgba(62,111,181,0.15)',
    borderColor: 'rgba(62,111,181,0.3)',
  },
];

export function TerminBuchung() {
  return (
    <section id="termin" className="py-20 md:py-28 px-6 md:px-12" style={{ background: '#0A1628' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[2px] uppercase" style={{ color: '#3E6FB5' }}>
            Direkt erreichen
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Schreiben Sie uns<br />– wir antworten sofort.
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-8 mx-auto" style={{ background: '#1B3A6B' }} />
          <p className="text-base max-w-xl mx-auto leading-relaxed font-light" style={{ color: 'rgba(232,237,245,0.55)' }}>
            Kein Kontaktformular, kein Warten. Erreichen Sie uns direkt per WhatsApp oder E-Mail – persönlich und unkompliziert.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((channel, i) => (
            <motion.a
              key={channel.label}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl p-8 md:p-10 block transition-all duration-300 group"
              style={{
                background: 'rgba(10,22,40,0.5)',
                border: `1px solid rgba(232,237,245,0.06)`,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = channel.borderColor;
                e.currentTarget.style.background = channel.bgHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(232,237,245,0.06)';
                e.currentTarget.style.background = 'rgba(10,22,40,0.5)';
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: `${channel.color}15`,
                  border: `2px solid ${channel.color}40`,
                }}
              >
                <channel.icon size={26} style={{ color: channel.color }} />
              </div>

              {/* Label & value */}
              <div className="text-xs font-medium tracking-wide uppercase mb-1" style={{ color: channel.color }}>
                {channel.label}
              </div>
              <div className="text-lg font-medium text-white mb-3">
                {channel.value}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed font-light mb-6" style={{ color: 'rgba(232,237,245,0.5)' }}>
                {channel.desc}
              </p>

              {/* CTA */}
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                style={{ color: channel.color }}
              >
                {channel.btnText}
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
