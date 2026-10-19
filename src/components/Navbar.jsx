import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    const [servicesDropdown, setServicesDropdown] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    const serviceSubLinks = [
        { name: 'EPCI Project Execution', path: '/services/epci' },
        { name: 'Subsea Engineering', path: '/services/subsea-engineering' },
        { name: 'Pipeline Engineering', path: '/services/pipeline-engineering' },
        { name: 'Asset Integrity', path: '/services/asset-integrity' },
        { name: 'Fabrication & Welding', path: '/services/fabrication' },
        { name: 'Procurement Services', path: '/services/procurement' },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1]
            }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.4,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 20 },
        open: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 + (i * 0.08),
                duration: 0.35,
                ease: "easeOut"
            }
        })
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-black/95 md:backdrop-blur-md py-3 sm:py-4 shadow-xl' : isOpen ? 'bg-black py-3 sm:py-4' : 'bg-transparent py-4 md:py-6'}`}>
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center relative z-50">
                <Link to="/" className="flex items-center gap-2.5 sm:gap-3 max-w-[calc(100%-54px)] md:max-w-none">
                    <img src="/logo.png" alt="Mantle-Gold Ltd logo" className="h-9 sm:h-11 md:h-12 flex-shrink-0" />
                    <div className="flex flex-col min-w-0">
                        <span className="text-base sm:text-lg md:text-xl font-bold tracking-wide text-white leading-tight truncate">
                            Mantle-Gold Ltd
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-gold tracking-wider sm:tracking-widest uppercase mt-0.5 truncate">
                            Oil, Gas &amp; Energy Solutions
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-7 items-center text-sm font-medium text-gray-300">
                    <Link
                        to="/"
                        aria-current={location.pathname === '/' ? 'page' : undefined}
                        className={`relative hover:text-gold transition-colors py-2 ${location.pathname === '/' ? 'text-gold' : ''}`}
                    >
                        Home
                        {location.pathname === '/' && (
                            <motion.div
                                layoutId="navbar-indicator"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                                initial={false}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </Link>

                    <Link
                        to="/about"
                        aria-current={location.pathname === '/about' ? 'page' : undefined}
                        className={`relative hover:text-gold transition-colors py-2 ${location.pathname === '/about' ? 'text-gold' : ''}`}
                    >
                        About
                        {location.pathname === '/about' && (
                            <motion.div
                                layoutId="navbar-indicator"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                                initial={false}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </Link>

                    {/* Services with Desktop Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesDropdown(true)}
                        onMouseLeave={() => setServicesDropdown(false)}
                    >
                        <Link
                            to="/services"
                            aria-current={location.pathname.startsWith('/services') ? 'page' : undefined}
                            className={`relative hover:text-gold transition-colors py-2 flex items-center gap-1 ${location.pathname.startsWith('/services') ? 'text-gold' : ''}`}
                        >
                            <span>Services</span>
                            <span className="text-[10px] text-gold">▾</span>
                            {location.pathname.startsWith('/services') && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </Link>

                        <AnimatePresence>
                            {servicesDropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 w-64 bg-slate/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 z-50 overflow-hidden"
                                >
                                    <div className="px-4 py-2 border-b border-white/5 text-[10px] uppercase font-bold text-gold tracking-widest">
                                        Engineering &amp; EPCI
                                    </div>
                                    {serviceSubLinks.map((sub) => (
                                        <Link
                                            key={sub.path}
                                            to={sub.path}
                                            className="block px-4 py-2.5 text-xs text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                    <div className="border-t border-white/5 mt-1 pt-1">
                                        <Link
                                            to="/services"
                                            className="block px-4 py-2 text-xs font-bold text-gold hover:text-yellow-400"
                                        >
                                            View All Services &rarr;
                                        </Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link
                        to="/contact"
                        aria-current={location.pathname === '/contact' ? 'page' : undefined}
                        className={`relative hover:text-gold transition-colors py-2 ${location.pathname === '/contact' ? 'text-gold' : ''}`}
                    >
                        Contact
                        {location.pathname === '/contact' && (
                            <motion.div
                                layoutId="navbar-indicator"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                                initial={false}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </Link>

                    <Link to="/contact" className="bg-gold text-black px-6 py-2.5 rounded-full font-bold hover:bg-yellow-500 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-gold focus:outline-none shadow-lg shadow-gold/20">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation menu"
                    className="md:hidden text-white relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 transition-colors focus:ring-2 focus:ring-gold focus:outline-none z-50" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={20} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={20} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 w-screen h-screen min-h-[100dvh] bg-black z-40 flex flex-col pt-20 sm:pt-24 pb-8 px-6 md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col justify-between flex-1 max-w-md mx-auto w-full py-4">
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <div className="border-b border-white/10 pb-3">
                                    <Link
                                        to="/"
                                        className={`text-xl font-serif font-bold flex justify-between items-center ${location.pathname === '/' ? 'text-gold' : 'text-white'}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Home
                                        <ChevronRight size={18} className={location.pathname === '/' ? 'text-gold' : 'text-gray-600'} />
                                    </Link>
                                </div>

                                <div className="border-b border-white/10 pb-3">
                                    <Link
                                        to="/about"
                                        className={`text-xl font-serif font-bold flex justify-between items-center ${location.pathname === '/about' ? 'text-gold' : 'text-white'}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        About Us
                                        <ChevronRight size={18} className={location.pathname === '/about' ? 'text-gold' : 'text-gray-600'} />
                                    </Link>
                                </div>

                                <div className="border-b border-white/10 pb-3">
                                    <div className="flex justify-between items-center">
                                        <Link
                                            to="/services"
                                            className={`text-xl font-serif font-bold ${location.pathname.startsWith('/services') ? 'text-gold' : 'text-white'}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Services Hub
                                        </Link>
                                        <button
                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                            className="text-xs text-gold py-1 px-2 border border-gold/30 rounded"
                                            aria-label="Toggle sub-services"
                                        >
                                            {mobileServicesOpen ? '▲ Hide' : '▼ Sub-pages'}
                                        </button>
                                    </div>

                                    {mobileServicesOpen && (
                                        <div className="mt-2.5 pl-3 border-l-2 border-gold/30 space-y-2">
                                            {serviceSubLinks.map((sub) => (
                                                <Link
                                                    key={sub.path}
                                                    to={sub.path}
                                                    className="block text-xs text-gray-300 hover:text-gold py-1"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="border-b border-white/10 pb-3">
                                    <Link
                                        to="/contact"
                                        className={`text-xl font-serif font-bold flex justify-between items-center ${location.pathname === '/contact' ? 'text-gold' : 'text-white'}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact Us
                                        <ChevronRight size={18} className={location.pathname === '/contact' ? 'text-gold' : 'text-gray-600'} />
                                    </Link>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                                className="mt-8 text-center flex-shrink-0"
                            >
                                <Link to="/contact" className="w-full block bg-gold text-black py-3.5 rounded-xl font-bold text-base mb-4 shadow-xl hover:bg-yellow-500 transition-colors" onClick={() => setIsOpen(false)}>
                                    Get Started
                                </Link>

                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <a
                                        href="https://www.linkedin.com/company/mantle-gold-ltd"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition-all"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href="https://x.com/mantlegold"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all"
                                        aria-label="X (Twitter)"
                                    >
                                        <XIcon size={16} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/mantle.gold/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 transition-all"
                                        aria-label="Instagram"
                                    >
                                        <Instagram size={18} />
                                    </a>
                                    <a
                                        href="https://wa.me/2348032368599?text=Hello%20Mantle-Gold%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/30 hover:bg-green-400/10 transition-all"
                                        aria-label="WhatsApp"
                                    >
                                        <MessageCircle size={18} />
                                    </a>
                                </div>

                                <p className="text-gray-500 text-xs">
                                    &copy; {new Date().getFullYear()} MANTLE-GOLD LTD.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
