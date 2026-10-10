import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-darker pt-20 pb-10 border-t border-gold/20 relative">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logo.png" alt="Mantle-Gold Ltd" className="h-8" loading="lazy" />
                            <span className="text-lg font-bold text-white">MANTLE-GOLD LTD</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Oil Gas & Energy Products & Engineering Solutions. Delivering EPCI excellence with safety, quality, and Nigerian local content strength.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://wa.me/2348032368599"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/30 transition-all"
                                aria-label="Chat on WhatsApp"
                            >
                                <MessageCircle size={18} />
                            </a>
                            <a
                                href="mailto:info@mantlegold.com"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/30 transition-all"
                                aria-label="Send email"
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
                                <Link to="/about" className="hover:text-gold transition-colors inline-flex items-center gap-1 group">
                                    Leadership <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-gold transition-colors inline-flex items-center gap-1 group">
                                    HSE & Safety <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-gold transition-colors inline-flex items-center gap-1 group">
                                    Careers <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Operations */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Operations</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link to="/services" className="hover:text-gold transition-colors">EPCI Execution</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Pipeline Engineering</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Asset Integrity</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Fabrication</Link></li>
                            <li><Link to="/services" className="hover:text-gold transition-colors">Procurements</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-start gap-3 group">
                                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                                <span className="group-hover:text-gray-300 transition-colors">31 Discovery Garden Estate, Lekki Lagos Nigeria</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Phone size={20} className="text-gold flex-shrink-0" />
                                <a href="tel:+2348032368599" className="group-hover:text-gray-300 transition-colors">08032368599, 09121557656</a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Mail size={20} className="text-gold flex-shrink-0" />
                                <a href="mailto:info@mantlegold.com" className="group-hover:text-gray-300 transition-colors">info@mantlegold.com</a>
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
                        &copy; {currentYear} MANTLE-GOLD LTD. All Rights Reserved.
                    </p>
                    <p className="text-gray-700 text-xs">
                        RC Number: Registered with Corporate Affairs Commission, Nigeria
                    </p>
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
