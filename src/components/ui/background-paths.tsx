"use client";

import { motion } from "framer-motion";

export function BackgroundPaths({
    title = "Background Paths",
    overline,
    subtitle,
    children,
}: {
    title?: string;
    overline?: string;
    subtitle?: string;
    children?: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden grain-overlay"
            style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0E1E38 40%, #1B3A6B 100%)' }}>
            
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div 
                    className="absolute animate-orb-1"
                    style={{
                        top: '10%',
                        left: '15%',
                        width: 500,
                        height: 500,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(62,111,181,0.15) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
                <div 
                    className="absolute animate-orb-2"
                    style={{
                        bottom: '10%',
                        right: '10%',
                        width: 600,
                        height: 600,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(27,58,107,0.2) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
                <div 
                    className="absolute animate-orb-3"
                    style={{
                        top: '50%',
                        left: '50%',
                        width: 400,
                        height: 400,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(62,111,181,0.08) 0%, transparent 70%)',
                        filter: 'blur(50px)',
                        transform: 'translate(-50%, -50%)',
                    }}
                />

                {/* Subtle dot grid pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, rgba(232,237,245,0.8) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
            </div>

            {/* Vignette overlay for depth */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,22,40,0.6) 100%)',
                }}
            />

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center mt-12 md:mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    {overline && (
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05, duration: 0.4 }}
                            className="inline-block text-xs font-medium tracking-[3px] uppercase mb-6 px-4 py-2 rounded-full"
                            style={{
                                color: '#3E6FB5',
                                background: 'rgba(27,58,107,0.15)',
                                border: '1px solid rgba(27,58,107,0.3)',
                            }}
                        >
                            {overline}
                        </motion.span>
                    )}

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter font-display leading-[1.05]
                        text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-primary-100/80">
                        {title}
                    </h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed"
                            style={{ color: 'rgba(232,237,245,0.6)' }}
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {children}
                </motion.div>
            </div>
        </div>
    );
}
