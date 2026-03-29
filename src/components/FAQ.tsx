import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Gibt es laufende oder versteckte Kosten?',
    answer: 'Nein. Bei unserem "Web Basic"-Paket zahlen Sie nur einen fairen, einmaligen Fixpreis. Laufende Kosten für Webhosting und Wartung fallen nur an, wenn Sie ganz bewusst unser "Web + Hosting"-Sorglospaket buchen.'
  },
  {
    question: 'Wem gehört die Webseite nach Fertigstellung?',
    answer: 'Zu 100 % Ihnen. Nach der vollständigen Bezahlung gehen alle Rechte an der Webseite an Sie über. Sie sind an keinen Knebelvertrag gebunden und können jederzeit tun und lassen, was Sie möchten.'
  },
  {
    question: 'Was passiert, wenn ich später meine Speisekarte ändern muss?',
    answer: 'Wir übergeben Ihnen die Webseite so, dass Sie kleine Textänderungen selbst vornehmen können. Falls Sie das nicht möchten, bieten wir auch eine günstige, laufende Betreuung an, bei der wir alle Änderungen für Sie übernehmen – ein kurzer Anruf oder eine WhatsApp-Nachricht genügt.'
  },
  {
    question: 'Warum seid ihr günstiger als große Werbeagenturen?',
    answer: 'Als lokales Zwei-Mann-Team (Schüler-Startup) haben wir keine teuren Büromieten oder großen Overhead-Kosten. Wir fokussieren uns zu 100 % auf die Gastronomie und haben effiziente Prozesse entwickelt, um maximale Qualität zu einem fairen Preis zu liefern.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 px-6 md:px-12" style={{ background: '#0A1628' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[2px] uppercase" style={{ color: '#3E6FB5' }}>
            Transparenz
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Häufige Fragen
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-12 mx-auto" style={{ background: '#1B3A6B' }} />
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? 'rgba(27,58,107,0.15)' : '#0E1E38',
                  border: `1px solid ${isOpen ? 'rgba(27,58,107,0.5)' : 'rgba(232,237,245,0.08)'}`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex justify-between items-center gap-4 outline-none"
                >
                  <span className="font-display text-lg md:text-xl font-medium" style={{ color: isOpen ? '#D0DFF5' : '#E8EDF5' }}>
                    {faq.question}
                  </span>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300"
                    style={{
                      background: isOpen ? '#1B3A6B' : 'rgba(232,237,245,0.05)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown size={18} style={{ color: isOpen ? '#EDF2FA' : 'rgba(232,237,245,0.5)' }} />
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 text-sm md:text-base font-light leading-relaxed" style={{ color: 'rgba(232,237,245,0.6)' }}>
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
