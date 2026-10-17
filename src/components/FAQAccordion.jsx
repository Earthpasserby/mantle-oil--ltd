import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQAccordion = ({ title = "Frequently Asked Questions", subtitle = "Clarity & Technical Guidance", faqs = [] }) => {
    const [openIndex, setOpenIndex] = useState(0);

    if (!faqs || faqs.length === 0) return null;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-darker relative" aria-label={title}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                <div className="text-center mb-10 sm:mb-14">
                    <span className="text-gold uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold mb-2 sm:mb-3 block">
                        {subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white">
                        {title}
                    </h2>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                                    isOpen
                                        ? 'bg-slate border-gold/40 shadow-lg'
                                        : 'bg-black/40 border-white/10 hover:border-white/20'
                                }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                    aria-expanded={isOpen}
                                    className="w-full py-4 px-5 sm:px-6 text-left flex justify-between items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                                >
                                    <span className="font-semibold text-sm sm:text-base text-white flex items-center gap-3">
                                        <HelpCircle size={16} className={isOpen ? 'text-gold' : 'text-gray-500'} />
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        size={18}
                                        className={`text-gold transition-transform duration-300 flex-shrink-0 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                                        >
                                            <div className="px-5 sm:px-6 pb-5 pt-1 text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
