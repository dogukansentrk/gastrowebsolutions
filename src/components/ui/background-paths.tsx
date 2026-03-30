"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    // Reduced from 36 to 12 paths for much better performance (Version 2)
    const paths = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 15 * position} -${189 + i * 18}C-${
            380 - i * 15 * position
        } -${189 + i * 18} -${312 - i * 15 * position} ${216 - i * 18} ${
            152 - i * 15 * position
        } ${343 - i * 18}C${616 - i * 15 * position} ${470 - i * 18} ${
            684 - i * 15 * position
        } ${875 - i * 18} ${684 - i * 15 * position} ${875 - i * 18}`,
        opacity: 0.1 + i * 0.06,
        width: 0.5 + i * 0.08,
        // Stagger the animation delay for a natural wave effect
        delay: i * 0.8,
        duration: 25 + i * 3,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-primary-100"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={path.opacity}
                        className="animate-path-flow"
                        style={{
                            animationDelay: `${path.delay}s`,
                            animationDuration: `${path.duration}s`,
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
    subtitle,
    children,
}: {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0E1E38 40%, #1B3A6B 100%)' }}>
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center mt-12 md:mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter font-display
                        text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-100">
                        {title}
                    </h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-lg md:text-xl text-primary-100/60 max-w-xl mx-auto mb-10 font-light leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {children ? children : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="inline-block"
                        >
                            <a
                                href="#pakete"
                                className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:-translate-y-0.5"
                                style={{ background: '#1B3A6B', color: '#EDF2FA', border: '1px solid rgba(208,223,245,0.2)' }}
                            >
                                Mehr erfahren &rarr;
                            </a>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
