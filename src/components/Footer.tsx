import { MapPin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'impressum' | 'datenschutz') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      className="px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6"
      style={{
        background: '#0B1929',
        borderTop: '1px solid rgba(232,237,245,0.06)',
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <button 
          onClick={() => onNavigate('home')}
          className="outline-none cursor-pointer" 
        >
          <img src="/logo.png" alt="GastroWeb Solutions Logo" className="h-[4.5rem] md:h-20 w-auto object-contain" />
        </button>
        <div className="flex items-center gap-6 text-xs font-light" style={{ color: 'rgba(232,237,245,0.4)' }}>
          <button onClick={() => onNavigate('impressum')} className="hover:text-white transition-colors cursor-pointer outline-none">
            Impressum
          </button>
          <button onClick={() => onNavigate('datenschutz')} className="hover:text-white transition-colors cursor-pointer outline-none">
            Datenschutz
          </button>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/gastrowebsolutions/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: 'rgba(27,58,107,0.15)',
            border: '1px solid rgba(27,58,107,0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(27,58,107,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(27,58,107,0.15)';
          }}
          aria-label="Instagram"
        >
          <Instagram size={16} style={{ color: '#3E6FB5' }} />
        </a>
        <a
          href="https://www.tiktok.com/@gastrowebsolutions"
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: 'rgba(27,58,107,0.15)',
            border: '1px solid rgba(27,58,107,0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(27,58,107,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(27,58,107,0.15)';
          }}
          aria-label="TikTok"
        >
          {/* TikTok icon (lucide doesn't have one) */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3E6FB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
        </a>
      </div>
      
      <div className="flex flex-col items-center md:items-end gap-2">
        <div className="flex items-center gap-1.5 text-xs font-light" style={{ color: 'rgba(232,237,245,0.3)' }}>
          <MapPin size={12} />
          Kundl – Bezirk Kufstein – Tirol
        </div>
        <div className="text-xs font-light" style={{ color: 'rgba(232,237,245,0.3)' }}>
          © 2026 GastroWeb Solutions
        </div>
      </div>
    </footer>
  );
}
