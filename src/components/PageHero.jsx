import { motion } from 'framer-motion';

const PageHero = ({ title, highlight, subtitle }) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full filter blur-[120px] opacity-50" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block"
                >
                    MANTLE-GOLD LTD
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-serif font-bold mb-6"
                >
                    {title} {highlight && <span className="text-gold">{highlight}</span>}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
