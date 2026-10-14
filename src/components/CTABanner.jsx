import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTABanner = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-14 sm:py-24 relative overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-gold/10 rounded-full filter blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 block"
                    >
                        Ready to Partner?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6"
                    >
                        Let's Build the Future of <span className="text-gradient">Energy Together</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed"
                    >
                        Whether you need EPCI project execution, pipeline engineering, or asset integrity solutions — our team of experienced engineers is ready to deliver with safety, precision, and Nigerian local content excellence.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                    >
                        <Link
                            to="/contact"
                            className="bg-gold text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold hover:bg-yellow-500 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                            Discuss Your Project <ArrowRight size={18} />
                        </Link>
                        <a
                            href="https://wa.me/2348032368599?text=Hello%20Mantle-Gold%2C%20I%20would%20like%20to%20discuss%20a%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                        >
                            WhatsApp Us
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default CTABanner;
