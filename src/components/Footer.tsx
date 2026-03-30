import { MapPin } from 'lucide-react';

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
          <img src="/logo.png" alt="GastroWeb Solutions Logo" className="h-12 w-auto object-contain" />
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
      
      <div className="text-xs font-light" style={{ color: 'rgba(232,237,245,0.3)' }}>
        © 2026 GastroWeb Solutions
      </div>
      
      <div className="flex items-center gap-1.5 text-xs font-light" style={{ color: 'rgba(232,237,245,0.3)' }}>
        <MapPin size={12} />
        Kundl – Bezirk Kufstein – Tirol
      </div>
    </footer>
  );
}
