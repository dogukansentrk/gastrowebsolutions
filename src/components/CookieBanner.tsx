import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('gastroweb_cookie_consent');
    if (!consent) {
      // Small delay so it animates in nicely after page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gastroweb_cookie_consent', 'accepted');
    setIsVisible(false);
    
    // Here we could trigger a function to load Google Analytics, Facebook Pixel, etc.
    // window.dispatchEvent(new Event('cookieConsentAccepted'));
  };

  const handleDecline = () => {
    localStorage.setItem('gastroweb_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring', damping: 25 }}
          className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6"
        >
          <div 
            className="max-w-5xl mx-auto rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6 md:p-8"
            style={{
              background: 'rgba(11, 25, 41, 0.95)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(62, 111, 181, 0.3)',
            }}
          >
            <div className="flex-1 text-sm md:text-base font-light leading-relaxed" style={{ color: 'rgba(232, 237, 245, 0.8)' }}>
              <strong className="block text-white font-medium text-lg mb-2">Wir respektieren Ihre Privatsphäre</strong>
              Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, sowie für Marketingzwecke (um zu verstehen, wonach Gastronomen suchen), verwenden wir Cookies. Durch Klick auf "Alle akzeptieren" stimmen Sie der Verwendung von Cookies zu Analyse- und Marketingzwecken zu. Weitere Informationen finden Sie in unserer <a href="#" className="underline hover:text-white transition-colors" style={{ color: '#3E6FB5' }}>Datenschutzerklärung</a>.
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{
                  background: 'rgba(232, 237, 245, 0.05)',
                  color: '#E8EDF5',
                  border: '1px solid rgba(232, 237, 245, 0.1)',
                }}
              >
                Nur technisch notwendige
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-3 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{
                  background: '#3E6FB5',
                  color: '#EDF2FA',
                }}
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
