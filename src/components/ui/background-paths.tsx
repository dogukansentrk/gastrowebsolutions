"use client";

import { motion } from "framer-motion";



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
                {/* Animation removed to improve performance */}
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center mt-12 md:mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
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
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="text-lg md:text-xl text-primary-100/60 max-w-xl mx-auto mb-10 font-light leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    {children ? children : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
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
