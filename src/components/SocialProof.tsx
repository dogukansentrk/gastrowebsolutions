import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const clients = [
  { name: 'Bruggnwirt', location: 'Kundl' },
  { name: 'Hausmeisterdienste Morina', location: 'Kufstein' },
];

export function SocialProof() {
  return (
    <section
      className="py-12 md:py-16 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A1628 0%, #0E1E38 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Stars + Rating */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="#3E6FB5" style={{ color: '#3E6FB5' }} />
              ))}
            </div>
            <span className="text-sm font-light" style={{ color: 'rgba(232,237,245,0.5)' }}>
              5.0 Kundenzufriedenheit
            </span>
          </div>

          {/* Headline */}
          <h3
            className="text-sm md:text-base font-light tracking-wide mb-8"
            style={{ color: 'rgba(232,237,245,0.4)' }}
          >
            Vertraut von lokalen Betrieben in Tirol
          </h3>

          {/* Client cards */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center gap-3 px-5 py-3 rounded-xl"
                style={{
                  background: 'rgba(14,30,56,0.5)',
                  border: '1px solid rgba(232,237,245,0.06)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-display text-sm font-bold flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(27,58,107,0.4), rgba(62,111,181,0.3))',
                    border: '1px solid rgba(27,58,107,0.4)',
                    color: '#3E6FB5',
                  }}
                >
                  {client.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-white leading-tight">{client.name}</div>
                  <div className="text-[11px] font-light" style={{ color: 'rgba(232,237,245,0.35)' }}>
                    {client.location}, Tirol
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
