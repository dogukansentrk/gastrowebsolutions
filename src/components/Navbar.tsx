import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'impressum' | 'datenschutz') => void;
}

const links = [
  { id: 'ueber-uns', label: 'Über uns' },
  { id: 'warum', label: 'Warum wir' },
  { id: 'pakete', label: 'Pakete' },
  { id: 'team', label: 'Team' },
];

const allSectionIds = ['hero', 'ueber-uns', 'warum', 'portfolio', 'pakete', 'integrationen', 'team', 'testimonials', 'termin', 'faq', 'kontakt'];

export function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Scroll spy: determine which section is currently in view
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 120; // offset for navbar height

    for (let i = allSectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(allSectionIds[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(allSectionIds[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate('home');
    // Allow React state to update before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const isLinkActive = (linkId: string) => activeSection === linkId;

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-4 flex items-center justify-between"
      style={{
        background: 'rgba(10, 22, 40, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(27, 58, 107, 0.3)',
      }}>

      <button 
        onClick={() => {
          onNavigate('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="outline-none cursor-pointer flex items-center hover:opacity-90 transition-opacity"
      >
        <img src="/logo.png" alt="GastroWeb Solutions Logo" className="h-16 w-auto object-contain" />
      </button>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleLinkClick(link.id)}
              className="text-sm transition-colors font-normal tracking-wide cursor-pointer outline-none relative"
              style={{
                color: isLinkActive(link.id) ? '#ffffff' : 'rgba(208,223,245,0.65)',
              }}
            >
              {link.label}
              {/* Active indicator dot */}
              {isLinkActive(link.id) && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: '#3E6FB5' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handleLinkClick('kontakt')}
            className="text-sm font-medium px-5 py-2.5 rounded-lg transition-all cursor-pointer outline-none"
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
          </button>
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
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="text-base text-left transition-colors py-2 outline-none flex items-center gap-2"
                  style={{
                    color: isLinkActive(link.id) ? '#ffffff' : 'rgba(208,223,245,0.7)',
                  }}
                >
                  {isLinkActive(link.id) && (
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#3E6FB5' }} />
                  )}
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleLinkClick('kontakt')}
                className="text-base font-medium px-5 py-3 rounded-lg text-center mt-2 transition-all outline-none"
                style={{ background: '#1B3A6B', color: '#EDF2FA' }}
              >
                Anfrage senden
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
