import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, MessageCircle, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const XIcon = ({ size = 18, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-darker pt-14 sm:pt-20 pb-8 sm:pb-10 border-t border-gold/20 relative">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 sm:mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logo.png" alt="Mantle-Gold Ltd logo" className="h-8" loading="lazy" />
                            <span className="text-lg font-bold text-white">Mantle-Gold Ltd</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Oil, Gas &amp; Energy Products &amp; Engineering Solutions. Delivering EPCI excellence with safety, quality, and Nigerian local content strength.
                        </p>
                        <div className="flex flex-wrap items-center gap-2.5">
                            <a
                                href="https://www.linkedin.com/company/mantle-gold-ltd/?viewAsMember=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition-all"
                                aria-label="Mantle-Gold Ltd on LinkedIn"
                                title="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://x.com/mantlegold"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
                                aria-label="Mantle-Gold Ltd on X"
                                title="X (Twitter)"
                            >
                                <XIcon size={15} />
                            </a>
                            <a
                                href="https://www.instagram.com/mantle.gold/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 transition-all"
                                aria-label="Mantle-Gold Ltd on Instagram"
                                title="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://wa.me/2348032368599?text=Hello%20Mantle-Gold%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/30 hover:bg-green-400/10 transition-all"
                                aria-label="Chat on WhatsApp"
                                title="WhatsApp"
                            >
                                <MessageCircle size={18} />
                            </a>
                            <a
                                href="mailto:info@mantle-gold.com"
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 hover:bg-gold/10 transition-all"
                                aria-label="Send email"
                                title="Email Us"
                            >
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li>
                                <Link to="/about" className="hover:text-gold transition-colors inline-flex items-center gap-1 group">
                                    About Us <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-gold transition-colors inline-flex items-center gap-1 group">
                                    All Services <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-gold transition-colors inline-flex items-center gap-1 group">
                                    Contact &amp; Support <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:text-gold transition-colors inline-flex items-center gap-1 group">
                                    Privacy Policy <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-gold transition-colors inline-flex items-center gap-1 group">
                                    Terms of Service <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Operations */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Operations &amp; Services</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/services/epci" className="hover:text-gold transition-colors">EPCI Project Execution</Link></li>
                            <li><Link to="/services/subsea-engineering" className="hover:text-gold transition-colors">Subsea Engineering</Link></li>
                            <li><Link to="/services/pipeline-engineering" className="hover:text-gold transition-colors">Pipeline Engineering</Link></li>
                            <li><Link to="/services/asset-integrity" className="hover:text-gold transition-colors">Asset Integrity Management</Link></li>
                            <li><Link to="/services/fabrication" className="hover:text-gold transition-colors">Oil &amp; Gas Fabrication</Link></li>
                            <li><Link to="/services/procurement" className="hover:text-gold transition-colors">Procurement Services</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact &amp; Location</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-start gap-3 group">
                                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                                <span className="group-hover:text-gray-300 transition-colors">31 Discovery Gardens Estate, Lekki, Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <Phone size={20} className="text-gold flex-shrink-0 mt-1" />
                                <div className="flex flex-col">
                                    <a href="tel:+2348032368599" className="group-hover:text-gray-300 transition-colors">+234 803 236 8599</a>
                                    <a href="tel:+2349121557656" className="group-hover:text-gray-300 transition-colors">+234 912 155 7656</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail size={20} className="text-gold flex-shrink-0" />
                                <a href="mailto:info@mantle-gold.com" className="group-hover:text-gray-300 transition-colors">info@mantle-gold.com</a>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <a
                                href="https://wa.me/2348032368599?text=Hello%20Mantle-Gold%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-600/10 text-green-400 border border-green-500/20 px-4 py-2 rounded-lg text-sm hover:bg-green-600/20 transition-all"
                            >
                                <MessageCircle size={16} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        &copy; {currentYear} Mantle-Gold Ltd. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                        <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
                        <span>|</span>
                        <Link to="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
                        <span>|</span>
                        <span>RC: Registered with CAC Nigeria</span>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <motion.a
                href="https://wa.me/2348032368599?text=Hello%20Mantle-Gold%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                aria-label="Chat on WhatsApp"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <MessageCircle size={28} />
            </motion.a>
        </footer>
    );
};

export default Footer;
