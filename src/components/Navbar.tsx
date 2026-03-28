import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#warum', label: 'Warum wir' },
    { href: '#pakete', label: 'Pakete' },
    { href: '#team', label: 'Team' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between"
      style={{
        background: 'rgba(10, 22, 40, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(27, 58, 107, 0.3)',
      }}>

      <a href="#" className="font-display text-xl font-bold text-primary-100">
        Gastro<span className="text-white">Web</span> Solutions
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-primary-100/65 hover:text-white transition-colors font-normal tracking-wide"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#kontakt"
            className="text-sm font-medium px-5 py-2.5 rounded-lg transition-all"
            style={{
              background: '#1B3A6B',
              color: '#EDF2FA',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3E6FB5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#1B3A6B';
            }}
          >
            Anfrage senden
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full md:hidden"
            style={{
              background: 'rgba(10, 22, 40, 0.98)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(27, 58, 107, 0.3)',
            }}
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-primary-100/70 hover:text-white transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className="text-base font-medium px-5 py-3 rounded-lg text-center mt-2 transition-all"
                style={{ background: '#1B3A6B', color: '#EDF2FA' }}
                onClick={() => setIsOpen(false)}
              >
                Anfrage senden
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
