import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, Globe } from 'lucide-react';

const contactDetails = [
  { icon: MapPin, label: 'Hauptsitz', value: 'Kundl, Tirol – Bezirk Kufstein' },
  { icon: Mail, label: 'E-Mail', value: 'gastrowebsolutions@gmail.com' },
  { icon: Clock, label: 'Reaktionszeit', value: 'Innerhalb von 24 Stunden' },
  { icon: Globe, label: 'Einsatzgebiet', value: 'Bezirk Kufstein & ganz Tirol' },
];

export function Kontakt() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  }

  return (
    <section id="kontakt" className="py-20 md:py-28 px-6 md:px-12" style={{ background: '#0A1628' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-[2px] uppercase" style={{ color: '#3E6FB5' }}>
            Kontakt aufnehmen
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Bereit für Ihre<br />neue Webseite?
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-8" style={{ background: '#1B3A6B' }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-medium text-white mb-6">So erreichen Sie uns</h3>
            <div className="flex flex-col gap-5">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(27,58,107,0.15)' }}
                  >
                    <detail.icon size={16} style={{ color: '#3E6FB5' }} />
                  </div>
                  <div>
                    <p className="text-xs font-light" style={{ color: 'rgba(232,237,245,0.4)' }}>{detail.label}</p>
                    <strong className="text-sm font-normal text-white">{detail.value}</strong>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm font-light leading-relaxed mt-8" style={{ color: 'rgba(232,237,245,0.4)' }}>
              Wir beraten Sie gerne kostenlos und unverbindlich – per E-Mail, Telefon oder direkt bei Ihnen vor Ort im Betrieb.
            </p>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ihr Name"
                required
                className="w-full rounded-lg px-4 py-3 text-sm font-light outline-none transition-colors"
                style={{
                  background: '#0E1E38',
                  border: '1px solid rgba(232,237,245,0.1)',
                  color: '#E8EDF5',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(27,58,107,0.5)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(232,237,245,0.1)'; }}
              />
              <input
                type="text"
                placeholder="Restaurant / Betrieb"
                className="w-full rounded-lg px-4 py-3 text-sm font-light outline-none transition-colors"
                style={{
                  background: '#0E1E38',
                  border: '1px solid rgba(232,237,245,0.1)',
                  color: '#E8EDF5',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(27,58,107,0.5)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(232,237,245,0.1)'; }}
              />
            </div>
            <input
              type="email"
              placeholder="E-Mail-Adresse"
              required
              className="w-full rounded-lg px-4 py-3 text-sm font-light outline-none transition-colors"
              style={{
                background: '#0E1E38',
                border: '1px solid rgba(232,237,245,0.1)',
                color: '#E8EDF5',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(27,58,107,0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(232,237,245,0.1)'; }}
            />
            <input
              type="tel"
              placeholder="Telefonnummer (optional)"
              className="w-full rounded-lg px-4 py-3 text-sm font-light outline-none transition-colors"
              style={{
                background: '#0E1E38',
                border: '1px solid rgba(232,237,245,0.1)',
                color: '#E8EDF5',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(27,58,107,0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(232,237,245,0.1)'; }}
            />
            <select
              className="w-full rounded-lg px-4 py-3 text-sm font-light outline-none cursor-pointer transition-colors"
              style={{
                background: '#0E1E38',
                border: '1px solid rgba(232,237,245,0.1)',
                color: '#E8EDF5',
              }}
              defaultValue=""
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(27,58,107,0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(232,237,245,0.1)'; }}
            >
              <option value="" disabled>Paket auswählen</option>
              <option>Web Basic – einmalige Webseite</option>
              <option>Web + Hosting – Rundum-sorglos-Paket</option>
              <option>Noch unsicher – Beratung gewünscht</option>
            </select>
            <textarea
              placeholder="Erzählen Sie uns kurz von Ihrem Betrieb und was Sie sich wünschen..."
              rows={5}
              className="w-full rounded-lg px-4 py-3 text-sm font-light outline-none resize-vertical transition-colors"
              style={{
                background: '#0E1E38',
                border: '1px solid rgba(232,237,245,0.1)',
                color: '#E8EDF5',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(27,58,107,0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(232,237,245,0.1)'; }}
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: submitted ? '#1a5c3a' : '#1B3A6B',
                color: '#EDF2FA',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                if (!submitted) e.currentTarget.style.background = '#3E6FB5';
              }}
              onMouseLeave={(e) => {
                if (!submitted) e.currentTarget.style.background = '#1B3A6B';
              }}
            >
              {submitted ? 'Anfrage gesendet!' : 'Anfrage absenden'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
