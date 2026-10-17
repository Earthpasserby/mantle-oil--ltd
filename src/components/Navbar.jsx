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
        { name: 'Contact', path: '/contact' },
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
                    <img src="/logo.png" alt="Mantle-Gold Ltd" className="h-9 sm:h-11 md:h-12 flex-shrink-0" />
                    <div className="flex flex-col min-w-0">
                        <span className="text-base sm:text-lg md:text-xl font-bold tracking-wide text-white leading-tight truncate">
                            MANTLE-GOLD LTD
                        </span>
                        <span className="text-[9px] sm:text-[10px] text-gold tracking-wider sm:tracking-widest uppercase mt-0.5 truncate">
                            Oil, Gas &amp; Energy Solutions
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            aria-current={location.pathname === link.path ? 'page' : undefined}
                            className={`relative hover:text-gold transition-colors py-2 ${location.pathname === link.path ? 'text-gold' : ''}`}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
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
                            <div className="flex flex-col gap-4 sm:gap-5">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        custom={i}
                                        variants={linkVariants}
                                        className="border-b border-white/10 pb-3 sm:pb-4"
                                    >
                                        <Link
                                            to={link.path}
                                            className={`text-2xl sm:text-3xl font-serif font-bold flex justify-between items-center ${location.pathname === link.path ? 'text-gold' : 'text-white'}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                            <ChevronRight size={22} className={`transition-transform ${location.pathname === link.path ? 'text-gold translate-x-1' : 'text-gray-600'}`} />
                                        </Link>
                                    </motion.div>
                                ))}
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
                                        href="https://www.linkedin.com/company/mantle-gold-ltd/?viewAsMember=true"
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
