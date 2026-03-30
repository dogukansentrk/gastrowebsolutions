"use client";

import { motion } from "framer-motion";

function FloatingOrbs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary Blue Orb */}
            <motion.div
                animate={{
                    x: [0, 40, -20, 0],
                    y: [0, -30, 40, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px] opacity-40"
                style={{ background: '#3E6FB5' }}
            />
            {/* Deep Blue Orb */}
            <motion.div
                animate={{
                    x: [0, -30, 20, 0],
                    y: [0, 40, -20, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full mix-blend-screen filter blur-[100px] md:blur-[140px] opacity-30"
                style={{ background: '#1B3A6B' }}
            />
            {/* Secondary Accent Orb */}
            <motion.div
                animate={{
                    x: [0, 20, -10, 0],
                    y: [0, -20, 10, 0],
                    scale: [1, 1.05, 0.95, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute top-1/3 right-1/3 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full mix-blend-screen filter blur-[60px] md:blur-[100px] opacity-20"
                style={{ background: '#D0DFF5' }}
            />
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
            
            <FloatingOrbs />

            {/* Subtle grid overlay to give it a tech/premium feel while being very lightweight */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(232, 237, 245, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 237, 245, 1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />

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
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-lg md:text-xl text-primary-100/60 max-w-xl mx-auto mb-10 font-light leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {children ? children : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
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
