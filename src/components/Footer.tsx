import { MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
      style={{
        background: '#0B1929',
        borderTop: '1px solid rgba(232,237,245,0.06)',
      }}
    >
      <div className="font-display text-lg font-bold" style={{ color: '#3E6FB5' }}>
        GastroWeb Solutions
      </div>
      <div className="text-xs font-light" style={{ color: 'rgba(232,237,245,0.3)' }}>
        2026 GastroWeb Solutions – Gegründet in Kundl, Tirol
      </div>
      <div className="flex items-center gap-1.5 text-xs font-light" style={{ color: 'rgba(232,237,245,0.3)' }}>
        <MapPin size={12} />
        Kundl – Bezirk Kufstein – Tirol
      </div>
    </footer>
  );
}
