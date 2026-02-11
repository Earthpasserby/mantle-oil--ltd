import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.5,
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
                delay: 0.1 + (i * 0.1),
                duration: 0.4,
                ease: "easeOut"
            }
        })
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-black py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
                <Link to="/" className="flex items-center gap-3">
                    <img src="/logo.png" alt="Mantle-Gold Ltd" className="h-12" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-wide text-white leading-none">MANTLE-GOLD LTD</span>
                        <span className="text-[10px] text-gold tracking-widest uppercase mt-1">Oil, Gas & Energy products & engineering Solutions</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`hover:text-gold transition-colors ${location.pathname === link.path ? 'text-gold' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="bg-gold text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors">
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 transition-colors" onClick={() => setIsOpen(!isOpen)}>
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
                        className="fixed inset-0 bg-black z-40 flex flex-col pt-32 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    custom={i}
                                    variants={linkVariants}
                                    className="border-b border-white/10 pb-6"
                                >
                                    <Link
                                        to={link.path}
                                        className={`text-3xl font-serif font-bold flex justify-between items-center ${location.pathname === link.path ? 'text-gold' : 'text-white'}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        <ChevronRight size={24} className={`transition-transform ${location.pathname === link.path ? 'text-gold translate-x-2' : 'text-gray-600'}`} />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="mt-auto mb-10 text-center"
                        >
                            <Link to="/contact" className="w-full block bg-gold text-black py-4 rounded-xl font-bold text-lg mb-6" onClick={() => setIsOpen(false)}>
                                Get Started
                            </Link>
                            <p className="text-gray-500 text-sm">
                                &copy; 2026 MANTLE-GOLD LTD.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
