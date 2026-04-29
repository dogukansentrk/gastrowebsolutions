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
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Web3Forms integration
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "7ef22252-9160-4626-b010-bf8489c19753");
    formData.append("subject", "Neue Kontaktanfrage für GastroWeb Solutions");
    formData.append("from_name", "GastroWeb Solutions Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        console.error("Web3Forms error:", data);
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("Web3Forms submission failed:", error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
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
            {/* Honeypot field for spam prevention */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="Name"
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
                name="Restaurant/Betrieb"
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
              name="Email"
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
              name="Telefon"
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
              name="Paket_Auswahl"
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
              <option value="Web Basic">Web Basic – einmalige Webseite</option>
              <option value="Web + Hosting">Web + Hosting – Rundum-sorglos-Paket</option>
              <option value="Noch unsicher">Noch unsicher – Beratung gewünscht</option>
            </select>
            <textarea
              name="Nachricht"
              placeholder="Erzählen Sie uns kurz von Ihrem Betrieb und was Sie sich wünschen..."
              rows={5}
              required
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
              disabled={formStatus === 'submitting'}
              className="w-full py-3.5 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 mt-2 hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={{
                background: formStatus === 'success' ? '#1a5c3a' : formStatus === 'error' ? '#8c2b2b' : '#1B3A6B',
                color: '#EDF2FA',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                if (formStatus === 'idle') e.currentTarget.style.background = '#3E6FB5';
              }}
              onMouseLeave={(e) => {
                if (formStatus === 'idle') e.currentTarget.style.background = '#1B3A6B';
              }}
            >
              {formStatus === 'idle' && 'Anfrage absenden'}
              {formStatus === 'submitting' && (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Wird gesendet…
                </span>
              )}
              {formStatus === 'success' && '✓ Anfrage erfolgreich gesendet!'}
              {formStatus === 'error' && 'Fehler aufgetreten. Bitte erneut versuchen.'}
            </button>
            
            {formStatus === 'success' && (
              <p className="text-center text-xs mt-2" style={{ color: '#a7f3d0' }}>
                Wir haben Ihre Anfrage erhalten und melden uns in Kürze!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
