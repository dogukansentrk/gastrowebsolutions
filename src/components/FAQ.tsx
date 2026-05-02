import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Für wen baut ihr Websites?',
    answer: 'Für alle lokalen Betriebe – egal ob Restaurant, Café, Handwerker, Dienstleister oder Friseur. Das Prinzip ist immer dasselbe: Wir machen dich online sichtbar und bringen dir mehr Kunden.'
  },
  {
    question: 'Gibt es versteckte oder laufende Kosten?',
    answer: 'Nein. Bei unserem Starter-Paket zahlst du nur einen fairen, einmaligen Fixpreis. Laufende Kosten für Webhosting und Wartung fallen nur an, wenn du ganz bewusst unser Rundum-sorglos-Paket buchst.'
  },
  {
    question: 'Wem gehört die Website nach Fertigstellung?',
    answer: 'Dir – zu 100 %. Nach der vollständigen Bezahlung gehen alle Rechte an dich über. Kein Knebelvertrag, keine Abhängigkeit. Du kannst jederzeit tun und lassen, was du möchtest.'
  },
  {
    question: 'Was passiert, wenn ich später etwas ändern muss?',
    answer: 'Wir übergeben dir die Website so, dass kleine Textänderungen einfach sind. Falls du das nicht möchtest, bieten wir auch eine günstige, laufende Betreuung an – ein kurzer Anruf oder eine WhatsApp-Nachricht genügt.'
  },
  {
    question: 'Warum seid ihr günstiger als große Agenturen?',
    answer: 'Als Startup ohne teure Büromieten oder großen Overhead können wir Agentur-Qualität zu einem Bruchteil des Preises liefern. Wir haben effiziente Prozesse entwickelt und fokussieren uns auf lokale Betriebe.'
  },
  {
    question: 'Wie lange dauert es, bis meine Website fertig ist?',
    answer: 'In der Regel 1–2 Wochen. Nach einem kurzen Erstgespräch legen wir direkt los. Du bekommst regelmäßige Updates und kannst Feedback geben, bis alles perfekt ist.'
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
            Häufige Fragen –<br />ehrliche Antworten.
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
                transition={{ duration: 0.4, delay: index * 0.08 }}
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
