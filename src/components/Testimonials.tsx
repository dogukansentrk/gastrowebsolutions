import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Bruggnwirt',
    location: 'Kundl, Tirol',
    quote: 'Endlich eine Webseite, die unseren Gasthof wirklich widerspiegelt. Die Zusammenarbeit war unkompliziert, schnell und die Jungs haben unsere Wünsche perfekt umgesetzt.',
    stars: 5,
  },
  {
    name: 'Hausmeisterdienste Morina',
    location: 'Region Kufstein, Tirol',
    quote: 'Professionell, pünktlich und ein Top-Design. Unsere Kunden finden uns jetzt viel einfacher online. Kann ich nur weiterempfehlen!',
    stars: 5,
  },
  {
    name: 'Lokales Café',
    location: 'Bezirk Kufstein, Tirol',
    quote: 'Als kleines Café hatten wir keine Webseite. GastroWeb hat uns innerhalb von einer Woche eine professionelle Seite gebaut – zu einem fairen Preis. Super zufrieden!',
    stars: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-20 md:py-28 px-6 md:px-12" style={{ background: '#0E1E38' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[2px] uppercase" style={{ color: '#3E6FB5' }}>
            Das sagen unsere Kunden
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-5 leading-tight">
            Vertrauen durch<br />Ergebnisse.
          </h2>
          <div className="w-12 h-0.5 rounded-full mb-12 mx-auto" style={{ background: '#1B3A6B' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main testimonial card */}
          <div
            className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: 'rgba(10,22,40,0.6)',
              border: '1px solid rgba(232,237,245,0.06)',
            }}
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <Quote size={48} style={{ color: 'rgba(27,58,107,0.2)' }} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                <Star key={i} size={16} fill="#3E6FB5" style={{ color: '#3E6FB5' }} />
              ))}
            </div>

            {/* Quote */}
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-lg md:text-xl font-light leading-relaxed mb-8"
              style={{ color: 'rgba(232,237,245,0.8)' }}
            >
              „{testimonials[current].quote}"
            </motion.p>

            {/* Author */}
            <motion.div
              key={`author-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-display text-sm font-bold"
                style={{
                  background: 'rgba(27,58,107,0.2)',
                  border: '2px solid rgba(27,58,107,0.4)',
                  color: '#3E6FB5',
                }}
              >
                {testimonials[current].name.charAt(0)}
              </div>
              <div>
                <div className="text-base font-medium text-white">{testimonials[current].name}</div>
                <div className="text-xs font-light" style={{ color: 'rgba(232,237,245,0.4)' }}>
                  {testimonials[current].location}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
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
              aria-label="Vorheriges Testimonial"
            >
              <ChevronLeft size={18} style={{ color: '#3E6FB5' }} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === current ? '#3E6FB5' : 'rgba(232,237,245,0.15)',
                    width: i === current ? 24 : 8,
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
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
              aria-label="Nächstes Testimonial"
            >
              <ChevronRight size={18} style={{ color: '#3E6FB5' }} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
